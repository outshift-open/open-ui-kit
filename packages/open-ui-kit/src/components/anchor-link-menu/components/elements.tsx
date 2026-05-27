/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Box,
  Typography,
  styled,
  type BoxProps,
  type TypographyProps,
} from "@mui/material";
import type { ComponentType } from "react";

export const StyledAnchorLinkMenuContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
})) as ComponentType<BoxProps>;

export const StyledAnchorLinkMenuFloatingContainer = styled(Box)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    padding: "8px",
    backgroundColor: theme.palette.vars?.controlBackgroundDefault,
    border: `1px solid ${theme.palette.vars?.controlBorderDefault}`,
    borderRadius: "8px",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 4px 12px rgba(6, 34, 66, 0.7)"
        : "0px 4px 12px rgba(200, 213, 245, 0.7)",
  }),
) as ComponentType<BoxProps>;

export const StyledAnchorLinkMenuItemList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderLeft: `3px solid ${theme.palette.vars?.controlBorderDefault}`,
})) as ComponentType<BoxProps>;

export const StyledAnchorLinkMenuTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.vars?.baseTextMedium,
})) as ComponentType<TypographyProps>;

export const StyledAnchorLinkMenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "subsection",
})<{ subsection?: boolean }>(({ theme, subsection }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: subsection ? "0px 12px 0px 28px" : "0px 12px",
  gap: "12px",
  height: "36px",
  width: "100%",
  borderRadius: "2px",
  cursor: "pointer",
  boxSizing: "border-box",
  "&:hover": {
    backgroundColor: theme.palette.vars?.interactivePrimaryWeakDefault,
    "& .anchor-label": {
      color: theme.palette.vars?.interactivePrimaryDefaultHover,
    },
    "& .anchor-label-selected": {
      color: theme.palette.vars?.interactivePrimaryDefaultActive,
    },
    "& .anchor-bar": {
      backgroundColor: theme.palette.vars?.interactivePrimaryDefaultActive,
    },
  },
})) as ComponentType<BoxProps & { subsection?: boolean }>;

export const StyledAnchorBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  position: "absolute",
  width: "3px",
  left: "-3px",
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.vars?.interactivePrimaryDefaultDefault,
  borderRadius: "2px",
  opacity: selected ? 1 : 0,
})) as ComponentType<BoxProps & { selected?: boolean }>;

export const StyledAnchorLabel = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "selected",
})<{ selected?: boolean }>(({ theme, selected }) => ({
  color: selected
    ? theme.palette.vars?.interactivePrimaryDefaultDefault
    : theme.palette.vars?.baseTextDefault,
  flexGrow: 1,
})) as ComponentType<TypographyProps & { selected?: boolean }>;
