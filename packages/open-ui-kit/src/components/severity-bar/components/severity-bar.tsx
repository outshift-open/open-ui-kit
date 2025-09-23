/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SxProps, Theme, useTheme } from "@mui/material";
import { getColorBySeverity, Severity } from "@/common";
import { SeverityBar as SeverityBarIcon } from "@/custom-icons";
import { barStyle } from "../styles/styles";

export interface SeverityBarProps {
  /**
   * Severity of the bar
   */
  severity: Severity;

  /**
   * Styling for the bar
   */
  sx?: SxProps<Theme>;
}

export const SeverityBar = ({
  severity,
  sx,
}: SeverityBarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SeverityBarIcon
      fill={getColorBySeverity(severity, theme)}
      sx={{ ...barStyle, ...sx }}
    />
  );
};
