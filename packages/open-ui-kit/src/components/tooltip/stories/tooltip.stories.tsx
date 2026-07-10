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
import { TooltipSize, type TooltipProps } from "../types";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Tooltip"
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

/** Narrow anchor so start/center/end placements are visually distinct from the tooltip. */
const ANCHOR_WIDTH = 48;
const DEMO_TOOLTIP_TITLE = "Tooltip text";

const placementGroups = [
  ["top-start", "top", "top-end"],
  ["bottom-start", "bottom", "bottom-end"],
] as const;

/** Right anchor on the left; left anchor on the right — room for both sides. */
const horizontalPlacements = ["right", "left"] as const;

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
      justifyContent: "center",
      width: ANCHOR_WIDTH,
      padding: "2px 0",
      borderRadius: "4px",
      backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
      cursor: "default",
      boxSizing: "border-box",
    })}
  >
    <Typography
      variant="caption"
      noWrap
      sx={(theme) => ({
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
        maxWidth: "100%",
        textAlign: "center",
      })}
    >
      {label}
    </Typography>
  </Box>
));

TriggerChip.displayName = "TriggerChip";

const PlacementDemo = ({
  placement,
  size,
}: {
  placement: NonNullable<TooltipProps["placement"]>;
  size: TooltipSize;
}) => (
  <Stack spacing={1} alignItems="center">
    <Tooltip
      title={DEMO_TOOLTIP_TITLE}
      placement={placement}
      size={size}
      arrow
      open
    >
      <TriggerChip label={placement} />
    </Tooltip>
    <Typography variant="caption" color="text.secondary">
      {placement}
    </Typography>
  </Stack>
);

const PlacementShowcase = ({
  size = TooltipSize.Medium,
}: {
  size?: TooltipSize;
}) => (
  <Stack spacing={6} sx={{ p: 8 }}>
    {placementGroups.map((group) => (
      <Stack
        key={group.join("-")}
        direction="row"
        spacing={8}
        alignItems="center"
        justifyContent="flex-start"
      >
        {group.map((placement) => (
          <PlacementDemo key={placement} placement={placement} size={size} />
        ))}
      </Stack>
    ))}
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: "100%", maxWidth: 360 }}
    >
      {horizontalPlacements.map((placement) => (
        <PlacementDemo key={placement} placement={placement} size={size} />
      ))}
    </Stack>
  </Stack>
);

/* ─── Size Medium — all positions ─── */
export const SizeMedium: Story = {
  name: "Size M",
  render: () => <PlacementShowcase />,
};

/* ─── Size Large — all positions ─── */
export const SizeLarge: Story = {
  name: "Size L",
  render: () => <PlacementShowcase size={TooltipSize.Large} />,
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
          <Button
            variant="secondary"
            sx={{ width: ANCHOR_WIDTH, minWidth: 0, px: 0 }}
          >
            Btn
          </Button>
        </Tooltip>
      </Stack>
    );
  },
};
