/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@/theme-provider/theme-provider";
import { getColorBySeverity } from "@/common";
import { SeverityBar as SeverityBarIcon } from "@/custom-icons";
import { severityBarStyle } from "../styles";
import type { SeverityBarProps } from "../types";

export const SeverityBar = ({
  severity,
  sx,
}: SeverityBarProps): JSX.Element => {
  const theme = useTheme();

  return (
    <SeverityBarIcon
      htmlColor={getColorBySeverity(severity, theme)}
      sx={[severityBarStyle, ...(Array.isArray(sx) ? sx : sx ? [sx] : [])]}
    />
  );
};
