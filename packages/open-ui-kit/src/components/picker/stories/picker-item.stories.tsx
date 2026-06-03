/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@/components";
import AppsIcon from "@mui/icons-material/Apps";
import { PickerItem } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof PickerItem> = {
  title: "Components/Picker",
  component: PickerItem,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Picker Item is a selectable tile with an icon and label. It supports vertical and horizontal layouts, three sizes, and selected and disabled states."
          guideLink=""
          importLine='import { PickerItem } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  args: {
    icon: <AppsIcon />,
    label: "Text",
    size: "medium",
    display: "vertical",
  },
};

export default meta;

type Story = StoryObj<typeof PickerItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const Hover: Story = {
  args: {},
  parameters: {
    pseudo: { hover: true },
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const HorizontalLayout: Story = {
  args: { display: "horizontal" },
};

export const SizeLarge: Story = {
  args: { size: "large" },
};

export const SizeSmall: Story = {
  args: { size: "small" },
};

const SIZES = ["large", "medium", "small"] as const;

export const AllStates: Story = {
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      {SIZES.map((size) => (
        <Box key={size}>
          <Box sx={{ mb: 1, fontSize: 12, color: "text.secondary" }}>
            {size}
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <PickerItem
              icon={<AppsIcon />}
              label="Text"
              size={size}
              display="vertical"
            />
            <PickerItem
              icon={<AppsIcon />}
              label="Text"
              size={size}
              display="vertical"
              selected
            />
            <PickerItem
              icon={<AppsIcon />}
              label="Text"
              size={size}
              display="vertical"
              disabled
            />
            <PickerItem
              icon={<AppsIcon />}
              label="Text"
              size={size}
              display="horizontal"
            />
            <PickerItem
              icon={<AppsIcon />}
              label="Text"
              size={size}
              display="horizontal"
              selected
            />
            <PickerItem
              icon={<AppsIcon />}
              label="Text"
              size={size}
              display="horizontal"
              disabled
            />
          </Box>
        </Box>
      ))}
    </Box>
  ),
};
