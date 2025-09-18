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
import { Accordion } from "@/components";

export interface ActivityTimelineProps
  extends Omit<MuiTimelineProps, "children" | "ref"> {
  automaticProgress?: boolean;
  steps: ActivityTimelineStep[];
}

export const ActivityTimeline = ({
  automaticProgress = false,
  steps,
  ...props
}: ActivityTimelineProps) => {
  const theme = useTheme();

  const setPercent = useCallback(
    (stepIdx: number): number => {
      const percent = Math.round((stepIdx / (steps.length - 1)) * 100);
      return percent > 100 ? 100 : percent;
    },
    [steps.length],
  );

  return (
    <MuiTimeline {...props}>
      {steps.map((step, index) => (
        <MuiTimelineItem key={index}>
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
            sx={{ padding: "0px 16px", paddingBottom: "24px" }}
          >
            {step.content ? (
              <Accordion title={step.title} subTitle={step.subTitle}>
                {step.content}
              </Accordion>
            ) : (
              <Typography variant="h6">{step.title}</Typography>
            )}
          </MuiTimelineContent>
        </MuiTimelineItem>
      ))}
    </MuiTimeline>
  );
};
