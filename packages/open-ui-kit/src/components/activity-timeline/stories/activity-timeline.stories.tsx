import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Hub } from "@mui/icons-material";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { ActivityTimeline } from "../components/activity-timeline";
import { ActivityTimelineDot } from "../components/activity-timeline-dot";
import {
  ActivityTimelineStepStatus,
  type ActivityTimelineStep,
} from "../types";

const meta: Meta<typeof ActivityTimeline> = {
  title: "Components/ActivityTimeline",
  component: ActivityTimeline,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Activity Timeline"
          blurb="Activity timelines are used to visualize a sequence of events or steps in a process. They can be used to track progress, show dependencies, and highlight key milestones."
          guideLink=""
          includeStories={true}
          importLine='import { ActivityTimeline, ActivityTimelineStepStatus } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ActivityTimeline>;

const contentSlot = (
  <Box
    sx={{
      alignItems: "center",
      border: "1px dashed #9747FF",
      borderRadius: "2px",
      color: "#9747FF",
      display: "flex",
      fontSize: "12px",
      height: "30px",
      justifyContent: "center",
      lineHeight: "120%",
      width: "100%",
    }}
  >
    content
  </Box>
);

const statusSteps: ActivityTimelineStep[] = [
  { status: ActivityTimelineStepStatus.InProgress, title: "Title" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Title" },
  { status: ActivityTimelineStepStatus.Neutral, title: "Title" },
  { status: ActivityTimelineStepStatus.Complete, title: "Title" },
  { status: ActivityTimelineStepStatus.Error, title: "Title" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Title" },
];

const activityTimelineSteps: ActivityTimelineStep[] = [
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Title",
    content: contentSlot,
    defaultExpanded: true,
  },
  { status: ActivityTimelineStepStatus.Inactive, title: "Title" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Title" },
];

const mediumActivityTimelineSteps: ActivityTimelineStep[] =
  activityTimelineSteps.map((step) => ({
    ...step,
    title: "Title",
    subTitle: undefined,
  }));

const partialProgressSteps: ActivityTimelineStep[] = [
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 1",
    content: contentSlot,
    defaultExpanded: true,
  },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 2" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 3" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 4" },
];

const activeProgressSteps: ActivityTimelineStep[] = [
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 1",
    content: contentSlot,
    defaultExpanded: true,
  },
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 2",
    content: contentSlot,
    defaultExpanded: true,
  },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 3" },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 4" },
];

const continuedProgressSteps: ActivityTimelineStep[] = [
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 1",
    content: contentSlot,
    defaultExpanded: true,
  },
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 2",
    content: contentSlot,
    defaultExpanded: true,
  },
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 3",
    content: contentSlot,
    defaultExpanded: true,
  },
  { status: ActivityTimelineStepStatus.Inactive, title: "Step 4" },
];

const completeProgressSteps: ActivityTimelineStep[] = [
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 1",
    content: contentSlot,
    defaultExpanded: true,
  },
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 2",
    content: contentSlot,
    defaultExpanded: true,
  },
  {
    status: ActivityTimelineStepStatus.Complete,
    title: "Step 3",
    content: contentSlot,
    defaultExpanded: true,
  },
  {
    status: ActivityTimelineStepStatus.InProgress,
    title: "Step 4",
    content: contentSlot,
    defaultExpanded: true,
  },
];

const StoryPanel = ({ children }: { children: ReactNode }) => (
  <Box sx={{ width: 556 }}>{children}</Box>
);

export const Default: Story = {
  render: () => (
    <Stack direction="row" gap={6} sx={{ alignItems: "flex-start" }}>
      <Stack direction="row" gap={4} sx={{ alignItems: "flex-start" }}>
        <Stack
          sx={{
            border: "1px dashed #9747FF",
            borderRadius: "5px",
            p: "20px",
          }}
        >
          {[
            ActivityTimelineStepStatus.InProgress,
            ActivityTimelineStepStatus.Inactive,
            ActivityTimelineStepStatus.Neutral,
            ActivityTimelineStepStatus.Complete,
            ActivityTimelineStepStatus.Error,
            ActivityTimelineStepStatus.Inactive,
          ].map((status, index) => (
            <ActivityTimelineDot key={`${status}-${index}`} status={status} />
          ))}
        </Stack>
        <ActivityTimeline steps={statusSteps.slice(0, 1)} />
      </Stack>

      <StoryPanel>
        <Stack gap={7}>
          <ActivityTimeline steps={activityTimelineSteps} />
          <ActivityTimeline
            steps={mediumActivityTimelineSteps.map((step) => ({
              ...step,
              titleStartIcon: <Hub fontSize="small" />,
            }))}
            size="medium"
          />
        </Stack>
      </StoryPanel>

      <Stack gap={4}>
        <Typography variant="h5">Linear behavior</Typography>
        <Stack direction="row" gap={7} sx={{ alignItems: "flex-start" }}>
          <ActivityTimeline steps={partialProgressSteps} />
          <ActivityTimeline steps={activeProgressSteps} />
        </Stack>
        <Stack direction="row" gap={7} sx={{ alignItems: "flex-start" }}>
          <ActivityTimeline steps={continuedProgressSteps} />
          <ActivityTimeline steps={completeProgressSteps} />
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const Indicator: Story = {
  render: () => (
    <Stack
      sx={{ border: "1px dashed #9747FF", borderRadius: "5px", p: "20px" }}
    >
      {[
        ActivityTimelineStepStatus.InProgress,
        ActivityTimelineStepStatus.Inactive,
        ActivityTimelineStepStatus.Neutral,
        ActivityTimelineStepStatus.Complete,
        ActivityTimelineStepStatus.Error,
        ActivityTimelineStepStatus.Inactive,
      ].map((status, index) => (
        <ActivityTimelineDot key={`${status}-${index}`} status={status} />
      ))}
    </Stack>
  ),
};

export const Line: Story = {
  render: () => <ActivityTimeline steps={statusSteps.slice(0, 2)} />,
};

export const ActivityTimelineExample: Story = {
  name: "Activity Timeline",
  render: () => (
    <StoryPanel>
      <ActivityTimeline steps={activityTimelineSteps} />
    </StoryPanel>
  ),
};

export const Medium: Story = {
  render: () => (
    <StoryPanel>
      <ActivityTimeline steps={activityTimelineSteps} size="medium" />
    </StoryPanel>
  ),
};

export const LinearBehavior: Story = {
  name: "Linear behavior",
  render: () => (
    <Stack gap={4}>
      <Stack direction="row" gap={7} sx={{ alignItems: "flex-start" }}>
        <ActivityTimeline steps={partialProgressSteps} />
        <ActivityTimeline steps={activeProgressSteps} />
      </Stack>
      <Stack direction="row" gap={7} sx={{ alignItems: "flex-start" }}>
        <ActivityTimeline steps={continuedProgressSteps} />
        <ActivityTimeline steps={completeProgressSteps} />
      </Stack>
    </Stack>
  ),
};

export const AutomaticProgress: Story = {
  render: () => (
    <ActivityTimeline steps={partialProgressSteps} automaticProgress />
  ),
};
