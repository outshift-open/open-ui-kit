/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from "node:fs";
import path from "node:path";
// The suite only reads sources, but it still needs the jest globals to be
// typed, and `typeRoots` in tsconfig.json does not reach the hoisted
// `@types/jest`. Every other suite picks them up through this import.
import "@testing-library/jest-dom";

const customIconsDir = path.resolve(__dirname, "../../../custom-icons");

function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(dir, entry.name);

    return entry.isDirectory() ? walk(filePath) : filePath;
  });
}

const iconFiles = walk(customIconsDir)
  .filter((filePath) => filePath.endsWith(".tsx"))
  .filter((filePath) => path.basename(filePath) !== "index.tsx");

function getSource(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

function stripQuotes(value: string) {
  return value.replace(/^['"]/, "").replace(/['"]$/, "").trim();
}

// `none` and `currentColor` are the only paint keywords an icon may hardcode.
function isPaintKeyword(value: string) {
  const keyword = stripQuotes(value).toLowerCase();

  return keyword === "none" || keyword === "currentcolor";
}

// A JSX expression that is a plain identifier or member access — `{tones.block}`,
// `{vars.brandLogoSecondary}`, `{outshiftLogoGreen}` — resolves to a design token
// or palette constant, which is how multi-tone marks (the Outshift logo, the
// Dashboard navigation icon) paint shapes that cannot share one inherited color.
const TOKEN_REFERENCE = /^[A-Za-z_$][\w$]*(?:\??\.[A-Za-z_$][\w$]*)*$/;

function isAllowedPaint(value: string) {
  const trimmed = value.trim();

  if (trimmed.startsWith("{")) {
    const expression = trimmed.replace(/^\{/, "").replace(/\}$/, "").trim();

    // A string literal inside braces is still a hardcoded color.
    return /^['"]/.test(expression)
      ? isPaintKeyword(expression)
      : TOKEN_REFERENCE.test(expression);
  }

  return isPaintKeyword(trimmed);
}

describe("custom icons", () => {
  it("never hardcodes SVG fill and stroke colors", () => {
    const badPaintAttributes = iconFiles.flatMap((filePath) => {
      const source = getSource(filePath);
      const matches = [
        ...source.matchAll(
          /\b(?:fill|stroke)\s*=\s*(\{[^}]*\}|"[^"]*"|'[^']*')/g,
        ),
      ];

      return matches
        .filter((match) => !isAllowedPaint(match[1]))
        .map(
          (match) => `${path.relative(customIconsDir, filePath)}: ${match[0]}`,
        );
    });

    expect(badPaintAttributes).toEqual([]);
  });

  it("does not include invalid numeric SVG path data", () => {
    const invalidPathData = iconFiles
      .filter((filePath) => /\bNaN\b|\bnan\b/.test(getSource(filePath)))
      .map((filePath) => path.relative(customIconsDir, filePath));

    expect(invalidPathData).toEqual([]);
  });

  it("forwards SvgIconProps through every root SvgIcon", () => {
    const missingPropForwarding = iconFiles.flatMap((filePath) => {
      const source = getSource(filePath);
      const rootIconCount = [...source.matchAll(/<SvgIcon\b/g)].length;
      const forwardedCount = [
        ...source.matchAll(/<SvgIcon[\s\S]*?\{\.\.\.props\}/g),
      ].length;

      return forwardedCount === rootIconCount
        ? []
        : [
            `${path.relative(
              customIconsDir,
              filePath,
            )}: ${forwardedCount}/${rootIconCount}`,
          ];
    });

    expect(missingPropForwarding).toEqual([]);
  });

  it("keeps root SvgIcon sizing controlled by fontSize", () => {
    const fixedRootSizes = iconFiles
      .filter((filePath) =>
        /<SvgIcon\b[^>]*(?:\bwidth\s*=|\bheight\s*=)/.test(getSource(filePath)),
      )
      .map((filePath) => path.relative(customIconsDir, filePath));

    expect(fixedRootSizes).toEqual([]);
  });

  it("exports every custom icon file through the barrel", () => {
    const topLevelBarrel = getSource(path.join(customIconsDir, "index.ts"));
    const navigationBarrel = getSource(
      path.join(customIconsDir, "navigation", "index.tsx"),
    );
    const exportedModules = new Set([
      ...[...topLevelBarrel.matchAll(/export \* from "\.\/(.+?)";/g)].map(
        (match) => match[1],
      ),
      ...[...navigationBarrel.matchAll(/export \* from "\.\/(.+?)";/g)].map(
        (match) => `navigation/${match[1]}`,
      ),
    ]);

    const missingExports = iconFiles
      .map((filePath) =>
        path.relative(customIconsDir, filePath).replace(/\.tsx$/, ""),
      )
      .filter((modulePath) => modulePath !== "navigation/index")
      .filter((modulePath) => !exportedModules.has(modulePath));

    expect(missingExports).toEqual([]);
  });
});
