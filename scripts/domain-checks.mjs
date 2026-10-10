/**
 * Lightweight domain integrity checks (no test framework required).
 * Run: node scripts/domain-checks.mjs
 * Note: full TS registry checks run at build time; this documents expected invariants.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = 0;

function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed += 1;
  } else {
    console.log("OK:", msg);
  }
}

const registryPath = join(root, "src/domain/curriculum/registry.ts");
assert(existsSync(registryPath), "registry.ts exists");

const reg = readFileSync(registryPath, "utf8");
assert(reg.includes("b2-opinion"), "registry includes B2 opinion");
assert(reg.includes("c1-argument"), "registry includes C1 argument");
assert(reg.includes("validateCurriculumIntegrity"), "integrity helper exported");

const placementPath = join(root, "src/domain/placement/questions.ts");
assert(existsSync(placementPath), "placement questions exist");
const pq = readFileSync(placementPath, "utf8");
assert(pq.includes('PLACEMENT_VERSION = "v1.2"'), "placement is v1.2");
assert(pq.includes("pq-vocab-4"), "placement has expanded vocab");
assert(pq.includes("pq-grammar-3"), "placement has expanded grammar");
assert(pq.includes("pq-reading-3"), "placement has expanded reading");

const materialsPath = join(root, "src/domain/materials.ts");
if (existsSync(materialsPath)) {
  const m = readFileSync(materialsPath, "utf8");
  assert(!m.includes("tv5monde.com"), "materials have no TV5 external URLs");
  assert(!m.includes("http://"), "materials avoid plain http links");
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log("\nAll domain checks passed");
