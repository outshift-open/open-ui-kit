/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react";
import { SpiderChart } from "../components/spider-chart";
import { ExtendedDataPoint } from "../types/spider-chart.types";
import { Box } from "@mui/material";

const meta: Meta<typeof SpiderChart> = {
  title: "Charts/SpiderChart",
  component: SpiderChart,
  tags: ["autodocs"],
  argTypes: {
    data: {
      description: "The data object that is being passed to the spider chart.",
    },
    radars: { description: "The radar types to display in the chart." },
    outerRadius: {
      description: "The outer radius of the chart.",
    },
    onTooltipClick: {
      description: "Callback to call on tooltip click",
    },
    tooltipContent: {
      description: "Tooltip content can be overriden",
    },
    showTooltip: {
      description: "Toggle on/off the tooltip on hover",
    },
    labelOffsets: {
      description: "Manully adjust the labels position",
    },
    tickBand: {
      description: "Control the spaces of the lables from center",
    },
    scale: {
      description: "Control the size of the radars",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SpiderChart>;

const data: ExtendedDataPoint[] = [
  {
    subject: "Math",
    variableA: 150,
  },
  {
    subject: "Chinese",
    variableA: 60,
  },
  {
    subject: "English",
    variableA: 80,
  },
  {
    subject: "Geography",
    variableA: 99,
  },
  {
    subject: "Physics",
    variableA: 110,
  },
  {
    subject: "History",
    variableA: 151,
  },
];

export const Example: Story = {
  render: (args) => {
    return (
      <Box style={{ width: "400px", height: "400px" }}>
        <SpiderChart {...args} />
      </Box>
    );
  },
  args: {
    data: data,
    radars: [
      {
        name: "Test",
        dataKey: "variableA",
      },
    ],
    labelOffsets: [
      { cx: 30, cy: 10 },
      { cx: -10, cy: 10 },
      { cx: -10, cy: -20 },
      { cx: -15, cy: 0 },
      { cx: -15, cy: 0 },
      { cx: -20, cy: 0 },
    ],
  },
};
