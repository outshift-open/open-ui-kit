import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Message, type MessageType } from "..";

const meta: Meta<typeof Message> = {
  title: "Components/Message",
  component: Message,
  tags: ["autodocs"],
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

const twoLineSegmentByType: Record<MessageType, string> = {
  success: "Success action message in two lines",
  error: "Error action message in two lines",
  warning: "Warning action message in two lines",
  info: "Information action message in two lines",
};

const twoLineMessageByType: Record<MessageType, string> = {
  success: `${twoLineSegmentByType.success} ${twoLineSegmentByType.success}`,
  error: `${twoLineSegmentByType.error} ${twoLineSegmentByType.error}`,
  warning: `${twoLineSegmentByType.warning} ${twoLineSegmentByType.warning}`,
  info: `${twoLineSegmentByType.info} ${twoLineSegmentByType.info}`,
};

const StoryColumn = ({ children }: { children: ReactNode }) => (
  <Stack gap="20px" alignItems="flex-start">
    {children}
  </Stack>
);

const TwoLineMessage = ({ type }: { type: MessageType }) => (
  <>
    {twoLineSegmentByType[type]}
    <br />
    {twoLineSegmentByType[type]}
  </>
);

export const Default: Story = {
  name: "default",
  render: () => (
    <StoryColumn>
      {types.map((type) => (
        <Message key={type} type={type}>
          {defaultMessageByType[type]}
        </Message>
      ))}
    </StoryColumn>
  ),
};

export const WithTitle: Story = {
  name: "with title",
  render: () => (
    <StoryColumn>
      {types.map((type) => (
        <Message key={type} type={type} title="Title">
          <TwoLineMessage type={type} />
        </Message>
      ))}
    </StoryColumn>
  ),
};

export const WithButton: Story = {
  name: "with button",
  render: () => (
    <StoryColumn>
      {types.map((type) => (
        <Message key={type} type={type} actionLabel="button-link">
          {twoLineMessageByType[type]}
        </Message>
      ))}
    </StoryColumn>
  ),
};

export const All: Story = {
  name: "Message",
  render: () => (
    <Stack direction="row" gap="40px" alignItems="flex-start" flexWrap="wrap">
      <StoryColumn>
        {types.map((type) => (
          <Message key={type} type={type}>
            {defaultMessageByType[type]}
          </Message>
        ))}
      </StoryColumn>
      <StoryColumn>
        {types.map((type) => (
          <Message key={type} type={type} title="Title">
            <TwoLineMessage type={type} />
          </Message>
        ))}
      </StoryColumn>
      <StoryColumn>
        {types.map((type) => (
          <Message key={type} type={type} actionLabel="button-link">
            {twoLineMessageByType[type]}
          </Message>
        ))}
      </StoryColumn>
    </Stack>
  ),
};
