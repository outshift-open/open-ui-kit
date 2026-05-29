import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack } from "@mui/material";
import { Divider } from "..";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Divider"
          blurb="Divider is a thin line that separates content in lists and layouts. It can be horizontal or vertical, with default and bold weights."
          importLine={`import { Divider } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal1px: Story = {
  name: "Direction=Horizontal, Weight=1px",
  render: (args) => (
    <Box sx={{ width: "220px" }}>
      <Divider {...args} orientation="horizontal" />
    </Box>
  ),
};

export const Horizontal2px: Story = {
  name: "Direction=Horizontal, Weight=2px",
  render: (args) => (
    <Box sx={{ width: "220px" }}>
      <Divider {...args} orientation="horizontal" variant="bold" />
    </Box>
  ),
};

export const Vertical1px: Story = {
  name: "Direction=Vertical, Weight=1px",
  render: (args) => (
    <Box sx={{ height: "120px", display: "flex" }}>
      <Divider {...args} orientation="vertical" />
    </Box>
  ),
};

export const Vertical2px: Story = {
  name: "Direction=Vertical, Weight=2px",
  render: (args) => (
    <Box sx={{ height: "120px", display: "flex" }}>
      <Divider {...args} orientation="vertical" variant="bold" />
    </Box>
  ),
};

export const StickerSheet: Story = {
  name: "Divider",
  render: (args) => (
    <Stack
      direction="row"
      gap="36px"
      sx={{ width: "556px", height: "179px", alignItems: "flex-start" }}
    >
      <Box sx={{ height: "120px", display: "flex" }}>
        <Divider {...args} orientation="vertical" />
      </Box>
      <Box sx={{ width: "220px", paddingTop: "10px" }}>
        <Divider {...args} orientation="horizontal" />
      </Box>
      <Box sx={{ height: "120px", display: "flex" }}>
        <Divider {...args} orientation="vertical" variant="bold" />
      </Box>
      <Box sx={{ width: "220px", paddingTop: "10px" }}>
        <Divider {...args} orientation="horizontal" variant="bold" />
      </Box>
    </Stack>
  ),
};
