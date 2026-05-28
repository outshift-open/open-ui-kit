/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { action } from "storybook/actions";
import { GeneralSize } from "@/common";
import { EmptyState } from "../components/empty-state";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="EmptyState provides a visual indication when there is no content to display. Supports info, positive, warning, and negative variants across large, medium, and small sizes."
          guideLink=""
          importLine={`import { EmptyState } from "@open-ui-kit/core";`}
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
};

export const LargeColumnAllVariants: Story = {
  name: "Large — Column — All Variants",
  render: () => (
    <Stack direction="row" gap={4} flexWrap="wrap" justifyContent="center">
      <EmptyState
        variant="info"
        size={GeneralSize.Large}
        direction="column"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
      <EmptyState
        variant="positive"
        size={GeneralSize.Large}
        direction="column"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
      <EmptyState
        variant="warning"
        size={GeneralSize.Large}
        direction="column"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
      <EmptyState
        variant="negative"
        size={GeneralSize.Large}
        direction="column"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
    </Stack>
  ),
};

export const MediumColumnAllVariants: Story = {
  name: "Medium — Column — All Variants",
  render: () => (
    <Stack direction="row" gap={4} flexWrap="wrap" alignItems="flex-start">
      <EmptyState
        variant="info"
        size={GeneralSize.Medium}
        direction="column"
        title="Heading"
        description="No matches found"
        {...actionProps}
      />
      <EmptyState
        variant="positive"
        size={GeneralSize.Medium}
        direction="column"
        title="Heading"
        description="No matches found"
        {...actionProps}
      />
      <EmptyState
        variant="warning"
        size={GeneralSize.Medium}
        direction="column"
        title="Heading"
        description="No matches found"
        {...actionProps}
      />
      <EmptyState
        variant="negative"
        size={GeneralSize.Medium}
        direction="column"
        title="Heading"
        description="No matches found"
        {...actionProps}
      />
    </Stack>
  ),
};

export const SmallAllVariants: Story = {
  name: "Small — All Variants",
  render: () => (
    <Stack direction="column" gap={2}>
      <EmptyState
        variant="info"
        size={GeneralSize.Small}
        description="No matches found"
      />
      <EmptyState
        variant="positive"
        size={GeneralSize.Small}
        description="No matches found"
      />
      <EmptyState
        variant="warning"
        size={GeneralSize.Small}
        description="No matches found"
      />
      <EmptyState
        variant="negative"
        size={GeneralSize.Small}
        description="No matches found"
      />
    </Stack>
  ),
};

export const LargeRow: Story = {
  name: "Large — Row",
  render: () => (
    <Stack direction="column" gap={4}>
      <EmptyState
        variant="info"
        size={GeneralSize.Large}
        direction="row"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
      <EmptyState
        variant="positive"
        size={GeneralSize.Large}
        direction="row"
        title="Heading"
        description="Description about what this page is for and what the user can do."
        {...actionProps}
      />
    </Stack>
  ),
};

export const WithoutAction: Story = {
  name: "Without Action Button",
  render: () => (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <EmptyState
        variant="info"
        size={GeneralSize.Large}
        direction="column"
        title="Heading"
        description="Description about what this page is for and what the user can do."
      />
      <EmptyState
        variant="negative"
        size={GeneralSize.Medium}
        direction="column"
        title="Heading"
        description="No matches found"
      />
    </Stack>
  ),
};

export const Illustrations: Story = {
  name: "Empty State Illustrations",
  render: () => (
    <Stack direction="row" gap={4} flexWrap="wrap">
      <EmptyState variant="info" size={GeneralSize.Large} />
      <EmptyState variant="positive" size={GeneralSize.Large} />
      <EmptyState variant="warning" size={GeneralSize.Large} />
      <EmptyState variant="negative" size={GeneralSize.Large} />
    </Stack>
  ),
};
