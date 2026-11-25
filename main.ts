// Weirdest Job Title: Blind Judge Showdown
// Entry for make.fun bounty u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.
// The program writes one job title (44 Unicode code points, inside the
// gate's 1-60 range) to /output/entry.txt and nothing else.
//
// The chosen title: "Professional Mourner for Strangers' Goldfish"
// Against the judge brief: a professional mourner is a real job — hired
// grievers exist — and the twist is the client: a stranger's goldfish.
// It lands on the first read, it is specific enough to picture the
// person doing it (black suit, tiny coffin, a family that never met
// them), and at 44 characters it reads at a glance.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Professional Mourner for Strangers' Goldfish";

// Self-check the sealed gate before writing: the entry must be UTF-8
// text of 1 to 60 characters (Unicode code points, not bytes), not only
// whitespace, and a single job title — one line, no trailing newline.
const length = [...TITLE].length;
if (length < 1 || length > 60) {
  throw new Error(`entry is ${length} code points, outside the 1-60 gate`);
}
if (TITLE.trim().length === 0 || /[\r\n]/.test(TITLE)) {
  throw new Error("entry must be one non-blank line");
}

// Never delete /output itself: in the grader it is a mount point.
// Creating it when missing and writing the file inside is safe.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
