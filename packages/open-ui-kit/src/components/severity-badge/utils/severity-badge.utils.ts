/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { Severity } from "@/common";
import {
  SeverityBadgeConfiguration,
  SeverityBadgeScoreSystemItem,
} from "../types/severity-badge.types";
import { getColorBySeverity } from "@/common";

export const getIndicatorBadgeConfigurationBySeverity = (
  severity: Severity,
  theme: Theme,
): SeverityBadgeConfiguration => {
  const severities: Record<Severity, SeverityBadgeConfiguration> = {
    [Severity.CRITICAL]: {
      color: getColorBySeverity(Severity.CRITICAL, theme),
      value: 4,
      label: "Critical",
    },
    [Severity.HIGH]: {
      color: getColorBySeverity(Severity.HIGH, theme),
      value: 3,
      label: "High",
    },
    [Severity.MEDIUM]: {
      color: getColorBySeverity(Severity.MEDIUM, theme),
      value: 2,
      label: "Medium",
    },
    [Severity.LOW]: {
      color: getColorBySeverity(Severity.LOW, theme),
      value: 1,
      label: "Low",
    },
    [Severity.INFORMATION]: {
      color: getColorBySeverity(Severity.INFORMATION, theme),
      value: 0,
      label: "Information",
    },
  };

  return severities[severity];
};

export const getIndicatorBadgeConfigurationByScoreSystem = (
  value: number | undefined,
  theme: Theme,
  scoreSystem: SeverityBadgeScoreSystemItem[] = [
    {
      configuration: {
        color: theme.palette.vars.negativeBackgroundActive,
        value: 4,
        label: "Critical",
      },
      threshold: 50,
    },
    {
      configuration: {
        color: theme.palette.vars.severeWarningBackgroundDefault,
        value: 3,
        label: "Bad",
      },
      threshold: 70,
    },
    {
      configuration: {
        color: theme.palette.warning.main,
        value: 2,
        label: "Moderate",
      },
      threshold: 85,
    },
    {
      configuration: {
        color: theme.palette.success.main,
        value: 1,
        label: "Good",
      },
      threshold: 100,
    },
  ],
): SeverityBadgeConfiguration => {
  const fallbackConfiguration: SeverityBadgeConfiguration = {
    color: theme.palette.vars.baseTextDisabled,
    value: 0,
    label: "N/A",
  };

  if (value == null) {
    return fallbackConfiguration;
  } else {
    const result = scoreSystem.find((s) => value <= s.threshold);

    return result ? result.configuration : fallbackConfiguration;
  }
};
