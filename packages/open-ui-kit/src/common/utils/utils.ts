/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Theme } from "@mui/material";
import { Severity } from "../types";
import { PA_Colors } from "../../theme/dark/dark-color-palette";
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
    [Severity.CRITICAL]: PA_Colors.bordeaux[500],
    [Severity.HIGH]: theme.palette.error.main,
    [Severity.MEDIUM]: PA_Colors.orange[500],
    [Severity.LOW]: theme.palette.warning.main,
    [Severity.INFORMATION]: theme.palette.info.main,
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
