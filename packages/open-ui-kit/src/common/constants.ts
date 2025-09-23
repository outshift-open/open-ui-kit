/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Severity } from "./types";

export const SEVERITY_VALUE: Record<Severity, number> = {
  [Severity.CRITICAL]: 5,
  [Severity.HIGH]: 4,
  [Severity.MEDIUM]: 3,
  [Severity.LOW]: 2,
  [Severity.INFORMATION]: 1,
};

export enum GeneralSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum IconPosition {
  NoIcon = "no-icon",
  LeftIcon = "left-icon",
  RightIcon = "right-icon",
}
