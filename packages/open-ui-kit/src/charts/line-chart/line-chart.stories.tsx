/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import type { DotProps } from "recharts";
import { Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { LineChartProps } from "./line-chart";
import { LineChart } from "./line-chart";
import LINE_DATA from "./story-data";

const meta: Meta<typeof LineChart> = {
  title: "Charts/Line Chart",
  component: LineChart,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Line Chart"
          blurb="LineChart displays time-series or continuous data as one or more lines. Pass categories to control each series color."
          guideLink="#"
          importLine='import { LineChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    categories: {
      control: false,
      description: "Line series definitions and token colors.",
    },
    customTooltip: {
      control: false,
      description: "Optional Recharts tooltip renderer.",
    },
    data: {
      control: "object",
      description: "Time-series rows keyed by category name.",
    },
    gridProps: {
      control: "object",
      description: "Optional Cartesian grid overrides.",
    },
    lineProps: {
      control: "object",
      description: "Optional props applied to every line series.",
    },
    showTooltip: {
      control: "boolean",
      description: "Shows the default tooltip on hover.",
    },
    subject: {
      control: "text",
      description: "Optional subject text shown in the tooltip.",
    },
    valueFormatter: {
      control: false,
      description: "Optional formatter for axis and tooltip values.",
    },
    xAxisProps: {
      control: "object",
      description: "Optional X axis overrides.",
    },
    yAxisProps: {
      control: "object",
      description: "Optional Y axis overrides.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof LineChart>;

const ChartFrame = ({ children }: { children: ReactNode }) => (
  <Stack height="220px" width="315px">
    {children}
  </Stack>
);

const ActiveDot = ({ color, cx, cy }: DotProps & { color: string }) => (
  <circle cx={cx} cy={cy} fill={color} r={6} stroke="none" />
);

const useLineCategories = () => {
  const theme = useTheme();

  return {
    defaultCategories: [
      {
        name: "New",
        color: theme.palette.vars.accentADefault,
      },
    ],
    denseCategories: [
      {
        name: "Critical",
        color: theme.palette.vars.negativeBackgroundDefault,
      },
      {
        name: "New",
        color: theme.palette.vars.accentADefault,
      },
      {
        name: "Total",
        color: theme.palette.vars.baseTextMedium,
      },
      {
        name: "Resolved",
        color: theme.palette.vars.successBackgroundDefault,
      },
      {
        name: "Info",
        color: theme.palette.vars.warningBackgroundDefault,
      },
    ],
    resolvedCategory: [
      {
        name: "Resolved",
        color: theme.palette.vars.successBackgroundDefault,
      },
    ],
  } satisfies Record<string, LineChartProps["categories"]>;
};

const LineChartTemplate = ({
  categories,
  data = LINE_DATA,
  ...args
}: Partial<LineChartProps>) => {
  const { defaultCategories } = useLineCategories();

  return (
    <ChartFrame>
      <LineChart
        data={data}
        categories={categories ?? defaultCategories}
        subject="Events per day"
        {...args}
      />
    </ChartFrame>
  );
};

const SingleSeriesTemplate = () => {
  const { resolvedCategory } = useLineCategories();

  return (
    <LineChartTemplate
      categories={resolvedCategory}
      yAxisProps={{ domain: [0, "auto"] }}
    />
  );
};

const MultipleSeriesTemplate = () => {
  const { denseCategories } = useLineCategories();

  return <LineChartTemplate categories={denseCategories} />;
};

const FormattedValuesTemplate = () => {
  const { defaultCategories } = useLineCategories();

  return (
    <LineChartTemplate
      categories={defaultCategories}
      gridProps={{ strokeDasharray: "4 4" }}
      valueFormatter={(value) => `${value ?? 0} events`}
    />
  );
};

const CustomDotTemplate = () => {
  const theme = useTheme();
  const { resolvedCategory } = useLineCategories();

  return (
    <LineChartTemplate
      categories={resolvedCategory}
      lineProps={{
        activeDot: (
          <ActiveDot color={theme.palette.vars.successBackgroundDefault} />
        ),
      }}
    />
  );
};

export const Default: Story = {
  args: {
    showTooltip: true,
  },
  render: (args) => <LineChartTemplate {...args} />,
};

export const SingleSeries: Story = {
  render: () => <SingleSeriesTemplate />,
};

export const MultipleSeries: Story = {
  render: () => <MultipleSeriesTemplate />,
};

export const FormattedValues: Story = {
  render: () => <FormattedValuesTemplate />,
};

export const CustomActiveDot: Story = {
  render: () => <CustomDotTemplate />,
};

export const WithoutTooltip: Story = {
  render: () => <LineChartTemplate showTooltip={false} />,
};
