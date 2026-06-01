/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material";
import type { KeyValuePairsLayout } from "../types";

export const DEFAULT_KEY_VALUE_ITEMS = [
  { key: "Key one", value: "Value" },
  { key: "Key two", value: "Value" },
  { key: "Key three", value: "Value" },
  { key: "Key four", value: "Value" },
  { key: "Key five", value: "Value" },
  { key: "Key six", value: "Value" },
] as const;

export const getKeyValuePairsStyles = (
  columns: number,
  rowCount: number,
  columnGap: string | number,
  rowGap: string | number,
): CSSObject => ({
  display: "grid",
  gridTemplateColumns: `repeat(${columns}, max-content)`,
  gridTemplateRows: `repeat(${rowCount}, max-content)`,
  gridAutoFlow: "column",
  columnGap,
  rowGap,
  alignItems: "start",
});

export const getKeyValuePairStyles = (
  layout: KeyValuePairsLayout,
  pairGap: string | number,
): CSSObject => ({
  display: "flex",
  flexDirection: layout === "inline" ? "row" : "column",
  alignItems: layout === "inline" ? "center" : "flex-start",
  gap: layout === "inline" ? pairGap : "4px",
  minHeight: layout === "inline" ? "20px" : "44px",
});

export const getKeyValueKeyStyles = (
  theme: Theme,
  layout: KeyValuePairsLayout = "inline",
  keyWidth: string | number = "72px",
): CSSObject => ({
  ...theme.typography.body2,
  color: theme.palette.vars.baseTextDefault,
  width: layout === "inline" ? keyWidth : "auto",
  flexShrink: 0,
  fontWeight: layout === "inline" ? 600 : 400,
  lineHeight: "20px",
});

export const getKeyValueValueStyles = (
  theme: Theme,
  layout: KeyValuePairsLayout = "inline",
): CSSObject => ({
  ...theme.typography.body2,
  color: theme.palette.vars.baseTextDefault,
  margin: 0,
  fontWeight: layout === "inline" ? 400 : 600,
  lineHeight: "20px",
  letterSpacing: "0.25px",
});

export const getStorySectionTitleStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.h6,
  color: theme.palette.vars.baseTextStrong,
  fontSize: "16px",
  lineHeight: "21px",
  letterSpacing: "0.5px",
});

export const getStoryValuePanelStyles = (): CSSObject => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "336px",
});

export const getStoryDotStyles = (theme: Theme): CSSObject => ({
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: theme.palette.vars.excellentBackgroundDefault,
});

export const getStoryLinkStyles = (theme: Theme): CSSObject => ({
  ...theme.typography.body2,
  color: theme.palette.vars.interactivePrimaryDefaultDefault,
  textDecoration: "underline",
  width: "fit-content",
});

export const getInlineCodeStyles = (theme: Theme): CSSObject => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  width: "fit-content",
  minHeight: "20px",
  padding: "0 8px",
  borderRadius: "4px",
  backgroundColor: theme.palette.vars.controlBackgroundWeak,
  color: theme.palette.vars.baseTextDefault,
  fontFamily: "monospace",
  fontSize: "13px",
  lineHeight: "20px",
});
