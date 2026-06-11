/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SpiderChart } from "../components/spider-chart";
import type {
  ExtendedDataPoint,
  RadarType,
  SpiderChartProps,
} from "../types/spider-chart.types";

const meta: Meta<typeof SpiderChart> = {
  title: "Charts/Spider Chart",
  component: SpiderChart,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Spider Chart"
          blurb="SpiderChart displays multivariate values across radial axes. Use radars to define each series and token-based colors."
          guideLink="#"
          importLine='import { SpiderChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    customTooltip: {
      control: false,
      description: "Fully custom Recharts tooltip renderer.",
    },
    data: {
      control: "object",
      description:
        "Radar data points with one subject and numeric series keys.",
    },
    labelOffsets: {
      control: "object",
      description: "Per-label pixel offsets for fine label alignment.",
    },
    onTooltipClick: {
      control: false,
      description:
        "Called with the active subject when the tooltip is clicked.",
    },
    outerRadius: {
      control: "number",
      description: "Distance from the center to the outer radar ring.",
    },
    radars: {
      control: false,
      description: "Radar series definitions and token colors.",
    },
    scale: {
      control: "number",
      description: "Scales the custom radar and grid rendering.",
    },
    showTooltip: {
      control: "boolean",
      description: "Shows the default or custom tooltip.",
    },
    tickBand: {
      control: "number",
      description: "Controls distance between labels and the radar.",
    },
    tooltipContent: {
      control: false,
      description: "Custom body renderer for the default tooltip shell.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SpiderChart>;

const data: ExtendedDataPoint[] = [
  { subject: "Identity", variableA: 150, variableB: 112 },
  { subject: "Network", variableA: 60, variableB: 96 },
  { subject: "Runtime", variableA: 80, variableB: 128 },
  { subject: "Storage", variableA: 99, variableB: 88 },
  { subject: "Compute", variableA: 110, variableB: 136 },
  { subject: "Code", variableA: 151, variableB: 104 },
];

const labelOffsets = [
  { cx: 28, cy: 10 },
  { cx: -10, cy: 10 },
  { cx: -10, cy: -20 },
  { cx: -16, cy: 0 },
  { cx: -16, cy: 0 },
  { cx: -22, cy: 0 },
];

const ChartFrame = ({ children }: { children: ReactNode }) => (
  <Stack width="400px" height="400px">
    {children}
  </Stack>
);

const useRadars = (): RadarType[] => {
  const theme = useTheme();

  return [
    {
      name: "Exposure",
      dataKey: "variableA",
      fill: theme.palette.vars.neutralBackgroundWeak,
      background: `conic-gradient(${theme.palette.vars.accentJDefault} 0deg, ${theme.palette.vars.accentGDefault} 180deg, ${theme.palette.vars.accentADefault} 360deg)`,
    },
  ];
};

const useComparisonRadars = (): RadarType[] => {
  const theme = useTheme();

  return [
    ...useRadars(),
    {
      name: "Coverage",
      dataKey: "variableB",
      fill: theme.palette.vars.successBackgroundWeak,
      background: `conic-gradient(${theme.palette.vars.successBackgroundDefault} 0deg, ${theme.palette.vars.warningBackgroundDefault} 180deg, ${theme.palette.vars.accentEDefault} 360deg)`,
    },
  ];
};

const SpiderChartTemplate = ({
  radars,
  ...args
}: Partial<SpiderChartProps>) => {
  const defaultRadars = useRadars();

  return (
    <ChartFrame>
      <SpiderChart
        data={data}
        radars={radars ?? defaultRadars}
        labelOffsets={labelOffsets}
        {...args}
      />
    </ChartFrame>
  );
};

const MultipleRadarsTemplate = () => {
  const radars = useComparisonRadars();

  return <SpiderChartTemplate radars={radars} />;
};

export const Default: Story = {
  render: (args) => <SpiderChartTemplate {...args} />,
  args: {
    outerRadius: 90,
    scale: 1,
    showTooltip: true,
    tickBand: 5,
  },
};

export const MultipleRadars: Story = {
  render: () => <MultipleRadarsTemplate />,
};

export const CustomTooltipContent: Story = {
  render: () => (
    <SpiderChartTemplate
      tooltipContent={(dataPoint) => (
        <span>
          {dataPoint.subject}: {dataPoint.variableA ?? 0} findings
        </span>
      )}
    />
  ),
};

export const WithoutTooltip: Story = {
  render: () => <SpiderChartTemplate showTooltip={false} />,
};
