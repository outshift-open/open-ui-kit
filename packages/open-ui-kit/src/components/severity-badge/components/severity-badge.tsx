/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";
import {
  getIndicatorBadgeConfigurationBySeverity,
  getIndicatorBadgeConfigurationByScoreSystem,
} from "../utils/severity-badge.utils";
import { SeverityBadgeProps } from "../types/severity-badge.types";
import { IndicatorBadge } from "@/components";

export const SeverityBadge = ({
  severity,
  scoreSystem,
  value,
}: SeverityBadgeProps): JSX.Element => {
  const theme = useTheme();

  const indicatorBadgeConfiguration = severity
    ? getIndicatorBadgeConfigurationBySeverity(severity, theme)
    : getIndicatorBadgeConfigurationByScoreSystem(value, theme, scoreSystem);

  return (
    <IndicatorBadge
      color={indicatorBadgeConfiguration.color}
      value={indicatorBadgeConfiguration.value}
    />
  );
};
