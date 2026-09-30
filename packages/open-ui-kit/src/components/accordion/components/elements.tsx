/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ComponentType } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  accordionSummaryClasses,
  styled,
  type AccordionDetailsProps,
  type AccordionProps as MuiAccordionProps,
  type AccordionSummaryProps as MuiAccordionSummaryProps,
  type BoxProps,
} from "@mui/material";

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== "variant" && prop !== "showBorder",
})<{ variant?: "default" | "contained" | "hover"; showBorder?: boolean }>(
  ({ theme, variant, showBorder }) => {
    const hasSurface = variant === "contained" || variant === "hover";
    return {
      padding: 0,
      color: theme.palette.vars.baseTextStrong,
      backgroundColor: "transparent",
      backgroundImage: "none",
      boxShadow: "none",
      "&::before": {
        display: "none",
      },
      "&.Mui-expanded": {
        marginTop: 0,
      },
      "&.Mui-disabled": {
        color: theme.palette.vars.baseTextDisabled,
        backgroundColor: "transparent",
      },
      ...(showBorder &&
        !hasSurface && {
          borderTop: `1px solid ${theme.palette.vars.controlBorderDefault}`,
        }),
      ...(!hasSurface && {
        "&:hover:not(.Mui-disabled)": {
          borderColor: theme.palette.vars.controlBorderHover,
        },
      }),
      ...(hasSurface && {
        border: "1px solid transparent",
        borderRadius: "8px !important",
        ...(variant === "contained" && {
          backgroundColor: theme.palette.vars.baseBackgroundWeak,
        }),
        "&:hover:not(.Mui-disabled)": {
          borderColor: theme.palette.vars.controlBorderHover,
        },
      }),
    };
  },
) as ComponentType<
  Omit<MuiAccordionProps, "variant"> & {
    variant?: "default" | "contained" | "hover";
    showBorder?: boolean;
  }
>;

export const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) =>
    prop !== "variant" && prop !== "arrowPosition" && prop !== "mediumSize",
})<{
  variant?: "default" | "contained" | "hover";
  arrowPosition?: "left" | "right";
  mediumSize?: boolean;
}>(({ theme, variant, arrowPosition, mediumSize }) => {
  const hasSurface = variant === "contained" || variant === "hover";
  return {
    minHeight: "unset",
    gap: "8px",
    padding: hasSurface ? "16px" : "4px",
    paddingTop: hasSurface ? "16px" : mediumSize ? "16px" : "4px",
    borderRadius: hasSurface ? "8px" : "4px",
    "&.Mui-expanded": {
      minHeight: "unset",
    },
    "@media (max-width: 600px)": {
      minHeight: "44px",
      "&.Mui-expanded": {
        minHeight: "44px",
      },
    },
    "&.Mui-focusVisible, &:focus-visible": {
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 2px ${theme.palette.vars.controlBorderActive}`,
    },
    [`& .${accordionSummaryClasses.content}`]: {
      alignItems: "center",
      display: "flex",
      gap: "16px",
      margin: 0,
      width: "100%",
      "&.Mui-expanded": {
        margin: 0,
      },
    },
    [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
      alignContent: "center",
      display: "flex",
      flexWrap: "wrap",
      height: "20px",
      justifyContent: "center",
      width: "20px",
      color: theme.palette.vars.controlIconDefault,
      "&.Mui-expanded": {
        transform: "rotate(90deg)",
      },
    },
    [`&:hover:not(.Mui-disabled) .${accordionSummaryClasses.expandIconWrapper}`]:
      {
        color: theme.palette.vars.controlIconStrong,
      },
    "&.Mui-disabled": {
      opacity: 1,
      color: theme.palette.vars.baseTextDisabled,
      [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
        color: theme.palette.vars.baseTextDisabled,
      },
    },
    ...(arrowPosition === "left" && {
      flexDirection: "row-reverse",
    }),
  };
}) as ComponentType<
  Omit<MuiAccordionSummaryProps, "variant"> & {
    variant?: "default" | "contained" | "hover";
    arrowPosition?: "left" | "right";
    mediumSize?: boolean;
  }
>;

export const StyledSummaryValue = styled(Box, {
  shouldForwardProp: (prop) => prop !== "hug",
})<{ hug?: boolean }>(({ hug }) => ({
  alignItems: "center",
  display: "flex",
  // With an action the design packs Title | Text | Action into one row, each
  // hugging its content with 16px gaps; they still shrink with ellipsis.
  flex: hug ? "0 1 auto" : 1,
  gap: "8px",
  minWidth: 0,
})) as ComponentType<BoxProps & { hug?: boolean }>;

export const StyledSummaryAction = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  flex: "0 0 auto",
  gap: "8px",
})) as ComponentType<BoxProps>;

export const StyledSummaryDivider = styled(Box)(({ theme }) => ({
  alignSelf: "center",
  borderLeft: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  height: "20px",
  width: 0,
})) as ComponentType<BoxProps>;

export const StyledAccordionDetails = styled(AccordionDetails, {
  shouldForwardProp: (prop) => prop !== "variant",
})<{ variant?: "default" | "contained" | "hover" }>(({ variant }) => {
  const hasSurface = variant === "contained" || variant === "hover";
  return {
    padding: hasSurface ? "0px 16px 16px" : "16px 0px 0px",
  };
}) as ComponentType<
  Omit<AccordionDetailsProps, "variant"> & {
    variant?: "default" | "contained" | "hover";
  }
>;

export const StyledAccordionContent = styled(Box)(() => ({
  width: "100%",
})) as ComponentType<BoxProps>;
