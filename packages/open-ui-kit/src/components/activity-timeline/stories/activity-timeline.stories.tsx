import { Meta, StoryObj } from "@storybook/react-vite";
import { ActivityTimelineDot } from "../components/activity-timeline-dot";
import { ActivityTimelineStepStatus } from "../types";
import { Box, Stack, Typography } from "@mui/material";
import { ActivityTimeline } from "../components/activity-timeline";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof ActivityTimeline> = {
  title: "Components/ActivityTimeline",
  component: ActivityTimeline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Activity timelines are used to visualize a sequence of events or steps in a process. They can be used to track progress, show dependencies, and highlight key milestones."
          guideLink=""
          importLine={`import { ActivityTimeline, ActivityTimelineStepStatus } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActivityTimeline>;

const defaultContent = <Box sx={{ padding: "8px" }}>Content</Box>;

const allStatusSteps = [
  { status: ActivityTimelineStepStatus.InProgress, title: "Step 1" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 2" },
  { status: ActivityTimelineStepStatus.Neutral, title: "Step 3" },
  { status: ActivityTimelineStepStatus.Complete, title: "Step 4" },
  { status: ActivityTimelineStepStatus.Error, title: "Step 5" },
];

const stepsWithContent = [
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 1",
    content: defaultContent,
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Step 2",
    content: defaultContent,
  },
  {
    status: ActivityTimelineStepStatus.Neutral,
    title: "Step 3",
    content: defaultContent,
  },
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 4",
    content: defaultContent,
  },
  {
    status: ActivityTimelineStepStatus.Error,
    title: "Step 5",
    content: defaultContent,
  },
];

export const DotStatuses: Story = {
  render: () => (
    <Stack gap={2}>
      {[
        ActivityTimelineStepStatus.InProgress,
        ActivityTimelineStepStatus.Inactive,
        ActivityTimelineStepStatus.Neutral,
        ActivityTimelineStepStatus.Complete,
        ActivityTimelineStepStatus.Error,
      ].map((status) => (
        <Stack key={status} gap={2} direction="row" alignItems="center">
          <Typography variant="body2" width={80}>
            {status}
          </Typography>
          <ActivityTimelineDot status={status} />
        </Stack>
      ))}
    </Stack>
  ),
};

export const DotPercentages: Story = {
  render: () => (
    <Stack gap={2} direction="row" alignItems="center">
      {[10, 25, 50, 67, 90, 100].map((p) => (
        <ActivityTimelineDot key={p} percent={p} />
      ))}
    </Stack>
  ),
};

export const Default: Story = {
  render: () => <ActivityTimeline steps={allStatusSteps} />,
};

export const WithContent: Story = {
  render: () => <ActivityTimeline steps={stepsWithContent} />,
};

export const AutomaticProgress: Story = {
  render: () => <ActivityTimeline steps={allStatusSteps} automaticProgress />,
};

export const AutomaticProgressWithContent: Story = {
  render: () => <ActivityTimeline steps={stepsWithContent} automaticProgress />,
};

export const MediumSize: Story = {
  render: () => <ActivityTimeline steps={allStatusSteps} size="medium" />,
};

export const MediumSizeWithContent: Story = {
  render: () => <ActivityTimeline steps={stepsWithContent} size="medium" />,
};

export const LinearBehavior: Story = {
  render: () => {
    const partialProgress = [
      { status: ActivityTimelineStepStatus.InProgress, title: "Step 1" },
      { status: ActivityTimelineStepStatus.Inactive, title: "Step 2" },
      { status: ActivityTimelineStepStatus.Inactive, title: "Step 3" },
      { status: ActivityTimelineStepStatus.Inactive, title: "Step 4" },
    ];
    const moreProgress = [
      {
        status: ActivityTimelineStepStatus.InProgress,
        title: "Step 1",
        content: defaultContent,
      },
      {
        status: ActivityTimelineStepStatus.InProgress,
        title: "Step 2",
        content: defaultContent,
      },
      { status: ActivityTimelineStepStatus.Inactive, title: "Step 3" },
      { status: ActivityTimelineStepStatus.Inactive, title: "Step 4" },
    ];
    const allComplete = [
      {
        status: ActivityTimelineStepStatus.Complete,
        title: "Step 1",
        content: defaultContent,
      },
      {
        status: ActivityTimelineStepStatus.Complete,
        title: "Step 2",
        content: defaultContent,
      },
      {
        status: ActivityTimelineStepStatus.Complete,
        title: "Step 3",
        content: defaultContent,
      },
      {
        status: ActivityTimelineStepStatus.Complete,
        title: "Step 4",
        content: defaultContent,
      },
    ];
    return (
      <Stack direction="row" gap={4}>
        <ActivityTimeline steps={partialProgress} />
        <ActivityTimeline steps={moreProgress} />
        <ActivityTimeline steps={allComplete} />
      </Stack>
    );
  },
};
