import * as React from "react";
import {
  ActivityTimeline,
  ActivityTimelineStepStatus,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

const steps = [
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Environment prepared",
    subTitle: "Secrets and variables",
    content: (
      <Typography>
        The deployment job received the required environment variables and
        verified secret access.
      </Typography>
    ),
  },
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Image build",
    subTitle: "Container registry",
    content: (
      <Typography>
        The build is publishing the latest image and attaching provenance
        metadata.
      </Typography>
    ),
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Rollout",
    subTitle: "Production cluster",
    content: (
      <Typography>
        The rollout starts after the image build passes vulnerability and policy
        checks.
      </Typography>
    ),
  },
];

export default function ActivityTimelineWithContent() {
  return (
    <ThemeProvider>
      <ActivityTimeline steps={steps} sx={{ maxWidth: 720 }} />
    </ThemeProvider>
  );
}
