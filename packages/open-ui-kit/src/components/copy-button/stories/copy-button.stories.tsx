import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { CopyButton } from "../components/copy-button";

const meta: Meta<typeof CopyButton> = {
  title: "Components/CopyButton",
  component: CopyButton,
  args: {
    text: "function readCacheFromRecords()",
    tooltipPlacement: "top",
    size: "large",
  },
  argTypes: {
    text: {
      control: "text",
      description: "Text copied to the clipboard.",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description:
        "Visual size: small is 16px, medium is 20px, and large is 32px with a border.",
    },
    position: {
      control: "radio",
      options: ["left", "right", undefined],
      description: "Absolute placement inside a relative container.",
    },
    tooltipPlacement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Tooltip placement around the copy action.",
    },
    copyLabel: {
      control: "text",
      description: "Tooltip label shown before copying.",
    },
    copiedLabel: {
      control: "text",
      description: "Tooltip label shown after copying.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Copy button"
          blurb="Copy buttons copy nearby code or text and confirm success with a temporary checked state."
          importLine={`import { CopyButton } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

const Swatch = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <Stack gap={1} alignItems="center">
    <Box
      sx={{
        width: 80,
        height: 56,
        display: "grid",
        placeItems: "center",
        position: "relative",
      }}
    >
      {children}
    </Box>
    <Typography variant="caption">{title}</Typography>
  </Stack>
);

export const Default: Story = {
  render: (args) => (
    <Box sx={{ padding: 4 }}>
      <CopyButton {...args} />
    </Box>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <Stack direction="row" gap={4} alignItems="center" padding={4}>
      <Swatch title="Small">
        <CopyButton {...args} size="small" disableMargin />
      </Swatch>
      <Swatch title="Medium">
        <CopyButton {...args} size="medium" disableMargin />
      </Swatch>
      <Swatch title="Large">
        <CopyButton {...args} size="large" disableMargin />
      </Swatch>
    </Stack>
  ),
};

export const Position: Story = {
  render: (args) => (
    <Box
      sx={(theme) => ({
        width: 180,
        height: 96,
        position: "relative",
        border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
        borderRadius: 1,
        backgroundColor: theme.palette.vars.controlBackgroundDefault,
      })}
    >
      <CopyButton {...args} position="left" left="16px" top="32px" />
      <CopyButton {...args} position="right" right="16px" top="32px" />
    </Box>
  ),
};

export const TooltipPlacements: Story = {
  render: (args) => (
    <Stack direction="row" gap={4} alignItems="center" padding={4}>
      {(["top", "right", "bottom", "left"] as const).map((placement) => (
        <Swatch key={placement} title={placement}>
          <CopyButton
            {...args}
            tooltipPlacement={placement}
            disableMargin
            copyLabel={`Copy ${placement}`}
          />
        </Swatch>
      ))}
    </Stack>
  ),
};
