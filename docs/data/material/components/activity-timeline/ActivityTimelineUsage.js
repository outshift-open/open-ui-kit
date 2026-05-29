import * as React from "react";
import {
  ActivityTimeline,
  ActivityTimelineStepStatus,
  ThemeProvider,
} from "@open-ui-kit/core";

const steps = [
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Repository connected",
  },
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Security scan running",
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Review findings",
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Publish report",
  },
];

export default function ActivityTimelineUsage() {
  return (
    <ThemeProvider>
      <ActivityTimeline steps={steps} sx={{ maxWidth: 560 }} />
    </ThemeProvider>
  );
}
