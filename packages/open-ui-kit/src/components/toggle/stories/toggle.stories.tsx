/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Toggle } from "../components/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Toggle (Switch) allows users to turn a setting on or off. Supports checked, unchecked, and disabled states."
          guideLink=""
          importLine='import { Toggle } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const StateLabel = ({ children }: { children: string }) => (
  <Typography
    variant="body2"
    sx={(theme) => ({
      color: theme.palette.vars.baseTextDefault,
      minWidth: "80px",
    })}
  >
    {children}
  </Typography>
);

/* ─── States — matches Figma "States" section ─── */
export const States: Story = {
  name: "States",
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={4}>
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.vars.baseTextWeak,
            minWidth: "80px",
          })}
        />
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.vars.baseTextWeak,
            width: "80px",
            textAlign: "center",
          })}
        >
          Default
        </Typography>
        <Typography
          variant="caption"
          sx={(theme) => ({
            color: theme.palette.vars.baseTextWeak,
            width: "80px",
            textAlign: "center",
          })}
        >
          Disabled
        </Typography>
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <StateLabel>Unchecked</StateLabel>
        <Box sx={{ width: "80px", display: "flex", justifyContent: "center" }}>
          <Toggle />
        </Box>
        <Box sx={{ width: "80px", display: "flex", justifyContent: "center" }}>
          <Toggle disabled />
        </Box>
      </Stack>
      <Stack direction="row" spacing={4} alignItems="center">
        <StateLabel>Checked</StateLabel>
        <Box sx={{ width: "80px", display: "flex", justifyContent: "center" }}>
          <Toggle defaultChecked />
        </Box>
        <Box sx={{ width: "80px", display: "flex", justifyContent: "center" }}>
          <Toggle defaultChecked disabled />
        </Box>
      </Stack>
    </Stack>
  ),
};

/* ─── With Label ─── */
export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <Stack spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Toggle defaultChecked />
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          Label
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Toggle />
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          Label
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Toggle defaultChecked disabled />
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.vars.baseTextWeak })}
        >
          Label
        </Typography>
      </Stack>
    </Stack>
  ),
};
