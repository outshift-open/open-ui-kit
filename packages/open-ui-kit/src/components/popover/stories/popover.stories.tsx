/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import { Button } from "@/components/button";
import { Popover } from "../";
import type { PopoverArrowPosition } from "../";
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
          blurb="Popover is a floating content panel anchored to a trigger element. It supports title and body content, action buttons, icons, feature-highlight styling, and directional arrows."
          guideLink=""
          importLine='import { Popover } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
  argTypes: {
    arrowPosition: {
      control: "select",
      options: [
        undefined,
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
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
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

function PopoverWithTrigger(
  props: Partial<React.ComponentProps<typeof Popover>> & {
    arrowPosition?: PopoverArrowPosition;
  },
) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  return (
    <Box sx={{ padding: "24px" }}>
      <Button ref={anchorRef} variant="primary" onClick={() => setOpen(true)}>
        Open popover
      </Button>
      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        {...props}
      />
    </Box>
  );
}

export const Default: Story = {
  render: (args) => <PopoverWithTrigger {...args} />,
};

export const Large: Story = {
  args: {
    size: "large",
  },
  render: (args) => <PopoverWithTrigger {...args} />,
};

export const FeatureHighlight: Story = {
  args: {
    arrowPosition: "bottom-center",
    featureHighlight: true,
  },
  render: (args) => (
    <Box sx={{ padding: "24px", paddingTop: "140px" }}>
      <PopoverWithTrigger
        {...args}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: <WarningAmberOutlinedIcon color="warning" fontSize="small" />,
    size: "large",
  },
  render: (args) => <PopoverWithTrigger {...args} />,
};

export const ArrowPositions: Story = {
  render: (args) => (
    <Stack direction="row" gap="16px" flexWrap="wrap" sx={{ padding: "24px" }}>
      {(
        [
          "bottom-left",
          "bottom-center",
          "bottom-right",
          "top-left",
          "top-center",
          "top-right",
        ] as PopoverArrowPosition[]
      ).map((arrowPosition) => (
        <PopoverWithTrigger
          key={arrowPosition}
          {...args}
          arrowPosition={arrowPosition}
          title={arrowPosition}
          anchorOrigin={{
            vertical: arrowPosition.startsWith("top") ? "bottom" : "top",
            horizontal: arrowPosition.endsWith("left")
              ? "left"
              : arrowPosition.endsWith("right")
                ? "right"
                : "center",
          }}
          transformOrigin={{
            vertical: arrowPosition.startsWith("top") ? "top" : "bottom",
            horizontal: arrowPosition.endsWith("left")
              ? "left"
              : arrowPosition.endsWith("right")
                ? "right"
                : "center",
          }}
        />
      ))}
    </Stack>
  ),
};

export const BodyOnly: Story = {
  args: {
    actions: undefined,
    title: undefined,
    body: bodyText,
  },
  render: (args) => <PopoverWithTrigger {...args} />,
};

export const CustomContent: Story = {
  render: (args) => (
    <PopoverWithTrigger {...args}>
      <Box sx={{ padding: "12px 16px" }}>
        <Typography variant="body2">
          Custom content rendered as children.
        </Typography>
      </Box>
    </PopoverWithTrigger>
  ),
};
