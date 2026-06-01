/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Severity } from "@/common";
import { SeverityBar } from "../components/severity-bar";

const renderBar = (
  props: React.ComponentProps<typeof SeverityBar>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <SeverityBar {...props} />
    </ThemeProvider>,
  );

describe("SeverityBar", () => {
  describe("by severity", () => {
    Object.values(Severity).forEach((severity) => {
      it(`renders severity "${severity}" without throwing`, () => {
        expect(() => renderBar({ severity })).not.toThrow();
      });
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderBar({ severity: Severity.CRITICAL })).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() =>
        renderBar({ severity: Severity.CRITICAL }, true),
      ).not.toThrow();
    });
  });
});
