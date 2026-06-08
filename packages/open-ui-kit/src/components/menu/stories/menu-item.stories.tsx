/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter } from "react-router-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components";
import { MenuItem } from "..";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof MenuItem> = {
  title: "Components/Menu/MenuItem",
  component: MenuItem,
  args: {
    children: "Menu item",
    size: "large",
    destructive: false,
    disabled: false,
  },
  argTypes: {
    children: {
      control: "text",
      description: "Menu item label.",
    },
    destructive: {
      control: "boolean",
      description: "Applies destructive text color.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the menu item.",
    },
    href: {
      control: "text",
      description: "Optional link target.",
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
      description: "Visual size matching the design-system menu item sizes.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Menu Item"
          blurb="MenuItem creates menu choices as text items or optional links."
          guideLink="#"
          importLine={`import { MenuItem } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Default: Story = {};

export const LinkItem: Story = {
  render: (args) => (
    <BrowserRouter>
      <MenuItem {...args} />
    </BrowserRouter>
  ),
  args: {
    children: "Open documentation",
    href: "https://example.com",
  },
};

export const Sizes: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: "180px" }}>
      <MenuItem size="large">Large item</MenuItem>
      <MenuItem size="medium">Medium item</MenuItem>
      <MenuItem size="small">Small item</MenuItem>
    </Stack>
  ),
};
