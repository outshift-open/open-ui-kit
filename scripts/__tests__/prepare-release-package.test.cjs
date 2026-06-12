const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const { prepareReleasePackage } = require("../prepare-release-package.cjs");

test("prepareReleasePackage writes a publishable dist manifest", () => {
  const workspace = fs.mkdtempSync(
    path.join(os.tmpdir(), "open-ui-kit-release-"),
  );
  const packageRoot = path.join(workspace, "packages", "open-ui-kit");
  const distRoot = path.join(packageRoot, "dist");

  fs.mkdirSync(distRoot, { recursive: true });
  fs.writeFileSync(
    path.join(packageRoot, "package.json"),
    JSON.stringify(
      {
        name: "@open-ui-kit/core",
        version: "0.1.0",
        description: "Core package",
        license: "Apache-2.0",
        files: ["src/", "dist/"],
        main: "dist/index.cjs.js",
        module: "dist/index.esm.js",
        browser: "dist/index.umd.js",
        types: "dist/index.d.ts",
        exports: {
          "./*.css": "./dist/*.css",
          ".": {
            node: {
              types: "./dist/index.d.ts",
              import: "./dist/index.esm.js",
              require: "./dist/index.cjs.js",
            },
            default: {
              types: "./dist/index.d.ts",
              import: "./dist/index.esm.js",
              default: "./dist/index.umd.js",
            },
          },
          "./package.json": "./package.json",
        },
        scripts: { build: "rollup -c" },
        dependencies: { react: "^18.2.0" },
        devDependencies: { rollup: "^4.0.0" },
        peerDependencies: { react: ">=18" },
        workspaces: ["scripts"],
      },
      null,
      2,
    ),
  );

  const manifestPath = prepareReleasePackage({
    packageRoot,
    distRoot,
    releaseVersion: "1.2.3",
  });
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const sourceManifest = JSON.parse(
    fs.readFileSync(path.join(packageRoot, "package.json"), "utf8"),
  );

  assert.equal(manifestPath, path.join(distRoot, "package.json"));
  assert.equal(manifest.version, "1.2.3");
  assert.equal(sourceManifest.version, "1.2.3");
  assert.equal(manifest.main, "./index.cjs.js");
  assert.equal(manifest.module, "./index.esm.js");
  assert.equal(manifest.browser, "./index.umd.js");
  assert.equal(manifest.types, "./index.d.ts");
  assert.deepEqual(manifest.files, ["**/*"]);
  assert.deepEqual(manifest.exports, {
    "./*.css": "./*.css",
    ".": {
      node: {
        types: "./index.d.ts",
        import: "./index.esm.js",
        require: "./index.cjs.js",
      },
      default: {
        types: "./index.d.ts",
        import: "./index.esm.js",
        default: "./index.umd.js",
      },
    },
    "./package.json": "./package.json",
  });
  assert.equal(manifest.dependencies.react, "^18.2.0");
  assert.equal(manifest.peerDependencies.react, ">=18");
  assert.equal("scripts" in manifest, false);
  assert.equal("devDependencies" in manifest, false);
  assert.equal("workspaces" in manifest, false);
});
