import * as React from "react";
import {
  ActivityTimeline,
  ActivityTimelineStepStatus,
  ThemeProvider,
  type ActivityTimelineStep,
} from "@open-ui-kit/core";

const steps: ActivityTimelineStep[] = [
  { status: ActivityTimelineStepStatus.InProgress, title: "Queued" },
  { status: ActivityTimelineStepStatus.InProgress, title: "Provisioning" },
  { status: ActivityTimelineStepStatus.InProgress, title: "Scanning" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Ready for review" },
];

export default function ActivityTimelineAutomaticProgress() {
  return (
    <ThemeProvider>
      <ActivityTimeline
        automaticProgress
        steps={steps}
        sx={{ maxWidth: 560 }}
      />
    </ThemeProvider>
  );
}
