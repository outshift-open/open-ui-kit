/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { createTheme } from "@mui/material/styles";
import { lightVars } from "@/theme/light/light-vars";
import { darkVars } from "@/theme/dark/dark-vars";
import { Severity } from "../../types";
import {
  EMPTY_FUNCTION,
  capitalize,
  getColorBySeverity,
  normalizeSeverity,
  sortBySeverity,
} from "../utils";

const theme = createTheme({
  palette: {
    vars: lightVars,
  },
});

const darkTheme = createTheme({
  palette: {
    vars: darkVars,
  },
});

describe("common utils", () => {
  it("keeps the shared empty callback callable", () => {
    expect(() => EMPTY_FUNCTION()).not.toThrow();
  });

  it("capitalizes strings with the expected library casing", () => {
    expect(capitalize("critical")).toBe("Critical");
    expect(capitalize("HIGH")).toBe("High");
    expect(capitalize("mIxEd")).toBe("Mixed");
  });

  it("normalizes severity strings, numeric values, and fallbacks", () => {
    expect(normalizeSeverity("critical")).toBe(Severity.CRITICAL);
    expect(normalizeSeverity("LOW")).toBe(Severity.LOW);
    expect(normalizeSeverity(0)).toBe(Severity.INFORMATION);
    expect(normalizeSeverity(4)).toBe(Severity.CRITICAL);
    expect(normalizeSeverity(1.5)).toBe(Severity.INFORMATION);
    expect(normalizeSeverity("unknown")).toBe(Severity.INFORMATION);
    expect(normalizeSeverity(undefined)).toBe(Severity.INFORMATION);
  });

  it("maps severities to palette vars", () => {
    expect(getColorBySeverity(Severity.CRITICAL, theme)).toBe(
      lightVars.negativeBackgroundActive,
    );
    expect(getColorBySeverity(Severity.HIGH, theme)).toBe(
      lightVars.severeWarningBackgroundDefault,
    );
    expect(getColorBySeverity(Severity.MEDIUM, theme)).toBe(
      lightVars.warningBackgroundActive,
    );
    expect(getColorBySeverity(Severity.LOW, theme)).toBe(
      lightVars.warningBackgroundDefault,
    );
    expect(getColorBySeverity(Severity.INFORMATION, theme)).toBe(
      lightVars.neutralBackgroundDefault,
    );
  });

  it("maps severities to dark palette vars", () => {
    expect(getColorBySeverity(Severity.CRITICAL, darkTheme)).toBe(
      darkVars.negativeBackgroundActive,
    );
    expect(getColorBySeverity(Severity.HIGH, darkTheme)).toBe(
      darkVars.severeWarningBackgroundDefault,
    );
    expect(getColorBySeverity(Severity.MEDIUM, darkTheme)).toBe(
      darkVars.warningBackgroundActive,
    );
    expect(getColorBySeverity(Severity.LOW, darkTheme)).toBe(
      darkVars.warningBackgroundDefault,
    );
    expect(getColorBySeverity(Severity.INFORMATION, darkTheme)).toBe(
      darkVars.neutralBackgroundDefault,
    );
  });

  it("sorts higher severity before lower severity", () => {
    expect(sortBySeverity(Severity.CRITICAL, Severity.LOW)).toBe(-1);
    expect(sortBySeverity(Severity.LOW, Severity.CRITICAL)).toBe(1);
    expect(sortBySeverity(Severity.HIGH, Severity.HIGH)).toBe(0);
    expect(sortBySeverity(undefined, Severity.HIGH)).toBe(0);
  });
});
