// The Robot Vacuum's Funniest Excuse — make.fun bounty entry.
// One line, at most 120 characters: the excuse a robot vacuum gives
// for missing a spot. Deterministic: no network, no randomness, no clock.
// The vacuum speaks for itself: it delegated the corner, the mop never showed.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const ENTRY =
  "I delegated that corner to the mop 96 days ago. It has cleaned it 0 times. I am not covering its shift.";

const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
