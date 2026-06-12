/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Severity } from "@/common";
import { SeverityBadgeLabel } from "../components/severity-badge-label";

const renderLabel = (
  props: React.ComponentProps<typeof SeverityBadgeLabel> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <SeverityBadgeLabel {...props} />
    </ThemeProvider>,
  );

describe("SeverityBadgeLabel", () => {
  describe("by severity", () => {
    Object.values(Severity).forEach((severity) => {
      it(`renders severity "${severity}" without throwing`, () => {
        expect(() => renderLabel({ severity })).not.toThrow();
      });
    });
  });

  describe("label", () => {
    it("shows default label from severity", () => {
      renderLabel({ severity: Severity.CRITICAL });
      expect(screen.getByText("Critical")).toBeInTheDocument();
    });

    it("shows custom label when provided", () => {
      renderLabel({ severity: Severity.HIGH, label: "Urgent" });
      expect(screen.getByText("Urgent")).toBeInTheDocument();
    });

    it("renders without value or severity without throwing", () => {
      expect(() => renderLabel()).not.toThrow();
    });

    it("shows default labels from score values", () => {
      renderLabel({ value: 90 });
      expect(screen.getByText("Good")).toBeInTheDocument();
    });

    it("shows fallback label when no score matches", () => {
      renderLabel();
      expect(screen.getByText("N/A")).toBeInTheDocument();
    });

    it("allows typography props to override defaults", () => {
      renderLabel({
        severity: Severity.LOW,
        labelTypographyProps: { variant: "caption" },
      });

      expect(screen.getByText("Low")).toHaveClass("MuiTypography-caption");
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderLabel({ severity: Severity.MEDIUM })).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() =>
        renderLabel({ severity: Severity.MEDIUM }, true),
      ).not.toThrow();
    });
  });
});
