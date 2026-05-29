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
  type AccordionProps,
  type AccordionSummaryProps,
  type BoxProps,
} from "@mui/material";

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== "contained" && prop !== "mediumSize",
})<{ contained?: boolean; mediumSize?: boolean }>(
  ({ theme, contained, mediumSize }) => ({
    padding: 0,
    color: theme.palette.vars.baseTextStrong,
    backgroundColor: "transparent",
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
    ...(mediumSize &&
      !contained && {
        borderTop: `1px solid ${theme.palette.vars.controlBorderDefault}`,
      }),
    ...(contained && {
      backgroundColor: theme.palette.vars.baseBackgroundWeak,
      border: "1px solid transparent",
      borderRadius: "8px !important",
      "&:hover:not(.Mui-disabled)": {
        borderColor: theme.palette.vars.controlBorderHover,
      },
      "&.Mui-disabled": {
        backgroundColor: theme.palette.vars.baseBackgroundMedium,
        borderColor: "transparent",
      },
    }),
  }),
) as ComponentType<
  AccordionProps & { contained?: boolean; mediumSize?: boolean }
>;

export const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (prop) =>
    prop !== "contained" && prop !== "arrowPosition" && prop !== "mediumSize",
})<{
  contained?: boolean;
  arrowPosition?: "left" | "right";
  mediumSize?: boolean;
}>(({ theme, contained, arrowPosition, mediumSize }) => ({
  minHeight: "unset",
  gap: "8px",
  padding: contained ? "16px" : "0px",
  paddingTop: contained ? "16px" : mediumSize ? "16px" : "0px",
  borderRadius: contained ? "8px" : "4px",
  "&.Mui-expanded": {
    minHeight: "unset",
  },
  "&.Mui-focusVisible, &:focus-visible": {
    backgroundColor: contained
      ? theme.palette.vars.baseBackgroundWeak
      : "transparent",
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
})) as ComponentType<
  AccordionSummaryProps & {
    contained?: boolean;
    arrowPosition?: "left" | "right";
    mediumSize?: boolean;
  }
>;

export const StyledSummaryValue = styled(Box)(() => ({
  alignItems: "center",
  display: "flex",
  flex: 1,
  gap: "8px",
  minWidth: 0,
})) as ComponentType<BoxProps>;

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
  shouldForwardProp: (prop) => prop !== "contained",
})<{ contained?: boolean }>(({ contained }) => ({
  padding: contained ? "0px 16px 16px" : "16px 0px 0px",
})) as ComponentType<AccordionDetailsProps & { contained?: boolean }>;

export const StyledAccordionContent = styled(Box)(() => ({
  width: "100%",
})) as ComponentType<BoxProps>;
