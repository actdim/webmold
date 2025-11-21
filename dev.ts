import { spawn } from "child_process";

const procs = [
    spawn("pnpm", ["--filter", "server", "dev"], { stdio: "inherit" }),
    spawn("pnpm", ["--filter", "webapp", "dev"], { stdio: "inherit" }),
];

process.on("SIGINT", () => procs.forEach(p => p.kill()));

// pnpm tsx dev.ts