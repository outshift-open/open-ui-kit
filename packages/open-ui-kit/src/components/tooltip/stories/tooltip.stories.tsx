/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Button } from "@/components/button";
import { Tooltip } from "../components/tooltip";
import { TooltipSize } from "../types";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tooltips display informative text when users hover over, focus on, or tap an element. Two sizes are available: Medium (compact) and Large."
          guideLink=""
          importLine='import { Tooltip } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const TriggerChip = ({ label }: { label: string }) => (
  <Box
    component="span"
    sx={(theme) => ({
      display: "inline-flex",
      alignItems: "center",
      padding: "2px 8px",
      borderRadius: "4px",
      backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
      cursor: "default",
    })}
  >
    <Typography
      variant="caption"
      sx={(theme) => ({
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
      })}
    >
      {label}
    </Typography>
  </Box>
);

/* ─── Size Medium — all positions ─── */
export const SizeMedium: Story = {
  name: "Size M",
  render: () => (
    <Stack spacing={3} alignItems="flex-start" sx={{ p: 8 }}>
      {(
        [
          "top-start",
          "top",
          "top-end",
          "bottom-start",
          "bottom",
          "bottom-end",
          "left",
          "right",
        ] as const
      ).map((placement) => (
        <Tooltip
          key={placement}
          title={placement}
          placement={placement}
          arrow
          open
        >
          <TriggerChip label={placement} />
        </Tooltip>
      ))}
    </Stack>
  ),
};

/* ─── Size Large — all positions ─── */
export const SizeLarge: Story = {
  name: "Size L",
  render: () => (
    <Stack spacing={3} alignItems="flex-start" sx={{ p: 8 }}>
      {(
        [
          "top-start",
          "top",
          "top-end",
          "bottom-start",
          "bottom",
          "bottom-end",
          "left",
          "right",
        ] as const
      ).map((placement) => (
        <Tooltip
          key={placement}
          title={placement}
          placement={placement}
          size={TooltipSize.Large}
          arrow
          open
        >
          <TriggerChip label={placement} />
        </Tooltip>
      ))}
    </Stack>
  ),
};

/* ─── Interactive ─── */
export const Interactive: Story = {
  name: "Interactive",
  render: () => (
    <Stack direction="row" spacing={4} sx={{ p: 4 }}>
      <Tooltip title="Medium tooltip" arrow>
        <Button variant="secondary">Hover me (M)</Button>
      </Tooltip>
      <Tooltip title="Large tooltip" size={TooltipSize.Large} arrow>
        <Button variant="secondary">Hover me (L)</Button>
      </Tooltip>
    </Stack>
  ),
};
