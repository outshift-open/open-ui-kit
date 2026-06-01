/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { SearchInput } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof SearchInput> = {
  title: "Components/Search Input",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    onChangeCallback: fn(),
    onClear: fn(),
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="The Search Input component lets users type a search query. It includes a search icon, a placeholder, and a clear button that appears once the field has a value."
          guideLink=""
          importLine='import { SearchInput } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: "Value",
  },
};

function ControlledSearchInput(args: React.ComponentProps<typeof SearchInput>) {
  const [val, setVal] = useState("");
  return (
    <SearchInput
      {...args}
      value={val}
      onChangeCallback={(v) => {
        setVal(v);
        args.onChangeCallback?.(v);
      }}
      onClear={() => {
        setVal("");
        args.onClear?.();
      }}
    />
  );
}

export const Controlled: Story = {
  render: (args) => <ControlledSearchInput {...args} />,
  args: {},
};

export const Large: Story = {
  args: {
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Search",
  },
};
