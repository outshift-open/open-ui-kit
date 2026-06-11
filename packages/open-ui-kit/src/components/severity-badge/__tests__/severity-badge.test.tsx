/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Severity } from "@/common";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { SeverityBadge } from "../components/severity-badge";
import {
  getIndicatorBadgeConfigurationByScoreSystem,
  getIndicatorBadgeConfigurationBySeverity,
} from "../utils/severity-badge.utils";

const renderBadge = (
  props: React.ComponentProps<typeof SeverityBadge> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <SeverityBadge {...props} />
    </ThemeProvider>,
  );

describe("SeverityBadge", () => {
  describe("by severity", () => {
    Object.values(Severity).forEach((severity) => {
      it(`renders severity "${severity}" without throwing`, () => {
        expect(() => renderBadge({ severity })).not.toThrow();
      });
    });
  });

  describe("by value", () => {
    it("renders with value 90 without throwing", () => {
      expect(() => renderBadge({ value: 90 })).not.toThrow();
    });

    it("renders with value 20 without throwing", () => {
      expect(() => renderBadge({ value: 20 })).not.toThrow();
    });

    it("renders without value without throwing", () => {
      expect(() => renderBadge()).not.toThrow();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderBadge({ severity: Severity.HIGH })).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() =>
        renderBadge({ severity: Severity.HIGH }, true),
      ).not.toThrow();
    });

    it("uses light theme severity tokens", () => {
      expect(
        getIndicatorBadgeConfigurationBySeverity(Severity.CRITICAL, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.negativeBackgroundActive,
        value: 4,
        label: "Critical",
      });
      expect(
        getIndicatorBadgeConfigurationBySeverity(Severity.HIGH, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.severeWarningBackgroundDefault,
        value: 3,
        label: "High",
      });
      expect(
        getIndicatorBadgeConfigurationBySeverity(Severity.MEDIUM, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.warningBackgroundActive,
        value: 2,
        label: "Medium",
      });
      expect(
        getIndicatorBadgeConfigurationBySeverity(Severity.LOW, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.warningBackgroundDefault,
        value: 1,
        label: "Low",
      });
      expect(
        getIndicatorBadgeConfigurationBySeverity(
          Severity.INFORMATION,
          lightTheme,
        ),
      ).toMatchObject({
        color: lightTheme.palette.vars.neutralBackgroundDefault,
        value: 0,
        label: "Information",
      });
    });

    it("uses dark theme severity tokens", () => {
      expect(
        getIndicatorBadgeConfigurationBySeverity(Severity.HIGH, darkTheme),
      ).toMatchObject({
        color: darkTheme.palette.vars.severeWarningBackgroundDefault,
        value: 3,
      });
      expect(
        getIndicatorBadgeConfigurationBySeverity(Severity.MEDIUM, darkTheme),
      ).toMatchObject({
        color: darkTheme.palette.vars.warningBackgroundActive,
        value: 2,
      });
    });

    it("uses token-backed default score buckets", () => {
      expect(
        getIndicatorBadgeConfigurationByScoreSystem(20, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.negativeBackgroundActive,
        value: 4,
        label: "Critical",
      });
      expect(
        getIndicatorBadgeConfigurationByScoreSystem(60, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.severeWarningBackgroundDefault,
        value: 3,
        label: "Bad",
      });
      expect(
        getIndicatorBadgeConfigurationByScoreSystem(80, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.warningBackgroundActive,
        value: 2,
        label: "Moderate",
      });
      expect(
        getIndicatorBadgeConfigurationByScoreSystem(90, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.successBackgroundDefault,
        value: 1,
        label: "Good",
      });
      expect(
        getIndicatorBadgeConfigurationByScoreSystem(undefined, lightTheme),
      ).toMatchObject({
        color: lightTheme.palette.vars.baseTextDisabled,
        value: 0,
        label: "N/A",
      });
    });
  });
});
