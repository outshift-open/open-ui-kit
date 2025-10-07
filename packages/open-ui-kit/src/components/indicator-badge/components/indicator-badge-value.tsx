/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box } from "@mui/material";
import { indicatorBadgeValueStyles } from "../styles/indicator-badge-value-styles";

export interface IndicatorBadgeValueProps {
  color: string;
  isActive?: boolean;
}

export const IndicatorBadgeValue = ({
  color,
  isActive,
}: IndicatorBadgeValueProps): JSX.Element => {
  return <Box sx={indicatorBadgeValueStyles(color, isActive)} />;
};
