import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Divider, Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
  args: {
    orientation: "horizontal",
  },
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "Direction of the divider line.",
    },
    variant: {
      control: "radio",
      options: [undefined, "bold"],
      description: "Line weight. Default is 1px; bold is 2px.",
    },
  },
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

export const Default: Story = {
  render: (args) => (
    <Box sx={{ width: "220px" }}>
      <Divider {...args} orientation="horizontal" />
    </Box>
  ),
};

export const Bold: Story = {
  args: {
    variant: "bold",
  },
  render: (args) => (
    <Box sx={{ width: "220px" }}>
      <Divider {...args} orientation="horizontal" variant="bold" />
    </Box>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => (
    <Box sx={{ height: "120px", display: "flex" }}>
      <Divider {...args} orientation="vertical" />
    </Box>
  ),
};

export const VerticalBold: Story = {
  args: {
    orientation: "vertical",
    variant: "bold",
  },
  render: (args) => (
    <Box sx={{ height: "120px", display: "flex" }}>
      <Divider {...args} orientation="vertical" variant="bold" />
    </Box>
  ),
};

export const StickerSheet: Story = {
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
