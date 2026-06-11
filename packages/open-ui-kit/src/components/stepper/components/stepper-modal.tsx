/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { Dialog } from "@/components/dialog";
import { Check } from "@/custom-icons";
import {
  steppedModalBodyTextStyles,
  steppedModalConnectorStyles,
  steppedModalContentStyles,
  steppedModalFooterStyles,
  steppedModalHeaderStyles,
  steppedModalIndicatorStyles,
  steppedModalIndicatorTextStyles,
  steppedModalRootStyles,
  steppedModalStepLabelStyles,
  steppedModalStepSeriesStyles,
  steppedModalStepStyles,
  steppedModalSubtitleStyles,
  steppedModalTitleStyles,
} from "../styles";
import type { StepperModalProps, StepperStepState } from "../types";

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

export const StepperModal = ({
  title,
  subtitle,
  steps,
  activeStep,
  description,
  children,
  footer,
  paperProps,
  sx,
  ...dialogProps
}: StepperModalProps) => {
  const { sx: paperSx, ...restPaperProps } = paperProps ?? {};
  const { maxWidth = false, ...restDialogProps } = dialogProps;

  return (
    <Dialog
      {...restDialogProps}
      maxWidth={maxWidth}
      PaperProps={{
        ...restPaperProps,
        sx: [
          steppedModalRootStyles,
          ...(Array.isArray(paperSx) ? paperSx : paperSx ? [paperSx] : []),
          ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
        ],
      }}
    >
      <Box sx={steppedModalHeaderStyles}>
        <Typography sx={steppedModalTitleStyles}>{title}</Typography>
        {subtitle && (
          <Typography sx={steppedModalSubtitleStyles}>{subtitle}</Typography>
        )}
      </Box>
      <Box sx={steppedModalContentStyles}>
        <Box sx={steppedModalStepSeriesStyles}>
          {steps.map((step, index) => {
            const state = getStepState(index, activeStep, step.state);

            return (
              <Fragment key={`${step.label}-${index}`}>
                <Box sx={steppedModalStepStyles}>
                  <Box
                    sx={(theme) => steppedModalIndicatorStyles(theme, state)}
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
                          steppedModalIndicatorTextStyles(theme, state)
                        }
                      >
                        {index + 1}
                      </Typography>
                    )}
                  </Box>
                  <Typography
                    sx={(theme) => steppedModalStepLabelStyles(theme, state)}
                  >
                    {step.label}
                  </Typography>
                </Box>
                {index < steps.length - 1 && (
                  <Box
                    aria-hidden
                    sx={(theme) =>
                      steppedModalConnectorStyles(theme, index < activeStep)
                    }
                  />
                )}
              </Fragment>
            );
          })}
        </Box>
        {description && (
          <Typography sx={steppedModalBodyTextStyles}>{description}</Typography>
        )}
        {children}
      </Box>
      {footer && <Box sx={steppedModalFooterStyles}>{footer}</Box>}
    </Dialog>
  );
};
