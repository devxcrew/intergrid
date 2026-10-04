import { globSync } from "node:fs";
import { spawn } from "node:child_process";

const foundation = [
  ...globSync("tests/**/*.test.ts"),
  ...globSync("tests/**/*.test.mjs"),
];
const modules = globSync("src/**/*.test.ts");
const files = [...new Set([...foundation, ...modules])].sort();

if (process.argv.includes("--list")) {
  for (const file of files) console.log(file);
  console.log(`Module-local test files: ${modules.length}`);
} else if (!files.length) {
  console.error("No test files found.");
  process.exitCode = 1;
} else {
  const child = spawn(process.execPath, ["--import", "tsx", "--test", ...files], {
    stdio: "inherit",
    windowsHide: true,
  });
  child.on("error", (error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
  child.on("exit", (code) => {
    console.log(`Module-local test files: ${modules.length}`);
    process.exitCode = code ?? 1;
  });
}
