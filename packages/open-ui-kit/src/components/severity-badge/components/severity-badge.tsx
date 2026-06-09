/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@/theme-provider/theme-provider";
import {
  getIndicatorBadgeConfigurationBySeverity,
  getIndicatorBadgeConfigurationByScoreSystem,
} from "../utils/severity-badge.utils";
import type { SeverityBadgeProps } from "../types";
import { IndicatorBadge } from "@/components/indicator-badge";

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
