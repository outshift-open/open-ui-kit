"use strict";

const shell = require("shelljs");
const fs = require("fs");

const NPM_DIR = "dist";
const BUNDLE_CMD = "yarn run bundle";

(async () => {
  try {
    const chalk = (await import("chalk")).default;

    shell.echo(chalk.blue("Start building..."));

    shell.cd("..");
    shell.rm(`-Rf`, `${NPM_DIR}/*`);

    // Bundle with rollup
    if (shell.exec(BUNDLE_CMD).code !== 0) {
      shell.echo(chalk.red("Error: build failed."));
      shell.exit(1);
    }

    shell.echo(chalk.green("Bundling completed."));

    shell.echo(chalk.magenta("Copy files to dist folder..."));
    shell.cp("-Rf", ["package.json", "LICENSE", "*.md"], `${NPM_DIR}`);

    shell.echo(chalk.magenta("Modifying final package.json"));
    let packageJSON = JSON.parse(fs.readFileSync(`${NPM_DIR}/package.json`));
    delete packageJSON.private; // remove private flag
    delete packageJSON.scripts; // remove all scripts
    delete packageJSON.jest; // remove jest section
    delete packageJSON["lint-staged"]; // remove lint-staged section
    delete packageJSON.workspaces; // remove yarn workspace section
    delete packageJSON.files; // remove files section

    // Remove "dist/" from the entrypoint paths.
    ["main", "module", "types", "browser"].forEach(function (key) {
      if (packageJSON[key]) {
        packageJSON[key] = packageJSON[key].replace(`${NPM_DIR}/`, "");
      }
    });

    // TODO: improve this later
    delete packageJSON.exports;
    packageJSON["exports"] = {
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
    };

    fs.writeFileSync(
      `./${NPM_DIR}/package.json`,
      JSON.stringify(packageJSON, null, 2),
    );

    shell.echo(chalk.green("End building."));
  } catch (error) {
    shell.echo(`Build failed due to: ${error}`);
    shell.exit(1);
  }
})();
