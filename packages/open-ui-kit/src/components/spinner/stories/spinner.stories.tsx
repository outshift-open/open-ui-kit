/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Spinner } from "../components/spinner";

const meta = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  args: {
    color: "primary",
    size: 40,
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "inherit"],
      description: "Spinner color variant.",
    },
    size: {
      control: "number",
      description: "Spinner diameter in pixels.",
    },
    sx: {
      control: "object",
      description: "Style overrides merged after internal progress styles.",
    },
    boxProps: {
      control: "object",
      description: "Props forwarded to the wrapping Box.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Spinner"
          blurb="Spinners express an unspecified wait time or display the length of a process. Use the size prop to control dimensions."
          guideLink=""
          importLine='import { Spinner } from "@open-ui-kit/core";'
        />
      ),
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

const sizes = [
  { label: "Large", size: 40 },
  { label: "Medium", size: 24 },
  { label: "Small", size: 20 },
  { label: "Extra Small", size: 16 },
];

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={4} alignItems="center">
      {sizes.map(({ label, size }) => (
        <Stack key={size} spacing={1} alignItems="center">
          <Spinner size={size} />
          <Typography
            variant="caption"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            {label}
          </Typography>
        </Stack>
      ))}
    </Stack>
  ),
};

export const PrimaryColor: Story = {
  args: { color: "primary", size: 40 },
};

export const SecondaryColor: Story = {
  args: { color: "secondary", size: 40 },
};
