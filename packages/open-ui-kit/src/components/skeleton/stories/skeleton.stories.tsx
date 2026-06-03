/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components";
import { Skeleton } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Skeleton displays a placeholder preview of content while data is loading. Use it to reduce perceived load time. Defaults to wave animation styled with design-system tokens."
          guideLink=""
          importLine='import { Skeleton } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const AllVariants: Story = {
  render: () => (
    <Stack spacing={1} width={210}>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rounded" height={60} />
    </Stack>
  ),
};

export const Text: Story = {
  args: { variant: "text", sx: { fontSize: "1rem", width: 210 } },
};

export const Circular: Story = {
  args: { variant: "circular", width: 40, height: 40 },
};

export const Rectangular: Story = {
  args: { variant: "rectangular", width: 210, height: 60 },
};

export const Rounded: Story = {
  args: { variant: "rounded", width: 210, height: 60 },
};

export const Pulse: Story = {
  args: { animation: "pulse", variant: "rectangular", width: 210, height: 60 },
};

export const NoAnimation: Story = {
  args: { animation: false, variant: "rectangular", width: 210, height: 60 },
};
