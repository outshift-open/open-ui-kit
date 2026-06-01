/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { RadioButton, RadioGroup } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const meta: Meta<typeof RadioButton> = {
  title: "Components/Radio Button",
  component: RadioButton,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Radio Button allows users to select exactly one option from a set. Use RadioGroup to manage selection state across multiple RadioButtons."
          guideLink=""
          importLine='import { RadioButton, RadioGroup } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: "Label" },
};

export const Checked: Story = {
  args: { label: "Label", checked: true, onChange: noop },
};

export const Disabled: Story = {
  args: { label: "Label", disabled: true },
};

export const DisabledChecked: Story = {
  args: { label: "Label", disabled: true, checked: true, onChange: noop },
};

export const WithoutLabel: Story = {
  args: {},
};

export const AllStates: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      <RadioButton label="Default" />
      <RadioButton label="Checked" checked onChange={noop} />
      <RadioButton label="Disabled" disabled />
      <RadioButton label="Disabled checked" disabled checked onChange={noop} />
    </Stack>
  ),
};

const RadioGroupInteractive = () => {
  const [value, setValue] = useState("a");
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
      <RadioButton label="Option A" value="a" />
      <RadioButton label="Option B" value="b" />
      <RadioButton label="Option C" value="c" />
    </RadioGroup>
  );
};

export const WithRadioGroup: Story = {
  render: () => <RadioGroupInteractive />,
};

export const SmallSize: Story = {
  args: { label: "Small", size: "small" },
};
