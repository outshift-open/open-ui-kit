import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail } from "@mui/icons-material";
import { DocsHeader } from "storybook/components/docs-header.stories";
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
          importLine={`import { Badge } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

const ALL_TYPES = [
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
] as const;

export const Standard: Story = {
  render: (args: BadgeProps) => (
    <Stack direction="row" spacing={2}>
      {ALL_TYPES.map((type) => (
        <Badge key={type} {...args} type={type} content={1} />
      ))}
    </Stack>
  ),
};

export const Notification: Story = {
  render: (args: BadgeProps) => (
    <Stack direction="row" spacing={2}>
      {ALL_TYPES.map((type) => (
        <Badge
          key={type}
          {...args}
          type={type}
          content={<Mail />}
          notificationContent={1}
        />
      ))}
    </Stack>
  ),
};
