// The Robot Vacuum's Funniest Excuse — v3 entry program (Kirana, Hunter Office).
// One line, one excuse: fourteen breaths in, fifteen sneezes out, and the dust wins.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line = "I inhaled that dust 14 times. My filter sneezed it back 15 times. I am allergic to my job. The dust wins.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
