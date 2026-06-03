/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { forwardRef, type HTMLAttributes } from "react";
import { Box, Stack, Typography } from "@/components";
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

const TriggerChip = forwardRef<
  HTMLSpanElement,
  { label: string } & HTMLAttributes<HTMLSpanElement>
>(({ label, ...props }, ref) => (
  <Box
    ref={ref}
    component="span"
    {...props}
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
));

TriggerChip.displayName = "TriggerChip";

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

/* ─── Interactive — hover the button to trigger the tooltip ─── */
export const Interactive: Story = {
  name: "Interactive",
  args: {
    title: "Tooltip text",
    placement: "top",
    size: TooltipSize.Medium,
    arrow: true,
  },
  argTypes: {
    title: { control: "text" },
    placement: {
      control: "select",
      options: [
        "top-start",
        "top",
        "top-end",
        "bottom-start",
        "bottom",
        "bottom-end",
        "left",
        "right",
      ],
    },
    size: {
      control: "radio",
      options: [TooltipSize.Medium, TooltipSize.Large],
    },
    arrow: { control: "boolean" },
    // Exclude controlled-mode props so MUI uses uncontrolled hover behaviour
    open: { table: { disable: true } },
    onClose: { table: { disable: true } },
    onOpen: { table: { disable: true } },
  },
  render: ({ open, ...args }) => {
    void open;

    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 8, minHeight: "200px" }}
      >
        <Tooltip {...args}>
          <Button variant="secondary">Hover me</Button>
        </Tooltip>
      </Stack>
    );
  },
};
