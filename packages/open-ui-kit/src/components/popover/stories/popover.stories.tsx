/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/button";
import { Popover } from "../";
import type { PopoverArrowPosition } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Popover is a floating content panel anchored to a trigger element. It supports a title, body text, action buttons, an optional close button, and a directional arrow."
          guideLink=""
          importLine='import { Popover } from "@open-ui-kit/core";'
        />
      ),
    },
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
    <Box sx={{ padding: 4 }}>
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

export const WithTitleAndBody: Story = {
  render: () => (
    <PopoverWithTrigger
      title="Hello world"
      body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Toolfox."
      showCloseButton
    />
  ),
};

export const WithActions: Story = {
  render: () => (
    <PopoverWithTrigger
      title="Hello world"
      body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Toolfox."
      showCloseButton
      actions={
        <>
          <Button variant="tertariary">Button link</Button>
          <Button variant="primary">Button</Button>
        </>
      }
    />
  ),
};

export const ArrowBottomCenter: Story = {
  render: () => (
    <Box sx={{ padding: 8, paddingTop: 20 }}>
      <PopoverWithTrigger
        title="Hello world"
        body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        showCloseButton
        arrowPosition="bottom-center"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        transformOrigin={{ vertical: "bottom", horizontal: "center" }}
      />
    </Box>
  ),
};

export const ArrowBottomRight: Story = {
  render: () => (
    <Box sx={{ padding: 8, paddingTop: 20 }}>
      <PopoverWithTrigger
        title="Hello world"
        body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
        showCloseButton
        arrowPosition="bottom-right"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </Box>
  ),
};

export const ArrowTopCenter: Story = {
  render: () => (
    <PopoverWithTrigger
      title="Hello world"
      body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore."
      showCloseButton
      arrowPosition="top-center"
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      transformOrigin={{ vertical: "top", horizontal: "center" }}
    />
  ),
};

export const BodyOnly: Story = {
  render: () => (
    <PopoverWithTrigger body="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." />
  ),
};

export const CustomContent: Story = {
  render: () => (
    <PopoverWithTrigger>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2">
          Custom content rendered as children.
        </Typography>
      </Box>
    </PopoverWithTrigger>
  ),
};
