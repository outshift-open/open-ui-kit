import type { Meta, StoryObj } from "@storybook/react";
import { Mail } from "@mui/icons-material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Badge, BadgeProps } from "../components/badge";
import { Stack } from "@mui/material";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Badges are used to display a small count or status indicator. They can be used to show notifications, statuses, or other small pieces of information."
          guideLink=""
          importLine='import { Badge } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const BadgeStory = (args: BadgeProps) => <Badge {...args} />;

export const Example: Story = {
  render: (args: BadgeProps) => <Badge {...args} />,
  args: {
    content: "1",
  },
};

export const BadgeTypes: Story = {
  render: (args) => (
    <Stack direction={"row"} spacing={2}>
      {(
        [
          "default",
          "excellent",
          "neutral",
          "error",
          "warning",
          "info",
          "success",
          "inactive",
          "moderate",
          "severe",
        ] as const
      ).map((type) => BadgeStory({ ...args, type, content: 1 }))}
    </Stack>
  ),
};

export const BadgeWithNotifications: Story = {
  render: (args) => (
    <Stack direction={"row"} spacing={2}>
      {(
        [
          "default",
          "excellent",
          "neutral",
          "error",
          "warning",
          "info",
          "success",
          "inactive",
          "moderate",
          "severe",
        ] as const
      ).map((type) =>
        BadgeStory({
          ...args,
          type,
          content: <Mail />,
          notificationContent: 1,
        }),
      )}
    </Stack>
  ),
};
