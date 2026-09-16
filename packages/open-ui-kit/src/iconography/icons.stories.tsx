/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import type { SvgIconProps } from "@mui/material";
import type { ComponentType } from "react";
import { Box, Stack, Typography } from "@/components";
import * as IconSet from "@/icons";
import { IconGalleryGroupedView } from "./icon-gallery-grouped";

const meta = {
  title: "Foundations/Iconography",
  component: IconSet.Settings,
  args: {
    fontSize: "medium",
  },
  argTypes: {
    fontSize: {
      control: "select",
      options: ["base", "small", "medium", "large", "inherit"],
    },
    sx: {
      control: false,
    },
  },
} satisfies Meta<typeof IconSet.Settings>;

export default meta;
type Story = StoryObj<typeof meta>;

const iconSizes: Array<{
  label: string;
  fontSize: SvgIconProps["fontSize"];
}> = [
  { label: "base · 16px", fontSize: "base" },
  { label: "small · 20px", fontSize: "small" },
  { label: "medium · 24px", fontSize: "medium" },
  { label: "large · 32px", fontSize: "large" },
];

const galleryIcons = Object.fromEntries(
  Object.entries(IconSet).filter(([, value]) => typeof value === "function"),
) as Record<string, ComponentType<SvgIconProps>>;

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="flex-end" flexWrap="wrap">
      {iconSizes.map(({ label, fontSize }) => (
        <Box
          key={label}
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            minWidth: 80,
          }}
        >
          <IconSet.Settings fontSize={fontSize} aria-hidden />
          <Typography variant="caption">{label}</Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const Icons: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => <IconGalleryGroupedView allIcons={galleryIcons} />,
};
