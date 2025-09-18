import type { Meta, StoryObj } from "@storybook/react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import React from "react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          importLine="import { Select } from '@open-ui-kit/core';"
          blurb="Select is a component that allows users to choose from a list of options in a dropdown format. It can be used for various purposes, such as filtering or selecting items."
          guideLink=""
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const SelectTemplate = (args: SelectProps<string | string[]>) => (
  <FormControl>
    <InputLabel>Name</InputLabel>
    <Select {...args}>
      {[1, 2, 3].map((index) => (
        <MenuItem key={index} value={index}>
          Menu item {index}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const SingleSelect = (args: SelectProps) => {
  const [value, setValue] = React.useState("1");

  const onChange = (event: SelectChangeEvent<string | string[]>) => {
    setValue(event.target.value as string);
  };

  return SelectTemplate({ ...args, onChange, value, defaultValue: value });
};

const MultiSelect = (args: SelectProps) => {
  const [value, setValue] = React.useState(["1"]);

  const onChange = (event: SelectChangeEvent<string | string[]>) => {
    setValue(event.target.value as string[]);
  };

  return SelectTemplate({ ...args, onChange, value, defaultValue: value });
};

export const SingleSelectExample: Story = {
  render: SingleSelect,
  args: {
    variant: "standard",
    size: "small",
  },
  parameters: {
    // Sets the diffThreshold for 0.2 for a specific story.
    chromatic: { diffThreshold: 0.2 },
  },
};

export const MultiSelectExample: Story = {
  render: MultiSelect,
  args: {
    variant: "standard",
    size: "small",
    multiple: true,
  },
  parameters: {
    // Sets the diffThreshold for 0.2 for a specific story.
    chromatic: { diffThreshold: 0.2 },
  },
};
