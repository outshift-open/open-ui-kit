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
      borderColor: theme.palette.vars.controlBorderNegative,
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

    "@media (max-width: 600px)": {
      height: "44px",

      "&.MuiInputBase-sizeSmall": {
        height: "44px",
      },

      "&.MuiInputBase-multiline": {
        minHeight: "44px",
      },
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
    color: theme.palette.vars.baseTextWeak,

    "&.Mui-disabled": {
      color: theme.palette.vars.baseTextDisabled,
    },

    "&:not(.Mui-disabled).Mui-error": {
      color: theme.palette.vars.baseTextWeak,
    },
  },
});

/**
 * Glow treatment: gradient border — Figma `Input Field` (274417:44475).
 *
 * A pill-shaped prompt field edged with `Gradient/Input-Border-Blue`, whose
 * swatch reads "DARK original: FFFFFF -> 0A60FF". The token is new to the
 * theme but introduces no new colour — both stops already existed.
 *
 * The ramp cannot be a `border-color`, so the border is drawn as a 1px
 * mask-composite ring on the input root, matching how the other gradient
 * borders in the kit are built. No `overflow: hidden`, which would thin the
 * ring's arcs — and at this radius the arcs are most of the outline.
 *
 * Keyed on `&&` rather than `&` so it layers over `getInputFieldStyles`
 * instead of replacing its `.MuiInput-root` block: the two objects are spread
 * together, and a matching key would drop the base field's typography, height
 * and underline resets wholesale.
 */
export const getInputFieldGlowStyles = (theme: Theme): CSSObject => ({
  "&& .MuiInput-root": {
    position: "relative",
    border: "none",
    // Figma's 40px radius on a 40px-tall field — a full pill.
    borderRadius: "40px",
    padding: "8px 16px",
    backgroundColor: "transparent",

    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      padding: "1px",
      background: theme.palette.gradients.gradientInputBorderBlue,
      WebkitMask:
        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
      WebkitMaskComposite: "xor",
      maskComposite: "exclude",
      pointerEvents: "none",
      // MUI's underline pseudo-elements are already neutralised above; this
      // one is the ring, so it must not be caught by those resets.
      borderBottom: "0 !important",
      transform: "none !important",
      zIndex: 0,
    },

    // The field keeps its ring on hover and focus rather than swapping to the
    // control border tokens the standard field uses.
    "&:hover, &.Mui-focused": {
      border: "none",
    },
  },
});

export const getStoryFocusedSx = (theme: Theme) =>
  ({
    "& .MuiInput-root": {
      borderColor: theme.palette.vars.controlBorderActive,
    },
  }) satisfies SxProps<Theme>;

export const getStoryHoverSx = (theme: Theme) =>
  ({
    "& .MuiInput-root": {
      borderColor: theme.palette.vars.controlBorderHover,
    },
  }) satisfies SxProps<Theme>;

export const getStoryNegativeSx = (theme: Theme) =>
  ({
    "& .MuiInput-root": {
      borderColor: theme.palette.vars.controlBorderNegative,
    },
  }) satisfies SxProps<Theme>;
