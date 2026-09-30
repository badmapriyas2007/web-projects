import { cpSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { join, resolve } from "node:path";

const repositoryRoot = process.cwd();
const outputRoot = join(repositoryRoot, "dist");
const npmExecPath = process.env.npm_execpath;
const npmCommand = npmExecPath
  ? process.execPath
  : process.platform === "win32"
    ? "npm.cmd"
    : "npm";
const npmPrefix = npmExecPath ? [npmExecPath] : [];

const projects = [
  { root: "Unit-1(Project1)/unit1-project1", route: "unit-1/project-1" },
  { root: "Unit-1(Project2)/unit1-project2", route: "unit-1/project-2" },
  { root: "Unit-2(Project1)/project1", route: "unit-2/project-1" },
  { root: "Unit-2(Project2)/unit2", route: "unit-2/project-2" },
  { root: "Unit-3(project1)/project-3", route: "unit-3/project-1" },
  { root: "Unit-3(project2)/unit3-project", route: "unit-3/project-2" },
  { root: "Unit-4(project1)/unit4-project1", route: "unit-4/project-1" },
  { root: "Unit-4(project2)/Unit4-project2", route: "unit-4/project-2" },
  { root: "unit 5 project1/unit 5( project1)", route: "unit-5/project-1" },
  { root: "Unit-5(project2)/unit5-project2", route: "unit-5/project-2" },
];

function runNpm(args, workingDirectory, environment) {
  const result = spawnSync(npmCommand, [...npmPrefix, ...args], {
    cwd: workingDirectory,
    env: environment,
    stdio: "inherit",
    shell: !npmExecPath && process.platform === "win32",
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`npm ${args.join(" ")} failed in ${workingDirectory}`);
  }
}

function buildProject(projectRoot, basePath) {
  const environment = { ...process.env, VITE_BASE_PATH: basePath };
  runNpm(["ci"], projectRoot, environment);
  runNpm(["run", "build"], projectRoot, environment);
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(outputRoot, { recursive: true });

const portalRoot = resolve(repositoryRoot, "portal");
buildProject(portalRoot, "/");
cpSync(join(portalRoot, "dist"), outputRoot, { recursive: true });

for (const project of projects) {
  const projectRoot = resolve(repositoryRoot, project.root);
  const basePath = `/${project.route}/`;
  const projectOutput = join(outputRoot, ...project.route.split("/"));

  buildProject(projectRoot, basePath);
  mkdirSync(projectOutput, { recursive: true });
  cpSync(join(projectRoot, "dist"), projectOutput, { recursive: true });
}