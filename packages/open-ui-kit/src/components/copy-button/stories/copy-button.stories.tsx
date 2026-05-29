import { Meta, StoryObj } from "@storybook/react-vite";
import { CopyButton } from "../components/copy-button";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  args: {
    text: "Text to copy",
    tooltipPlacement: "top",
    size: "large",
  },
  argTypes: {
    text: {
      control: "text",
      description: "The text to copy",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description:
        "Visual size of the button. Small=16px, Medium=20px, Large=32px (default, with border).",
    },
    position: {
      control: "radio",
      options: ["left", "right", undefined],
      description: "Absolute position inside a relative container.",
    },
    tooltipPlacement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Placement of the tooltip relative to the button.",
    },
    copyLabel: {
      control: "text",
      description: 'Tooltip label shown before copying. Defaults to "Copy".',
    },
    copiedLabel: {
      control: "text",
      description: 'Tooltip label shown after copying. Defaults to "Copied".',
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="CopyButton is a button that copies text to the clipboard when clicked. It provides visual feedback to indicate that the text has been copied successfully."
          guideLink=""
          importLine={`import { CopyButton } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {
  render: (args) => (
    <Box sx={{ padding: "40px" }}>
      <CopyButton {...args} />
    </Box>
  ),
};

export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Large (32×32, border), Medium (20×20, no border), Small (16×16, no border).",
      },
    },
  },
  render: (args) => (
    <Stack direction="row" gap="32px" alignItems="center" padding="40px">
      {(["large", "medium", "small"] as const).map((size) => (
        <Stack key={size} alignItems="center" gap="8px">
          <CopyButton {...args} size={size} />
          <Typography variant="caption">{size}</Typography>
        </Stack>
      ))}
    </Stack>
  ),
  args: { text: "Text to copy", tooltipPlacement: "top" },
};

export const TooltipTop: Story = {
  render: (args) => (
    <Box sx={{ padding: "60px 40px 40px" }}>
      <CopyButton {...args} tooltipPlacement="top" />
    </Box>
  ),
  args: { text: "Text to copy", size: "large" },
};

export const TooltipRight: Story = {
  render: (args) => (
    <Box sx={{ padding: "40px" }}>
      <CopyButton {...args} tooltipPlacement="right" />
    </Box>
  ),
  args: { text: "Text to copy", size: "large" },
};

export const TooltipBottom: Story = {
  render: (args) => (
    <Box sx={{ padding: "40px 40px 60px" }}>
      <CopyButton {...args} tooltipPlacement="bottom" />
    </Box>
  ),
  args: { text: "Text to copy", size: "large" },
};

export const TooltipLeft: Story = {
  render: (args) => (
    <Box sx={{ padding: "40px 40px 40px 80px" }}>
      <CopyButton {...args} tooltipPlacement="left" />
    </Box>
  ),
  args: { text: "Text to copy", size: "large" },
};
