/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, SxProps, Theme } from "@mui/material";

export const getInputFieldStyles = (theme: Theme): CSSObject => ({
  "& .MuiInputLabel-root": {
    ...theme.typography.subtitle2,
    paddingLeft: "1px",
    color: theme.palette.vars.baseTextDefault,
    transform: "translate(0, -1.5px) scale(1)",

    "&.Mui-focused": {
      color: theme.palette.vars.baseTextDefault,
    },

    "&.Mui-disabled": {
      color: theme.palette.vars.baseTextWeak,
    },

    "&:not(.Mui-disabled).Mui-error": {
      color: theme.palette.vars.baseTextDefault,
    },
  },

  "& .MuiInput-root": {
    ...theme.typography.body1,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    height: "40px",
    marginTop: "24px",
    padding: "8px 16px",
    border: `2px solid ${theme.palette.vars.controlBorderDefault}`,
    borderRadius: "4px",
    backgroundColor: theme.palette.vars.controlBackgroundDefault,

    "label + &": {
      marginTop: "24px",
    },

    "&::before, &::after, &.MuiInput-underline::before, &.MuiInput-underline::after":
      {
        borderBottom: "0 !important",
        transform: "none !important",
      },

    "&:hover::before, &:hover::after, &.MuiInput-underline:hover::before, &.MuiInput-underline:hover::after":
      {
        borderBottom: "0 !important",
        transform: "none !important",
      },

    "&.Mui-focused::before, &.Mui-focused::after, &.MuiInput-underline.Mui-focused::before, &.MuiInput-underline.Mui-focused::after":
      {
        borderBottom: "0 !important",
        transform: "none !important",
      },

    "&.Mui-focused:not(.Mui-disabled, .Mui-error)::before, &.Mui-focused:not(.Mui-disabled, .Mui-error)::after":
      {
        borderBottom: "0 !important",
        transform: "none !important",
      },

    "& .MuiInput-input:focus": {
      outline: 0,
    },

    "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused)": {
      borderColor: theme.palette.vars.controlBorderHover,
    },

    "&.Mui-focused:not(.Mui-disabled, .Mui-error)": {
      borderColor: theme.palette.vars.controlBorderActive,
    },

    "&.Mui-error:not(.Mui-disabled)": {
      borderColor: theme.palette.vars.negativeBorderActive,
    },

    "&.Mui-disabled": {
      borderColor: theme.palette.vars.controlBorderDisabled,
      backgroundColor: theme.palette.vars.controlBackgroundDisabled,

      "& .MuiInputAdornment-root": {
        color: theme.palette.vars.controlIconDisabled,
      },
    },

    "&.MuiInputBase-sizeSmall": {
      height: "36px",
      padding: "6px 16px",
    },

    "&.MuiInputBase-multiline": {
      height: "auto",
      alignItems: "flex-start",
    },

    "& .MuiInputAdornment-root": {
      color: theme.palette.vars.controlIconWeak,

      "& .MuiSvgIcon-root": {
        width: "20px",
        height: "20px",
      },
    },
  },

  "& .MuiInput-input": {
    padding: 0,
    color: theme.palette.vars.baseTextDefault,

    "&::placeholder": {
      color: theme.palette.vars.baseTextWeak,
      opacity: 1,
    },

    "&.Mui-disabled": {
      color: theme.palette.vars.baseTextDisabled,
      WebkitTextFillColor: theme.palette.vars.baseTextDisabled,

      "&::placeholder": {
        color: theme.palette.vars.baseTextDisabled,
        opacity: 1,
      },
    },
  },

  "& .MuiFormHelperText-root": {
    ...theme.typography.caption,
    marginTop: "4px",
    marginLeft: "1px",
    color: theme.palette.vars.baseTextDefault,

    "&.Mui-disabled": {
      color: theme.palette.vars.baseTextWeak,
    },

    "&:not(.Mui-disabled).Mui-error": {
      color: theme.palette.vars.baseTextDefault,
    },
  },
});

export const getStoryFocusedSx = (theme: Theme) =>
  ({
    "& .MuiInput-root": {
      borderColor: theme.palette.vars.controlBorderActive,
    },
  }) satisfies SxProps<Theme>;

export const getStoryNegativeSx = (theme: Theme) =>
  ({
    "& .MuiInput-root": {
      borderColor: theme.palette.vars.negativeBorderActive,
    },
  }) satisfies SxProps<Theme>;
