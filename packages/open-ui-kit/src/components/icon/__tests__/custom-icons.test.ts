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

// A color written straight into the icon — hex, or any of the CSS color
// functions. These are what must never appear: they survive a theme switch and
// leave the mark painted for one mode only.
const LITERAL_COLOR =
  /#[0-9a-f]{3,8}\b|\b(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\s*\(/i;

const QUOTED_STRING = /"[^"]*"|'[^']*'/g;

function unquote(value: string) {
  return value.slice(1, -1).trim().toLowerCase();
}

function isInheritedPaint(value: string) {
  return value === "none" || value === "currentcolor";
}

// `fill`/`stroke` may either inherit (`currentColor`), paint nothing (`none`),
// or resolve through the theme — a `vars.*` token, a palette constant, or a
// prop carrying one of those. The multi-tone marks need that third form: the
// Outshift logo paints four fixed brand colors, the Dashboard navigation icon
// swaps a three-tone ramp between its selected and unselected states, and the
// OrgSwitcher mark is two-tone. A caller only carries one inherited color, so
// forcing those onto `currentColor` would flatten them.
function isAcceptablePaint(rawValue: string) {
  const value = rawValue.trim();

  if (!value.startsWith("{")) {
    return isInheritedPaint(unquote(value));
  }

  const expression = value.slice(1, -1);

  return (
    !LITERAL_COLOR.test(expression) &&
    (expression.match(QUOTED_STRING) ?? []).every((literal) =>
      isInheritedPaint(unquote(literal)),
    )
  );
}

describe("custom icons", () => {
  it("keeps SVG fills and strokes off hardcoded colors", () => {
    const badPaintAttributes = iconFiles.flatMap((filePath) => {
      const source = getSource(filePath);
      const matches = [
        ...source.matchAll(
          /\b(?:fill|stroke)\s*=\s*(\{[^}]*\}|"[^"]*"|'[^']*')/g,
        ),
      ];

      return matches
        .filter((match) => !isAcceptablePaint(match[1]))
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
