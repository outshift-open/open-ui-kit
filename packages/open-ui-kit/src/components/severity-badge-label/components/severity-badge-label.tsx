/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, Typography } from "@mui/material";
import { useTheme } from "@/theme-provider/theme-provider";
import { IndicatorBadge } from "@/components/indicator-badge";
import {
  getIndicatorBadgeConfigurationByScoreSystem,
  getIndicatorBadgeConfigurationBySeverity,
} from "../../severity-badge/utils/severity-badge.utils";
import type { SeverityBadgeLabelProps } from "../types";

export const SeverityBadgeLabel = ({
  label,
  scoreSystem,
  severity,
  containerStackProps,
  labelTypographyProps,
  value,
}: SeverityBadgeLabelProps): JSX.Element => {
  const theme = useTheme();

  const indicatorBadgeConfiguration = severity
    ? getIndicatorBadgeConfigurationBySeverity(severity, theme)
    : getIndicatorBadgeConfigurationByScoreSystem(value, theme, scoreSystem);

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      {...containerStackProps}
    >
      <IndicatorBadge
        color={indicatorBadgeConfiguration.color}
        value={indicatorBadgeConfiguration.value}
      />
      <Typography variant="body2" {...labelTypographyProps}>
        {label || indicatorBadgeConfiguration.label}
      </Typography>
    </Stack>
  );
};
