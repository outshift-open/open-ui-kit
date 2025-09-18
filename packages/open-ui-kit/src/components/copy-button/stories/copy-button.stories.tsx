import { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "../components/copy-button";
import { Box } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  args: {
    text: "Text to copy",
    position: "right",
  },
  argTypes: {
    text: {
      control: "text",
      description: "The text to copy",
    },
    position: {
      control: "radio",
      options: ["left", "right", undefined],
      description: "The position of the button",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="CopyButton is a button that copies text to the clipboard when clicked. It provides visual feedback to indicate that the text has been copied successfully."
          guideLink="#"
          importLine='import { CopyButton } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ position: "relative", height: "80px" }}>
      <CopyButton {...args} onCopy={() => alert("Success Copy")} />
    </Box>
  ),
};
