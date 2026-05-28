import { Meta, StoryObj } from "@storybook/react-vite";
import { Divider, Box } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";

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
          importLine={`import { Divider } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Horizontal1px: Story = {
  render: (args) => (
    <Divider {...args} orientation="horizontal" sx={{ maxWidth: "220px" }} />
  ),
};

export const Horizontal2px: Story = {
  render: (args) => (
    <Divider
      {...args}
      orientation="horizontal"
      variant="bold"
      sx={{ maxWidth: "220px" }}
    />
  ),
};

export const Vertical1px: Story = {
  render: (args) => (
    <Box sx={{ height: "120px", display: "flex" }}>
      <Divider {...args} orientation="vertical" />
    </Box>
  ),
};

export const Vertical2px: Story = {
  render: (args) => (
    <Box sx={{ height: "120px", display: "flex" }}>
      <Divider {...args} orientation="vertical" variant="bold" />
    </Box>
  ),
};
