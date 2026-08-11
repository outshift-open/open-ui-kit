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
  StyledGradientTimeline,
  StyledTimeline,
  StyledTimelineConnector,
  StyledTimelineContent,
  StyledTimelineItem,
  StyledTimelineOppositeContent,
  StyledTimelineSeparator,
  StyledTimelineTimeContent,
} from "./elements";

// Only the oldest two events dim, newest first: Figma holds every step above
// them at full strength (274455:53836 at 50%, 274455:53840 at 30%).
const OLDEST_STEP_OPACITY = [0.3, 0.5];

export const ActivityTimeline = ({
  automaticProgress = false,
  size = "large",
  variant = "default",
  steps,
  ...props
}: ActivityTimelineProps) => {
  const theme = useTheme();
  const isMedium = size === "medium";

  // Older steps fade down the list.
  const stepOpacity = useCallback(
    (stepIdx: number): number => {
      const fromOldest = steps.length - 1 - stepIdx;
      // The newest step stays solid however short the list is.
      if (stepIdx === 0 || fromOldest >= OLDEST_STEP_OPACITY.length) {
        return 1;
      }
      return OLDEST_STEP_OPACITY[fromOldest];
    },
    [steps.length],
  );

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

  if (variant === "gradient") {
    return (
      <StyledGradientTimeline
        {...props}
        showRail={steps.length > 1}
        sx={[
          ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
        ]}
      >
        {steps.map((step, index) => (
          // Fade each slot, not the item, so the rail keeps its own ramp.
          <StyledTimelineItem key={index}>
            <StyledTimelineOppositeContent sx={{ opacity: stepOpacity(index) }}>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.vars?.baseTextDefault,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {step.titleStartIcon}
                {step.title}
              </Typography>
            </StyledTimelineOppositeContent>
            <StyledTimelineSeparator>
              <ActivityTimelineDot
                glow
                status={step.status}
                sx={{ opacity: stepOpacity(index) }}
              />
            </StyledTimelineSeparator>
            <StyledTimelineTimeContent sx={{ opacity: stepOpacity(index) }}>
              {step.time && (
                <Typography
                  variant="captionSemibold"
                  sx={{ color: theme.palette.vars?.controlIconDefault }}
                >
                  {step.time}
                </Typography>
              )}
            </StyledTimelineTimeContent>
          </StyledTimelineItem>
        ))}
      </StyledGradientTimeline>
    );
  }

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
                // The timeline supplies its own separators, so the medium
                // accordion's top border and summary divider are redundant here.
                showBorder={false}
                showDivider={false}
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
