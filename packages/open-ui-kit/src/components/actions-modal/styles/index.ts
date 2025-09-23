/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export const styles = {
  styledDialog: {
    "& .MuiDialog-paper": {
      width: "570px",
    },
  },
  styledTextArea: {
    width: "100%",
    "& .MuiInputBase-root": {
      marginTop: 0,
      marginBottom: "12px",
      minHeight: "138px",
      alignItems: "flex-start",
    },
    "& .MuiFormHelperText-root.Mui-error": {
      marginBottom: "12px",
    },
  },
  styledDismiss: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginBottom: "16px",
  },
  styledFooter: {
    display: "flex",
    alignContent: "space-between",
    justifyContent: "flex-end",
    gap: "16px",
    padding: "0",
  },
  styledConfirmButton: {
    "&&.Mui-disabled": {
      opacity: 1,
    },
    "&&.MuiLoadingButton-root": {
      height: "32px",
    },
  },
  styledCommentSuggestionsStack: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
  },
};
