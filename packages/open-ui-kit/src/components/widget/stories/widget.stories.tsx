/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { Button } from "@/components/button";
import { Widget } from "../components/widget";
import type { IWidgetProps } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Widget> = {
  title: "Components/Widget",
  component: Widget,
  tags: ["autodocs"],
  args: {
    bodyElement: <>This is body element</>,
    label: "Widget title",
  },
  argTypes: {
    bodyElement: {
      control: false,
      description: "Content rendered in the widget body.",
    },
    headerChildren: {
      control: false,
      description: "Optional content rendered after the headline.",
    },
    headerLeftChildren: {
      control: false,
      description: "Optional content rendered before the headline.",
    },
    isEmpty: {
      control: "boolean",
      description: "Shows the empty state instead of body content.",
    },
    isHorizontal: {
      control: "boolean",
      description: "Uses the horizontal body layout.",
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading skeletons instead of body content.",
    },
    label: {
      control: "text",
      description: "Headline label rendered in the widget header.",
    },
    labelTooltip: {
      control: "text",
      description: "Optional tooltip content next to the label.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Widget"
          blurb="Widget is a versatile component that can be used to display various types of content, including headers and body elements. It supports loading states and empty states, making it suitable for dynamic data presentation."
          guideLink="#"
          importLine='import { Widget } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<IWidgetProps>;

const WidgetFrame = (props: IWidgetProps) => (
  <Stack width="301px">
    <Widget {...props} />
  </Stack>
);

export const Default: Story = {
  render: (args) => <WidgetFrame {...args} />,
};

export const Loading: Story = {
  render: (args) => <WidgetFrame {...args} />,
  args: {
    label: "Loading widget",
    isLoading: true,
  },
};

export const EmptyState: Story = {
  render: (args) => <WidgetFrame {...args} />,
  args: {
    label: "Empty widget",
    isEmpty: true,
  },
};

export const WithoutLabel: Story = {
  render: (args) => <WidgetFrame {...args} />,
  args: {
    label: undefined,
    isLoading: false,
    bodyElement: <>This is body element</>,
  },
};

export const WithTooltip: Story = {
  render: (args) => <WidgetFrame {...args} />,
  args: {
    isLoading: false,
    bodyElement: <>This is body element</>,
    label: "Widget title",
    labelTooltip: "Helpful widget context.",
  },
};

export const LabelAsElement: Story = {
  render: (args) => <WidgetFrame {...args} />,
  args: {
    isLoading: false,
    isEmpty: false,
    bodyElement: <>This is body element</>,
    label: <span>Label element</span>,
  },
};

export const HeaderSlots: Story = {
  render: (args) => <WidgetFrame {...args} />,
  args: {
    isLoading: false,
    isEmpty: false,
    bodyElement: <>This is body element</>,
    label: "Widget title",
    headerChildren: <Button>Action</Button>,
  },
};
