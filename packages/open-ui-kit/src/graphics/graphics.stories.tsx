/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import { Box, Stack, Typography } from "@/components";
import * as GraphicSet from "@/graphics";
import {
  ApiSecurityGraphicActive,
  type GraphicFontSize,
  graphicFontSizes,
} from "@/graphics";
import { GraphicsGalleryView } from "./graphics-gallery";

const meta = {
  title: "Foundations/Graphics",
  component: ApiSecurityGraphicActive,
  args: {
    fontSize: "medium",
  },
  argTypes: {
    fontSize: {
      control: "select",
      options: ["base", "small", "medium", "large", "xlarge"],
    },
    sx: {
      control: false,
    },
  },
} satisfies Meta<typeof ApiSecurityGraphicActive>;

export default meta;
type Story = StoryObj<typeof meta>;

const graphicSizes: GraphicFontSize[] = [
  "base",
  "small",
  "medium",
  "large",
  "xlarge",
];

const galleryGraphics = Object.fromEntries(
  Object.entries(GraphicSet).filter(([, value]) => typeof value === "function"),
) as Record<string, ComponentType<SvgIconProps>>;

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="flex-end" flexWrap="wrap">
      {graphicSizes.map((fontSize) => (
        <Box
          key={fontSize}
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            minWidth: 80,
          }}
        >
          <ApiSecurityGraphicActive fontSize={fontSize} aria-hidden />
          <Typography variant="caption">
            {fontSize} · {graphicFontSizes[fontSize]}
          </Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const Graphics: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => <GraphicsGalleryView allGraphics={galleryGraphics} />,
};
