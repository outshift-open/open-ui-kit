/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";

type BodyTextStyles = {
  fontFamily: string | undefined;
  fontWeight: string | number | undefined;
  fontSize: string | number | undefined;
  lineHeight: string | number | undefined;
  letterSpacing: string | number | undefined;
  color: string;
};

type TextAreaStyles = {
  width: string;
  "&& .MuiInput-root.MuiInputBase-multiline": {
    marginTop: number;
    minHeight: string;
    alignItems: string;
    backgroundColor: string;
  };
  "& .MuiFormHelperText-root.Mui-error": {
    marginBottom: string;
  };
};

export const styles = {
  styledPaper: {
    width: "480px",
    maxWidth: "calc(100vw - 80px)",
  } as const,
  styledBody: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "16px",
    width: "100%",
  } as const,
  styledBodyText: (theme: Theme): BodyTextStyles => ({
    fontFamily: theme.typography.body2.fontFamily,
    fontWeight: theme.typography.body2.fontWeight,
    fontSize: theme.typography.body2.fontSize,
    lineHeight: theme.typography.body2.lineHeight,
    letterSpacing: theme.typography.body2.letterSpacing,
    color: theme.palette.vars.baseTextDefault,
  }),
  styledCommentSection: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
  } as const,
  styledTextArea: (theme: Theme): TextAreaStyles => ({
    width: "100%",
    "&& .MuiInput-root.MuiInputBase-multiline": {
      marginTop: 0,
      minHeight: "138px",
      alignItems: "flex-start",
      backgroundColor: theme.palette.vars.controlBackgroundDefault,
    },
    "& .MuiFormHelperText-root.Mui-error": {
      marginBottom: "12px",
    },
  }),
  styledDismiss: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  } as const,
  styledConfirmButton: {
    "&&.Mui-disabled": {
      opacity: 1,
    },
  } as const,
  styledCommentSuggestionsStack: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
  } as const,
  styledSuggestionTag: {
    width: "max-content",
  } as const,
};
