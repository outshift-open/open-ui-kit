/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Toast } from "../components/toast";
import type { ToastProps, ToastType } from "../types";

const description =
  "Message description Lorem ip10m dolor 20t amet, 30ns ete tur 40 dipsci 50elitr";
const action = { label: "Button", onClick: () => undefined };

const meta = {
  title: "Components/Toast/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    id: "default",
    type: "default",
    title: "Title",
    description,
    showCloseButton: true,
    useNativeClose: true,
    action,
  },
  argTypes: {
    id: { table: { disable: true } },
    type: {
      control: "select",
      options: ["default", "success", "error", "warning", "info"],
    },
    title: { control: "text" },
    description: { control: "text" },
    showCloseButton: { control: "boolean" },
    useNativeClose: { control: "boolean" },
    action: { control: false },
    customActions: { control: false },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Toast"
          blurb="Toast appears temporarily and floats above the UI to provide users with non-critical updates on app processes. Supports Default, Success, Error, Warning, and Info types."
          guideLink=""
          importLine='import { Toast, toast } from "@open-ui-kit/core";'
        />
      ),
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    id: "default",
  },
};

export const WithoutTitle: Story = {
  args: {
    id: "without-title",
    title: undefined,
  },
};

export const Success: Story = {
  args: {
    id: "success",
    type: "success",
  },
};

export const Error: Story = {
  args: {
    id: "error",
    type: "error",
  },
};

export const Warning: Story = {
  args: {
    id: "warning",
    type: "warning",
  },
};

export const Info: Story = {
  args: {
    id: "info",
    type: "info",
  },
};

export const WithoutCloseButton: Story = {
  args: {
    id: "without-close",
    showCloseButton: false,
  },
};

export const WithoutAction: Story = {
  args: {
    id: "without-action",
    action: undefined,
  },
};

export const AllTypes: Story = {
  render: (args: ToastProps) => (
    <Stack spacing={2} sx={{ width: "320px" }}>
      {(["default", "success", "error", "warning", "info"] as ToastType[]).map(
        (type) => (
          <Toast {...args} key={type} id={`all-types-${type}`} type={type} />
        ),
      )}
    </Stack>
  ),
};

export const AllTypesWithoutTitle: Story = {
  args: {
    title: undefined,
  },
  render: (args: ToastProps) => (
    <Stack spacing={2} sx={{ width: "320px" }}>
      {(["default", "success", "error", "warning", "info"] as ToastType[]).map(
        (type) => (
          <Toast
            {...args}
            key={type}
            id={`all-types-without-title-${type}`}
            type={type}
          />
        ),
      )}
    </Stack>
  ),
};
