/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight } from "@mui/icons-material";
import { Typography } from "@mui/material";
import type { AccordionProps } from "../types";
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledSummaryAction,
  StyledSummaryDivider,
  StyledSummaryValue,
} from "./elements";

export const Accordion = ({
  contained = false,
  size = "large",
  arrowPosition = "left",
  title,
  subTitle,
  titleStartIcon,
  titleEndIcon,
  titleSlot,
  subTitleStartIcon,
  subTitleEndIcon,
  subTitleSlot,
  action,
  endSlot,
  showDivider,
  accordionSummaryProps,
  detailsContentBoxProps,
  children,
  ...props
}: AccordionProps) => {
  const textVariant = size === "large" ? "h6" : "body2Semibold";
  const mediumSize = size === "medium";
  const shouldShowDivider = showDivider ?? (mediumSize && !contained);

  return (
    <StyledAccordion {...props} mediumSize={mediumSize} contained={contained}>
      <StyledAccordionSummary
        aria-controls="panel-content"
        expandIcon={<ChevronRight fontSize="small" />}
        {...accordionSummaryProps}
        contained={contained}
        arrowPosition={arrowPosition}
        mediumSize={mediumSize}
      >
        <StyledSummaryValue>
          {titleStartIcon}
          <Typography
            variant={textVariant}
            noWrap
            sx={(theme) => ({
              color:
                textVariant === "h6"
                  ? theme.palette.vars.baseTextStrong
                  : theme.palette.vars.baseTextDefault,
              ".Mui-disabled &": {
                color: theme.palette.vars.baseTextDisabled,
              },
            })}
          >
            {title}
          </Typography>
          {titleSlot}
          {titleEndIcon}
        </StyledSummaryValue>
        {shouldShowDivider && <StyledSummaryDivider aria-hidden />}
        {(subTitle || subTitleStartIcon || subTitleEndIcon || subTitleSlot) && (
          <StyledSummaryValue>
            {subTitleStartIcon}
            {subTitle && (
              <Typography
                variant={textVariant}
                noWrap
                sx={(theme) => ({
                  color:
                    textVariant === "h6"
                      ? theme.palette.vars.baseTextStrong
                      : theme.palette.vars.baseTextDefault,
                  ".Mui-disabled &": {
                    color: theme.palette.vars.baseTextDisabled,
                  },
                })}
              >
                {subTitle}
              </Typography>
            )}
            {subTitleSlot}
            {subTitleEndIcon}
          </StyledSummaryValue>
        )}
        {(action || endSlot) && (
          <StyledSummaryAction>
            {action}
            {endSlot}
          </StyledSummaryAction>
        )}
      </StyledAccordionSummary>
      <StyledAccordionDetails contained={contained}>
        <StyledAccordionContent {...detailsContentBoxProps}>
          {children}
        </StyledAccordionContent>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
