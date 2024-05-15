import fs from 'node:fs';
import path from 'node:path';
import { execSync } from "node:child_process";

const __dirname = import.meta.dirname;
const installedLockLockFile = path.join(__dirname, 'node_modules/.pnpm/lock.yaml');

const projectLockFile = path.join(__dirname, 'pnpm-lock.yaml');
const shouldPnpmInstall = () => {
    // not exists node_modules
    if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
        return true;
    }
    // not exists lockfile
    if (!fs.existsSync(installedLockLockFile)) {
        return true;
    }
    // lockfile is different
    if (fs.existsSync(projectLockFile) && fs.existsSync(installedLockLockFile)) {
        return fs.readFileSync(projectLockFile, 'utf8') !== fs.readFileSync(installedLockLockFile, 'utf8');
    }
    return false;
}
// if the lockfile is different from the one that was installed, we need to update the installed lockfile
if (process.env.PNPM_RUN_HOOK_INSTALLATION !== 'true' && shouldPnpmInstall()) {
    console.log("Lockfile is different, updating the installed lockfile");
    // execute pnpm install to update the lockfile
    execSync('pnpm install', {
        stdio: 'inherit',
        cwd: __dirname,
        env: {
            ...process.env,
            PNPM_RUN_HOOK_INSTALLATION: 'true',
        }
    });
}
