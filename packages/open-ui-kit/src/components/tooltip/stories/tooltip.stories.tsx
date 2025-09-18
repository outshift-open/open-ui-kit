import { Meta, StoryObj } from "@storybook/react";
import { Button, Stack } from "@mui/material";
import { Tooltip } from "../components/tooltip";
import { TooltipSize } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Tooltips display informative text when users hover over, focus on, or tap an element.

When activated, Tooltips display a text label identifying an element, such as a description of its function.
 */
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tooltips display informative text when users hover over, focus on, or tap an element."
          guideLink="#"
          importLine='import { Tooltip } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const TooltipWithSize: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Tooltip {...args} title="This is a small Tooltip" color="primary">
        <Button>Default Tooltip</Button>
      </Tooltip>
      <Tooltip {...args} title="This is a big Tooltip" size={TooltipSize.Large}>
        <Button>Big Tooltip</Button>
      </Tooltip>
    </Stack>
  ),
};
