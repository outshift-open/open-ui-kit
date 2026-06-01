/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Toast } from "../components/toast";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const meta: Meta<typeof Toast> = {
  title: "Components/Toast/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Toast appears temporarily and floats above the UI to provide users with non-critical updates on app processes. Supports Default, Success, Error, Warning, and Info types."
          guideLink=""
          importLine='import { Toast, toast } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

const description =
  "Message description Lorem ip10m dolor 20t amet, 30ns ete tur 40 dipsci 50elitr";
const action = { label: "Button", onClick: noop };

/* ─── All types — with title ─── */
export const WithTitle: Story = {
  name: "With Title",
  render: () => (
    <Stack spacing={2} sx={{ width: "320px" }}>
      {(["default", "success", "error", "warning", "info"] as const).map(
        (type) => (
          <Toast
            key={type}
            id={type}
            type={type}
            title="Title"
            description={description}
            action={action}
          />
        ),
      )}
    </Stack>
  ),
};

/* ─── All types — no title ─── */
export const NoTitle: Story = {
  name: "No Title",
  render: () => (
    <Stack spacing={2} sx={{ width: "320px" }}>
      {(["default", "success", "error", "warning", "info"] as const).map(
        (type) => (
          <Toast
            key={type}
            id={type}
            type={type}
            description={description}
            action={action}
          />
        ),
      )}
    </Stack>
  ),
};

/* ─── Default ─── */
export const Default: Story = {
  name: "Default",
  render: () => (
    <Toast
      id="default"
      title="Title"
      description={description}
      action={action}
      sx={{ width: "320px" }}
    />
  ),
};

/* ─── Without close button ─── */
export const NoCloseButton: Story = {
  name: "No Close Button",
  render: () => (
    <Toast
      id="no-close"
      title="Title"
      description={description}
      showCloseButton={false}
      sx={{ width: "320px" }}
    />
  ),
};
