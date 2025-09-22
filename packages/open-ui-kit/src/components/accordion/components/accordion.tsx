/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight } from "@mui/icons-material";
import {
  Divider,
  Typography,
  AccordionProps as MuiAccordionProps,
  AccordionSummaryProps,
  BoxProps,
} from "@mui/material";
import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledBox,
} from "./elements";

export interface AccordionProps extends MuiAccordionProps {
  contained?: boolean;
  size?: "medium" | "large";
  arrowPosition?: "left" | "right";
  useDotsStyle?: boolean;
  title: string;
  subTitle?: string;
  accordionSummaryProps?: AccordionSummaryProps;
  detailsContentBoxProps?: BoxProps;
}

export const Accordion = ({
  contained = false,
  size = "large",
  arrowPosition = "left",
  useDotsStyle = false,
  title,
  subTitle,
  accordionSummaryProps,
  detailsContentBoxProps,
  children,
  ...props
}: AccordionProps) => {
  const textVariant = size === "large" ? "h6" : "body2Semibold";
  const mediumSize = size === "medium";

  return (
    <StyledAccordion {...props} mediumSize={mediumSize} contained={contained}>
      <StyledAccordionSummary
        aria-controls="panel-content"
        expandIcon={
          <ChevronRight
            sx={(theme) => ({ color: theme.palette.vars.controlIconDefault })}
          />
        }
        {...accordionSummaryProps}
        contained={contained}
        arrowPosition={arrowPosition}
        mediumSize={mediumSize}
      >
        <Typography
          variant={textVariant}
          width="50%"
          sx={(theme) => ({
            color:
              textVariant === "h6"
                ? theme.palette.vars.baseTextStrong
                : theme.palette.vars.baseTextDefault,
          })}
        >
          {title}
        </Typography>
        {mediumSize && !contained && (
          <Divider orientation="vertical" variant="fullWidth" flexItem />
        )}
        {subTitle && (
          <Typography
            variant={textVariant}
            sx={(theme) => ({
              color:
                textVariant === "h6"
                  ? theme.palette.vars.baseTextStrong
                  : theme.palette.vars.baseTextDefault,
            })}
          >
            {subTitle}
          </Typography>
        )}
      </StyledAccordionSummary>
      <StyledAccordionDetails contained={contained}>
        <StyledBox {...detailsContentBoxProps} useDotsStyle={useDotsStyle}>
          {children}
        </StyledBox>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
