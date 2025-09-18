/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Components, Theme } from "@mui/material";
import { KeyboardArrowUp, TriangleUpOutline } from "@/custom-icons";
import { typography } from "@/theme/common";

export const inputComponents = (theme: Theme): Components => {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "8px 12px",
          height: "40px",
          marginTop: "24px",
          "label+&": {
            marginTop: "24px",
          },
          "&.Mui-disabled": {
            borderColor: theme.palette.vars.controlBorderDisabled,
            "& .MuiInputAdornment-root": {
              color: theme.palette.text.disabled,
            },
          },
          ...typography.body1,
          border: "2px solid",
          borderColor: theme.palette.vars.controlBorderDefault,
          backgroundColor: theme.palette.vars.controlBackgroundDefault,
          borderRadius: "4px",
          "&:not(.Mui-disabled,.Mui-error).Mui-focused": {
            borderColor: theme.palette.vars.controlBorderActive,
          },
          "&:not(.Mui-disabled).Mui-error": {
            borderColor: theme.palette.vars.negativeBorderActive,
          },
          "&&:not(.Mui-error)::before": {
            borderBottom: "none",
          },
          "&&.Mui-error::before": {
            borderColor: theme.palette.vars.negativeBorderActive,
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled,.Mui-error,.Mui-focused)": {
            borderColor: theme.palette.vars.controlBorderHover,
          },
          "&:hover:.Mui-error:before": {
            borderBottom: "none",
          },
          "&::after": {
            borderBottom: "none",
          },
        },
        input: {
          padding: "0px",
          color: theme.palette.vars.baseTextDefault,
          "&::placeholder": {
            color: theme.palette.vars.baseTextWeak,
          },
        },
        sizeSmall: {
          height: "36px",
          padding: "6px 12px",
        },
        multiline: {
          height: "max-content",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...typography.subtitle2,
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
      },
      defaultProps: {
        shrink: true,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          ...theme.typography.caption,
          color: theme.palette.vars.baseTextDefault,
          paddingLeft: "1px",
          marginTop: "4px",
          "&.Mui-disabled": {
            color: theme.palette.vars.baseTextWeak,
          },
          "&:not(.Mui-disabled).Mui-error": {
            color: theme.palette.vars.baseTextDefault,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-outlined": {
            transform: "translate(12px, -9px) scale(1)",
          },
          "& .MuiInputLabel-filled": {
            transform: "translate(12px, 3px) scale(1)",
          },
        },
      },
    },
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
        root: {
          "& .MuiSelect-select": {
            backgroundColor: theme.palette.vars.controlBackgroundWeak,
          },
        },
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
