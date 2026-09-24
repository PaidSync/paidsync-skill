#!/usr/bin/env node
/**
 * sync-plugin.mjs. This repo is the GitHub copy of the PaidSync plugin that paidsync.ai serves at
 * https://paidsync.ai/.claude-plugin/marketplace.json. The plugin is BUILT in the paidsync-ai repo
 * (scripts/gen-connect-install.mjs), from the same skill files paidsync.ai publishes at
 * /.well-known/skills. Nothing here is typed twice: this script reads that build at a git ref,
 * refuses it unless its bytes match the sha256 its own marketplace.json publishes, and writes it.
 *
 * Owned by this script, never edit by hand:
 *   .claude-plugin/plugin.json, .mcp.json, skills/**   byte-identical to the build
 *   .claude-plugin/marketplace.json                    the build's plugin entry, with source "./"
 *   README.md between the GEN:plugin-readme markers    the build's README.md, headings one level down
 * A skill folder the build no longer carries is removed, so skills/ is always exactly the build.
 *
 * Run:  node scripts/sync-plugin.mjs <paidsync-ai checkout> [git ref, default HEAD]
 *       node scripts/sync-plugin.mjs --check <paidsync-ai checkout> [ref]   exit 1 on any drift
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const CHECK = args[0] === '--check';
if (CHECK) args.shift();
const [SRC, REF = 'HEAD'] = args;
if (!SRC) { console.error('usage: node scripts/sync-plugin.mjs [--check] <paidsync-ai checkout> [git ref]'); process.exit(2); }
const PLUGIN = 'paidsync';
const START = '<!-- GEN:plugin-readme:start. Written by scripts/sync-plugin.mjs, do not edit by hand. -->';
const END = '<!-- GEN:plugin-readme:end -->';
const gitShow = (rel) => execFileSync('git', ['-C', SRC, 'show', `${REF}:${rel}`], { maxBuffer: 64 << 20 });
const sha256 = (buf) => crypto.createHash('sha256').update(buf).digest('hex');

// 1. The build, checked against the digest paidsync.ai publishes for it.
const served = JSON.parse(gitShow('.claude-plugin/marketplace.json').toString('utf8'));
const entry = served.plugins.find((p) => p.name === PLUGIN);
if (!entry || entry.source?.source !== 'archive') throw new Error(`no archive entry named "${PLUGIN}" in ${REF}:.claude-plugin/marketplace.json`);
const zipRel = `.claude-plugin/${path.basename(new URL(entry.source.url).pathname)}`;
const zip = gitShow(zipRel);
if (sha256(zip) !== entry.source.sha256) throw new Error(`${REF}:${zipRel} is sha256 ${sha256(zip)}, but marketplace.json publishes ${entry.source.sha256}`);
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'paidsync-plugin-'));
fs.writeFileSync(path.join(tmp, 'plugin.zip'), zip);
execFileSync('unzip', ['-q', path.join(tmp, 'plugin.zip'), '-d', path.join(tmp, 'x')]);
const built = {};
(function walk(dir, rel = '') {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) walk(path.join(dir, e.name), r); else built[r] = fs.readFileSync(path.join(dir, e.name));
  }
})(path.join(tmp, 'x'));
fs.rmSync(tmp, { recursive: true, force: true });
for (const need of ['.claude-plugin/plugin.json', '.mcp.json', 'README.md']) if (!built[need]) throw new Error(`the build has no ${need}`);

// 2. What this repo must hold.
const want = {};
for (const [rel, data] of Object.entries(built)) if (rel !== 'README.md') want[rel] = data;
const { source: _served, ...plugin } = entry;
want['.claude-plugin/marketplace.json'] = Buffer.from(JSON.stringify({
  name: served.name, owner: served.owner,
  description: 'PaidSync\'s plugin marketplace for Claude Code, from the PaidSync/paidsync-skill GitHub repo.',
  plugins: [{ ...plugin, source: './' }],
}, null, 2) + '\n');
const body = built['README.md'].toString('utf8').replace(/^(#{1,5}) /gm, '#$1 ').trimEnd();
const stamp = `The plugin files in this repo are byte-identical to ${entry.source.url} (version ${entry.version}, sha256 \`${entry.source.sha256}\`).`;
const readme = fs.readFileSync(path.join(ROOT, 'README.md'), 'utf8');
const [a, b] = [readme.indexOf(START), readme.indexOf(END)];
if (a < 0 || b < a) throw new Error('README.md is missing the GEN:plugin-readme markers');
want['README.md'] = Buffer.from(`${readme.slice(0, a)}${START}\n${body}\n\n${stamp}\n${readme.slice(b)}`);

// 3. Compare, then write or report.
const drift = [];
for (const [rel, data] of Object.entries(want)) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p) || !fs.readFileSync(p).equals(data)) drift.push(`${fs.existsSync(p) ? 'differs' : 'missing'}  ${rel}`);
}
const stale = [];
(function walk(dir, rel) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const r = `${rel}/${e.name}`;
    if (e.isDirectory()) walk(path.join(dir, e.name), r); else if (!want[r]) stale.push(r);
  }
})(path.join(ROOT, 'skills'), 'skills');
for (const r of stale) drift.push(`not in the build  ${r}`);
if (CHECK) {
  if (drift.length) { console.error(`plugin drift against ${SRC} @ ${REF}:\n  ${drift.join('\n  ')}`); process.exit(1); }
  console.log(`in sync with ${SRC} @ ${REF} (sha256 ${entry.source.sha256.slice(0, 12)})`);
  process.exit(0);
}
for (const [rel, data] of Object.entries(want)) { fs.mkdirSync(path.dirname(path.join(ROOT, rel)), { recursive: true }); fs.writeFileSync(path.join(ROOT, rel), data); }
for (const r of stale) fs.rmSync(path.join(ROOT, r));
console.log(drift.length ? `wrote ${drift.length} change(s):\n  ${drift.join('\n  ')}` : 'already in sync');
