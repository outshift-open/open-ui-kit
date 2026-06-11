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
      description: "Series values rendered as compact vertical bars.",
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

const ChartFrame = ({ children }: { children: ReactNode }) => (
  <Box sx={{ width: "230px", height: "188px" }}>{children}</Box>
);

const useBarChartData = () => {
  const theme = useTheme();

  return [
    { name: "Critical", value: 82, color: theme.palette.vars.accentADefault },
    { name: "High", value: 64, color: theme.palette.vars.accentADefault },
    { name: "Medium", value: 48, color: theme.palette.vars.accentADefault },
    { name: "Low", value: 24, color: theme.palette.vars.accentADefault },
  ];
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
          <ChartFrame>
            <BarChart data={state.data} />
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
      <BarChart data={data ?? fallbackData} {...args} />
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
