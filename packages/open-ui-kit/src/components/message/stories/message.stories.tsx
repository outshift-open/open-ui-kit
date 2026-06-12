import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Stack } from "@/components";
import { Message, type MessageType } from "..";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
  args: {
    children: "Success action message",
    type: "success",
    hideClose: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "warning", "info"],
    },
    children: {
      control: "text",
    },
    title: {
      control: "text",
    },
    actionLabel: {
      control: "text",
    },
    hideClose: {
      control: "boolean",
    },
    onActionClick: {
      action: "action clicked",
    },
    onClose: {
      action: "closed",
    },
    sx: {
      control: false,
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Message"
          blurb="Message communicates a short status update with optional title, action, and dismiss control."
          guideLink=""
          importLine={`import { Message } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

const types: MessageType[] = ["success", "error", "warning", "info"];

const defaultMessageByType: Record<MessageType, string> = {
  success: "Success action message",
  error: "Error action message",
  warning: "Warning action message",
  info: "Information message",
};

const detailMessageByType: Record<MessageType, string> = {
  success:
    "Success action message in two lines Success action message in two lines",
  error: "Error action message in two lines Error action message in two lines",
  warning:
    "Warning action message in two lines Warning action message in two lines",
  info: "Information message in two lines Information message in two lines",
};

export const Default: Story = {
  render: (args) => <Message {...args}>{args.children}</Message>,
};

export const Variants: Story = {
  args: {
    hideClose: false,
  },
  render: (args) => (
    <Stack gap="20px" alignItems="flex-start">
      {types.map((type) => (
        <Message key={type} {...args} type={type}>
          {defaultMessageByType[type]}
        </Message>
      ))}
    </Stack>
  ),
};

export const WithTitle: Story = {
  args: {
    title: "Title",
    children:
      "Success action message in two lines Success action message in two lines",
  },
  render: (args) => <Message {...args}>{args.children}</Message>,
};

export const TitleVariants: Story = {
  render: (args) => (
    <Stack gap="20px" alignItems="flex-start">
      {types.map((type) => (
        <Message key={type} {...args} type={type} title="Title">
          {detailMessageByType[type]}
        </Message>
      ))}
    </Stack>
  ),
};

export const WithAction: Story = {
  args: {
    actionLabel: "button-link",
    children:
      "Success action message in two lines Success action message in two lines",
  },
  render: (args) => <Message {...args}>{args.children}</Message>,
};

export const ActionVariants: Story = {
  args: {
    actionLabel: "button-link",
  },
  render: (args) => (
    <Stack gap="20px" alignItems="flex-start">
      {types.map((type) => (
        <Message key={type} {...args} type={type}>
          {detailMessageByType[type]}
        </Message>
      ))}
    </Stack>
  ),
};

export const WithoutClose: Story = {
  args: {
    hideClose: true,
    children: "Success action message",
  },
  render: (args) => <Message {...args}>{args.children}</Message>,
};
