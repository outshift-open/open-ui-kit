/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  Box,
} from "@mui/material";

export const StyledAccordion = styled(Accordion, {
  shouldForwardProp: (prop) => prop !== "contained" && prop !== "mediumSize",
  name: "StyledAccordion",
  slot: "Root",
  overridesResolver: (props, styles) => [
    styles.root,
    props.contained && styles.contained,
    props.mediumSize && styles.mediumSize,
  ],
})<{ contained?: boolean; mediumSize?: boolean }>(
  ({ theme, contained, mediumSize }) => ({
    ...(mediumSize &&
      !contained && {
        borderTop: `1px solid ${theme.palette.divider}`,
      }),
    ...(contained && {
      backgroundColor: theme.palette.vars.baseBackgroundMedium,
      borderRadius: "8px !important",
      ":hover": {
        backgroundColor: theme.palette.vars.baseBackgroundHover,
      },
    }),
  }),
);

export const StyledAccordionSummary = styled(AccordionSummary)<{
  contained?: boolean;
  arrowPosition?: "left" | "right";
  mediumSize?: boolean;
}>(({ contained, arrowPosition, mediumSize }) => ({
  paddingTop: mediumSize ? "16px" : "0px",
  ...(mediumSize && {
    paddingLeft: "2px",
    paddingRight: "2px",
  }),
  ...(contained && {
    padding: "16px",
    cursor: "pointer",
  }),
  ...(arrowPosition === "left" && {
    flexDirection: "row-reverse",
    gap: "8px",
  }),
}));

export const StyledAccordionDetails = styled(AccordionDetails, {
  shouldForwardProp: (prop) => prop !== "contained",
})<{ contained?: boolean }>(({ contained }) => ({
  paddingTop: "16px",
  ...(contained && {
    padding: "16px",
  }),
}));

export const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "useDotsStyle",
})<{ useDotsStyle?: boolean }>(({ useDotsStyle }) => ({
  ...(useDotsStyle && {
    background: "#9747FF0A",
    border: "1px dotted #9747FF",
    borderRadius: "2px",
  }),
}));
