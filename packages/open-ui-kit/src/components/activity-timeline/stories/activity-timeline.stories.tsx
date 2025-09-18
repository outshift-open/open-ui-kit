import { Meta, StoryObj } from "@storybook/react";
import { ActivityTimelineDot } from "../components/activity-timeline-dot";
import { ActivityTimelineStepStatus } from "../types";
import { Alert, Box, Stack, Typography } from "@mui/material";
import { ActivityTimeline } from "../components/activity-timeline";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Spinner, Tag, TagBackgroundColorVariants } from "@/components";

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
          importLine='import { ActivityTimeline } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActivityTimeline>;

export const ActivityTimelineDotsStatuses: Story = {
  render: () => {
    return (
      <Stack gap={2}>
        <Stack gap={2} direction="row">
          <Typography variant="body1">In progress:</Typography>
          <ActivityTimelineDot status={ActivityTimelineStepStatus.InProgress} />
        </Stack>
        <Stack gap={2} direction="row">
          <Typography variant="body1">Inactive:</Typography>
          <ActivityTimelineDot status={ActivityTimelineStepStatus.Inactive} />
        </Stack>
        <Stack gap={2} direction="row">
          <Typography variant="body1">Neutral:</Typography>
          <ActivityTimelineDot status={ActivityTimelineStepStatus.Neutral} />
        </Stack>
        <Stack gap={2} direction="row">
          <Typography variant="body1">Complete:</Typography>
          <ActivityTimelineDot status={ActivityTimelineStepStatus.Complete} />
        </Stack>
        <Stack gap={2} direction="row">
          <Typography variant="body1">Error:</Typography>
          <ActivityTimelineDot status={ActivityTimelineStepStatus.Error} />
        </Stack>
      </Stack>
    );
  },
};

export const ActivityTimelineDotsPercentages: Story = {
  render: () => {
    return (
      <Stack gap={2} direction="row">
        <ActivityTimelineDot percent={10} />
        <ActivityTimelineDot percent={20} />
        <ActivityTimelineDot percent={30} />
        <ActivityTimelineDot percent={40} />
        <ActivityTimelineDot percent={60} />
      </Stack>
    );
  },
};

const exampleSteps = [
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 1",
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Step 2",
  },
  {
    status: ActivityTimelineStepStatus.Neutral,
    title: "Step 3",
  },
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 4",
  },
  {
    status: ActivityTimelineStepStatus.Error,
    title: "Step 5",
  },
];

const exampleStepsWithContent = [
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 1",
    content: <Box sx={{ padding: "8px" }}>Simple Text</Box>,
  },
  {
    status: ActivityTimelineStepStatus.Inactive,
    title: "Step 2",
    subTitle: "Info",
    content: (
      <Box sx={{ padding: "8px" }}>
        <Alert severity="info">This is an info alert</Alert>
      </Box>
    ),
  },
  {
    status: ActivityTimelineStepStatus.Neutral,
    title: "Step 3",
    content: (
      <Box sx={{ padding: "8px" }}>
        <Tag color={TagBackgroundColorVariants.AccentJWeak}>Tag</Tag>
      </Box>
    ),
  },
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 4",
    content: (
      <Box sx={{ padding: "8px" }}>
        <Stack gap={2}>
          <Tag color={TagBackgroundColorVariants.AccentAWeak}>Tag1</Tag>
          <Tag color={TagBackgroundColorVariants.AccentBWeak}>Tag2</Tag>
          <Tag color={TagBackgroundColorVariants.AccentCWeak}>Tag3</Tag>
          <Tag color={TagBackgroundColorVariants.AccentDWeak}>Tag4</Tag>
        </Stack>
      </Box>
    ),
  },
  {
    status: ActivityTimelineStepStatus.Error,
    title: "Step 5",
    content: (
      <Box sx={{ padding: "8px" }}>
        <Spinner />
      </Box>
    ),
  },
];

export const ActivityTimelineDefault: Story = {
  render: () => {
    return <ActivityTimeline steps={exampleSteps} />;
  },
};

export const ActivityTimelineWithAutomaticProgress: Story = {
  render: () => {
    return <ActivityTimeline steps={exampleSteps} automaticProgress />;
  },
};

export const ActivityTimelineWithAccordions: Story = {
  render: () => {
    return (
      <ActivityTimeline steps={exampleStepsWithContent} automaticProgress />
    );
  },
};
