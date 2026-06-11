/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Stack } from "@/components";
import { Pagination } from "../";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    count: 7,
    page: 1,
    color: "standard",
    size: "small",
    variant: "text",
    showFirstButton: true,
    showLastButton: true,
    disabled: false,
  },
  argTypes: {
    count: {
      control: { type: "number", min: 1, max: 20 },
    },
    page: {
      control: { type: "number", min: 1, max: 20 },
    },
    color: {
      control: "select",
      options: ["standard", "primary"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    variant: {
      control: "select",
      options: ["text", "outlined"],
    },
    showFirstButton: {
      control: "boolean",
    },
    showLastButton: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "page changed",
    },
    sx: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Pagination"
          blurb="Pagination enables users to navigate across a range of pages with optional boundary controls, sizes, variants, and disabled state."
          guideLink=""
          importLine='import { Pagination } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => <Pagination {...args} />,
};

export const Primary: Story = {
  args: {
    color: "primary",
  },
  render: (args) => <Pagination {...args} />,
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
  render: (args) => <Pagination {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Pagination {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <Stack gap="20px" alignItems="flex-start">
      <Pagination {...args} size="small" />
      <Pagination {...args} size="medium" />
      <Pagination {...args} size="large" />
    </Stack>
  ),
};

export const Variants: Story = {
  render: (args) => (
    <Stack gap="20px" alignItems="flex-start">
      <Pagination {...args} color="standard" variant="text" />
      <Pagination {...args} color="primary" variant="text" />
      <Pagination {...args} color="standard" variant="outlined" />
      <Pagination {...args} color="primary" variant="outlined" />
    </Stack>
  ),
};

export const WithoutBoundaryButtons: Story = {
  args: {
    showFirstButton: false,
    showLastButton: false,
  },
  render: (args) => <Pagination {...args} />,
};
