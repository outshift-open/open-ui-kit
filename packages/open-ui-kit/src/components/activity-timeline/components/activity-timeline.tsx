/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Timeline as MuiTimeline,
  TimelineProps as MuiTimelineProps,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator as MuiTimelineSeparator,
  TimelineConnector as MuiTimelineConnector,
  TimelineContent as MuiTimelineContent,
} from "@mui/lab";
import { ActivityTimelineDot } from "./activity-timeline-dot";
import { ActivityTimelineStep, ActivityTimelineStepStatus } from "../types";
import { setStepColor } from "../utils/utils";
import { useCallback } from "react";
import { Typography, useTheme } from "@mui/material";
import { Accordion } from "@/components/accordion";

export interface ActivityTimelineProps
  extends Omit<MuiTimelineProps, "children" | "ref"> {
  automaticProgress?: boolean;
  size?: "large" | "medium";
  steps: ActivityTimelineStep[];
}

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
      const percent = Math.round((stepIdx / (steps.length - 1)) * 100);
      return percent > 100 ? 100 : percent;
    },
    [steps.length],
  );

  return (
    <MuiTimeline
      {...props}
      sx={[
        { padding: 0, margin: 0 },
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
      ]}
    >
      {steps.map((step, index) => (
        <MuiTimelineItem key={index} sx={{ "&::before": { display: "none" } }}>
          <MuiTimelineSeparator sx={{ marginTop: "2px" }}>
            <ActivityTimelineDot
              automaticProgress={automaticProgress}
              status={step.status}
              {...(automaticProgress && { percent: setPercent(index) })}
            />
            {index < steps.length - 1 && (
              <MuiTimelineConnector
                sx={{
                  backgroundColor: setStepColor(
                    automaticProgress
                      ? ActivityTimelineStepStatus.InProgress
                      : step.status,
                    theme,
                  ),
                }}
              />
            )}
          </MuiTimelineSeparator>
          <MuiTimelineContent
            sx={{
              padding: "0px 0px 24px 16px",
              gap: isMedium ? "10px" : "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {step.content ? (
              <Accordion
                title={step.title}
                subTitle={step.subTitle}
                size={size}
              >
                {step.content}
              </Accordion>
            ) : (
              <Typography
                variant={isMedium ? "body2Semibold" : "h6"}
                sx={{
                  color: isMedium
                    ? theme.palette.vars?.controlIconDefault
                    : theme.palette.vars?.baseTextStrong,
                }}
              >
                {step.title}
              </Typography>
            )}
          </MuiTimelineContent>
        </MuiTimelineItem>
      ))}
    </MuiTimeline>
  );
};
