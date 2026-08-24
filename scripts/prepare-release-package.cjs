const fs = require("node:fs");
const path = require("node:path");

const packageRootDefault = path.resolve(
  __dirname,
  "..",
  "packages",
  "open-ui-kit",
);
const distRootDefault = path.join(packageRootDefault, "dist");

function rewriteDistPaths(value) {
  if (typeof value === "string") {
    return value.replaceAll("./dist/", "./");
  }

  if (Array.isArray(value)) {
    return value.map(rewriteDistPaths);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        rewriteDistPaths(nestedValue),
      ]),
    );
  }

  return value;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function copyFirstExistingFile(sourcePaths, targetPath) {
  const sourcePath = sourcePaths.find((candidatePath) =>
    fs.existsSync(candidatePath),
  );

  if (sourcePath) {
    fs.copyFileSync(sourcePath, targetPath);
  }
}

function prepareReleasePackage({
  packageRoot = packageRootDefault,
  distRoot = distRootDefault,
  releaseVersion,
} = {}) {
  const sourceManifestPath = path.join(packageRoot, "package.json");
  const distManifestPath = path.join(distRoot, "package.json");
  const sourceManifest = readJson(sourceManifestPath);
  const version = releaseVersion || sourceManifest.version;

  if (releaseVersion) {
    sourceManifest.version = releaseVersion;
    writeJson(sourceManifestPath, sourceManifest);
  }

  const publishManifest = {
    ...sourceManifest,
    version,
    files: ["**/*"],
    main: "./index.cjs.js",
    module: "./index.esm.js",
    browser: "./index.umd.js",
    types: "./index.d.ts",
    exports: rewriteDistPaths(sourceManifest.exports),
  };

  delete publishManifest.scripts;
  delete publishManifest.devDependencies;
  delete publishManifest.workspaces;

  fs.mkdirSync(distRoot, { recursive: true });
  writeJson(distManifestPath, publishManifest);
  copyFirstExistingFile(
    [path.join(packageRoot, "README.md")],
    path.join(distRoot, "README.md"),
  );
  copyFirstExistingFile(
    [
      path.join(packageRoot, "LICENSE"),
      path.resolve(packageRoot, "..", "..", "LICENSE"),
    ],
    path.join(distRoot, "LICENSE"),
  );

  return distManifestPath;
}

if (require.main === module) {
  const releaseVersion = process.argv[2];
  const manifestPath = prepareReleasePackage({ releaseVersion });
  process.stdout.write(`Prepared release manifest at ${manifestPath}\n`);
}

module.exports = { prepareReleasePackage };
