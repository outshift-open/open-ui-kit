/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@mui/material";
import { CopyButtonPosition } from "../components/copy-button";

export interface CopyButtonStylesProps {
  position?: CopyButtonPosition;
  theme?: Theme;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export const styles = ({
  position,
  theme,
  top,
  left,
  right,
}: CopyButtonStylesProps) => ({
  border: `1px solid ${theme?.palette.vars.controlBorderDefault}`,
  borderRadius: "4px",
  padding: "4px",
  width: "32px",
  height: "32px",
  ...(position && { position: "absolute", top: top ?? "16px" }),
  ...(position === "left" && { left: left ?? "16px" }),
  ...(position === "right" && { right: right ?? "16px" }),
  "&:hover": {
    border: `1px solid ${theme?.palette.vars.controlBorderDefault}`,
    backgroundColor: "transparent",
  },
  "&.MuiSvgIcon-root, svg": {
    width: "20px",
    height: "20px",
  },
});
