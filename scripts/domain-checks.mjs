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
assert(reg.includes("c2-nuance"), "registry includes C2 nuance");
assert(reg.includes("validateCurriculumIntegrity"), "integrity helper exported");

const cafe = readFileSync(join(root, "src/domain/curriculum/a1-au-cafe.ts"), "utf8");
assert(cafe.includes("task-cafe-understanding"), "café has understanding tasks");
assert(cafe.includes("task-price-evidence"), "café price has evidence");
assert(cafe.includes("task-polite-evidence"), "café politeness has evidence");

const placementPath = join(root, "src/domain/placement/questions.ts");
const pq = readFileSync(placementPath, "utf8");
assert(pq.includes('PLACEMENT_VERSION = "v1.2"'), "placement is v1.2");

const materialsPath = join(root, "src/domain/materials.ts");
if (existsSync(materialsPath)) {
  const m = readFileSync(materialsPath, "utf8");
  assert(!m.includes("tv5monde.com"), "materials have no TV5 external URLs");
}

if (failed > 0) {
  console.error(`\n${failed} check(s) failed`);
  process.exit(1);
}
console.log("\nAll domain checks passed");
