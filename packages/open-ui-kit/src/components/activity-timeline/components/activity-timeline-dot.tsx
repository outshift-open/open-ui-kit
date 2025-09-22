/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimelineDotProps as MuiTimelineDotProps } from "@mui/lab";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { setStepColor } from "../utils/utils";
import { Box, CircularProgress, Theme, useTheme } from "@mui/material";
import { ActivityTimelineStepStatus } from "../types";

export interface ActivityTimelineDotProps extends MuiTimelineDotProps {
  automaticProgress?: boolean;
  percent?: number;
  status?: ActivityTimelineStepStatus;
}

const setActivityTimelineDotStyle = (
  status: ActivityTimelineStepStatus,
  theme: Theme,
) => {
  switch (status) {
    case ActivityTimelineStepStatus.InProgress:
      return {
        background: "transparent",
        color: setStepColor(status, theme),
        percent: 67,
      };
    case ActivityTimelineStepStatus.Neutral:
      return {
        background: theme.palette.vars?.interactivePrimaryWeakDefault,
        color: setStepColor(status, theme),
        percent: 100,
      };
    case ActivityTimelineStepStatus.Complete:
      return {
        background: theme.palette.vars?.controlBackgroundDefault,
        color: setStepColor(status, theme),
        percent: 100,
      };
    case ActivityTimelineStepStatus.Error:
      return {
        background: theme.palette.vars?.controlBackgroundDefault,
        color: setStepColor(status, theme),
        percent: 67,
      };
    default:
      // INACTIVE STATUS
      return {
        background: theme.palette.vars?.controlBackgroundDefault,
        color: setStepColor(status, theme),
        percent: 100,
      };
  }
};

export const ActivityTimelineDot = ({
  automaticProgress = false,
  percent,
  status = ActivityTimelineStepStatus.Inactive,
}: ActivityTimelineDotProps) => {
  const theme = useTheme();
  const timelineDotStyle = setActivityTimelineDotStyle(
    percent ? ActivityTimelineStepStatus.InProgress : status,
    theme,
  );

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "2px 0",
      }}
    >
      <CircularProgress
        variant="determinate"
        size={18}
        sx={{
          backgroundColor: timelineDotStyle.background,
          borderRadius: "50%",
          "& .MuiCircularProgress-circle": {
            stroke: theme.palette.vars?.controlBorderDefault,
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
    </Box>
  );
};
