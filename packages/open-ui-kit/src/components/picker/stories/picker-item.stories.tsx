/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { PickerItem } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const SIZES = ["large", "medium", "small"] as const;
const DISPLAYS = ["vertical", "horizontal"] as const;
const STATES = [
  { key: "default", props: {} },
  { key: "selected", props: { selected: true } },
  { key: "disabled", props: { disabled: true } },
] as const;

const meta: Meta<typeof PickerItem> = {
  title: "Components/Picker",
  component: PickerItem,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Picker Item"
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
  argTypes: {
    icon: {
      control: false,
      description: "Icon rendered before or above the label.",
    },
    label: {
      control: "text",
      description: "Visible picker item label.",
    },
    size: {
      control: "select",
      options: SIZES,
      description: "Picker item size.",
    },
    display: {
      control: "select",
      options: DISPLAYS,
      description: "Vertical or horizontal icon and label layout.",
    },
    selected: {
      control: "boolean",
      description: "Shows the selected border state.",
    },
    disabled: {
      control: "boolean",
      description: "Disables interaction and applies muted tokens.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PickerItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const Hover: Story = {
  args: {
    sx: (theme) => ({
      borderColor: theme.palette.vars.interactiveTertiaryHover,
      "& .picker-icon": {
        color: theme.palette.vars.controlIconStrong,
      },
      "& .picker-label": {
        color: theme.palette.vars.baseTextStrong,
      },
    }),
  },
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

export const Sizes: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {SIZES.map((size) => (
        <PickerItem key={size} icon={<AppsIcon />} label="Text" size={size} />
      ))}
    </Box>
  ),
};

export const Layouts: Story = {
  render: () => (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      {DISPLAYS.map((display) => (
        <PickerItem
          key={display}
          icon={<AppsIcon />}
          label="Text"
          display={display}
        />
      ))}
    </Box>
  ),
};

export const States: Story = {
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {DISPLAYS.map((display) => (
        <Box key={display} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {STATES.map((state) => (
            <PickerItem
              key={`${display}-${state.key}`}
              icon={<AppsIcon />}
              label="Text"
              display={display}
              {...state.props}
            />
          ))}
        </Box>
      ))}
    </Box>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {SIZES.map((size) => (
        <Box key={size} sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {DISPLAYS.map((display) =>
            STATES.map((state) => (
              <PickerItem
                key={`${size}-${display}-${state.key}`}
                icon={<AppsIcon />}
                label="Text"
                size={size}
                display={display}
                {...state.props}
              />
            )),
          )}
        </Box>
      ))}
    </Box>
  ),
};
