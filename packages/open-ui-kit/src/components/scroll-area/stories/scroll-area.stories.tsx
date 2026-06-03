/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
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
          blurb="Scroll Area wraps overflow content in a constrained container. The viewport clips content and provides keyboard-accessible scrolling with a branded focus ring."
          guideLink=""
          importLine='import { ScrollArea } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const ITEMS = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

export const VerticalScroll: Story = {
  render: () => (
    <ScrollArea sx={{ height: 200, width: 300, border: "1px solid #ccc" }}>
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

export const HorizontalScroll: Story = {
  render: () => (
    <ScrollArea
      sx={{
        height: 80,
        width: 300,
        border: "1px solid #ccc",
        "& [data-slot='scroll-area-viewport']": { overflow: "scroll hidden" },
      }}
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
    <ScrollArea sx={{ height: 120, width: 400, border: "1px solid #ccc" }}>
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
