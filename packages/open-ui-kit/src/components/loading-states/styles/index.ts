/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { LoadingStatesSkeletonState } from "../types";

export const DEFAULT_SPINNER_SIZES = [40, 24, 20, 16] as const;

export const DEFAULT_SKELETON_STATES = ["loading", "failure"] as const;

export const getLoadingStatesRootStyles = (): CSSObject => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "52px",
});

export const getLoadingStatesSpinnerSectionStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  width: "290px",
});

export const getLoadingStatesSpinnerGroupStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  alignItems: "flex-start",
});

export const getLoadingStatesSpinnerRowStyles = (): CSSObject => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
});

export const getLoadingStatesSkeletonSectionStyles = (): CSSObject => ({
  display: "grid",
  gridTemplateColumns: "repeat(2, 210px)",
  columnGap: "252px",
  alignItems: "start",
  minWidth: "672px",
});

export const getLoadingStatesSkeletonCardStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "36px",
  width: "210px",
});

export const getLoadingStatesSkeletonPreviewStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "36px",
  width: "210px",
});

export const getSkeletonBaseColor = (
  theme: Theme,
  state: LoadingStatesSkeletonState,
) =>
  state === "loading"
    ? theme.palette.vars.baseBackgroundWeak
    : theme.palette.vars.controlBorderWeak;

export const getSkeletonWaveStyles = (
  theme: Theme,
  state: LoadingStatesSkeletonState,
): CSSObject =>
  state === "loading"
    ? {
        "&::after": {
          background: `linear-gradient(90deg, ${theme.palette.vars.baseBackgroundWeak} 0%, ${theme.palette.vars.controlBorderWeak} 49.7%, ${theme.palette.vars.baseBackgroundWeak} 100%)`,
        },
      }
    : {};

export const getSkeletonShapeStyles = (
  theme: Theme,
  state: LoadingStatesSkeletonState,
  radius: string,
): CSSObject => ({
  backgroundColor: getSkeletonBaseColor(theme, state),
  borderRadius: radius,
  ...getSkeletonWaveStyles(theme, state),
});

export const getStorySectionLabelStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.subtitle2,
  color: theme.palette.vars.baseTextStrong,
  fontWeight: 600,
  lineHeight: "22px",
});

export const getStorySizeLabelStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.caption,
  color: theme.palette.vars.baseTextDefault,
  lineHeight: "20px",
});
