/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
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
  theme?: Theme;
}

export const styles = ({
  position,
  size = "large",
  theme,
  top = "16px",
  left,
  right,
  disableMargin = false,
}: CopyButtonStyleOptions) => {
  const t = sizeTokens[size];
  return {
    borderRadius: "4px",
    padding: t.padding,
    margin: disableMargin ? 0 : "16px",
    width: t.box,
    height: t.box,
    minWidth: t.box,
    border: t.hasBorder
      ? `1px solid ${theme?.palette.vars.controlBorderDefault}`
      : "none",
    ...(position && { position: "absolute", top }),
    ...(position === "left" && { left: left ?? "16px" }),
    ...(position === "right" && { right: right ?? "16px" }),
    "&:hover": {
      border: t.hasBorder
        ? `1px solid ${theme?.palette.vars.controlBorderDefault}`
        : "none",
      backgroundColor: theme?.palette.vars.interactiveSecondaryWeakDefault,
    },
    "&.MuiSvgIcon-root, svg": {
      width: t.icon,
      height: t.icon,
    },
  };
};
