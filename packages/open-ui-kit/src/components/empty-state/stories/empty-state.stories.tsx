/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { GeneralSize } from "@/common";
import { Box, EmptyState, Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  args: {
    description: "No matches found",
    direction: "column",
    size: GeneralSize.Large,
    variant: "info",
    hideIllustration: false,
  },
  argTypes: {
    variant: {
      control: "radio",
      options: ["info", "positive", "warning", "negative"],
      description: "Illustration tone.",
    },
    direction: {
      control: "radio",
      options: ["column", "row"],
      description: "Places the illustration above or beside the text.",
    },
    size: {
      control: "radio",
      options: [GeneralSize.Large, GeneralSize.Medium, GeneralSize.Small],
      description: "Controls illustration, spacing, typography, and actions.",
    },
    hideIllustration: {
      control: "boolean",
      description: "Hides the illustration for compact text-only states.",
    },
    title: {
      control: "text",
      description: "Heading text. Hidden for small size.",
    },
    description: {
      control: "text",
      description: "Supporting empty-state message.",
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.vars.baseBackgroundStrong,
          boxSizing: "border-box",
          p: 3,
        })}
      >
        <Story />
      </Box>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Empty states"
          blurb="EmptyState provides a visual indication when there is no content to display. Supports info, positive, warning, and negative variants across large, medium, and small sizes."
          importLine={`import { EmptyState } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

const actionProps = {
  actionCallback: action("button-link clicked"),
  actionTitle: "button-link",
  secondaryActionCallback: action("secondary button-link clicked"),
  secondaryActionTitle: "button-link",
};

export const Default: Story = {
  args: {
    title: "Heading",
    description:
      "Description about what this page is for and what the user can do.",
    ...actionProps,
  },
  render: (args) => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState {...args} size={GeneralSize.Large} direction="column" />
    </Stack>
  ),
};

export const Medium: Story = {
  args: {
    title: "Heading",
    description: "No matches found",
    size: GeneralSize.Medium,
    ...actionProps,
  },
  render: (args) => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState {...args} direction="column" />
    </Stack>
  ),
};

export const Small: Story = {
  args: {
    description: "No matches found",
    size: GeneralSize.Small,
  },
  render: (args) => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState {...args} direction="column" />
    </Stack>
  ),
};

export const SmallHorizontal: Story = {
  args: {
    description: "No matches found",
    direction: "row",
    size: GeneralSize.Small,
  },
  render: (args) => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState {...args} />
    </Stack>
  ),
};

export const Horizontal: Story = {
  args: {
    title: "Heading",
    description:
      "Description about what this page is for and what the user can do.",
    direction: "row",
    size: GeneralSize.Large,
    ...actionProps,
  },
  render: (args) => (
    <Stack direction="column" gap="36px">
      <EmptyState {...args} />
    </Stack>
  ),
};

export const EmptyBox: Story = {
  args: {
    description: "Empty state with required brief description",
    hideIllustration: true,
    direction: "row",
    size: GeneralSize.Large,
  },
  render: (args) => (
    <Box
      sx={(theme) => ({
        alignItems: "center",
        backgroundColor: theme.palette.vars.baseBackgroundMedium,
        borderRadius: "6px",
        boxSizing: "border-box",
        display: "flex",
        height: "48px",
        justifyContent: "center",
        maxWidth: "860px",
        padding: "12px 16px",
        width: "100%",
      })}
    >
      <EmptyState
        {...args}
        containerProps={{
          sx: {
            height: "24px",
            padding: 0,
            width: "100%",
          },
        }}
      />
    </Box>
  ),
};

export const Illustrations: Story = {
  render: () => (
    <Stack direction="row" gap="64px" flexWrap="wrap" alignItems="center">
      <EmptyState variant="info" size={GeneralSize.Large} />
      <EmptyState variant="positive" size={GeneralSize.Large} />
      <EmptyState variant="warning" size={GeneralSize.Large} />
      <EmptyState variant="negative" size={GeneralSize.Large} />
    </Stack>
  ),
};
