import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const line = "I made 3 passes, moved 0 crumbs, and the cat knighted the dust in that corner Murray.";
const target = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
// One line, one excuse: three passes, zero crumbs, and the dust keeps its title.
