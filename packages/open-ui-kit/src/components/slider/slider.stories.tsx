/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Slider } from "./components/slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Sliders allow users to make selections from a range of values. They are ideal for adjusting settings such as volume or brightness."
          guideLink=""
          importLine='import { Slider } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  name: "Default",
  render: () => (
    <Box sx={{ width: 500, padding: "16px 0" }}>
      <Slider defaultValue={0} aria-label="Default" />
    </Box>
  ),
};

export const WithValue: Story = {
  name: "With Value",
  render: () => (
    <Box sx={{ width: 500, padding: "16px 0" }}>
      <Slider
        defaultValue={30}
        aria-label="With value"
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const WithMarks: Story = {
  name: "With Marks",
  render: () => (
    <Box sx={{ width: 500, padding: "16px 0" }}>
      <Slider
        defaultValue={20}
        step={10}
        marks
        min={0}
        max={100}
        aria-label="With marks"
      />
    </Box>
  ),
};

export const WithMarkLabels: Story = {
  name: "With Mark Labels",
  render: () => (
    <Box sx={{ width: 500, padding: "16px 0" }}>
      <Slider
        defaultValue={20}
        step={10}
        marks={[0, 10, 20, 30, 40, 50].map((v) => ({
          value: v,
          label: `${v}`,
        }))}
        min={0}
        max={50}
        aria-label="With mark labels"
      />
    </Box>
  ),
};

export const Range: Story = {
  name: "Range",
  render: () => (
    <Box sx={{ width: 500, padding: "16px 0" }}>
      <Slider
        defaultValue={[20, 60]}
        aria-label="Range"
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const Disabled: Story = {
  name: "Disabled",
  render: () => (
    <Box sx={{ width: 500, padding: "16px 0" }}>
      <Slider defaultValue={30} disabled aria-label="Disabled" />
    </Box>
  ),
};

export const Vertical: Story = {
  name: "Vertical",
  render: () => (
    <Box sx={{ height: 200, paddingLeft: "40px" }}>
      <Slider
        orientation="vertical"
        defaultValue={30}
        aria-label="Vertical"
        valueLabelDisplay="auto"
      />
    </Box>
  ),
};

export const Variants: Story = {
  name: "Variants",
  render: () => (
    <Stack spacing={4} sx={{ width: 500, padding: "16px 0" }}>
      <Slider defaultValue={0} aria-label="No selection" />
      <Slider
        defaultValue={30}
        aria-label="With selection"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={30} step={10} marks aria-label="With marks" />
      <Slider
        defaultValue={[20, 70]}
        aria-label="Range"
        valueLabelDisplay="auto"
      />
    </Stack>
  ),
};
