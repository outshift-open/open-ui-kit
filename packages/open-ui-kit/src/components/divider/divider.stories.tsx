import { Divider } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Divider is a thin line that groups content in lists and layouts.

The defualt is horizontal divider, but it's also possible to use vertical divider.
 */
const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Divider is a thin line that groups content in lists and layouts. The default is horizontal divider, but it's also possible to use vertical divider."
          guideLink=""
          importLine='import { Divider } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const DividerHorizontal: Story = {
  render: (args) => (
    <Divider {...args} sx={{ maxWidth: "220px" }} orientation="horizontal" />
  ),
};

export const DividerVertical: Story = {
  render: (args) => (
    <Divider {...args} sx={{ minHeight: "220px" }} orientation="vertical" />
  ),
};
