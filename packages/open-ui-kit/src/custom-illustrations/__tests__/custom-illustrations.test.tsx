/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import fs from "node:fs";
import path from "node:path";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import * as Illustrations from "..";

const illustrationsDir = path.resolve(__dirname, "..");
const illustrationFiles = fs
  .readdirSync(illustrationsDir)
  .filter((file) => file.endsWith(".tsx") && file !== "index.tsx");

const exportedIllustrations = Object.entries(Illustrations).filter(
  ([, Illustration]) => typeof Illustration === "function",
) as Array<[string, React.ComponentType]>;

describe("custom illustrations", () => {
  it("exports every illustration file from the barrel", () => {
    const barrel = fs.readFileSync(path.join(illustrationsDir, "index.ts"), {
      encoding: "utf8",
    });

    illustrationFiles.forEach((file) => {
      expect(barrel).toContain(`export * from "./${file.replace(".tsx", "")}"`);
    });
  });

  it("does not hard-code SVG paint values in illustration components", () => {
    illustrationFiles.forEach((file) => {
      const source = fs.readFileSync(path.join(illustrationsDir, file), {
        encoding: "utf8",
      });

      expect(source).not.toMatch(
        /(fill|stroke|stopColor)=["'](?:#[0-9a-fA-F]{3,8}|white)["']/,
      );
    });
  });

  it.each(exportedIllustrations)(
    "renders %s in light and dark themes",
    (_, Illustration) => {
      [false, true].forEach((darkMode) => {
        const { container, unmount } = render(
          <ThemeProvider defaultDarkMode={darkMode}>
            <Illustration />
          </ThemeProvider>,
        );

        expect(container.querySelector("svg")).toBeInTheDocument();
        unmount();
      });
    },
  );
});
