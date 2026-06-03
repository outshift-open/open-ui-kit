/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import fs from "node:fs";
import path from "node:path";

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

describe("custom icons", () => {
  it("uses currentColor for SVG fills and strokes", () => {
    const badPaintAttributes = iconFiles.flatMap((filePath) => {
      const source = getSource(filePath);
      const matches = [
        ...source.matchAll(
          /\b(?:fill|stroke)\s*=\s*(\{[^}]*\}|"[^"]*"|'[^']*')/g,
        ),
      ];

      return matches
        .filter((match) => {
          const value = match[1].toLowerCase();
          return (
            value !== '"none"' &&
            value !== "'none'" &&
            value !== '"currentcolor"' &&
            value !== "'currentcolor'"
          );
        })
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
