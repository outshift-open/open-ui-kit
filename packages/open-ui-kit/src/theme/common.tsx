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
import { TypographyVariantsOptions } from "@mui/material/styles/createTypography";
import { KeyboardArrowUp } from "../custom-icons";
import { TOOLBAR_MINIMUM_HEIGHT } from "./constants";

export const typography: TypographyVariantsOptions = {
  fontFamily: "Inter, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "60px",
    lineHeight: "64px",
  },
  h2: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "52px",
  },
  h3: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "44px",
  },
  h4: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "36px",
  },
  h5: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
  },
  h6: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    lineHeight: "28px",
  },
  headingSubSection: {
    fontFamily: "Sharp Sans, sans-serif",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "22px",
  },
  subtitle1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.15px",
  },
  subtitle2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.1px",
  },
  body1: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
  },
  body1Semibold: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0px",
  },
  body2: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.25px",
  },
  body2Semibold: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0px",
  },
  caption: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
  captionMedium: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
  captionSemibold: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "0",
  },
  button: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "16px",
    textTransform: "none",
  },
  overline: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 600,
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "0.4px",
  },
};

export const getInputSharedStyle = (theme: Theme): Components => {
  const underline = {
    ...(typography.body2 as object),
    // border: "1px solid",
    // borderColor: surface200,
    // backgroundColor: surface800,
    // borderRadius: "4px",
    // "&:not(.Mui-disabled,.Mui-error).Mui-focused": {
    //   borderColor: primary500,
    // },
    // "&:not(.Mui-disabled).Mui-error": {
    //   borderColor: bordeaux500,
    // },
    // "&&:not(.Mui-error)::before": {
    //   borderBottom: "none",
    // },
    // "&&.Mui-error::before": {
    //   borderColor: bordeaux500,
    //   borderBottom: "none",
    // },
    // "&:hover:not(.Mui-disabled,.Mui-error,.Mui-focused)": {
    //   borderColor: grey400,
    // },
    // "&:hover:.Mui-error:before": {
    //   borderBottom: "none",
    // },
    // "&::after": {
    //   borderBottom: "none",
    // },
  };

  return {
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "8px 16px 8px 16px",
          height: "40px",
          marginTop: "24px",
          "label+&": {
            marginTop: "24px",
          },
          "&.Mui-disabled": {
            "& .MuiInputAdornment-root": {
              color: theme.palette.text.disabled,
            },
          },
        },
        input: {
          padding: "0px",
        },
        sizeSmall: {
          height: "32px",
        },
        multiline: {
          height: "max-content",
        },
        underline,
      },
    },
    MuiInputLabel: {
      // styleOverrides: {
      //   root: {
      //     ...typography.subtitle2,
      //     paddingLeft: "1px",
      //     color: grey50,
      //     transform: "translate(0, -1.5px) scale(1)",
      //     "&.Mui-focused": {
      //       color: grey50,
      //     },
      //     "&.Mui-disabled": {
      //       color: theme.palette.text.disabled,
      //     },
      //     "&:not(.Mui-disabled).Mui-error": {
      //       color: grey50,
      //     },
      //   },
      // },
      // defaultProps: {
      //   shrink: true,
      // },
    },
    MuiFormHelperText: {
      // styleOverrides: {
      //   root: {
      //     color: grey200,
      //     paddingLeft: "1px",
      //     marginTop: "4px",
      //     "&.Mui-disabled": {
      //       color: grey300,
      //     },
      //     "&:not(.Mui-disabled).Mui-error": {
      //       color: bordeaux500_Text,
      //     },
      //   },
      // },
    },
    MuiFilledInput: {
      // styleOverrides: {
      //   underline,
      //   root: {
      //     "&:hover:not(.Mui-disabled, .Mui-error)": {
      //       backgroundColor: surface800,
      //     },
      //   },
      //   input: {
      //     borderRadius: "4px",
      //   },
      // },
    },
    MuiOutlinedInput: {
      // styleOverrides: {
      //   root: {
      //     "&:not(.Mui-disabled).Mui-error .MuiOutlinedInput-notchedOutline": {
      //       borderColor: bordeaux500,
      //     },
      //   },
      //   notchedOutline: {
      //     legend: {
      //       maxWidth: "100%",
      //     },
      //   },
      // },
    },
    MuiTextField: {
      // styleOverrides: {
      //   root: {
      //     "& .MuiInputLabel-outlined": {
      //       transform: "translate(12px, -9px) scale(1)",
      //     },
      //     "& .MuiInputLabel-filled": {
      //       transform: "translate(12px, 3px) scale(1)",
      //     },
      //   },
      // },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <KeyboardArrowUp />,
      },
      // styleOverrides: {
      //   popper: {
      //     "& .MuiAutocomplete-listbox": {
      //       fontSize: "14px",
      //     },
      //   },
      //   root: {
      //     "& .MuiInputBase-root.MuiAutocomplete-inputRoot": {
      //       marginTop: "28px",
      //       fontSize: "14px",
      //       paddingTop: "8px",
      //       paddingBottom: "8px",
      //       paddingLeft: "16px",
      //       backgroundColor: surface800,

      //       "&.MuiInputBase-sizeSmall": {
      //         paddingTop: "4px",
      //         paddingBottom: "4px",
      //       },

      //       "& .MuiInputBase-input.MuiAutocomplete-input": {
      //         padding: "2px 0",
      //       },
      //     },
      //     "& .MuiTextField-root": {
      //       "& .MuiInputLabel-root": {
      //         transform: "translate(0, -1.5px) scale(1)",
      //       },
      //     },
      //     "& .MuiOutlinedInput-notchedOutline": {
      //       borderColor: surface200,
      //       legend: {
      //         width: "0px",
      //       },
      //     },
      //     "& .MuiIconButton-root": {
      //       color: grey200,
      //       transform: "rotate(180deg)",
      //       "&.MuiAutocomplete-popupIndicatorOpen": {
      //         transform: "rotate(0deg)",
      //       },
      //     },
      //     "&:hover:not(.Mui-disabled, .Mui-error, .Mui-focused) .MuiOutlinedInput-notchedOutline":
      //       {
      //         borderColor: `${grey400} !important`,
      //       },
      //   },
      // },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "#mrt-rows-per-page": {
            margin: "0px 5px 0px 0px",
          },
          "& > .MuiBox-root": {
            "& > .MuiBox-root": {
              "& > .MuiBox-root": {
                width: "100%",
                "& > .MuiBox-root": {
                  width: "inherit",
                },
              },
            },
          },
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  };
};

export const listItemCommonStyles = (theme: Theme) => {
  return {
    ...(typography.body1 as object),
    color: theme.palette.grey[50],
    // backgroundColor: "inherit",
    // minHeight: "40px",
    // alignItems: "center",
    // "&.MuiListItem-dense, &.MuiListItemButton-dense": {
    //   ...(typography.body2 as object),
    //   minHeight: "36px",
    // },
    // "&.Mui-selected": {
    //   backgroundColor: PA_Colors.surface[500],
    //   color: theme.palette.primary.main,

    //   "&:hover": {
    //     backgroundColor: PA_Colors.surface.A400,
    //     color: theme.palette.primary.main,
    //   },
    // },
    // "&:hover": {
    //   backgroundColor: PA_Colors.surface.A400,
    //   color: theme.palette.primary.main,
    // },
    // "&:focus, &:focus-visible, &.Mui-focusVisible": {
    //   backgroundColor: PA_Colors.surface.A200,
    //   color: theme.palette.primary.main,
    // },

    // "&.Mui-disabled": {
    //   color: theme.palette.grey[200],
    //   backgroundColor: PA_Colors.surface[500],
    // },
  };
};

export const commonMixins = {
  toolbar: {
    minHeight: TOOLBAR_MINIMUM_HEIGHT,
    "@media (min-width:0px) and (orientation: landscape)": {
      minHeight: TOOLBAR_MINIMUM_HEIGHT,
    },
    "@media (min-width:600px)": {
      minHeight: TOOLBAR_MINIMUM_HEIGHT,
    },
  },
};

export const snackbarTopRightCommonStyles = {
  top: "76px",
  right: "24px",
};

export const commonCheckboxStyles = {
  padding: 0,
  borderRadius: 4,
  "& + *": {
    marginLeft: 8,
  },
};
