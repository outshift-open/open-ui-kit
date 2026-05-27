/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  accordionSummaryClasses,
  styled,
  Box,
  type AccordionDetailsProps,
  type AccordionProps,
  type AccordionSummaryProps,
  type BoxProps,
} from "@mui/material";
import { lightBlue900 } from "@/theme/style/color-palette";
import type { ComponentType } from "react";

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== "contained" && prop !== "mediumSize",
})<{ contained?: boolean; mediumSize?: boolean }>(
  ({ theme, contained, mediumSize }) => ({
    padding: 0,
    background: "transparent",
    boxShadow: "none",
    color: theme.palette.vars.baseTextStrong,
    "&::before": {
      display: "none",
    },
    "&.Mui-expanded": {
      marginTop: 0,
    },
    "&.Mui-disabled": {
      background: "transparent",
      color: theme.palette.vars.baseTextDisabled,
    },
    ...(mediumSize &&
      !contained && {
        borderTop: `1px solid ${theme.palette.vars.controlBorderDefault}`,
      }),
    ...(contained && {
      backgroundColor: theme.palette.vars.baseBackgroundWeak,
      borderRadius: "8px !important",
      border: `1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.vars.baseBorderStrong
          : "transparent"
      }`,
      "&:hover": {
        border: `1px solid ${theme.palette.vars.controlBorderHover}`,
      },
      "&.Mui-disabled": {
        backgroundColor: theme.palette.vars.baseBackgroundMedium,
        border: "1px solid transparent",
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
  padding: "0px",
  minHeight: "unset",
  gap: "8px",
  "&.Mui-expanded": {
    minHeight: "unset",
  },
  "&:focus-visible": {
    backgroundColor: contained
      ? theme.palette.vars.baseBackgroundMedium
      : "transparent",
    borderRadius: "4px",
    outline: `2px solid ${lightBlue900}`,
    outlineOffset: "2px",
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    margin: 0,
    gap: "16px",
    "&.Mui-expanded": {
      margin: 0,
    },
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    height: "20px",
    width: "20px",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexWrap: "wrap",
  },
  paddingTop: mediumSize ? "16px" : "0px",
  ...(contained && {
    padding: "16px",
    cursor: "pointer",
  }),
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

export const StyledAccordionDetails = styled(AccordionDetails, {
  shouldForwardProp: (prop) => prop !== "contained",
})<{ contained?: boolean }>(({ contained }) => ({
  padding: "16px 0px 0px",
  ...(contained && {
    padding: "0px 16px 16px",
  }),
})) as ComponentType<AccordionDetailsProps & { contained?: boolean }>;

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "useDotsStyle",
})<{ useDotsStyle?: boolean }>(({ useDotsStyle }) => ({
  ...(useDotsStyle && {
    background: "#9747FF0A",
    border: "1px dotted #9747FF",
    borderRadius: "2px",
  }),
})) as ComponentType<BoxProps & { useDotsStyle?: boolean }>;
