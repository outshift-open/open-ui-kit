/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  styled,
} from "@mui/material";

export const StyledButton = styled(MuiButton)(({ theme }) => {
  return {
    color: theme.palette.vars.baseTextInverse,
    textTransform: "none",
    transition: "none",
    borderRadius: "4px",
    width: "max-content",
    maxWidth: "100%",
    whiteSpace: "normal",
    overflowWrap: "break-word",
    textAlign: "center",
    alignItems: "center",
    height: "auto",
    "& .MuiButton-startIcon": {
      marginLeft: "0px",
    },
    "& .MuiButton-endIcon": {
      marginRight: "0px",
    },
    "&.OuiButton-iconOnly": {
      "&.MuiButton-sizeLarge": {
        padding: "8px",
        minWidth: "40px",
        width: "40px",
        height: "40px",
        minHeight: "40px",
      },
      "&.MuiButton-sizeMedium": {
        padding: "6px",
        minWidth: "32px",
        width: "32px",
        height: "32px",
        minHeight: "32px",
      },
      "&.MuiButton-sizeSmall": {
        padding: "2px",
        minWidth: "24px",
        width: "24px",
        height: "24px",
        minHeight: "24px",
      },
    },
    "&.MuiButton-sizeLarge": {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "125%",
      minHeight: "40px",
      height: "auto",
      padding: "10px 16px",
    },
    "&.OuiButton-hasIcon.MuiButton-sizeLarge": {
      padding: "8px 16px",
    },
    "&.MuiButton-sizeMedium": {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "125%",
      minHeight: "32px",
      height: "auto",
      padding: "7px 16px",
    },
    "&.MuiButton-sizeSmall": {
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "125%",
      minHeight: "24px",
      height: "auto",
      padding: "3px 12px",
    },
    "&.MuiButton-sizeLarge svg": {
      fontSize: "24px",
    },
    "&.MuiButton-sizeMedium svg, &.MuiButton-sizeSmall svg": {
      fontSize: "20px",
    },
    "&.MuiButton-primarySizeLarge, &.MuiButton-primarySizeMedium": {
      paddingRight: "16px",
      paddingLeft: "16px",
      "&:active": {
        paddingRight: "15px",
        paddingLeft: "15px",
      },
    },
    "&.MuiButton-primarySizeSmall:active": {
      paddingRight: "11px",
      paddingLeft: "11px",
    },
    // Primary
    "&.MuiButton-primary": {
      background: theme.palette.vars.interactivePrimaryDefaultDefault,
      "&.Mui-disabled": {
        background: theme.palette.vars.interactivePrimaryDefaultDisabled,
        color: theme.palette.vars.interactivePrimaryWeakDefault,
        opacity: 0.35,
      },
      "&:hover": {
        background: theme.palette.vars.interactivePrimaryDefaultHover,
      },
      "&:active": {
        background: theme.palette.vars.interactivePrimaryDefaultActive,
        border: `1px solid ${theme.palette.vars.interactivePrimaryDefaultDefault}`,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.MuiButton-loading": {
        opacity: 1,
        background: theme.palette.vars.interactivePrimaryDefaultDefault,
      },
    },
    // Secondary
    "&.MuiButton-secondary": {
      background: theme.palette.vars.interactiveSecondaryDefaultDefault,
      "&.Mui-disabled": {
        background: theme.palette.vars.interactiveSecondaryDefaultDisabled,
        color: theme.palette.vars.interactiveInverseTextDefault,
        opacity: 0.35,
      },
      "&:hover": {
        background: theme.palette.vars.interactiveSecondaryDefaultHover,
      },
      "&:active": {
        background: theme.palette.vars.interactiveSecondaryDefaultActive,
        border: `1px solid ${theme.palette.vars.interactiveSecondaryDefaultDefault}`,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
        background: theme.palette.vars.interactiveSecondaryDefaultDefault,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        background: theme.palette.vars.interactiveSecondaryDefaultDefault,
      },
    },
    // Gradient — background fill
    // Figma: `Gradient/Global-Button-Primary/Fill` (274405:44106).
    // Figma specifies only the resting state; hover/active are derived by
    // brightness so the ramp stays intact in every theme that defines one.
    "&.MuiButton-gradient": {
      background: theme.palette.gradients.gradientGlobalButtonPrimaryFill,
      color: theme.palette.vars.baseTextStrong,
      border: "none",
      "&:hover": {
        background: theme.palette.gradients.gradientGlobalButtonPrimaryFill,
        filter: "brightness(1.08)",
      },
      "&:active": {
        background: theme.palette.gradients.gradientGlobalButtonPrimaryFill,
        filter: "brightness(0.92)",
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.Mui-disabled": {
        background: theme.palette.gradients.gradientGlobalButtonPrimaryFill,
        color: theme.palette.vars.baseTextStrong,
        opacity: 0.35,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        background: theme.palette.gradients.gradientGlobalButtonPrimaryFill,
        color: theme.palette.vars.baseTextStrong,
      },
    },
    // Gradient — icon-only ("Icon Button AI")
    // Figma: `Icon Button AI` (274421:47620), the `Button - Dictation` control.
    //
    // The icon-only form is its own design, not the text button scaled down:
    // a pill-round control filled with `Gradient/Icon-Button-Blue` rather than
    // the primary fill, ringed by `Gradient/Icon-Button-Blue-Glow`. Both
    // tokens already exist in the theme, so this adds no new gradient.
    //
    // It wins over the `.MuiButton-gradient` rules above on specificity (two
    // classes to their one), so ordering in this object does not matter, and
    // the nested states override their single-class counterparts the same way.
    "&.MuiButton-gradient.OuiButton-iconOnly": {
      position: "relative",
      background: theme.palette.gradients.gradientIconButtonBlue,
      // Figma uses a 58px radius on a 32px control — fully round at every size.
      borderRadius: "50%",
      border: "none",
      color: theme.palette.vars.baseTextStrong,
      // The ring is a gradient, so it cannot be a `border-color`; same
      // mask-composite technique as `gradientOutlined` below, at 1px.
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: "1px",
        background: theme.palette.gradients.gradientIconButtonBlueGlow,
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
      },
      "&:hover": {
        background: theme.palette.gradients.gradientIconButtonBlue,
        filter: "brightness(1.08)",
      },
      "&:active": {
        background: theme.palette.gradients.gradientIconButtonBlue,
        filter: "brightness(0.92)",
      },
      "&.Mui-disabled": {
        background: theme.palette.gradients.gradientIconButtonBlue,
        color: theme.palette.vars.baseTextStrong,
        opacity: 0.35,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        background: theme.palette.gradients.gradientIconButtonBlue,
        color: theme.palette.vars.baseTextStrong,
      },
    },
    // Outlined
    "&.MuiButton-outlined": {
      border: `2px solid ${theme.palette.vars.interactiveTertiaryDefault}`,
      background: "none",
      color: theme.palette.vars.interactiveTextInDefault,
      "&:hover": {
        border: `2px solid ${theme.palette.vars.interactiveTertiaryHover}`,
        color: theme.palette.vars.interactiveTextInHover,
      },
      "&:active": {
        border: `2px solid ${theme.palette.vars.interactiveTertiaryActive}`,
        color: theme.palette.vars.interactiveTextInActive,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.Mui-disabled": {
        border: `2px solid ${theme.palette.vars.interactiveTertiaryDisabled}`,
        color: theme.palette.vars.baseTextWeak,
        opacity: 0.3,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        border: `2px solid ${theme.palette.vars.interactiveTertiaryDefault}`,
        color: theme.palette.vars.interactiveTextInDefault,
      },
    },
    // Gradient — border ring
    // Figma: `Gradient/Global-Button-Primary/Border-Glow` (I274405:38087;25258:78851).
    //
    // A gradient cannot be assigned to `border-color`, and `border-image` ignores
    // `border-radius`. The mask-composite ring below keeps the interior genuinely
    // transparent (so it works on any surface) and follows the rounded corners.
    "&.MuiButton-gradientOutlined": {
      position: "relative",
      border: "none",
      background: "none",
      color: theme.palette.vars.baseTextDefault,
      "&::before": {
        content: '""',
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        padding: "2px",
        background:
          theme.palette.gradients.gradientGlobalButtonPrimaryBorderGlow,
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        pointerEvents: "none",
      },
      "&:hover": {
        color: theme.palette.vars.baseTextStrong,
        "&::before": { filter: "brightness(1.12)" },
      },
      "&:active": {
        color: theme.palette.vars.baseTextStrong,
        "&::before": { filter: "brightness(0.9)" },
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.Mui-disabled": {
        color: theme.palette.vars.baseTextWeak,
        opacity: 0.3,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        color: theme.palette.vars.baseTextDefault,
      },
    },
    // Tertiary
    "&.MuiButton-tertariary": {
      background: "none",
      color: theme.palette.vars.interactivePrimaryDefaultDefault,
      "&:hover": {
        color: theme.palette.vars.interactivePrimaryDefaultHover,
      },
      "&:active": {
        color: theme.palette.vars.interactivePrimaryDefaultActive,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.Mui-disabled": {
        color: theme.palette.vars.interactivePrimaryDefaultDisabled,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
      },
    },
    // Negative color — primary
    "&.MuiButton-primaryNegative": {
      background: theme.palette.vars.negativeBackgroundDefault,
      "&.Mui-disabled": {
        opacity: 0.35,
        background: theme.palette.vars.negativeBackgroundDisabled,
        color: theme.palette.vars.negativeTextInDefault,
      },
      "&:hover": {
        color: theme.palette.vars.baseTextInverse,
        background: theme.palette.vars.negativeBackgroundHover,
      },
      "&:active": {
        background: theme.palette.vars.negativeBackgroundActive,
        border: `1px solid ${theme.palette.vars.negativeBorderDefault}`,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.MuiButton-loading": {
        opacity: 1,
        color: theme.palette.vars.baseTextInverse,
        background: theme.palette.vars.negativeBackgroundDefault,
      },
    },
    // Negative color — outlined
    "&.MuiButton-outlinedNegative": {
      border: `2px solid ${theme.palette.vars.negativeBorderDefault}`,
      background: "none",
      color: theme.palette.vars.negativeBackgroundActive,
      "&:hover": {
        border: `2px solid ${theme.palette.vars.negativeBackgroundHover}`,
        color: theme.palette.vars.negativeBackgroundHover,
      },
      "&:active": {
        border: `2px solid ${theme.palette.vars.negativeBackgroundActive}`,
        color: theme.palette.vars.negativeBackgroundActive,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
        color: theme.palette.vars.negativeBackgroundActive,
        border: `2px solid ${theme.palette.vars.negativeBackgroundActive}`,
      },
      "&.Mui-disabled": {
        border: `2px solid ${theme.palette.vars.negativeBackgroundDisabled}`,
        color: theme.palette.vars.negativeBackgroundDisabled,
        opacity: 0.35,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        border: `2px solid ${theme.palette.vars.negativeBorderDefault}`,
        color: theme.palette.vars.negativeBackgroundActive,
      },
    },
    // Negative color — tertiary
    "&.MuiButton-tertariaryNegative": {
      background: "none",
      color: theme.palette.vars.negativeTextDefault,
      "&:hover": {
        color: theme.palette.vars.negativeBackgroundHover,
      },
      "&:active": {
        color: theme.palette.vars.negativeBackgroundActive,
      },
      "&:focus-visible": {
        outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
        outlineOffset: "2px",
      },
      "&.Mui-disabled": {
        color: theme.palette.vars.negativeBackgroundDisabled,
      },
      "&.MuiButton-loading": {
        opacity: 1,
        color: theme.palette.vars.negativeTextDefault,
      },
    },
  };
}) as ComponentType<MuiButtonProps>;
