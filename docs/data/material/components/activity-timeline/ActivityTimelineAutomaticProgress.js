import * as React from "react";
import {
  ActivityTimeline,
  ActivityTimelineStepStatus,
  ThemeProvider,
} from "@open-ui-kit/core";

const steps = [
  { status: ActivityTimelineStepStatus.InProgress, title: "Queued" },
  { status: ActivityTimelineStepStatus.InProgress, title: "Provisioning" },
  { status: ActivityTimelineStepStatus.InProgress, title: "Scanning" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Ready for review" },
];

export default function ActivityTimelineAutomaticProgress() {
  return (
    <ThemeProvider>
      <ActivityTimeline automaticProgress steps={steps} sx={{ maxWidth: 560 }} />
    </ThemeProvider>
  );
}
