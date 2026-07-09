/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Typography } from "@/components";
import { Button } from "@/components/button";
import { Popover } from "../";
import type { PopoverProps } from "../";
import {
  POPOVER_PLACEMENTS,
  PopoverHorizontalPlacement,
  PopoverPlacement,
  PopoverPlacementAlign,
  PopoverPlacementSide,
} from "../";
import {
  getOriginsForPlacement,
  getPlacementAlign,
  getPlacementSide,
} from "../utils/placement";
import { DocsHeader } from "storybook/components/docs-header.stories";

const bodyText =
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const actions = (
  <>
    <Button size="small" variant="tertariary">
      button-link
    </Button>
    <Button size="small" variant="primary">
      button-link
    </Button>
  </>
);

const largeActions = (
  <>
    <Button size="medium" variant="tertariary">
      button-link
    </Button>
    <Button size="medium" variant="primary">
      button-link
    </Button>
  </>
);

const textLink = (
  <Box
    component="span"
    sx={(theme) => ({
      color: theme.palette.vars.interactivePrimaryDefaultDefault,
      fontWeight: 600,
    })}
  >
    Textlink
  </Box>
);

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Popover"
          blurb="Popover is a floating content panel anchored to a trigger element. It supports title and body content, action buttons, icons, feature-highlight styling, and directional arrows."
          guideLink=""
          importLine='import { Popover } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
  argTypes: {
    placement: {
      control: "select",
      options: [undefined, ...POPOVER_PLACEMENTS],
    },
    featureHighlight: { control: "boolean" },
    size: { control: "inline-radio", options: ["medium", "large"] },
    showCloseButton: { control: "boolean" },
  },
  args: {
    title: "Hello, world.",
    body: (
      <>
        {bodyText} {textLink}
      </>
    ),
    actions,
    size: "medium",
    placement: PopoverPlacement.Bottom,
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

function PopoverWithTrigger(
  props: Partial<PopoverProps> & {
    defaultOpen?: boolean;
    triggerLabel?: string;
    layout?: ReturnType<typeof getPlacementDemoLayout>;
  },
) {
  const {
    defaultOpen = false,
    placement,
    anchorOrigin,
    transformOrigin,
    triggerLabel = "Open popover",
    layout,
    ...popoverProps
  } = props;
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [open, setOpen] = useState(defaultOpen);
  const origins = placement
    ? getOriginsForPlacement(placement)
    : {
        anchorOrigin: anchorOrigin ?? {
          vertical: PopoverPlacementSide.Top,
          horizontal: PopoverHorizontalPlacement.Left,
        },
        transformOrigin: transformOrigin ?? {
          vertical: PopoverPlacementSide.Bottom,
          horizontal: PopoverHorizontalPlacement.Left,
        },
      };

  return (
    <Box sx={layout?.container ?? { padding: "24px" }}>
      <Button
        ref={setAnchorEl}
        variant="primary"
        size={layout ? "medium" : undefined}
        sx={layout?.anchor}
        onClick={() => setOpen(true)}
      >
        {triggerLabel}
      </Button>
      <Popover
        open={open && Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setOpen(false)}
        placement={placement}
        {...origins}
        {...popoverProps}
      />
    </Box>
  );
}

const DEMO_AREA_SIZE = 300;
/** Wide enough for a 228px popover + arrow clearance + trigger on left/right demos. */
const DEMO_AREA_HORIZONTAL_WIDTH = 380;

const getPlacementDemoLayout = (placement: PopoverPlacement) => {
  const side = getPlacementSide(placement);
  const align = getPlacementAlign(placement);
  const isHorizontalSide =
    side === PopoverPlacementSide.Left || side === PopoverPlacementSide.Right;

  const anchor: {
    marginLeft?: string | number;
    marginTop?: string | number;
    marginRight?: string | number;
    marginBottom?: string | number;
  } = {};

  // Push the trigger away from the edge the popover opens toward.
  if (side === PopoverPlacementSide.Left) anchor.marginLeft = "auto";
  if (side === PopoverPlacementSide.Right) anchor.marginRight = "auto";
  if (side === PopoverPlacementSide.Top) anchor.marginTop = "auto";
  if (side === PopoverPlacementSide.Bottom) anchor.marginBottom = "auto";

  if (align === PopoverPlacementAlign.Center) {
    if (
      side === PopoverPlacementSide.Top ||
      side === PopoverPlacementSide.Bottom
    ) {
      anchor.marginLeft = "auto";
      anchor.marginRight = "auto";
    } else {
      anchor.marginTop = "auto";
      anchor.marginBottom = "auto";
    }
  } else if (align === PopoverPlacementAlign.Start) {
    if (
      side === PopoverPlacementSide.Top ||
      side === PopoverPlacementSide.Bottom
    ) {
      anchor.marginRight = "auto";
    } else {
      anchor.marginBottom = "auto";
    }
  } else if (align === PopoverPlacementAlign.End) {
    if (
      side === PopoverPlacementSide.Top ||
      side === PopoverPlacementSide.Bottom
    ) {
      anchor.marginLeft = "auto";
    } else {
      anchor.marginTop = "auto";
    }
  }

  return {
    container: {
      width: isHorizontalSide ? DEMO_AREA_HORIZONTAL_WIDTH : DEMO_AREA_SIZE,
      height: DEMO_AREA_SIZE,
      display: "flex",
      flexShrink: 0,
      boxSizing: "border-box" as const,
      alignSelf: "flex-start" as const,
      overflow: "hidden",
    },
    anchor,
  };
};

export const Default: Story = {
  render: (args) => (
    <Box
      sx={{
        p: 3,
        minHeight: 480,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <PopoverWithTrigger {...args} defaultOpen />
    </Box>
  ),
};

export const FlipsNearTop: Story = {
  name: "Flips near viewport edge",
  args: {
    placement: PopoverPlacement.Top,
  },
  render: (args) => (
    <Box sx={{ p: 3, pt: 2 }}>
      <PopoverWithTrigger {...args} />
    </Box>
  ),
};

export const WithoutArrow: Story = {
  name: "Without arrow",
  args: {
    placement: undefined,
  },
  render: (args) => <PopoverWithTrigger {...args} />,
};

export const Large: Story = {
  args: {
    size: "large",
    actions: largeActions,
  },
  render: (args) => (
    <Box
      sx={{
        p: 3,
        minHeight: 480,
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <PopoverWithTrigger {...args} />
    </Box>
  ),
};

export const FeatureHighlight: Story = {
  args: {
    placement: PopoverPlacement.Bottom,
    featureHighlight: true,
  },
  render: (args) => (
    <Box
      sx={{ p: 3, minHeight: 480, display: "flex", alignItems: "flex-start" }}
    >
      <PopoverWithTrigger {...args} />
    </Box>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: <WarningAmberOutlinedIcon color="warning" fontSize="small" />,
    size: "large",
    actions: largeActions,
  },
  render: (args) => (
    <Box
      sx={{ p: 3, minHeight: 480, display: "flex", alignItems: "flex-start" }}
    >
      <PopoverWithTrigger {...args} />
    </Box>
  ),
};

/** One demo row per MUI placement value (wider for left/right). */
export const Placement: Story = {
  render: (args) => (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        alignItems: "flex-start",
      }}
    >
      {POPOVER_PLACEMENTS.map((placement) => (
        <PopoverWithTrigger
          key={placement}
          {...args}
          placement={placement}
          triggerLabel={placement}
          layout={getPlacementDemoLayout(placement)}
        />
      ))}
    </Box>
  ),
};

export const BodyOnly: Story = {
  args: {
    actions: undefined,
    title: undefined,
    body: bodyText,
  },
  render: (args) => (
    <Box
      sx={{ p: 3, minHeight: 480, display: "flex", alignItems: "flex-start" }}
    >
      <PopoverWithTrigger {...args} />
    </Box>
  ),
};

export const CustomContent: Story = {
  render: (args) => (
    <Box
      sx={{ p: 3, minHeight: 480, display: "flex", alignItems: "flex-start" }}
    >
      <PopoverWithTrigger {...args}>
        <Box sx={{ padding: "12px 16px" }}>
          <Typography variant="body2">
            Custom content rendered as children.
          </Typography>
        </Box>
      </PopoverWithTrigger>
    </Box>
  ),
};
