import * as React from "react";
import {
  ActivityTimeline,
  ActivityTimelineStepStatus,
  ThemeProvider,
  type ActivityTimelineStep,
} from "@open-ui-kit/core";

const steps: ActivityTimelineStep[] = [
  { status: ActivityTimelineStepStatus.InProgress, title: "In progress" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Inactive" },
  { status: ActivityTimelineStepStatus.Neutral, title: "Neutral event" },
  { status: ActivityTimelineStepStatus.Complete, title: "Complete" },
  { status: ActivityTimelineStepStatus.Error, title: "Error" },
];

export default function ActivityTimelineStatuses() {
  return (
    <ThemeProvider>
      <ActivityTimeline steps={steps} sx={{ maxWidth: 560 }} />
    </ThemeProvider>
  );
}
