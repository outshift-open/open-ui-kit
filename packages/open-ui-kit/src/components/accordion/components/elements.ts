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
