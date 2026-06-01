/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { Pagination } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Pagination enables users to navigate across a range of pages. Supports standard and outlined variants, three sizes, primary and standard colors, and first/last page buttons."
          guideLink=""
          importLine='import { Pagination } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  args: {
    count: 7,
    showFirstButton: true,
    showLastButton: true,
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Standard: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Pagination {...args} />
      <Pagination {...args} color="primary" />
      <Pagination {...args} disabled />
    </Stack>
  ),
};

export const Outlined: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Pagination {...args} variant="outlined" />
      <Pagination {...args} variant="outlined" color="primary" />
      <Pagination {...args} variant="outlined" disabled />
    </Stack>
  ),
};

export const SizeLarge: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Pagination {...args} size="large" />
      <Pagination {...args} size="large" color="primary" />
      <Pagination {...args} size="large" variant="outlined" color="primary" />
    </Stack>
  ),
};

export const SizeMedium: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Pagination {...args} size="medium" />
      <Pagination {...args} size="medium" color="primary" />
      <Pagination {...args} size="medium" variant="outlined" color="primary" />
    </Stack>
  ),
};

export const SizeSmall: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <Pagination {...args} size="small" />
      <Pagination {...args} size="small" color="primary" />
      <Pagination {...args} size="small" variant="outlined" color="primary" />
    </Stack>
  ),
};
