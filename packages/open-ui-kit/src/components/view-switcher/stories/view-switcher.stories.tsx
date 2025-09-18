import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { Dashboard1, SettingsMenuProfile, User } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { ViewSwitcher } from "../components/view-switcher";

const meta: Meta<typeof ViewSwitcher> = {
  decorators: [(story) => <Stack>{story()}</Stack>],
  title: "Components/ViewSwitcher",
  component: ViewSwitcher,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="ViewSwitcher allows users to switch between different views or modes in an application. It can be used to toggle between different layouts, data representations, or functionalities."
          guideLink=""
          importLine='import { ViewSwitcher } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ViewSwitcher>;

export const SizeMedium: Story = {
  args: { value: "Option 1" },
  render: function Render(args) {
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedView, setSelectedView] = useState(args.value);
    useEffect(() => setSelectedView(args.value), [setSelectedView, args.value]);
    return (
      <ViewSwitcher
        {...args}
        onChange={(value) => setSelectedView(value)}
        options={options}
        value={selectedView}
      />
    );
  },
};

export const SizeSmall: Story = {
  args: { value: "Option 1", size: "sm" },
  render: function Render(args) {
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedView, setSelectedView] = useState(args.value);
    useEffect(() => setSelectedView(args.value), [setSelectedView, args.value]);
    return (
      <ViewSwitcher
        {...args}
        onChange={(value) => setSelectedView(value)}
        options={options}
        value={selectedView}
      />
    );
  },
};

export const FullWidth: Story = {
  args: { value: "Option 1", fullWidth: true },
  render: function Render(args) {
    const options = ["Option 1", "Option 2", "Option 3"];
    const [selectedView, setSelectedView] = useState(args.value);
    useEffect(() => setSelectedView(args.value), [setSelectedView, args.value]);
    return (
      <ViewSwitcher
        {...args}
        onChange={(value) => setSelectedView(value)}
        options={options}
        value={selectedView}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    value: "Option 1",
    disabled: true,
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export const IconOnlyMedium: Story = {
  args: { value: "user" },
  render: function Render(args) {
    const options = [
      {
        icon: User,
        value: "user",
      },
      {
        icon: Dashboard1,
        value: "dashboard",
      },
      {
        icon: SettingsMenuProfile,
        value: "menuProfile",
      },
    ];
    const [selectedView, setSelectedView] = useState(args.value);
    useEffect(() => setSelectedView(args.value), [setSelectedView, args.value]);
    return (
      <ViewSwitcher
        {...args}
        onChange={(value) => setSelectedView(value)}
        options={options}
        value={selectedView}
      />
    );
  },
};

export const IconOnlySmall: Story = {
  args: { value: "user", size: "sm" },
  render: function Render(args) {
    const options = [
      {
        icon: User,
        value: "user",
      },
      {
        icon: Dashboard1,
        value: "dashboard",
      },
      {
        icon: SettingsMenuProfile,
        value: "menuProfile",
      },
    ];
    const [selectedView, setSelectedView] = useState(args.value);
    useEffect(() => setSelectedView(args.value), [setSelectedView, args.value]);
    return (
      <ViewSwitcher
        {...args}
        onChange={(value) => setSelectedView(value)}
        options={options}
        value={selectedView}
      />
    );
  },
};
