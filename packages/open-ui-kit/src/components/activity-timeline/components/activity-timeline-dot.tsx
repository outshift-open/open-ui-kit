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
