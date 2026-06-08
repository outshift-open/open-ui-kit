import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail } from "@mui/icons-material";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Badge } from "../components/badge";
import type { BadgeProps } from "../types";
import { BADGE_TYPES } from "../styles";

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
  args: {
    type: "default",
    content: "1",
  },
  argTypes: {
    type: {
      control: "select",
      options: BADGE_TYPES,
    },
    content: {
      control: "text",
    },
    notificationContent: {
      control: "text",
    },
    styleBadge: {
      table: { disable: true },
    },
    styleContent: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Types: Story = {
  render: (args: BadgeProps) => (
    <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
      {BADGE_TYPES.map((type) => (
        <Badge key={type} {...args} type={type} content={1} />
      ))}
    </Stack>
  ),
};

export const Notification: Story = {
  render: (args: BadgeProps) => (
    <Stack direction="row" spacing={4} useFlexGap flexWrap="wrap">
      {BADGE_TYPES.map((type) => (
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

export const WithLongLabel: Story = {
  args: {
    type: "info",
    content: "Beta",
  },
};
