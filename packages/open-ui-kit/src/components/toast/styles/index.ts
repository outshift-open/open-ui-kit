/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { ToastType } from "../types";
import { toastGlow, toastGlowStrong } from "@/theme/style/color-palette";

const isStatusToast = (type?: ToastType) => type && type !== "default";

const getStatusTokens = (type: ToastType, theme: Theme) => {
  switch (type) {
    case "error":
      return {
        borderColor: theme.palette.vars.negativeBorderDefault,
        iconColor: theme.palette.vars.negativeIconDefault,
      };
    case "warning":
      return {
        borderColor: theme.palette.vars.severeWarningBorderDefault,
        iconColor: theme.palette.vars.severeWarningIconDefault,
      };
    case "success":
      return {
        borderColor: theme.palette.vars.successBorderDefault,
        iconColor: theme.palette.vars.successIconDefault,
      };
    case "info":
      return {
        borderColor: theme.palette.vars.infoBorderDefault,
        iconColor: theme.palette.vars.infoIconDefault,
      };
    case "default":
    default:
      return undefined;
  }
};

const getToastHeight = (
  type: ToastType | undefined,
  hasTitle?: boolean,
  hasAction?: boolean,
) => {
  if (!hasAction) {
    return undefined;
  }

  if (isStatusToast(type)) {
    return hasTitle ? "138px" : "110px";
  }

  return hasTitle ? "118px" : "110px";
};

export const toastRootStyle = (
  theme: Theme,
  type?: ToastType,
  hasTitle?: boolean,
  hasAction?: boolean,
): CSSObject => {
  const statusTokens = type ? getStatusTokens(type, theme) : undefined;

  return {
    boxSizing: "border-box",
    width: "320px",
    height: getToastHeight(type, hasTitle, hasAction),
    padding: "12px 16px",
    gap: isStatusToast(type) ? "12px" : "8px",
    alignItems: "flex-start",
    border: statusTokens ? `1px solid ${statusTokens.borderColor}` : "none",
    borderLeftWidth: statusTokens ? "4px" : undefined,
    borderRadius: "4px",
    boxShadow: "none",
    backgroundColor: theme.palette.vars.baseBackgroundMedium,
    color: theme.palette.vars.baseTextDefault,
  };
};

/**
 * Glow treatment — Figma `Toast message Glow` (274417:44480).
 *
 * The section documents one gradient, `Gradient/Global-Border/Fade`, and points
 * it at both toast instances. It is already in the theme as
 * `gradientGlobalBorderFade`, so this adds no new gradient. It runs dim on the
 * left to bright blue on the right, matching the instances.
 *
 * Two things carry the treatment: a 1px gradient border and a blue glow cast
 * upward from behind the toast. The glow is the stronger of the two documented
 * values when the toast has a header and the softer one when it does not —
 * which is exactly how the two instances in the frame differ.
 *
 * The border is a mask-composite ring rather than a `border`, since a gradient
 * cannot be assigned to `border-color`. No `overflow: hidden`, which would
 * thin the ring's corner arcs.
 */
export const toastGlowStyle = (
  theme: Theme,
  hasTitle?: boolean,
): CSSObject => ({
  border: "none",
  borderLeftWidth: 0,
  // Figma pads these 18px rather than the 12/16 the standard toast uses.
  padding: "18px",
  position: "relative",
  boxShadow: hasTitle ? toastGlowStrong : toastGlow,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "1px",
    background: theme.palette.gradients.gradientGlobalBorderFade,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    zIndex: 0,
  },
  // The ring is positioned, so lift the toast's own slots above it.
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

export const toastIconSlotStyle = (
  theme: Theme,
  type?: ToastType,
): CSSObject => {
  const statusTokens = type ? getStatusTokens(type, theme) : undefined;

  return {
    display: isStatusToast(type) ? "flex" : "none",
    width: "24px",
    height: "24px",
    margin: 0,
    padding: 0,
    color: statusTokens?.iconColor,
    "& svg": {
      width: "24px",
      height: "24px",
    },
  };
};

export const toastMessageSlotStyle: CSSObject = {
  minWidth: 0,
  flexGrow: 1,
  padding: 0,
  margin: 0,
};

export const toastInnerStyle: CSSObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "8px",
};

export const toastContentStyle: CSSObject = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "4px",
};

export const toastTopRowStyle: CSSObject = {
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  gap: "8px",
};

export const toastTitleStyle = (theme: Theme): CSSObject => ({
  flexGrow: 1,
  minWidth: 0,
  color: theme.palette.vars.baseTextStrong,
  fontFamily: "Inter, sans-serif",
  fontSize: "16px",
  fontWeight: 500,
  lineHeight: "24px",
  letterSpacing: "0.15px",
});

export const toastDescriptionStyle = (theme: Theme): CSSObject => ({
  flexGrow: 1,
  minWidth: 0,
  color: theme.palette.vars.baseTextDefault,
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.25px",
});

export const toastCloseButtonStyle: CSSObject = {
  flex: "0 0 auto",
  width: "24px",
  height: "24px",
  padding: 0,
};

export const toastCloseIconStyle = (theme: Theme): CSSObject => ({
  width: "24px",
  height: "24px",
  color: theme.palette.vars.controlIconDefault,
});

export const toastActionButtonStyle: CSSObject = {
  "&&": {
    width: "fit-content",
    minWidth: 0,
    height: "18px",
    padding: 0,
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "125%",
  },
};
