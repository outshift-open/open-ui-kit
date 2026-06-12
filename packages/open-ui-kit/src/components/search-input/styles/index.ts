/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, SxProps, Theme } from "@mui/material";
import type { SearchInputProps } from "../types";

type SearchInputSize = SearchInputProps["size"];

export const getSearchInputStyles = (
  theme: Theme,
  inputHasValue: boolean,
  size: SearchInputSize,
): CSSObject => {
  const isSmall = size === "small";

  return {
    padding: 0,
    width: "360px",
    "& .MuiInput-root": {
      ...theme.typography.body1,
      backgroundColor: theme.palette.vars.controlBackgroundDefault,
      border: `${inputHasValue && !isSmall ? "1px" : "2px"} solid ${
        theme.palette.vars.controlBorderDefault
      }`,
      borderRadius: "4px",
      boxSizing: "border-box",
      gap: "8px",
      height: isSmall ? "36px" : "40px",
      marginTop: 0,
      padding: isSmall ? "6px 12px" : "8px 12px",

      "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused)": {
        borderColor: theme.palette.vars.controlBorderHover,
        borderWidth: "2px",
      },

      "&.Mui-focused:not(.Mui-disabled, .Mui-error)": {
        borderColor: theme.palette.vars.controlBorderActive,
        borderWidth: "2px",

        "& .MuiInput-input": {
          ...theme.typography.body2,
        },
      },

      "&.Mui-disabled": {
        backgroundColor: theme.palette.vars.controlBackgroundDisabled,
        borderColor: theme.palette.vars.controlBorderDisabled,
      },

      "@media (max-width: 600px)": {
        height: "44px",

        "&.MuiInputBase-sizeSmall": {
          height: "44px",
        },
      },
    },
    "& .MuiInput-root.MuiInputBase-sizeSmall": {
      padding: "6px 12px",
    },
    "& .MuiInput-input": {
      ...theme.typography.body1,
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
    "& .MuiInputAdornment-root": {
      color: theme.palette.vars.controlIconWeak,
      height: "24px",
      margin: 0,
    },
    "& .MuiInputAdornment-root .MuiSvgIcon-root": {
      height: "24px",
      width: "24px",
    },
    "&& .MuiInputAdornment-root .MuiSvgIcon-root": {
      height: "24px",
      width: "24px",
    },
  };
};

export const searchIconStyle = (theme: Theme) => ({
  color: theme.palette.vars?.controlIconWeak,
  height: "24px",
  width: "24px",
});

export const clearIconStyle = (theme: Theme) => ({
  color: theme.palette.vars?.controlIconWeak,
  height: "24px",
  width: "24px",
});

export const clearButtonStyle = (inputHasValue: boolean) => {
  return {
    color: "inherit",
    height: "24px",
    padding: 0,
    visibility: inputHasValue ? "visible" : "hidden",
    width: "24px",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "@media (max-width: 600px)": {
      height: "44px",
      width: "44px",
    },
  };
};

export const getStorySearchInputHoverSx = (theme: Theme): SxProps<Theme> => ({
  "& .MuiInput-root": {
    borderColor: theme.palette.vars.controlBorderHover,
    borderWidth: "2px",
  },
});

export const getStorySearchInputFocusedSx = (theme: Theme): SxProps<Theme> => ({
  '& [data-testid="clear-button"]': {
    display: "none",
  },
  "& .MuiInput-root": {
    borderColor: theme.palette.vars.controlBorderActive,
    borderWidth: "2px",

    "& .MuiInput-input": {
      ...theme.typography.body2,
    },
  },
});
