/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActivityTimelineDot } from "./activity-timeline-dot";
import type { ActivityTimelineProps } from "../types";
import { ActivityTimelineStepStatus } from "../types";
import { setStepColor } from "../utils/utils";
import { useCallback } from "react";
import { Typography, useTheme } from "@mui/material";
import { Accordion } from "@/components/accordion";
import {
  StyledTimeline,
  StyledTimelineConnector,
  StyledTimelineContent,
  StyledTimelineItem,
  StyledTimelineSeparator,
} from "./elements";

export const ActivityTimeline = ({
  automaticProgress = false,
  size = "large",
  steps,
  ...props
}: ActivityTimelineProps) => {
  const theme = useTheme();
  const isMedium = size === "medium";

  const setPercent = useCallback(
    (stepIdx: number): number => {
      if (steps.length <= 1) {
        return 100;
      }

      const percent = Math.round((stepIdx / (steps.length - 1)) * 100);
      return percent > 100 ? 100 : percent;
    },
    [steps.length],
  );

  return (
    <StyledTimeline
      {...props}
      sx={[
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
      ]}
    >
      {steps.map((step, index) => (
        <StyledTimelineItem key={index}>
          <StyledTimelineSeparator>
            <ActivityTimelineDot
              automaticProgress={automaticProgress}
              status={step.status}
              {...(automaticProgress && { percent: setPercent(index) })}
            />
            {index < steps.length - 1 && (
              <StyledTimelineConnector
                lineColor={setStepColor(
                  automaticProgress
                    ? ActivityTimelineStepStatus.InProgress
                    : step.status,
                  theme,
                )}
              />
            )}
          </StyledTimelineSeparator>
          <StyledTimelineContent mediumSize={isMedium}>
            {step.content ? (
              <Accordion
                defaultExpanded={step.defaultExpanded}
                title={step.title}
                titleStartIcon={step.titleStartIcon}
                subTitle={step.subTitle}
                size={size}
              >
                {step.content}
              </Accordion>
            ) : (
              <Typography
                variant={isMedium ? "body2Semibold" : "h6"}
                sx={[
                  {
                    alignItems: "center",
                    color: isMedium
                      ? theme.palette.vars?.controlIconDefault
                      : theme.palette.vars?.baseTextStrong,
                    display: "flex",
                    gap: "8px",
                  },
                ]}
              >
                {step.titleStartIcon}
                {step.title}
              </Typography>
            )}
          </StyledTimelineContent>
        </StyledTimelineItem>
      ))}
    </StyledTimeline>
  );
};
