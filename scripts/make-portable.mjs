import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, unlinkSync, writeFileSync } from "node:fs";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import os from "node:os";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "out");
const dest = join(root, "portable");
const zipName = "Immunovus-website.zip";

const pageNames = ["approach", "technology", "applications", "validation", "company", "contact"];

function walk(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function prefixFor(depth) {
  return depth === 0 ? "" : "../".repeat(depth);
}

function rewriteHtml(html, prefix, page) {
  html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  html = html.replace(/<link[^>]+rel="preload"[^>]+as="script"[^>]*>/gi, "");

  html = html.replace(/(href|src)="\/_next\//g, `$1="${prefix}_next/`);
  html = html.replace(/(href|src)="\/brand\//g, `$1="${prefix}brand/`);
  html = html.replace(/href="\/favicon\.ico[^"]*"/g, `href="${prefix}favicon.ico"`);
  html = html.replace(/href="\/icon\.png"/g, `href="${prefix}icon.png"`);

  html = html.replace(
    /href="\/(approach|technology|applications|validation|company|contact)\/?(?:\?([^"#]*))?(#[^"]*)?"/g,
    (_, pageName, query, hash) => {
      const q = query ? `?${query}` : "";
      const h = hash || "";
      return `href="${prefix}${pageName}/index.html${q}${h}"`;
    },
  );
  html = html.replace(/href="\/"/g, `href="${prefix}index.html"`);

  html = html.replace(/ style="opacity:0"/g, "");
  html = html.replace(/>0<!-- -->\+</g, ">400+<");
  html = html.replace(/>0<!-- -->%</g, ">40%<");

  if (page === "contact") {
    html = html.replace(
      /<template data-dgst="BAILOUT_TO_CLIENT_SIDE_RENDERING"><\/template><div class="panel min-h-\[28rem\] p-6 md:p-8"><\/div>/,
      contactFormHtml(),
    );
    html = html.replace(
      /<section class="relative isolate overflow-hidden border-t border-\[var\(--border-subtle\)\][\s\S]*?<\/section>(?=<footer)/,
      "",
    );
  }

  const boot = `<script src="${prefix}portable.js" defer></script>`;
  html = html.replace("<head>", `<head>${boot}`);
  html = html.replace("<body ", `<body data-page="${page}" `);
  return html;
}

function contactFormHtml() {
  const interests = [
    "Drug discovery & development",
    "Personalized medicine",
    "Immune health",
    "Research collaboration",
    "Partnership",
    "Investment",
    "Careers",
    "Something else",
  ];
  const options = interests.map((item) => `<option value="${item}">${item}</option>`).join("");
  return (
    '<form id="contact-form" class="panel grid gap-5 p-6 md:p-8">' +
    '<div class="grid gap-5 sm:grid-cols-2">' +
    '<div class="field"><label for="name">Name</label><input id="name" name="name" autocomplete="name" required></div>' +
    '<div class="field"><label for="organisation">Organisation</label><input id="organisation" name="organisation" autocomplete="organization"></div>' +
    "</div>" +
    '<div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email" required></div>' +
    '<div class="field"><label for="interest">Area of interest</label><select id="interest" name="interest" required>' +
    '<option value="" disabled selected>Select one</option>' +
    options +
    "</select></div>" +
    '<div class="field"><label for="message">Message</label><textarea id="message" name="message" required></textarea></div>' +
    '<button type="submit" class="btn btn-primary w-full sm:w-auto">Start a conversation</button>' +
    "</form>"
  );
}

if (!existsSync(src)) {
  throw new Error("Missing out/. Run STATIC_EXPORT=1 npm run build first.");
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
cpSync(join(root, "scripts/portable.js"), join(dest, "portable.js"));

for (const file of walk(dest).filter((f) => f.endsWith(".html"))) {
  const rel = relative(dest, file).replace(/\\/g, "/");
  const depth = rel.split("/").length - 1;
  const page = rel === "index.html" || rel === "404.html" ? "home" : rel.split("/")[0];
  writeFileSync(file, rewriteHtml(readFileSync(file, "utf8"), prefixFor(depth), page));
}

for (const file of walk(dest)) {
  if (file.endsWith(".txt")) unlinkSync(file);
}

const staging = join(os.tmpdir(), "Immunovus-website");
rmSync(staging, { recursive: true, force: true });
mkdirSync(staging, { recursive: true });
cpSync(dest, staging, { recursive: true });

const zipTargets = [
  join(os.homedir(), "Desktop", zipName),
  join(root, zipName),
];

for (const zipPath of zipTargets) {
  rmSync(zipPath, { force: true });
  const result = spawnSync("ditto", ["-c", "-k", "--sequesterRsrc", "--keepParent", staging, zipPath], {
    stdio: "inherit",
  });
  if (result.status !== 0) {
    throw new Error(`Failed to write ${zipPath}`);
  }
  console.log("Wrote", zipPath);
}

console.log("Portable site ready. Double-click index.html inside the unzipped folder.");
