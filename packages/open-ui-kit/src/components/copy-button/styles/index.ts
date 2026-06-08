/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { CopyButtonSize, CopyButtonStylesProps } from "../types";

const sizeTokens: Record<
  CopyButtonSize,
  { box: string; icon: string; padding: number; hasBorder: boolean }
> = {
  small: { box: "16px", icon: "14px", padding: 0, hasBorder: false },
  medium: { box: "20px", icon: "16px", padding: 0, hasBorder: false },
  large: { box: "32px", icon: "20px", padding: 0, hasBorder: true },
};

interface CopyButtonStyleOptions extends CopyButtonStylesProps {
  theme: Theme;
}

export const styles = ({
  position,
  size = "large",
  theme,
  top = "16px",
  left,
  right,
}: CopyButtonStyleOptions): CSSObject => {
  const t = sizeTokens[size];
  return {
    alignItems: "center",
    borderRadius: "4px",
    border: t.hasBorder
      ? `1px solid ${theme.palette.vars.controlBorderDefault}`
      : "none",
    color: theme.palette.vars.interactiveSecondaryDefaultDefault,
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    height: t.box,
    justifyContent: "center",
    margin: 0,
    minWidth: t.box,
    padding: t.padding,
    width: t.box,
    ...(position && { position: "absolute", top }),
    ...(position === "left" && { left: left ?? "16px" }),
    ...(position === "right" && { right: right ?? "16px" }),
    "&:hover": {
      border: t.hasBorder
        ? `1px solid ${theme.palette.vars.controlBorderDefault}`
        : "none",
      backgroundColor: theme.palette.vars.interactiveSecondaryWeakDefault,
      color: theme.palette.vars.interactiveSecondaryDefaultHover,
    },
    "&:focus-visible": {
      outline: `2px solid ${theme.palette.vars.controlFocusRingStrong}`,
      outlineOffset: "2px",
    },
    "&.MuiSvgIcon-root, svg": {
      height: t.icon,
      width: t.icon,
    },
  };
};
