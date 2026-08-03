/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { Box, CircularProgress, useTheme, type BoxProps } from "@mui/material";
import { ActivityTimelineStepStatus } from "../types";
import { getActivityTimelineDotStyle } from "../styles";
import { getStepDotColor, getStepGlow } from "../utils/utils";
import { StyledTimelineDotRoot } from "./elements";

export interface ActivityTimelineDotProps extends BoxProps {
  /** Uses percent-driven progress rendering instead of status icons. */
  automaticProgress?: boolean;
  /** Progress percentage used by automatic timeline states. */
  percent?: number;
  /** Visual state for the dot. */
  status?: ActivityTimelineStepStatus;
  /** Renders a small solid dot with a radial glow (gradient variant). */
  glow?: boolean;
}

export const ActivityTimelineDot = ({
  automaticProgress = false,
  percent,
  status = ActivityTimelineStepStatus.Inactive,
  glow = false,
  ...props
}: ActivityTimelineDotProps) => {
  const theme = useTheme();
  const effectiveStatus =
    percent !== undefined ? ActivityTimelineStepStatus.InProgress : status;
  const timelineDotStyle = getActivityTimelineDotStyle(effectiveStatus, theme);
  const isInProgress =
    effectiveStatus === ActivityTimelineStepStatus.InProgress;

  if (glow) {
    // Gradient statuses fill the dot with the radial glow; the rest are solid.
    const dotFill = getStepGlow(status, theme) ?? getStepDotColor(status, theme);
    return (
      <StyledTimelineDotRoot aria-label={status} {...props}>
        <Box
          sx={{
            width: "7.142px",
            height: "7.142px",
            borderRadius: "50%",
            background: dotFill,
          }}
        />
      </StyledTimelineDotRoot>
    );
  }

  return (
    <StyledTimelineDotRoot aria-label={effectiveStatus} {...props}>
      <CircularProgress
        variant="determinate"
        size={18}
        sx={{
          backgroundColor: timelineDotStyle.background,
          borderRadius: "50%",
          "& .MuiCircularProgress-circle": {
            stroke: timelineDotStyle.ringColor,
          },
        }}
        thickness={4}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        size={18}
        sx={{
          position: "absolute",
          ...(isInProgress && {
            animation: "spin 1.4s linear infinite",
            "@keyframes spin": {
              "0%": { transform: "rotate(-90deg)" },
              "100%": { transform: "rotate(270deg)" },
            },
          }),
          "& .MuiCircularProgress-circle": {
            strokeLinecap: "round",
            stroke: timelineDotStyle.color,
          },
        }}
        thickness={4}
        value={percent ?? timelineDotStyle.percent}
      />
      {!automaticProgress && status === ActivityTimelineStepStatus.Complete && (
        <DoneIcon
          sx={{
            position: "absolute",
            color: timelineDotStyle.color,
            transform: "scale(.6)",
            transformOrigin: "50% 55%",
          }}
        />
      )}
      {!automaticProgress && status === ActivityTimelineStepStatus.Error && (
        <CloseIcon
          sx={{
            position: "absolute",
            color: timelineDotStyle.color,
            transform: "scale(.6)",
            transformOrigin: "center",
          }}
        />
      )}
    </StyledTimelineDotRoot>
  );
};
