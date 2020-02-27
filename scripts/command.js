const { spawn } = require("child_process");
const { readdirSync } = require("fs");
const { join } = require("path");

const PKG_DIR = join(__dirname, "..", "packages");

function listDirectories() {
  return readdirSync(PKG_DIR, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function getRunDirs(pkg = null) {
  const directories = listDirectories();

  if (pkg && !directories.includes(pkg)) {
    console.error(`[ERROR] package '${pkg}' does not exist`);
    process.exit(1);
  }

  return (pkg ? [pkg] : directories).map(name => join(PKG_DIR, name));
}

function parseArgs(args) {
  let cmd = null;
  let pkg = null;

  if (args.length > 3) {
    cmd = args[2];
    pkg = args[3];
  } else if (args.length === 3) {
    cmd = args[2];
  } else {
    console.error("[ERROR]: Usage: npm run [command] [package]");
    process.exit(1);
  }

  return { cmd, pkg };
}

const { cmd, pkg } = parseArgs(process.argv);
const runDirs = getRunDirs(pkg);

for (const dir of runDirs) {
  spawn("npm", ["run", cmd], { cwd: dir, stdio: "inherit" });
}
