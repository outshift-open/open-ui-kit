/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  circularProgressClasses,
  type CSSObject,
  type Theme,
} from "@mui/material";
import type { SpinnerProps } from "../types";

export const getSpinnerWrapperStyles = (
  size: SpinnerProps["size"],
): CSSObject => ({
  position: "relative",
  width: size,
  height: size,
});

export const getSpinnerColorStyles = (theme: Theme): CSSObject => ({
  [`&.MuiCircularProgress-colorPrimary .${circularProgressClasses.circle}`]: {
    color: theme.palette.vars.interactivePrimaryDefaultDefault,
  },
  [`&.MuiCircularProgress-colorSecondary .${circularProgressClasses.circle}`]: {
    color: theme.palette.vars.interactiveSecondaryDefaultDefault,
  },
});

export const getSpinnerTrackStyles = (theme: Theme): CSSObject => ({
  ...getSpinnerColorStyles(theme),
  opacity: 0.2,
});

export const getSpinnerIndicatorStyles = (theme: Theme): CSSObject => ({
  ...getSpinnerColorStyles(theme),
  animationDuration: "1s",
  position: "absolute",
  left: 0,
  top: 0,
  [`& .${circularProgressClasses.circle}`]: {
    strokeLinecap: "round",
    strokeDasharray: "31.4, 94.2",
  },
});
