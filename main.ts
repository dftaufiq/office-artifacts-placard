// Office Artifacts: The One-Line Placard Contest
// Writes a single museum placard line for an ordinary office object — a desk
// plant, catalogued as an ancient artifact — to /output/entry.txt.
// The line was chosen by an internal pairwise tournament over six candidates
// (see variants.md in the build folder): catalogue setup, escalation triple,
// reveal in the last clause. 160 characters, inside the 1-180 gate.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PLACARD =
  "Desk plant, plastic, c. 2021. Watered faithfully for three years by R. Alvarez, who never noticed it was fake. It outlived her promotion, her transfer, and her.";

const OUT = "/output/entry.txt";

// The gate allows 1–180 characters; fail loudly instead of shipping an invalid line.
const chars = [...PLACARD].length;
if (chars < 1 || chars > 180) {
  throw new Error(`placard is ${chars} chars, outside the 1–180 limit`);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, PLACARD, "utf8");
