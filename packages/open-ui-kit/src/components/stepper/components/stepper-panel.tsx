/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { StepperPanelProps } from "../types";

export const StepperPanel = ({
  steps,
  activeStep,
  onStepClick,
  children,
  footer,
  sx,
}: StepperPanelProps) => {
  return (
    <Box
      sx={[
        (theme) => ({
          display: "flex",
          flexDirection: "row",
          borderRadius: "12px",
          backgroundColor: theme.palette.vars.controlBackgroundDefault,
          boxShadow: theme.shadows[2],
          overflow: "hidden",
        }),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      {/* Sidebar */}
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "320px",
          flexShrink: 0,
          padding: "24px 0 7px 0",
          borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
          borderRadius: "12px 0 0 12px",
          backgroundColor: theme.palette.vars.controlBackgroundDefault,
        })}
      >
        {/* Steps list */}
        <Stack spacing={0}>
          {steps.map((step, index) => {
            const isActive = index === activeStep;
            const isCompleted = index < activeStep;

            return (
              <Box
                key={index}
                component={onStepClick ? "button" : "div"}
                onClick={
                  onStepClick
                    ? (e: React.SyntheticEvent) => onStepClick(index, e)
                    : undefined
                }
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  padding: 0,
                  cursor: onStepClick ? "pointer" : "default",
                  background: "none",
                  border: "none",
                  width: "100%",
                  textAlign: "left",
                }}
              >
                {/* Active line bar */}
                <Box
                  sx={(theme) => ({
                    width: "3px",
                    alignSelf: "stretch",
                    flexShrink: 0,
                    backgroundColor: isActive
                      ? theme.palette.vars.interactivePrimaryDefaultDefault
                      : "transparent",
                    borderRadius: "2px",
                  })}
                />

                {/* Content */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    padding: "8px 0 8px 24px",
                    gap: "12px",
                    flex: 1,
                  }}
                >
                  {/* Indicator circle */}
                  <Box
                    sx={(theme) => ({
                      width: "28px",
                      height: "28px",
                      borderRadius: "20px",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ...(isActive || isCompleted
                        ? {
                            backgroundColor:
                              theme.palette.vars
                                .interactivePrimaryDefaultDefault,
                          }
                        : {
                            border: `2px solid ${theme.palette.vars.controlBorderWeak}`,
                            backgroundColor: "transparent",
                          }),
                    })}
                  >
                    <Typography
                      sx={(theme) => ({
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        textAlign: "center",
                        color:
                          isActive || isCompleted
                            ? theme.palette.vars.baseTextInverse
                            : theme.palette.vars.baseTextDisabled,
                      })}
                    >
                      {index + 1}
                    </Typography>
                  </Box>

                  {/* Step title */}
                  <Box sx={{ paddingTop: "4px", flex: 1 }}>
                    <Typography
                      sx={(theme) => ({
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color:
                          isActive || isCompleted
                            ? theme.palette.vars
                                .interactivePrimaryDefaultDefault
                            : theme.palette.vars.baseTextDisabled,
                      })}
                    >
                      {step.label}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>

      {/* Main content area */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minWidth: 0,
        }}
      >
        <Box sx={{ flex: 1, padding: "24px" }}>{children}</Box>
        {footer && (
          <Box
            sx={(theme) => ({
              padding: "16px 24px",
              borderTop: `1px solid ${theme.palette.vars.controlBorderDefault}`,
            })}
          >
            {footer}
          </Box>
        )}
      </Box>
    </Box>
  );
};
