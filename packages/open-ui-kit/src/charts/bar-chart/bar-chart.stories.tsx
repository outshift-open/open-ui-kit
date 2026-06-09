/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { BarChart } from "./bar-chart";
import { Box, Divider, useTheme } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import {
  green500,
  yellow500,
  orange500,
  red500,
} from "@/theme/style/color-palette";

/**
 *  ### Bar charts express quantities through a bar's length, using a common baseline.
 */
const meta: Meta<typeof BarChart> = {
  title: "Charts/Bar Chart",
  component: BarChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Bar Chart"
          blurb="BarChart expresses quantities through a bar's length using a common baseline. Bars align left; empty slots are hidden."
          guideLink="#"
          importLine='import { BarChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof BarChart>;

const getBarCountTypes = () => {
  return {
    standard: {
      title: "Standard",
      data: [
        { name: "Group A", value: 500, color: green500 },
        { name: "Group D", value: 400, color: yellow500 },
        { name: "Group F", value: 300, color: orange500 },
        { name: "Group G", value: 150, color: red500 },
      ],
    },
    minimum: {
      title: "Minimum",
      data: [
        { name: "Group A", value: 500, color: green500 },
        { name: "Group D", value: 400, color: yellow500 },
      ],
    },
    maximum: {
      title: "Maximum",
      data: [
        { name: "Group A", value: 520, color: green500 },
        { name: "Group A", value: 500, color: green500 },
        { name: "Group D", value: 400, color: yellow500 },
        { name: "Group D", value: 380, color: yellow500 },
        { name: "Group F", value: 300, color: orange500 },
        { name: "Group F", value: 280, color: orange500 },
        { name: "Group G", value: 150, color: red500 },
      ],
    },
  };
};

const BasicBarChart = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {Object.entries(getBarCountTypes()).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            padding: "0 10px",
            background: theme.palette.vars.baseBackgroundMedium,
            borderRadius: "8px",
          }}
        >
          <Box>{value.title}</Box>
          <Divider />
          <Box sx={{ height: "188px", width: "230px" }}>
            <BarChart data={value.data} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export const Basic: Story = {
  render: () => {
    return <BasicBarChart />;
  },
};

export const HandleClick: Story = {
  render: () => (
    <Box sx={{ height: "188px", width: "230px" }}>
      <BarChart
        data={[
          { name: "Group A", value: 500, color: green500 },
          { name: "Group B", value: 200, color: yellow500 },
        ]}
        handleClick={(item) => alert(JSON.stringify(item))}
      />
    </Box>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <Box sx={{ height: "188px", width: "230px" }}>
      <BarChart
        data={[
          { name: "Group A", value: 500, color: green500 },
          { name: "Group B", value: 200, color: yellow500 },
        ]}
        showTooltip
      />
    </Box>
  ),
};
