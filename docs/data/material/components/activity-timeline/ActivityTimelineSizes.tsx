import * as React from "react";
import {
  ActivityTimeline,
  ActivityTimelineStepStatus,
  Stack,
  ThemeProvider,
  Typography,
  type ActivityTimelineStep,
} from "@open-ui-kit/core";

const steps: ActivityTimelineStep[] = [
  { status: ActivityTimelineStepStatus.Complete, title: "Collect evidence" },
  { status: ActivityTimelineStepStatus.InProgress, title: "Analyze findings" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Send summary" },
];

export default function ActivityTimelineSizes() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
        <Stack spacing={2} sx={{ width: 320 }}>
          <Typography variant="body2Semibold">Large</Typography>
          <ActivityTimeline steps={steps} />
        </Stack>
        <Stack spacing={2} sx={{ width: 320 }}>
          <Typography variant="body2Semibold">Medium</Typography>
          <ActivityTimeline steps={steps} size="medium" />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
