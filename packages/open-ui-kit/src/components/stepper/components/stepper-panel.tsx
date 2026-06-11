/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBackIOS, ArrowForwardIOS, Check } from "@/custom-icons";
import {
  stepperPanelActiveLineStyles,
  stepperPanelCollapseButtonStyles,
  stepperPanelCollapseWrapperStyles,
  stepperPanelContentStyles,
  stepperPanelFooterStyles,
  stepperPanelIndicatorStyles,
  stepperPanelMainStyles,
  stepperPanelRootStyles,
  stepperPanelSidebarStyles,
  stepperPanelStepContentStyles,
  stepperPanelStepNumberStyles,
  stepperPanelStepsStyles,
  stepperPanelStepStyles,
  stepperPanelStepSubtitleStyles,
  stepperPanelStepTitleStyles,
  stepperPanelStepTitleWrapperStyles,
} from "../styles";
import type { StepperPanelProps, StepperStepState } from "../types";

const getStepState = (
  index: number,
  activeStep: number,
  explicitState?: StepperStepState,
): StepperStepState => {
  if (explicitState) {
    return explicitState;
  }

  if (index < activeStep) {
    return "completed";
  }

  if (index === activeStep) {
    return "current";
  }

  return "idle";
};

export const StepperPanel = ({
  steps,
  activeStep,
  onStepClick,
  collapsed,
  defaultCollapsed = false,
  onCollapseClick,
  onCollapsedChange,
  collapseButtonAriaLabel,
  children,
  footer,
  sx,
}: StepperPanelProps) => {
  const [uncontrolledCollapsed, setUncontrolledCollapsed] =
    React.useState(defaultCollapsed);
  const isCollapsed = collapsed ?? uncontrolledCollapsed;
  const CollapseIcon = isCollapsed ? ArrowForwardIOS : ArrowBackIOS;
  const resolvedCollapseButtonAriaLabel =
    collapseButtonAriaLabel ??
    (isCollapsed ? "Expand stepper" : "Collapse stepper");

  const handleCollapseClick = (event: React.SyntheticEvent) => {
    const nextCollapsed = !isCollapsed;

    if (collapsed === undefined) {
      setUncontrolledCollapsed(nextCollapsed);
    }

    onCollapseClick?.(event);
    onCollapsedChange?.(nextCollapsed, event);
  };

  return (
    <Box
      sx={[
        stepperPanelRootStyles,
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <Box sx={(theme) => stepperPanelSidebarStyles(theme, isCollapsed)}>
        <Box sx={stepperPanelStepsStyles(isCollapsed)}>
          {steps.map((step, index) => {
            const state = getStepState(index, activeStep, step.state);
            const isDisabled = state === "disabled";
            const hasSubtitle = Boolean(step.subtitle);
            const stepClickProps =
              onStepClick && !isDisabled
                ? {
                    onClick: (event: React.SyntheticEvent) =>
                      onStepClick(index, event),
                    type: "button" as const,
                  }
                : {};

            return (
              <Box
                key={index}
                component={onStepClick ? "button" : "div"}
                {...stepClickProps}
                disabled={isDisabled ? true : undefined}
                sx={stepperPanelStepStyles(
                  Boolean(onStepClick),
                  isCollapsed,
                  isDisabled,
                  hasSubtitle,
                )}
              >
                <Box
                  sx={stepperPanelStepContentStyles(isCollapsed, hasSubtitle)}
                >
                  <Box
                    sx={(theme) => stepperPanelIndicatorStyles(theme, state)}
                  >
                    {state === "completed" ? (
                      <Check
                        sx={(theme) => ({
                          color:
                            theme.palette.vars.interactivePrimaryDefaultDefault,
                          fontSize: "16px",
                        })}
                      />
                    ) : (
                      <Typography
                        sx={(theme) =>
                          stepperPanelStepNumberStyles(theme, state)
                        }
                      >
                        {index + 1}
                      </Typography>
                    )}
                  </Box>

                  {!isCollapsed && (
                    <Box sx={stepperPanelStepTitleWrapperStyles(hasSubtitle)}>
                      <Typography
                        sx={(theme) =>
                          stepperPanelStepTitleStyles(theme, state)
                        }
                      >
                        {step.label}
                      </Typography>
                      {step.subtitle && (
                        <Typography
                          sx={(theme) =>
                            stepperPanelStepSubtitleStyles(theme, state)
                          }
                        >
                          {step.subtitle}
                        </Typography>
                      )}
                    </Box>
                  )}
                </Box>
                <Box
                  aria-hidden
                  sx={(theme) =>
                    stepperPanelActiveLineStyles(theme, state, hasSubtitle)
                  }
                />
              </Box>
            );
          })}
        </Box>

        <Box sx={stepperPanelCollapseWrapperStyles(isCollapsed)}>
          <IconButton
            aria-label={resolvedCollapseButtonAriaLabel}
            onClick={handleCollapseClick}
            sx={stepperPanelCollapseButtonStyles}
          >
            <CollapseIcon sx={{ fontSize: "20px" }} />
          </IconButton>
        </Box>
      </Box>

      <Box sx={stepperPanelMainStyles(isCollapsed)}>
        <Box sx={stepperPanelContentStyles(Boolean(footer), isCollapsed)}>
          {children}
        </Box>
        {footer && (
          <Box sx={(theme) => stepperPanelFooterStyles(theme, isCollapsed)}>
            {footer}
          </Box>
        )}
      </Box>
    </Box>
  );
};
