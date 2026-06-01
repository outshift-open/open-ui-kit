/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Slider as MuiSlider } from "@mui/material";
import { SliderProps } from "../types";

export const Slider = ({ sx, ...props }: SliderProps) => (
  <MuiSlider
    sx={[
      (theme) => ({
        height: "8px",
        borderRadius: "4px",
        color: theme.palette.vars.interactivePrimaryDefaultDefault,

        "& .MuiSlider-rail": {
          backgroundColor: theme.palette.vars.controlBorderMedium,
          opacity: 1,
          borderRadius: "4px",
        },

        "& .MuiSlider-track": {
          backgroundColor: theme.palette.vars.interactivePrimaryDefaultDefault,
          border: "none",
          borderRadius: "4px",
        },

        "& .MuiSlider-thumb": {
          width: "24px",
          height: "24px",
          backgroundColor: theme.palette.vars.controlBackgroundDefault,
          border: `2px solid ${theme.palette.vars.controlBorderStrong}`,
          borderRadius: "50%",
          boxShadow: "none",
          "&:hover, &.Mui-focusVisible": {
            boxShadow: "none",
            borderColor: theme.palette.vars.interactivePrimaryDefaultDefault,
          },
          "&:active": {
            boxShadow: "none",
          },
        },

        "& .MuiSlider-mark": {
          width: "4px",
          height: "4px",
          borderRadius: "4px",
          backgroundColor: theme.palette.vars.baseTextWeak,
          opacity: 1,
        },

        "& .MuiSlider-markActive": {
          backgroundColor: theme.palette.vars.controlBackgroundDefault,
          opacity: 1,
        },

        "& .MuiSlider-markLabel": {
          ...theme.typography.caption,
          color: theme.palette.vars.baseTextMedium,
        },

        "& .MuiSlider-valueLabel": {
          ...theme.typography.caption,
          backgroundColor: theme.palette.vars.inactiveBackgroundActive,
          color: theme.palette.vars.baseTextInverse,
          borderRadius: "4px",
        },
      }),
      ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
    ]}
    {...props}
  />
);
