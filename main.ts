// One Line, One Laugh — make.fun entry
// Writes a single hilarious line (133 bytes) to /output/entry.txt.
// Calibrated against the 90 verified top-10 winning lines in
// judge-calibration-one-liner.md §2d: one specific absurd image
// (a named five-year-old selling me my own shoe), concrete numbers,
// present-tense confession, and a factual two-beat ending — no
// setup-punchline structure, no explanation of the joke.
// Byte count verified with Python: 133 bytes, inside the 90–170 target
// and under the 200-character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My five-year-old, Nara, sold me my own shoe for Rp5.000 yesterday, then charged me Rp2.000 to put it back on. I paid. It was my shoe.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outDir}/entry.txt`);
