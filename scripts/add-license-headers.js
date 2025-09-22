// Copyright 2025 Cisco Systems, Inc. and its affiliates
//
// SPDX-License-Identifier: Apache-2.0

"use strict";

const fs = require("fs");
const path = require("path");

(async () => {
  try {
    const chalk = (await import("chalk")).default;
    const { globbySync } = await import("globby");

    const bannerSourcePath = path.join(__dirname, "license-template.txt");
    const rootDir = path.join(__dirname, "..");

    // Updated patterns for monorepo structure
    const filePatterns = [
      "packages/*/src/**/*.{js,jsx,ts,tsx}",
      "playground/*/**/*.{js,jsx,ts,tsx}",
      "!**/node_modules/**",
      "!**/dist/**",
      "!**/*.stories.{js,jsx,ts,tsx}", // Optional: exclude stories
      "!**/*.test.{js,jsx,ts,tsx}", // Optional: exclude tests
      "!**/*.spec.{js,jsx,ts,tsx}", // Optional: exclude specs
    ];

    console.log(chalk.blue("🔍 Searching for source files..."));
    const files = globbySync(filePatterns, { cwd: rootDir });

    if (!fs.existsSync(bannerSourcePath)) {
      throw new Error(`License template not found at: ${bannerSourcePath}`);
    }

    const bannerSource = fs.readFileSync(bannerSourcePath, "utf8");
    // Better regex to detect any existing license header
    const copyrightRegex = /\/\*[\s\S]*?Copyright[\s\S]*?\*\//;

    let processed = 0;
    let added = 0;

    console.log(chalk.blue(`📝 Processing ${files.length} files...`));

    files.forEach((file) => {
      const fullPath = path.join(rootDir, file);
      const contents = fs.readFileSync(fullPath, "utf8");

      if (!copyrightRegex.test(contents)) {
        const newContents = bannerSource + "\n\n" + contents;
        fs.writeFileSync(fullPath, newContents);
        added++;
        console.log(chalk.gray(`  ✅ Added license header to: ${file}`));
      } else {
        console.log(chalk.gray(`  ⏭️  Skipped (has header): ${file}`));
      }
      processed++;
    });

    console.log(
      chalk.green(
        `\n🎉 Processed ${processed} files, added headers to ${added} files`,
      ),
    );
  } catch (error) {
    const chalk = (await import("chalk")).default;
    console.error(
      chalk.red(`❌ License header addition failed: ${error.message}`),
    );
    process.exit(1);
  }
})();
