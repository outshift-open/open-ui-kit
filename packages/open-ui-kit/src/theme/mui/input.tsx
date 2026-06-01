/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Components, Theme } from "@mui/material";
import { KeyboardArrowUp, TriangleUpOutline } from "@/custom-icons";

export const inputComponents = (theme: Theme): Components => {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: TriangleUpOutline,
        MenuProps: {
          slotProps: {
            paper: {
              sx: {
                marginTop: "4px",
              },
            },
          },
        },
      },
      styleOverrides: {
        icon: {
          color: theme.palette.vars.controlIconWeak,
          transform: "rotate(180deg)",
          paddingLeft: "6px",
          width: "auto",
        },
        iconOpen: {
          transform: "rotate(0deg)",
          paddingRight: "6px",
        },
      },
    },

    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <KeyboardArrowUp />,
      },
      styleOverrides: {
        popper: {
          "& .MuiAutocomplete-listbox": {
            fontSize: "14px",
          },
        },
        root: {
          "& .MuiInputBase-root.MuiAutocomplete-inputRoot": {
            marginTop: "28px",
            fontSize: "14px",
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingLeft: "8px",
            backgroundColor: theme.palette.vars.controlBackgroundWeak,

            "&.MuiInputBase-sizeSmall": {
              paddingTop: "4px",
              paddingBottom: "4px",
            },

            "& .MuiInputBase-input.MuiAutocomplete-input": {
              padding: "2px 0",
            },
          },
          "& .MuiTextField-root": {
            "& .MuiInputLabel-root": {
              transform: "translate(0, -1.5px) scale(1)",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.vars.controlBorderDefault,
            legend: {
              width: "0px",
            },
          },
          "& .MuiIconButton-root": {
            color: theme.palette.vars.controlIconDefault,
            transform: "rotate(180deg)",
            "&.MuiAutocomplete-popupIndicatorOpen": {
              transform: "rotate(0deg)",
            },
          },
          "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused) .MuiOutlinedInput-notchedOutline":
            {
              borderColor: theme.palette.vars.controlBorderHover,
            },
        },
      },
    },
  };
};
