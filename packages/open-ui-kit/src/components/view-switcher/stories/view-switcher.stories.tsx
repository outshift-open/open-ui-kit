/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components";
import { Dashboard1, SettingsMenuProfile, User } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { ViewSwitcher } from "../components/view-switcher";

const noop = () => undefined;

const meta: Meta<typeof ViewSwitcher> = {
  title: "Components/ViewSwitcher",
  component: ViewSwitcher,
  tags: ["autodocs"],
  args: {
    disabled: false,
    fullWidth: false,
    options: ["Option 1", "Option 2", "Option 3"],
    size: "md",
    value: "Option 1",
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables every option in the view switcher.",
    },
    fullWidth: {
      control: "boolean",
      description: "Stretches the view switcher to fill its parent width.",
    },
    onChange: {
      action: "changed",
      table: { disable: true },
    },
    options: {
      control: "object",
      description: "String options or icon-only option objects.",
    },
    size: {
      control: "inline-radio",
      options: ["md", "sm"],
    },
    value: {
      control: "text",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="View Switcher"
          blurb="ViewSwitcher allows users to switch between different views or modes. It supports label and icon-only variants, two sizes, full-width layout, and disabled state."
          guideLink=""
          importLine='import { ViewSwitcher } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof ViewSwitcher>;

const labelOptions = ["Option 1", "Option 2", "Option 3"];
const iconOptions = [
  { icon: User, value: "user" },
  { icon: Dashboard1, value: "dashboard" },
  { icon: SettingsMenuProfile, value: "profile" },
] as const;

/* ─── Labels — Medium ─── */
const LabelsMediumStory = () => {
  const [value, setValue] = useState("Option 1");
  return (
    <ViewSwitcher options={labelOptions} value={value} onChange={setValue} />
  );
};

export const LabelsMedium: Story = {
  name: "Labels — Medium",
  render: () => <LabelsMediumStory />,
};

/* ─── Labels — Small ─── */
const LabelsSmallStory = () => {
  const [value, setValue] = useState("Option 1");
  return (
    <ViewSwitcher
      options={labelOptions}
      value={value}
      onChange={setValue}
      size="sm"
    />
  );
};

export const LabelsSmall: Story = {
  name: "Labels — Small",
  render: () => <LabelsSmallStory />,
};

/* ─── Icons — Medium ─── */
const IconsMediumStory = () => {
  const [value, setValue] = useState("user");
  return (
    <ViewSwitcher options={iconOptions} value={value} onChange={setValue} />
  );
};

export const IconsMedium: Story = {
  name: "Icons — Medium",
  render: () => <IconsMediumStory />,
};

/* ─── Icons — Small ─── */
const IconsSmallStory = () => {
  const [value, setValue] = useState("user");
  return (
    <ViewSwitcher
      options={iconOptions}
      value={value}
      onChange={setValue}
      size="sm"
    />
  );
};

export const IconsSmall: Story = {
  name: "Icons — Small",
  render: () => <IconsSmallStory />,
};

/* ─── Full Width ─── */
const FullWidthStory = () => {
  const [value, setValue] = useState("Option 1");
  return (
    <ViewSwitcher
      options={labelOptions}
      value={value}
      onChange={setValue}
      fullWidth
    />
  );
};

export const FullWidth: Story = {
  name: "Full Width",
  render: () => <FullWidthStory />,
};

/* ─── Disabled ─── */
export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <Stack spacing={2}>
      <ViewSwitcher
        options={labelOptions}
        value="Option 1"
        onChange={noop}
        disabled
      />
      <ViewSwitcher
        options={iconOptions}
        value="user"
        onChange={noop}
        disabled
      />
    </Stack>
  ),
};

export const States: Story = {
  name: "States",
  render: () => (
    <Stack spacing={2}>
      <ViewSwitcher options={labelOptions} value="Option 1" onChange={noop} />
      <ViewSwitcher options={labelOptions} value="Option 2" onChange={noop} />
      <ViewSwitcher
        options={labelOptions}
        value="Option 1"
        onChange={noop}
        disabled
      />
      <ViewSwitcher options={iconOptions} value="user" onChange={noop} />
      <ViewSwitcher options={iconOptions} value="dashboard" onChange={noop} />
      <ViewSwitcher
        options={iconOptions}
        value="user"
        onChange={noop}
        disabled
      />
    </Stack>
  ),
};
