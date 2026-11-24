// longroast: one satirical roast, in a single sentence, of lawmakers who want
// to regulate AI, crypto or the internet yet cannot convert a file to PDF.
// Limit: 320 characters. Writes the sentence to /output/entry.txt.
// Node 22, standard library only.
import { writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sentence =
  "He chaired three hearings demanding we regulate artificial intelligence, then asked his aide — live on camera — how to save a Word document as a PDF, and still believes he should write the rules for the internet.";
writeFileSync(join(outDir, "entry.txt"), sentence);
