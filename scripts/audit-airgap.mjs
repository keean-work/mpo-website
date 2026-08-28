#!/usr/bin/env node
/**
 * Air-gap audit for the MPO website.
 *
 * PRIZM is air-gap safe: no external URL references for ASSETS may appear in
 * the codebase (CDN scripts, remote fonts/stylesheets, remote images/scripts).
 *
 * External navigation hyperlinks (e.g. the Defence Product Playbook) are
 * REQUIRED content and are allowed — the rule targets asset loading, not
 * links the user clicks to leave the site.
 *
 * Exits non-zero if a violation is found.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["app", "components", "lib", "styles"];
const EXTS = new Set([".css", ".ts", ".tsx", ".js", ".jsx", ".mjs"]);

const violations = [];

// Remote assets by extension anywhere in a string.
const REMOTE_ASSET =
  /https?:\/\/[^\s"'`)]+\.(?:woff2?|ttf|otf|eot|png|jpe?g|gif|svg|webp|avif|mp4|webm|js|mjs|css)\b/gi;
// Risky loading contexts referencing http(s).
const RISKY_CONTEXTS = [
  { re: /@import\s+["']https?:\/\//gi, why: "@import of remote stylesheet" },
  { re: /url\(\s*["']?https?:\/\//gi, why: "url() of remote asset" },
  { re: /\bsrc\s*=\s*["'`]https?:\/\//gi, why: "src= remote asset" },
  { re: /\bsrcSet\s*=\s*["'`][^"'`]*https?:\/\//gi, why: "srcSet remote asset" },
  { re: /<script[^>]+src\s*=\s*["'`]https?:\/\//gi, why: "remote <script>" },
  {
    re: /<link[^>]+href\s*=\s*["'`]https?:\/\/[^"'`]+\.(?:css|woff2?|ttf)/gi,
    why: "remote <link> asset",
  },
];

function walk(dir) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return;
  }
  for (const name of entries) {
    if (name === "node_modules" || name === ".next") continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full);
    else if (EXTS.has(extname(name))) scan(full);
  }
}

function scan(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    for (const { re, why } of RISKY_CONTEXTS) {
      re.lastIndex = 0;
      if (re.test(line)) {
        violations.push({ file, line: i + 1, why, text: line.trim() });
      }
    }
    REMOTE_ASSET.lastIndex = 0;
    let m;
    while ((m = REMOTE_ASSET.exec(line)) !== null) {
      violations.push({
        file,
        line: i + 1,
        why: "remote asset URL",
        text: m[0],
      });
    }
  });
}

for (const d of SCAN_DIRS) walk(join(ROOT, d));

if (violations.length === 0) {
  console.log("air-gap audit: PASS — no remote asset references found.");
  process.exit(0);
}

console.error(`air-gap audit: FAIL — ${violations.length} violation(s):`);
for (const v of violations) {
  const rel = v.file.replace(ROOT + "/", "");
  console.error(`  ${rel}:${v.line}  [${v.why}]  ${v.text}`);
}
process.exit(1);
