/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography } from "@mui/material";
import { KeyboardArrowRight } from "@/custom-icons";
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
  variant,
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
  showBorder,
  accordionSummaryProps,
  detailsContentBoxProps,
  children,
  ...props
}: AccordionProps) => {
  const resolvedVariant = variant ?? (contained ? "contained" : "default");
  const isContained = resolvedVariant === "contained";
  const isHover = resolvedVariant === "hover";
  const hasSurface = isContained || isHover;
  const textVariant = size === "large" ? "h6" : "body2Semibold";
  const summaryTextLineHeight = size === "large" ? "24px" : "20px";
  const mediumSize = size === "medium";
  const shouldShowDivider = showDivider ?? (mediumSize && !hasSurface);
  const shouldShowBorder = showBorder ?? (mediumSize && !hasSurface);

  return (
    <StyledAccordion
      {...props}
      showBorder={shouldShowBorder}
      variant={resolvedVariant}
    >
      <StyledAccordionSummary
        aria-controls="panel-content"
        disableRipple
        expandIcon={<KeyboardArrowRight fontSize="small" />}
        {...accordionSummaryProps}
        variant={resolvedVariant}
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
              lineHeight: summaryTextLineHeight,
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
                  lineHeight: summaryTextLineHeight,
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
      <StyledAccordionDetails variant={resolvedVariant}>
        <StyledAccordionContent {...detailsContentBoxProps}>
          {children}
        </StyledAccordionContent>
      </StyledAccordionDetails>
    </StyledAccordion>
  );
};
