/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Spinner } from "../components/spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Spinners express an unspecified wait time or display the length of a process. Use the size prop to control dimensions."
          guideLink=""
          importLine='import { Spinner } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

const sizes = [
  { label: "Large", size: 40 },
  { label: "Medium", size: 24 },
  { label: "Small", size: 20 },
  { label: "Extra Small", size: 16 },
];

export const Sizes: Story = {
  name: "Sizes",
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
  name: "Primary",
  render: () => <Spinner size={40} color="primary" />,
};

export const SecondaryColor: Story = {
  name: "Secondary",
  render: () => <Spinner size={40} color="secondary" />,
};
