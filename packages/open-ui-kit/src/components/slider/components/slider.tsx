/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Slider as MuiSlider, useTheme } from "@mui/material";
import { getSliderStyles } from "../styles";
import type { SliderProps } from "../types";

export const Slider = ({ sx, ...props }: SliderProps) => {
  const theme = useTheme();

  return (
    <MuiSlider
      sx={[
        getSliderStyles(theme),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      {...props}
    />
  );
};
