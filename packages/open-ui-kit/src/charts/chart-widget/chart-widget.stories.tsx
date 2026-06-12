/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme, type Theme } from "@mui/material/styles";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Grid, Stack } from "@/components";
import {
  AWSServicesCloudFormation,
  AWSServicesRDS,
  AWSServicesRedshift,
  AWSServicesS3Bucket,
  Crossplane,
  Docker2,
  DockerCompose,
  GCPServicesCloudBuild,
} from "@/custom-icons";
import { ChartCategoryItem, ChartType } from "../common/types";
import { ChartWidget, type IChartWidgetProps } from "./chart-widget";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof ChartWidget> = {
  title: "Charts/Chart Widget",
  component: ChartWidget,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Chart Widget"
          blurb="ChartWidget wraps any chart type in a card shell with a headline label, optional tooltip, loading skeleton, and empty state."
          guideLink="#"
          importLine='import { ChartWidget } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Headline label rendered in the widget header.",
    },
    labelTooltip: {
      control: "text",
      description: "Optional tooltip content rendered next to the label.",
    },
    type: {
      control: "select",
      description: "Chart primitive rendered inside the widget body.",
      options: Object.values(ChartType),
    },
    data: {
      control: false,
      description: "Data passed to the selected chart primitive.",
    },
    showTooltip: {
      control: "boolean",
      description: "Whether the wrapped chart renders its tooltip.",
    },
    categories: {
      control: false,
      description:
        "Series metadata for charts that render multiple categories.",
    },
    isLoading: {
      control: "boolean",
      description:
        "Shows the widget loading skeleton instead of chart content.",
    },
    isEmpty: {
      control: "boolean",
      description: "Shows the widget empty state instead of chart content.",
    },
    isHorizontal: {
      control: "boolean",
      description:
        "Uses the widget horizontal layout when the chart supports it.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChartWidget>;

const lineData: ChartCategoryItem[] = [
  { date: "2020-01-01", Critical: 211, New: 315, Total: 130, Resolved: 140 },
  { date: "2020-01-02", Critical: 222, New: 135, Total: 115, Resolved: 160 },
  { date: "2020-01-03", Critical: 213, New: 134, Total: 127, Resolved: 180 },
  { date: "2020-01-04", Critical: 280, New: 105, Total: 190, Resolved: 210 },
  { date: "2020-01-05", Critical: 500, New: 260, Total: 201, Resolved: 120 },
  { date: "2020-01-06", Critical: 222, New: 135, Total: 123, Resolved: 140 },
  { date: "2020-01-07", Critical: 327, New: 138, Total: 125, Resolved: 116 },
  { date: "2020-01-08", Critical: 328, New: 139, Total: 217, Resolved: 118 },
  { date: "2020-01-09", Critical: 229, New: 139, Total: 219, Resolved: 210 },
  { date: "2020-01-10", Critical: 225, New: 123, Total: 121, Resolved: 121 },
  { date: "2020-01-11", Critical: 321, New: 212, Total: 213, Resolved: 114 },
  { date: "2020-01-12", Critical: 322, New: 312, Total: 215, Resolved: 316 },
  { date: "2020-01-13", Critical: 429, New: 112, Total: 125, Resolved: 218 },
  { date: "2020-01-14", Critical: 424, New: 325, Total: 219, Resolved: 110 },
  { date: "2020-01-15", Critical: 325, New: 120, Total: 130, Resolved: 211 },
  { date: "2020-01-16", Critical: 226, New: 217, Total: 231, Resolved: 124 },
  { date: "2020-01-17", Critical: 425, New: 215, Total: 135, Resolved: 216 },
];

const getChartSamples = (theme: Theme) => {
  const statusColors = {
    critical: theme.palette.vars.negativeBackgroundDefault,
    warning: theme.palette.vars.warningBackgroundDefault,
    healthy: theme.palette.vars.successBackgroundDefault,
    total: theme.palette.vars.accentADefault,
  };

  const barData = [
    { name: "Healthy", value: 500, color: statusColors.healthy },
    { name: "Warning", value: 400, color: statusColors.warning },
    { name: "Total", value: 300, color: statusColors.total },
    { name: "Critical", value: 150, color: statusColors.critical },
  ];

  const horizontalBarData = [
    {
      name: "Storage",
      value: 500,
      color: statusColors.healthy,
      icon: AWSServicesS3Bucket,
    },
    {
      name: "Analytics",
      value: 400,
      color: statusColors.warning,
      icon: AWSServicesRedshift,
    },
    {
      name: "Templates",
      value: 300,
      color: statusColors.total,
      icon: AWSServicesCloudFormation,
    },
    {
      name: "Database",
      value: 150,
      color: statusColors.critical,
      icon: AWSServicesRDS,
    },
  ];

  const donutData = [
    { name: "Healthy", value: 400, color: statusColors.healthy },
    { name: "Warning", value: 300, color: statusColors.warning },
    { name: "Total", value: 300, color: statusColors.total },
    { name: "Critical", value: 200, color: statusColors.critical },
  ];

  const gaugeData = [{ name: "Risk", value: 24, color: statusColors.critical }];

  const categories = [
    {
      name: "Resolved",
      color: statusColors.healthy,
      icon: <GCPServicesCloudBuild />,
    },
    { name: "Critical", color: statusColors.critical, icon: <Docker2 /> },
    { name: "New", color: statusColors.warning, icon: <DockerCompose /> },
    { name: "Total", color: statusColors.total, icon: <Crossplane /> },
  ];

  const barGraphData = {
    headers: ["Region", "Breakdown"],
    bars: [
      { key: "Critical", color: statusColors.critical },
      { key: "Warning", color: statusColors.warning },
      { key: "Healthy", color: statusColors.healthy },
    ],
    data: [
      {
        value: "us-east-1",
        barData: { Critical: 15, Warning: 10, Healthy: 10 },
      },
      {
        value: "us-east-2",
        barData: { Critical: 10, Warning: 10, Healthy: 10 },
      },
      {
        value: "eu-west-1",
        barData: { Critical: 7, Warning: 5, Healthy: 10 },
      },
      {
        value: "eu-north-1",
        barData: { Critical: 4, Warning: 3, Healthy: 10 },
      },
    ],
  };

  return {
    barData,
    horizontalBarData,
    donutData,
    gaugeData,
    lineData,
    categories,
    barGraphData,
    chartData: {
      [ChartType.DONUT]: donutData,
      [ChartType.LINE]: lineData,
      [ChartType.VERTICAL_BAR]: barData,
      [ChartType.HORIZONTAL_BAR]: horizontalBarData,
      [ChartType.GAUGE]: gaugeData,
      [ChartType.BAR_GRAPH]: barGraphData.data,
    },
  };
};

type IChartWidgetStoryArgs = Partial<
  Pick<
    IChartWidgetProps,
    | "isEmpty"
    | "isHorizontal"
    | "isLoading"
    | "label"
    | "labelTooltip"
    | "showTooltip"
  >
> & {
  type?: ChartType;
};

const DefaultTemplate = ({
  isEmpty,
  isHorizontal,
  isLoading,
  label = "Chart",
  labelTooltip,
  showTooltip,
  type = ChartType.DONUT,
}: IChartWidgetStoryArgs) => {
  const theme = useTheme();
  const samples = getChartSamples(theme);
  const sharedProps = {
    isEmpty,
    isHorizontal,
    isLoading,
    label,
    labelTooltip,
    showTooltip,
  };

  switch (type) {
    case ChartType.BAR_GRAPH:
      return (
        <Stack width="360px">
          <ChartWidget
            {...sharedProps}
            data={samples.barGraphData.data}
            bars={samples.barGraphData.bars}
            headers={samples.barGraphData.headers}
            type={ChartType.BAR_GRAPH}
          />
        </Stack>
      );
    case ChartType.HORIZONTAL_BAR:
      return (
        <Stack width="301px">
          <ChartWidget
            {...sharedProps}
            data={samples.horizontalBarData}
            categories={[{ name: "Service" }, { name: "Value" }]}
            type={ChartType.HORIZONTAL_BAR}
          />
        </Stack>
      );
    case ChartType.LINE:
      return (
        <Stack width="301px">
          <ChartWidget
            {...sharedProps}
            data={samples.lineData}
            categories={samples.categories}
            type={ChartType.LINE}
          />
        </Stack>
      );
    case ChartType.VERTICAL_BAR:
      return (
        <Stack width="301px">
          <ChartWidget
            {...sharedProps}
            data={samples.barData}
            type={ChartType.VERTICAL_BAR}
          />
        </Stack>
      );
    case ChartType.GAUGE:
      return (
        <Stack width="301px">
          <ChartWidget
            {...sharedProps}
            data={samples.gaugeData}
            type={ChartType.GAUGE}
          />
        </Stack>
      );
    case ChartType.DONUT:
    default:
      return (
        <Stack width="301px">
          <ChartWidget
            {...sharedProps}
            data={samples.donutData}
            type={ChartType.DONUT}
          />
        </Stack>
      );
  }
};

const ChartTypesTemplate = () => {
  const theme = useTheme();
  const samples = getChartSamples(theme);

  return (
    <Grid container gap="16px">
      <Stack width="301px">
        <ChartWidget
          label="Donut Chart"
          data={samples.donutData}
          type={ChartType.DONUT}
          showTooltip
        />
      </Stack>
      <Stack width="301px">
        <ChartWidget
          label="Gauge Chart"
          data={samples.gaugeData}
          type={ChartType.GAUGE}
          showTooltip
        />
      </Stack>
      <Stack width="301px">
        <ChartWidget
          label="Vertical Bar Chart"
          data={samples.barData}
          type={ChartType.VERTICAL_BAR}
          showTooltip
        />
      </Stack>
      <Stack width="301px">
        <ChartWidget
          label="Horizontal Bar Chart"
          data={samples.horizontalBarData}
          type={ChartType.HORIZONTAL_BAR}
          categories={[{ name: "Service" }, { name: "Value" }]}
          showTooltip
        />
      </Stack>
      <Stack width="301px">
        <ChartWidget
          label="Line Chart"
          data={samples.lineData}
          categories={samples.categories}
          type={ChartType.LINE}
          showTooltip
        />
      </Stack>
      <Stack width="360px">
        <ChartWidget
          label="Bar Graph"
          data={samples.barGraphData.data}
          headers={samples.barGraphData.headers}
          bars={samples.barGraphData.bars}
          type={ChartType.BAR_GRAPH}
          showTooltip
        />
      </Stack>
    </Grid>
  );
};

const LoadingTemplate = () => {
  const theme = useTheme();
  const samples = getChartSamples(theme);

  return (
    <Stack width="301px">
      <ChartWidget
        label="Loading Chart"
        data={samples.donutData}
        type={ChartType.DONUT}
        isLoading
      />
    </Stack>
  );
};

const EmptyStateTemplate = () => {
  const theme = useTheme();
  const samples = getChartSamples(theme);

  return (
    <Stack width="301px">
      <ChartWidget
        label="Empty Chart"
        data={samples.donutData}
        type={ChartType.DONUT}
        isEmpty
      />
    </Stack>
  );
};

const HorizontalLayoutTemplate = () => {
  const theme = useTheme();
  const samples = getChartSamples(theme);

  return (
    <ChartWidget
      label="Horizontal Donut Chart"
      data={samples.donutData}
      type={ChartType.DONUT}
      showTooltip
      isHorizontal
    />
  );
};

const BarGraphTemplate = () => {
  const theme = useTheme();
  const samples = getChartSamples(theme);

  return (
    <Stack width="360px">
      <ChartWidget
        label="Bar Graph"
        data={samples.barGraphData.data}
        headers={samples.barGraphData.headers}
        bars={samples.barGraphData.bars}
        type={ChartType.BAR_GRAPH}
        showTooltip
      />
    </Stack>
  );
};

export const Default: Story = {
  render: (args: IChartWidgetStoryArgs) => <DefaultTemplate {...args} />,
  args: {
    label: "Donut Chart",
    labelTooltip: "Chart summary",
    type: ChartType.DONUT,
    showTooltip: true,
  },
};

export const ChartTypes: Story = {
  render: () => <ChartTypesTemplate />,
};

export const Loading: Story = {
  render: () => <LoadingTemplate />,
};

export const EmptyState: Story = {
  render: () => <EmptyStateTemplate />,
};

export const HorizontalLayout: Story = {
  render: () => <HorizontalLayoutTemplate />,
};

export const BarGraph: Story = {
  render: () => <BarGraphTemplate />,
};
