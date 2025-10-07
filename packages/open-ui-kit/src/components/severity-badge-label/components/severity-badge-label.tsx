/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, Typography, useTheme } from "@mui/material";
import { IndicatorBadge } from "@/components";
import {
  getIndicatorBadgeConfigurationByScoreSystem,
  getIndicatorBadgeConfigurationBySeverity,
} from "../../severity-badge/utils/severity-badge.utils";
import { SeverityBadgeLabelProps } from "../types/severity-badge-label.types";

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
      alignItems={"center"}
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
