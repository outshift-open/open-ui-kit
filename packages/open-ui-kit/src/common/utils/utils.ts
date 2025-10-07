/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { Severity } from "../types";
import { SEVERITY_VALUE } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const EMPTY_FUNCTION = () => {};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const getColorBySeverity = (
  severity: Severity,
  theme: Theme,
): string => {
  const severitiesToColors: Record<Severity, string> = {
    [Severity.CRITICAL]: theme.palette.vars.negativeBackgroundActive,
    [Severity.HIGH]: theme.palette.vars.severeWarningBackgroundDefault,
    [Severity.MEDIUM]: theme.palette.vars.warningBackgroundActive,
    [Severity.LOW]: theme.palette.vars.warningBackgroundDefault,
    [Severity.INFORMATION]: theme.palette.vars.neutralBackgroundDefault,
  };
  return severity in severitiesToColors
    ? severitiesToColors[severity]
    : theme.palette.info.main;
};

export const normalizeSeverity = (severity: unknown): Severity => {
  if (typeof severity === "string") {
    return severity.toUpperCase() in Severity
      ? (severity.toUpperCase() as Severity)
      : Severity.INFORMATION;
  } else if (typeof severity === "number") {
    const severityArray = [
      Severity.INFORMATION,
      Severity.LOW,
      Severity.MEDIUM,
      Severity.HIGH,
      Severity.CRITICAL,
    ];
    return severity in severityArray
      ? severityArray[severity]
      : Severity.INFORMATION;
  }
  return Severity.INFORMATION;
};

export const sortBySeverity = (a?: Severity, b?: Severity) => {
  if (a && b) {
    const [_a, _b] = [SEVERITY_VALUE[a], SEVERITY_VALUE[b]];
    if (_a < _b) {
      return 1;
    }
    if (_a > _b) {
      return -1;
    }
  }
  return 0;
};
