/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";
import type { StatusBanner } from "../types";

export const BANNER_STATUSES = [
  "negative",
  "warning",
  "success",
  "info",
  "excellent",
] as const satisfies readonly StatusBanner[];

export const getCloseIconStyles = (): SxProps<Theme> => ({
  color: (theme) => theme.palette.vars.controlIconDefault,
  width: "18px",
  height: "18px",
});

export const getBannerColors = (
  theme: Theme,
  status: StatusBanner = "info",
) => {
  switch (status) {
    case "negative":
      return {
        border: theme.palette.vars.negativeBorderDefault,
        background: theme.palette.vars.negativeBackgroundWeak,
        icon: theme.palette.vars.negativeIconDefault,
        text: theme.palette.vars.negativeTextDefault,
      };
    case "warning":
      return {
        border: theme.palette.vars.severeWarningBorderDefault,
        background: theme.palette.vars.severeWarningBackgroundWeak,
        icon: theme.palette.vars.severeWarningIconDefault,
        text: theme.palette.vars.severeWarningTextDefault,
      };
    case "success":
      return {
        border: theme.palette.vars.successBorderDefault,
        background: theme.palette.vars.successBackgroundWeak,
        icon: theme.palette.vars.successIconDefault,
        text: theme.palette.vars.successTextDefault,
      };
    case "excellent":
      return {
        border: theme.palette.vars.excellentBorderDefault,
        background: theme.palette.vars.excellentBackgroundWeak,
        icon: theme.palette.vars.excellentIconDefault,
        text: theme.palette.vars.baseTextDefault,
      };
    case "info":
    default:
      return {
        border: theme.palette.vars.neutralBorderDefault,
        background: theme.palette.vars.neutralBackgroundWeak,
        icon: theme.palette.vars.neutralIconDefault,
        text: theme.palette.vars.neutralTextDefault,
      };
  }
};
