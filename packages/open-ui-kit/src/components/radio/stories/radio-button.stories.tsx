/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { getStoryRadioHoverSx } from "../styles";
import { RadioButton, RadioGroup } from "../";
import type { RadioButtonProps } from "../types";

const noop = () => undefined;

const defaultArgs = {
  label: "Label",
  disabled: false,
  inputProps: {
    "aria-label": "Label",
  },
} satisfies RadioButtonProps;

const meta: Meta<RadioButtonProps> = {
  title: "Components/Radio Button",
  component: RadioButton,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    formControlLabelProps: {
      control: false,
    },
    inputProps: {
      control: false,
    },
    label: {
      control: "text",
    },
    name: {
      control: "text",
    },
    onChange: {
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
    docs: {
      page: () => (
        <DocsHeader
          title="Radio Button"
          blurb="Radio Button allows users to select exactly one option from a set. Use RadioGroup to manage selection state across multiple RadioButtons."
          guideLink=""
          includeStories={true}
          importLine='import { RadioButton, RadioGroup } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<RadioButtonProps>;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => <RadioButton {...args} />,
};

export const Checked: Story = {
  args: {
    ...defaultArgs,
    checked: true,
    onChange: noop,
  },
  render: (args) => <RadioButton {...args} />,
};

export const Hover: Story = {
  args: defaultArgs,
  render: (args) => <RadioButton {...args} sx={getStoryRadioHoverSx} />,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  render: (args) => <RadioButton {...args} />,
};

export const DisabledChecked: Story = {
  args: {
    ...defaultArgs,
    checked: true,
    disabled: true,
    onChange: noop,
  },
  render: (args) => <RadioButton {...args} />,
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
    inputProps: {
      "aria-label": "Unlabeled radio",
    },
  },
  render: (args) => <RadioButton {...args} />,
};

export const SmallSize: Story = {
  args: {
    ...defaultArgs,
    label: "Small",
    size: "small",
  },
  render: (args) => <RadioButton {...args} />,
};

const RadioGroupInteractive = () => {
  const [value, setValue] = useState("a");

  return (
    <RadioGroup
      value={value}
      onChange={(event) => setValue(event.target.value)}
    >
      <RadioButton label="Option A" value="a" />
      <RadioButton label="Option B" value="b" />
      <RadioButton label="Option C" value="c" />
    </RadioGroup>
  );
};

export const WithRadioGroup: Story = {
  render: () => <RadioGroupInteractive />,
};

export const States: Story = {
  render: () => (
    <Stack gap={1}>
      <Typography variant="body2">Unchecked</Typography>
      <RadioButton label="Default" />
      <RadioButton label="Hover" sx={getStoryRadioHoverSx} />
      <RadioButton label="Disabled" disabled />
      <Typography variant="body2" sx={{ pt: 1 }}>
        Checked
      </Typography>
      <RadioButton label="Default" checked onChange={noop} />
      <RadioButton label="Hover" checked onChange={noop} />
      <RadioButton label="Disabled" checked disabled onChange={noop} />
    </Stack>
  ),
};
