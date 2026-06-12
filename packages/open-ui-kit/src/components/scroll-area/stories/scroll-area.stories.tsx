/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SxProps, Theme } from "@mui/material";
import { Box, Typography } from "@/components";
import { ScrollArea } from "../";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/Scroll Area",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Scroll Area"
          blurb="Scroll Area wraps overflow content in a constrained container. The viewport clips content and provides keyboard-accessible scrolling with a branded focus ring."
          guideLink=""
          importLine='import { ScrollArea } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "Content rendered inside the scrollable viewport.",
    },
    sx: {
      control: false,
      description: "Styles applied to the root scroll-area container.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const ITEMS = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

const scrollAreaFrameSx: SxProps<Theme> = (theme) => ({
  border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "4px",
});

export const Default: Story = {
  render: () => (
    <ScrollArea sx={[scrollAreaFrameSx, { height: 200, width: 300 }]}>
      <Box sx={{ padding: 2 }}>
        {ITEMS.map((item) => (
          <Typography key={item} variant="body2">
            {item}
          </Typography>
        ))}
      </Box>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea
      sx={[
        scrollAreaFrameSx,
        {
          height: 80,
          width: 300,
          "& [data-slot='scroll-area-viewport']": { overflow: "scroll hidden" },
        },
      ]}
    >
      <Box sx={{ display: "flex", gap: 2, padding: 2, width: "max-content" }}>
        {ITEMS.map((item) => (
          <Typography key={item} variant="body2" sx={{ whiteSpace: "nowrap" }}>
            {item}
          </Typography>
        ))}
      </Box>
    </ScrollArea>
  ),
};

export const CustomHeight: Story = {
  render: () => (
    <ScrollArea sx={[scrollAreaFrameSx, { height: 120, width: 400 }]}>
      <Box sx={{ padding: 2 }}>
        {ITEMS.map((item) => (
          <Typography key={item} variant="body2">
            {item}
          </Typography>
        ))}
      </Box>
    </ScrollArea>
  ),
};
