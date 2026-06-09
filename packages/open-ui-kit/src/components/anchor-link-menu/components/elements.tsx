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
import type { ComponentPropsWithoutRef, ComponentType } from "react";

export const StyledAnchorLinkMenuContainer = styled(Box)(() => ({
  alignItems: "flex-start",
  borderRadius: "2px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "224px",
})) as ComponentType<BoxProps>;

export const StyledAnchorLinkMenuFloatingContainer = styled(Box)(
  ({ theme }) => ({
    alignItems: "flex-start",
    backgroundColor: theme.palette.vars?.controlBackgroundDefault,
    border: `2px solid ${theme.palette.vars?.controlBorderDefault}`,
    borderRadius: "6px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "8px",
    width: "240px",
    boxShadow: theme.shadows[4],
  }),
) as ComponentType<BoxProps>;

export const StyledAnchorLinkMenuItemList = styled(Box)(({ theme }) => ({
  alignItems: "flex-start",
  borderLeft: `3px solid ${theme.palette.vars?.interactivePrimaryWeakDefault}`,
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  width: "100%",
})) as ComponentType<BoxProps>;

export const StyledAnchorLinkMenuTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.vars?.baseTextMedium,
})) as ComponentType<TypographyProps>;

export const StyledAnchorLinkMenuItem = styled(Box, {
  shouldForwardProp: (prop) => prop !== "subsection",
})<{ subsection?: boolean }>(({ theme, subsection }) => ({
  alignItems: "center",
  background: "transparent",
  border: 0,
  borderRadius: "2px",
  boxSizing: "border-box",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  font: "inherit",
  gap: "12px",
  height: "36px",
  padding: subsection ? "0px 12px 0px 28px" : "0px 12px",
  position: "relative",
  textAlign: "left",
  width: "100%",
  "&:hover": {
    backgroundColor: theme.palette.vars?.interactivePrimaryWeakDefault,
    "& .anchor-label": {
      color: theme.palette.vars?.interactivePrimaryDefaultHover,
    },
    "& .anchor-label-selected": {
      color: theme.palette.vars?.interactivePrimaryDefaultActive,
    },
    "& .anchor-bar": {
      backgroundColor: theme.palette.vars?.interactivePrimaryDefaultHover,
      opacity: 1,
    },
    "& .anchor-bar-selected": {
      backgroundColor: theme.palette.vars?.interactivePrimaryDefaultActive,
    },
  },
  "&:focus-visible": {
    backgroundColor: theme.palette.vars?.interactivePrimaryWeakDefault,
    outline: `2px solid ${theme.palette.vars?.interactivePrimaryDefaultActive}`,
    outlineOffset: "2px",
  },
})) as ComponentType<
  BoxProps &
    ComponentPropsWithoutRef<"button"> & {
      subsection?: boolean;
    }
>;

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
