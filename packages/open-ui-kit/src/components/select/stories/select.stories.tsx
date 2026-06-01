/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Select } from "../";
import type { SelectChangeEvent } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const MENU_ITEMS = [
  "Menu item 1",
  "Menu item 2",
  "Menu item 3",
  "Menu item 4",
  "Menu item 5",
  "Menu item 6",
  "Menu item 7",
];

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Select allows users to choose one or multiple options from a dropdown list. Supports single and multi-select, sizes, error and disabled states."
          guideLink=""
          importLine='import { Select } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

function SingleSelectStory(args: React.ComponentProps<typeof Select>) {
  const [value, setValue] = React.useState("Menu item 1");
  return (
    <FormControl sx={{ minWidth: 280 }}>
      <InputLabel>Label</InputLabel>
      <Select
        {...args}
        value={value}
        onChange={(e: SelectChangeEvent<unknown>) =>
          setValue(e.target.value as string)
        }
      >
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

function MultiSelectStory(args: React.ComponentProps<typeof Select>) {
  const [value, setValue] = React.useState<string[]>([
    "Menu item 1",
    "Menu item 2",
  ]);
  return (
    <FormControl sx={{ minWidth: 280 }}>
      <InputLabel>Label</InputLabel>
      <Select
        {...args}
        multiple
        value={value}
        onChange={(e: SelectChangeEvent<unknown>) =>
          setValue(e.target.value as string[])
        }
        renderValue={(selected) =>
          (selected as string[])
            .map((v) => v.replace("Menu item ", "Tag "))
            .join(", ")
        }
      >
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export const SingleSelectLarge: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: { size: "medium" },
};

export const SingleSelectMedium: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: { size: "small" },
};

export const MultiSelectLarge: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: { size: "medium" },
};

export const MultiSelectMedium: Story = {
  render: (args) => <MultiSelectStory {...args} />,
  args: { size: "small" },
};

export const ErrorState: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: { size: "medium", error: true },
};

export const Disabled: Story = {
  render: (args) => <SingleSelectStory {...args} />,
  args: { size: "medium", disabled: true },
};
