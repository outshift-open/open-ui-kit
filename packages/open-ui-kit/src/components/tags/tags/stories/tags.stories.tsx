/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@mui/material";
import { GeneralSize } from "@/common";
import { AWSIcon, AZUREIcon, GCPIcon } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Tags } from "..";
import type { SelectNodeType } from "@/components/nested-menu";

const cloudTags = [
  {
    icon: AWSIcon,
    isSelectable: true,
    nodeKey: "aws",
    value: "AWS",
  },
  {
    icon: AZUREIcon,
    isSelectable: true,
    nodeKey: "azure",
    value: "Azure",
  },
  {
    icon: GCPIcon,
    isSelectable: true,
    nodeKey: "gcp",
    value: "Google Cloud",
  },
] satisfies SelectNodeType[];

const longTags = [
  {
    icon: AWSIcon,
    isSelectable: true,
    nodeKey: "production-us-east",
    value: "Production workspace in us-east-1",
  },
  {
    icon: AZUREIcon,
    isSelectable: true,
    nodeKey: "staging-west-europe",
    value: "Staging workspace in West Europe",
  },
  {
    icon: GCPIcon,
    isSelectable: true,
    nodeKey: "analytics-warehouse",
    value: "Analytics warehouse shared environment",
  },
] satisfies SelectNodeType[];

const handleStoryDelete = () => undefined;

const meta = {
  title: "Components/Tags/Tags",
  component: Tags,
  tags: ["autodocs"],
  args: {
    items: cloudTags,
    showOnlyFirst: false,
    shouldTruncate: false,
    size: GeneralSize.Small,
  },
  argTypes: {
    maxTooltipTags: {
      control: { type: "number", min: 1 },
      description: "Maximum visible tags before the remaining tags collapse.",
    },
    shouldTruncate: {
      control: "boolean",
      description: "Truncates long labels and keeps full values in tooltips.",
    },
    showOnlyFirst: {
      control: "boolean",
      description: "Shows the first tag plus a count for remaining tags.",
    },
    size: {
      control: "select",
      options: Object.values(GeneralSize),
      description: "Size passed to each Tag.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Tags"
          blurb="Tags renders a compact collection of Tag chips, including first-item summaries, overflow counts, truncation, and deletion callbacks."
          guideLink=""
          importLine='import { Tags } from "@open-ui-kit/core";'
        />
      ),
    },
  },
} satisfies Meta<typeof Tags>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ShowOnlyFirst: Story = {
  args: {
    showOnlyFirst: true,
  },
};

export const Truncated: Story = {
  args: {
    items: longTags,
    shouldTruncate: true,
    showOnlyFirst: false,
  },
  render: (args) => (
    <Stack sx={{ maxWidth: 260 }}>
      <Tags {...args} />
    </Stack>
  ),
};

export const OverflowCount: Story = {
  args: {
    items: longTags,
    maxTooltipTags: 2,
    showOnlyFirst: false,
  },
};

export const Removable: Story = {
  args: {
    handleDelete: handleStoryDelete,
    showOnlyFirst: false,
  },
};

export const CustomLabels: Story = {
  args: {
    customizeLabel: (node) => String(node.value).toUpperCase(),
    customizeTooltip: (node) => (
      <Typography variant="caption">{node.value} environment</Typography>
    ),
    showOnlyFirst: false,
  },
};
