/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { getColorBySeverity, Severity } from "@/common";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { SeverityBar } from "../components/severity-bar";
import { severityBarStyle } from "../styles";

const renderBar = (
  props: React.ComponentProps<typeof SeverityBar>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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

    it("uses the fixed 4x32 bar dimensions", () => {
      expect(severityBarStyle).toEqual({
        width: "4px",
        height: "32px",
      });
    });

    it("passes light severity colors as SvgIcon htmlColor", () => {
      const { container } = renderBar({ severity: Severity.HIGH });
      expect(container.querySelector("svg")).toHaveAttribute(
        "color",
        getColorBySeverity(Severity.HIGH, lightTheme),
      );
    });

    it("passes dark severity colors as SvgIcon htmlColor", () => {
      const { container } = renderBar({ severity: Severity.MEDIUM }, true);
      expect(container.querySelector("svg")).toHaveAttribute(
        "color",
        getColorBySeverity(Severity.MEDIUM, darkTheme),
      );
    });
  });
});
