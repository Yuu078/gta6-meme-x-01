// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: POST.json at the repository root names it.
// This program validates that file and copies it to the output directory,
// where the gate reads it. Nothing written here is judged — the house reads
// the post from X — but a malformed POST.json fails the gate before any
// judging happens, so the file is checked properly before it is handed over:
// it must parse as JSON, carry one "url" string, and that url must be the
// address of a real X post (never the starter's placeholder).
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An X post address: https://x.com/<handle>/status/<digits>, the same on
// twitter.com, an optional www. or mobile. in front, or /i/web/status/<id>.
const POST_URL_PATTERN =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([^/]+\/status|i\/web\/status)\/(\d+)$/;

function fail(message: string): never {
  console.error(`POST.json refused: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, 'POST.json');
let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  fail(`could not be read from ${sourcePath}: ${(err as Error).message}`);
}

let post: { url?: unknown };
try {
  post = JSON.parse(raw) as { url?: unknown };
} catch (err) {
  fail(`is not valid JSON: ${(err as Error).message}`);
}

if (typeof post.url !== 'string' || !POST_URL_PATTERN.test(post.url)) {
  fail('its "url" is not the address of an X post (https://x.com/<handle>/status/<id>)');
}

// The gate accepts a POST.json of at most 16,384 bytes; refuse anything
// larger here rather than handing the grader a file it must reject.
const byteCount = Buffer.byteLength(raw, 'utf8');
if (byteCount > 16384) {
  fail(`is ${byteCount} bytes, over the gate's 16384-byte cap`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const targetPath = join(OUTPUT_DIR, 'POST.json');
copyFileSync(sourcePath, targetPath);

// Prove the copy is the file that was validated, byte for byte.
if (readFileSync(targetPath, 'utf8') !== raw) {
  fail(`the copy at ${targetPath} differs from the validated source`);
}
console.log(`POST.json OK (${byteCount} bytes): ${(post as { url: string }).url} -> ${targetPath}`);
