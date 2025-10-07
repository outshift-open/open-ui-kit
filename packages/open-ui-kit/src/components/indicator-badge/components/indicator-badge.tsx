/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack } from "@mui/material";
import {
  IndicatorBadgeValue,
  IndicatorBadgeValueProps,
} from "./indicator-badge-value";
import {
  indicatorBadgeValueContainerStyles,
  indicatorBadgeBackdropStyles,
} from "../styles/indicator-badge.styles";

const INDICATOR_BADGE_VALUES_COUNT = 4;

export interface IndicatorBadgeProps
  extends Pick<IndicatorBadgeValueProps, "color"> {
  value: 0 | 1 | 2 | 3 | 4;
}

export const IndicatorBadge = ({
  color,
  value,
}: IndicatorBadgeProps): JSX.Element => {
  return (
    <Box sx={indicatorBadgeValueContainerStyles.container}>
      <Box sx={indicatorBadgeBackdropStyles(color)} />
      <Stack direction="column" spacing={0.25} position="absolute">
        {Array.from({ length: INDICATOR_BADGE_VALUES_COUNT }).map((n, i) => (
          <IndicatorBadgeValue
            key={i}
            color={color}
            isActive={value > INDICATOR_BADGE_VALUES_COUNT - (i + 1)}
          />
        ))}
      </Stack>
    </Box>
  );
};
