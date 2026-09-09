import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Star } from "@mui/icons-material";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Badge } from "../components/badge";
import type { BadgeProps } from "../types";
import { BADGE_SHAPES, BADGE_SIZES, BADGE_TYPES } from "../styles";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Badge"
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
    shape: {
      control: "select",
      options: [undefined, ...BADGE_SHAPES],
    },
    size: {
      control: "inline-radio",
      options: BADGE_SIZES,
    },
    content: {
      control: "text",
    },
    notificationContent: {
      control: "text",
    },
    icon: {
      table: { disable: true },
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

/**
  Badge with Mulitple Shapes
 */
export const Shapes: Story = {
  render: (args: BadgeProps) => (
    <Stack direction="row" spacing={4} useFlexGap alignItems="center">
      {(
        [
          { shape: "circle", size: "medium", type: "info" },
          { shape: "circle", size: "large", type: "success" },
          { shape: "triangleUp", size: "large", type: "warning" },
          { shape: "triangleDown", size: "large", type: "error" },
          { shape: "dash", size: "large", type: "inactive" },
        ] as const
      ).map(({ shape, size, type }) => (
        <Badge
          key={`${shape}-${size}`}
          {...args}
          shape={shape}
          size={size}
          type={type}
        />
      ))}
    </Stack>
  ),
};

/**
  Badge with Dynamic content
 */
export const OptionalBehaviors: Story = {
  render: (args: BadgeProps) => (
    <Stack spacing={3} direction="row" useFlexGap>
      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        <Badge
          key="optional-behavior"
          {...args}
          type={"excellent"}
          icon={<Star />}
          content={1}
        />
      </Stack>
      <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
        {([{ type: "excellent", label: "Info" }] as const).map(
          ({ type, label }) => (
            <Badge
              key={`labelled-${type}`}
              {...args}
              shape="circle"
              type={type}
              content={label}
              size="medium"
            />
          ),
        )}
      </Stack>
    </Stack>
  ),
};
