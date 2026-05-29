/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import type { CSSProperties } from "react";

export const containerStackStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "4px",
  position: "relative",
});

export const codeTextStyle = (
  size: "small" | "medium" = "medium",
): CSSProperties => ({
  fontFamily: "'Roboto Mono', monospace",
  fontWeight: 400,
  fontSize: size === "small" ? "12px" : "14px",
  lineHeight: size === "small" ? "16px" : "20px",
  letterSpacing: 0,
});

export const customStyle = (
  theme: Theme,
  showLineNumbers?: boolean,
  size: "small" | "medium" = "medium",
): CSSProperties => {
  const pad = size === "small" ? "0 12px" : "0 16px";
  return {
    padding: showLineNumbers ? 0 : pad,
    margin: "0",
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    borderRadius: showLineNumbers ? "0 0 4px 4px" : "4px",
    color: theme.palette.vars.baseTextDefault,
  };
};

export const lineNumberStyle = (
  theme: Theme,
  lineNumberWidth: number,
  showLineNumbers?: boolean,
  size: "small" | "medium" = "medium",
): CSSProperties => {
  const isSmall = size === "small";
  return {
    width: `${lineNumberWidth}px`,
    textAlign: "right",
    paddingRight: isSmall ? "6px" : "8px",
    paddingLeft: isSmall ? "6px" : "8px",
    borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
    marginRight: showLineNumbers ? (isSmall ? "12px" : "16px") : 0,
    color: theme.palette.vars.baseTextMedium,
    backgroundColor: theme.palette.vars.baseBackgroundMedium,
    ...codeTextStyle(size),
    minWidth: `${lineNumberWidth}px`,
  };
};

export const separatorFirstBox = (
  theme: Theme,
  lineNumberWidth: number,
  size: "small" | "medium" = "medium",
): CSSProperties => ({
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "4px 0 0 4px",
  height: size === "small" ? "12px" : "16px",
  width: `${lineNumberWidth}px`,
  minWidth: "28px",
});

export const separatorSecondBox = (
  theme: Theme,
  showLineNumbers?: boolean,
  size: "small" | "medium" = "medium",
): CSSProperties => {
  const isSmall = size === "small";
  return {
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    paddingTop: showLineNumbers
      ? isSmall
        ? "12px"
        : "16px"
      : isSmall
        ? "6px"
        : "8px",
    height: isSmall ? "12px" : "16px",
  };
};

export const headerStyles = (
  theme: Theme,
  size: "small" | "medium" = "medium",
): CSSProperties => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: size === "small" ? "8px 12px" : "12px 16px",
  gap: size === "small" ? "12px" : "16px",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  borderBottom: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "4px 4px 0 0",
});

export const headerButtonStyles = (theme: Theme): CSSProperties => ({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  ...(theme.typography.body2Semibold as CSSProperties),
  color: theme.palette.vars.brandIconPrimaryDefault,
});

// Syntax tokens intentionally keep Prism palette literals; no Spark semantic
// tokens exist for language grammar colors in the current design system.
export const prismStyle: { [key: string]: CSSProperties } = {
  'pre[class*="language-"]': { background: "transparent", textShadow: "none" },
  'code[class*="language-"]': { background: "transparent", textShadow: "none" },
  comment: { color: "slategray" },
  prolog: { color: "slategray" },
  doctype: { color: "slategray" },
  cdata: { color: "slategray" },
  punctuation: { color: "#999" },
  property: { color: "#905" },
  tag: { color: "#905" },
  boolean: { color: "#905" },
  number: { color: "#905" },
  constant: { color: "#905" },
  symbol: { color: "#905" },
  deleted: { color: "#905" },
  selector: { color: "#690" },
  "attr-name": { color: "#690" },
  string: { color: "#690" },
  char: { color: "#690" },
  builtin: { color: "#690" },
  inserted: { color: "#690" },
  operator: { color: "#9a6e3a" },
  entity: { color: "#9a6e3a", cursor: "help" },
  url: { color: "#9a6e3a" },
  ".language-css .token.string": { color: "#9a6e3a" },
  ".style .token.string": { color: "#9a6e3a" },
  atrule: { color: "#07a" },
  "attr-value": { color: "#07a" },
  keyword: { color: "#07a" },
  function: { color: "#DD4A68" },
  "class-name": { color: "#DD4A68" },
  regex: { color: "#e90" },
  important: { color: "#e90", fontWeight: "bold" },
  variable: { color: "#e90" },
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
};
