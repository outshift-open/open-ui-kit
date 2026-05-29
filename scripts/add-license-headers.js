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

    // Check for --force flag
    const forceReplace = process.argv.includes("--force");

    if (forceReplace) {
      console.log(
        chalk.yellow(
          "⚠️  Force mode enabled - will replace existing license headers",
        ),
      );
    }

    const bannerSourcePath = path.join(__dirname, "license-template.txt");
    const rootDir = path.join(__dirname, "..");

    // Updated patterns for monorepo structure
    const filePatterns = [
      "packages/**/*.{js,jsx,ts,tsx,css,html}",
      "playground/**/*.{js,jsx,ts,tsx,css,html}",
      "scripts/**/*.{js,jsx,ts,tsx}",
      "*.{js,jsx,ts,tsx,css,html}",
      "!**/node_modules/**",
      "!**/dist/**",
      "!**/storybook-static/**",
      "!**/build/**",
      "!**/*.stories.{js,jsx,ts,tsx}", // Optional: exclude stories
      "!**/*.test.{js,jsx,ts,tsx}", // Optional: exclude tests
      "!**/*.spec.{js,jsx,ts,tsx}", // Optional: exclude specs
      "!**/*.d.ts", // Exclude TypeScript declaration files
    ];

    console.log(chalk.blue("🔍 Searching for source files..."));
    const files = globbySync(filePatterns, { cwd: rootDir });

    if (!fs.existsSync(bannerSourcePath)) {
      throw new Error(`License template not found at: ${bannerSourcePath}`);
    }

    const bannerSource = fs.readFileSync(bannerSourcePath, "utf8").trim();

    // Function to format license header based on file type
    const formatLicenseHeader = (fileExtension, licenseText) => {
      switch (fileExtension) {
        case ".css":
          return `/*\n * ${licenseText.split("\n").join("\n * ")}\n */`;
        case ".html":
          return `<!--\n${licenseText
            .split("\n")
            .map((line) => (line ? ` ${line}` : ""))
            .join("\n")}\n-->`;
        case ".js":
        case ".jsx":
        case ".ts":
        case ".tsx":
        default:
          return `/*\n * ${licenseText.split("\n").join("\n * ")}\n */`;
      }
    };

    // Better regex to detect any existing license header for different comment types
    const copyrightRegex =
      /(\/\*[\s\S]*?Copyright[\s\S]*?\*\/|<!--[\s\S]*?Copyright[\s\S]*?-->)/;

    let processed = 0;
    let added = 0;
    let replaced = 0;

    console.log(chalk.blue(`📝 Processing ${files.length} files...`));

    files.forEach((file) => {
      const fullPath = path.join(rootDir, file);
      const contents = fs.readFileSync(fullPath, "utf8");
      const fileExtension = path.extname(file);
      const formattedHeader = formatLicenseHeader(fileExtension, bannerSource);
      const hasExistingHeader = copyrightRegex.test(contents);

      if (hasExistingHeader && !forceReplace) {
        // Skip files that already have license headers (unless force mode)
        console.log(chalk.cyan(`  ⏭️  Skipped (already has license): ${file}`));
        processed++;
      } else if (hasExistingHeader && forceReplace) {
        // Replace existing license header
        const newContents = contents.replace(copyrightRegex, formattedHeader);
        fs.writeFileSync(fullPath, newContents);
        console.log(chalk.yellow(`  🔄 Replaced license header in: ${file}`));
        replaced++;
        processed++;
      } else {
        // Add new license header
        const newContents = formattedHeader + "\n\n" + contents;
        fs.writeFileSync(fullPath, newContents);
        console.log(chalk.green(`  ✅ Added license header to: ${file}`));
        added++;
        processed++;
      }
    });

    const summary = forceReplace
      ? `\n🎉 Processed ${processed} files, added headers to ${added} files, replaced headers in ${replaced} files`
      : `\n🎉 Processed ${processed} files, added headers to ${added} files`;

    console.log(chalk.green(summary));
  } catch (error) {
    const chalk = (await import("chalk")).default;
    console.error(
      chalk.red(`❌ License header addition failed: ${error.message}`),
    );
    process.exit(1);
  }
})();
