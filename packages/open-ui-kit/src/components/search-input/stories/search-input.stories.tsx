/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Box } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  getStorySearchInputFocusedSx,
  getStorySearchInputHoverSx,
} from "../styles";
import { SearchInput } from "../";
import type { SearchInputProps } from "../types";

const fieldWidth = { xs: "min(360px, 100%)", sm: "360px" } as const;

const defaultArgs = {
  onChangeCallback: fn(),
  onClear: fn(),
  sx: { width: fieldWidth },
} satisfies SearchInputProps;

const toSxArray = (sx: SearchInputProps["sx"]) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

const meta: Meta<SearchInputProps> = {
  title: "Components/Search Input",
  component: SearchInput,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    disabled: {
      control: "boolean",
    },
    extendEndAdornment: {
      control: false,
    },
    inputProps: {
      control: false,
    },
    onChange: {
      control: false,
    },
    onChangeCallback: {
      control: false,
    },
    onClear: {
      control: false,
    },
    placeholder: {
      control: "text",
    },
    size: {
      control: "inline-radio",
      options: ["medium", "small"],
    },
    slotProps: {
      control: false,
    },
    sx: {
      control: false,
    },
    value: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.vars.baseBackgroundStrong,
          boxSizing: "border-box",
          color: theme.palette.vars.baseTextDefault,
          p: 3,
          width: "100%",
        })}
      >
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Search Input"
          blurb="The Search Input component lets users type a search query. It includes a search icon, a placeholder, and a clear button that appears once the field has a value."
          guideLink=""
          includeStories={true}
          importLine='import { SearchInput } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<SearchInputProps>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => <SearchInput {...args} />,
};

export const Hover: Story = {
  args: defaultArgs,
  render: (args) => (
    <SearchInput
      {...args}
      sx={[...toSxArray(args.sx), getStorySearchInputHoverSx]}
    />
  ),
};

export const Focused: Story = {
  args: {
    ...defaultArgs,
    value: "Search",
  },
  render: (args) => (
    <SearchInput
      {...args}
      sx={[...toSxArray(args.sx), getStorySearchInputFocusedSx]}
    />
  ),
};

export const WithValue: Story = {
  args: {
    ...defaultArgs,
    value: "Value",
  },
  render: (args) => <SearchInput {...args} />,
};

export const Small: Story = {
  args: {
    ...defaultArgs,
    size: "small",
  },
  render: (args) => <SearchInput {...args} />,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
    value: "Search",
  },
  render: (args) => <SearchInput {...args} />,
};

function ControlledSearchInput(args: SearchInputProps) {
  const [value, setValue] = useState("");

  return (
    <SearchInput
      {...args}
      value={value}
      onChangeCallback={(nextValue) => {
        setValue(nextValue);
        args.onChangeCallback?.(nextValue);
      }}
      onClear={() => {
        setValue("");
        args.onClear?.();
      }}
    />
  );
}

export const Controlled: Story = {
  args: defaultArgs,
  render: (args) => <ControlledSearchInput {...args} />,
};

export const WithEndAdornment: Story = {
  args: {
    ...defaultArgs,
    extendEndAdornment: (
      <Box
        aria-hidden
        sx={(theme) => ({
          ...theme.typography.caption,
          color: theme.palette.vars.baseTextWeak,
          px: 0.5,
        })}
      >
        /
      </Box>
    ),
    value: "Value",
  },
  render: (args) => <SearchInput {...args} />,
};
