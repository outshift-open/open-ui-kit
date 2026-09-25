/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ReactNode } from "react";
import { BarChart } from "./bar-chart";
import { Box, Typography, useTheme } from "@mui/material";
import { Card, CardContent, Divider } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { ChartDataItem } from "../common/types";

/**
 *  ### Bar charts express quantities through a bar's length, using a common baseline.
 */
const meta: Meta<typeof BarChart> = {
  title: "Charts/Bar Chart",
  component: BarChart,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description:
        "Series values rendered as vertical bars that share the plot width.",
    },
    maxValue: {
      control: "number",
      description:
        "Value at the top of the scale. Defaults to the largest value in data.",
    },
    valueFormatter: {
      control: false,
      description: "Formats the 0 and maximum labels on the value axis.",
    },
    categoryLabels: {
      control: "object",
      description:
        "Start and end labels under the plot. Defaults to the first and last item names.",
    },
    showTooltip: {
      control: "boolean",
      description: "Shows the default tooltip on hover.",
    },
    customTooltip: {
      control: false,
      description: "Optional Recharts tooltip renderer.",
    },
    handleClick: {
      control: false,
      description: "Called when a bar is selected.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Bar Chart"
          blurb="BarChart expresses quantities through a bar's length using a common baseline. Bars share the plot width over a quarter grid, with the scale ends and the first and last categories labelled."
          guideLink="#"
          importLine='import { BarChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof BarChart>;

const ChartFrame = ({
  children,
  width = "492px",
}: {
  children: ReactNode;
  width?: string;
}) => <Box sx={{ width, height: "164px" }}>{children}</Box>;

const percentFormatter = (value: number) => `${value}%`;

const TIME_SLOT_VALUES = [20, 15, 39, 20, 39, 24, 15, 24, 39, 24, 15];

const useBarChartData = () => {
  const theme = useTheme();

  return TIME_SLOT_VALUES.map((value, i) => {
    const minutes = 11 + i * 12;
    const hour = 15 + Math.floor(minutes / 60);

    return {
      name: `${hour}:${String(minutes % 60).padStart(2, "0")}`,
      value,
      color: theme.palette.vars.accentADefault,
    };
  });
};

const useBarChartCountStates = () => {
  const theme = useTheme();
  const accentColor = theme.palette.vars.accentADefault;

  return [
    {
      title: "Minimum",
      data: [
        { name: "Open", value: 72, color: accentColor },
        { name: "Resolved", value: 38, color: accentColor },
      ],
    },
    {
      title: "Standard",
      data: [
        { name: "Critical", value: 82, color: accentColor },
        { name: "High", value: 64, color: accentColor },
        { name: "Medium", value: 48, color: accentColor },
        { name: "Low", value: 24, color: accentColor },
      ],
    },
    {
      title: "Dense",
      data: [
        { name: "One", value: 26, color: accentColor },
        { name: "Two", value: 20, color: accentColor },
        { name: "Three", value: 51, color: accentColor },
        { name: "Four", value: 27, color: accentColor },
        { name: "Five", value: 51, color: accentColor },
        { name: "Six", value: 32, color: accentColor },
        { name: "Seven", value: 20, color: accentColor },
      ],
    },
  ];
};

const CountStates = () => (
  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
    {useBarChartCountStates().map((state) => (
      <Card key={state.title} sx={{ width: "270px" }}>
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="button">{state.title}</Typography>
          <Divider />
          <ChartFrame width="238px">
            <BarChart
              data={state.data}
              maxValue={100}
              valueFormatter={percentFormatter}
            />
          </ChartFrame>
        </CardContent>
      </Card>
    ))}
  </Box>
);

const ThemedBarChart = ({
  data,
  ...args
}: Partial<ComponentProps<typeof BarChart>>) => {
  const fallbackData = useBarChartData();

  return (
    <ChartFrame>
      <BarChart
        data={data ?? fallbackData}
        maxValue={100}
        valueFormatter={percentFormatter}
        categoryLabels={["15:11", "17:11"]}
        {...args}
      />
    </ChartFrame>
  );
};

const preventSelection = (item: ChartDataItem) => {
  void item;
};

export const Default: Story = {
  args: {
    showTooltip: false,
  },
  render: (args) => <ThemedBarChart {...args} />,
};

export const CountVariants: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => <CountStates />,
};

export const AutoScale: Story = {
  args: {
    maxValue: undefined,
    valueFormatter: undefined,
    categoryLabels: undefined,
  },
  render: (args) => <ThemedBarChart {...args} />,
};

export const WithTooltip: Story = {
  args: {
    showTooltip: true,
  },
  render: (args) => <ThemedBarChart {...args} />,
};

export const Clickable: Story = {
  args: {
    handleClick: preventSelection,
  },
  render: (args) => <ThemedBarChart {...args} />,
};
