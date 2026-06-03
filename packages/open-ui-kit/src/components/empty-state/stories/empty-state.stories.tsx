/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { GeneralSize } from "@/common";
import { Box, Stack } from "@/components";
import { EmptyState } from "..";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
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

export const TypeLarge: Story = {
  name: "Type=Large",
  render: () => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState
        variant="info"
        size={GeneralSize.Large}
        direction="column"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
    </Stack>
  ),
};

export const TypeMedium: Story = {
  name: "Type=Medium",
  render: () => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState
        variant="info"
        size={GeneralSize.Medium}
        direction="column"
        title="Heading"
        description="No matches found"
        {...actionProps}
      />
    </Stack>
  ),
};

export const TypeSmall: Story = {
  name: "Type=Small",
  render: () => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState
        variant="info"
        size={GeneralSize.Small}
        description="No matches found"
      />
    </Stack>
  ),
};

export const TypeSmallHorizontal: Story = {
  name: "Type=Small Horizontal",
  render: () => (
    <Stack direction="row" gap="48px" flexWrap="wrap" alignItems="flex-start">
      <EmptyState
        variant="info"
        size={GeneralSize.Small}
        direction="row"
        description="No matches found"
      />
    </Stack>
  ),
};

export const TypeLargeHorizontal: Story = {
  name: "Type=Large Horizontal",
  render: () => (
    <Stack direction="column" gap="36px">
      <EmptyState
        variant="info"
        size={GeneralSize.Large}
        direction="row"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
    </Stack>
  ),
};

export const RequiredBriefDescription: Story = {
  name: "Empty state with required brief description",
  render: () => (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{
        maxWidth: "860px",
        width: "100%",
        borderRadius: "4px",
        backgroundColor: (theme) => theme.palette.vars.controlBackgroundDefault,
        padding: "12px",
      }}
    >
      <EmptyState
        variant="info"
        size={GeneralSize.Small}
        direction="row"
        description="Empty state with required brief description"
        containerProps={{ sx: { padding: 0 } }}
      />
    </Stack>
  ),
};

export const Illustrations: Story = {
  name: "Empty state illustrations",
  render: () => (
    <Stack direction="row" gap="64px" flexWrap="wrap" alignItems="center">
      <EmptyState variant="info" size={GeneralSize.Large} />
      <EmptyState variant="positive" size={GeneralSize.Large} />
      <EmptyState variant="warning" size={GeneralSize.Large} />
      <EmptyState variant="negative" size={GeneralSize.Large} />
    </Stack>
  ),
};
