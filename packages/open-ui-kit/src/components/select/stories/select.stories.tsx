/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { GeneralSize } from "@/common";
import { Box, MenuItem, Stack, Tag, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { getStorySelectFocusedSx, getStorySelectHoverSx } from "../styles";
import { Select, type SelectChangeEvent, type SelectProps } from "../";

const menuItems = [
  "Menu item",
  "Menu item 2",
  "Menu item 3",
  "Menu item 4",
  "Menu item 5",
  "Menu item 6",
];

const fieldWidth = { xs: "min(285px, 100%)", sm: "285px" } as const;

const defaultArgs = {
  clearable: true,
  displayEmpty: true,
  onChange: fn(),
  onClear: fn(),
  sx: { width: fieldWidth },
  value: "",
} satisfies SelectProps<string>;

const toSxArray = (sx: SelectProps["sx"]) =>
  Array.isArray(sx) ? sx : sx ? [sx] : [];

const toSingleSelectProps = (args: SelectProps): SelectProps<string> =>
  args as SelectProps<string>;

const toMultipleSelectProps = (args: SelectProps): SelectProps<string[]> =>
  args as SelectProps<string[]>;

const renderSingleValue = (selected: unknown) =>
  selected ? String(selected) : "Placeholder text";

const renderTagValue = (selected: unknown) => {
  const values = Array.isArray(selected) ? selected : [];

  return (
    <Stack direction="row" spacing={0.5} sx={{ overflow: "hidden" }}>
      {values.map((value) => (
        <Tag
          key={String(value)}
          size={GeneralSize.Medium}
          onDelete={() => undefined}
        >
          {String(value)}
        </Tag>
      ))}
    </Stack>
  );
};

const FieldShell = ({ children }: { children: ReactNode }) => (
  <Stack spacing={0.5} sx={{ width: fieldWidth }}>
    <Typography
      variant="subtitle2"
      sx={(theme) => ({
        color: theme.palette.vars.baseTextDefault,
      })}
    >
      Label
    </Typography>
    {children}
  </Stack>
);

const renderMenuOptions = () =>
  menuItems.map((item) => (
    <MenuItem key={item} value={item}>
      {item}
    </MenuItem>
  ));

function SingleSelectDemo(args: SelectProps<string>) {
  const [value, setValue] = useState(String(args.value ?? ""));

  useEffect(() => {
    setValue(String(args.value ?? ""));
  }, [args.value]);

  return (
    <FieldShell>
      <Select<string>
        {...args}
        value={value}
        onChange={(event: SelectChangeEvent<string>, child) => {
          setValue(event.target.value);
          args.onChange?.(event, child);
        }}
        onClear={() => {
          setValue("");
          args.onClear?.();
        }}
        renderValue={renderSingleValue}
      >
        {renderMenuOptions()}
      </Select>
    </FieldShell>
  );
}

function MultipleSelectDemo(args: SelectProps<string[]>) {
  const [value, setValue] = useState<string[]>(
    Array.isArray(args.value) ? args.value : ["Tag", "Tag 2"],
  );

  useEffect(() => {
    if (Array.isArray(args.value)) {
      setValue(args.value);
    }
  }, [args.value]);

  return (
    <FieldShell>
      <Select<string[]>
        {...args}
        multiple
        value={value}
        onChange={(event: SelectChangeEvent<string[]>, child) => {
          setValue(event.target.value as string[]);
          args.onChange?.(event, child);
        }}
        renderValue={renderTagValue}
      >
        {renderMenuOptions()}
      </Select>
    </FieldShell>
  );
}

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    children: {
      control: false,
    },
    clearable: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    displayEmpty: {
      control: "boolean",
    },
    endAdornment: {
      control: false,
    },
    error: {
      control: "boolean",
    },
    MenuProps: {
      control: false,
    },
    multiple: {
      control: "boolean",
    },
    onChange: {
      control: false,
    },
    onClear: {
      control: false,
    },
    renderValue: {
      control: false,
    },
    size: {
      control: "inline-radio",
      options: ["medium", "small"],
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
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Select"
          blurb="Select allows users to choose one or multiple options from a dropdown list. It supports selected, disabled, error, open, clearable, and size states."
          guideLink=""
          includeStories
          importLine='import { Select } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => <SingleSelectDemo {...toSingleSelectProps(args)} />,
};

export const Hover: Story = {
  args: defaultArgs,
  render: (args) => {
    const selectArgs = toSingleSelectProps(args);

    return (
      <SingleSelectDemo
        {...selectArgs}
        sx={[...toSxArray(selectArgs.sx), getStorySelectHoverSx]}
      />
    );
  },
};

export const Focused: Story = {
  args: {
    ...defaultArgs,
    value: "Menu item",
  },
  render: (args) => {
    const selectArgs = toSingleSelectProps(args);

    return (
      <SingleSelectDemo
        {...selectArgs}
        sx={[...toSxArray(selectArgs.sx), getStorySelectFocusedSx]}
      />
    );
  },
};

export const Activated: Story = {
  args: {
    ...defaultArgs,
    value: "Menu item",
  },
  render: (args) => <SingleSelectDemo {...toSingleSelectProps(args)} />,
};

export const ErrorState: Story = {
  args: {
    ...defaultArgs,
    error: true,
    value: "Menu item",
  },
  render: (args) => <SingleSelectDemo {...toSingleSelectProps(args)} />,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    clearable: false,
    disabled: true,
    value: "",
  },
  render: (args) => <SingleSelectDemo {...toSingleSelectProps(args)} />,
};

export const Multiple: Story = {
  args: {
    ...defaultArgs,
    multiple: true,
    value: ["Tag", "Tag 2"],
  },
  render: (args) => <MultipleSelectDemo {...toMultipleSelectProps(args)} />,
};

export const Sizes: Story = {
  args: defaultArgs,
  render: (args) => {
    const selectArgs = toSingleSelectProps(args);

    return (
      <Stack spacing={2}>
        <SingleSelectDemo {...selectArgs} size="medium" />
        <SingleSelectDemo {...selectArgs} size="small" />
      </Stack>
    );
  },
};
