/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

"use strict";

const fs = require("fs");
const path = require("path");

(async () => {
  try {
    const chalk = (await import("chalk")).default;
    const { globbySync } = await import("globby");

    const bannerSourcePath = path.join(__dirname, "license-template.txt");
    const rootDir = path.join(__dirname, "..");

    const filePatterns = [
      "packages/*/src/**/*.{js,jsx,ts,tsx,css,html}",
      "playground/*/**/*.{js,jsx,ts,tsx,css,html}",
      "scripts/**/*.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/dist/**",
      "!**/storybook-static/**",
      "!**/*.stories.{js,jsx,ts,tsx}", // Optional: exclude stories
      "!**/*.test.{js,jsx,ts,tsx}", // Optional: exclude tests
      "!**/*.spec.{js,jsx,ts,tsx}", // Optional: exclude specs
    ];

    console.log(chalk.blue("🔍 Checking license headers..."));
    const files = globbySync(filePatterns, { cwd: rootDir });

    if (!fs.existsSync(bannerSourcePath)) {
      throw new Error(`License template not found at: ${bannerSourcePath}`);
    }

    // Check for both JS-style and HTML-style license headers
    const copyrightRegexJS = /\/\*[\s\S]*?Copyright[\s\S]*?\*\//;
    const copyrightRegexHTML = /<!--[\s\S]*?Copyright[\s\S]*?-->/;

    let processed = 0;
    let missing = 0;
    const missingFiles = [];

    console.log(chalk.blue(`📝 Checking ${files.length} files...`));

    files.forEach((file) => {
      const fullPath = path.join(rootDir, file);
      const contents = fs.readFileSync(fullPath, "utf8");
      const ext = path.extname(file);

      let hasLicense = false;
      if (ext === ".html") {
        hasLicense = copyrightRegexHTML.test(contents);
      } else {
        hasLicense = copyrightRegexJS.test(contents);
      }

      if (!hasLicense) {
        missing++;
        missingFiles.push(file);
        console.log(chalk.red(`  ❌ Missing license header: ${file}`));
      }
      processed++;
    });

    // Summary with less verbose output during check
    if (missing > 0) {
      console.log(
        chalk.red(`\n❌ ${missing} files are missing license headers!`),
      );
      console.log(chalk.yellow("\nFiles missing headers:"));
      missingFiles.forEach((file) => console.log(chalk.yellow(`  - ${file}`)));
      console.log(
        chalk.yellow('\nRun "yarn license:add" to add missing headers.'),
      );
      process.exit(1);
    } else {
      console.log(
        chalk.green(`\n🎉 All ${processed} files have license headers!`),
      );
    }
  } catch (error) {
    const chalk = (await import("chalk")).default;
    console.error(
      chalk.red(`❌ License header check failed: ${error.message}`),
    );
    process.exit(1);
  }
})();
