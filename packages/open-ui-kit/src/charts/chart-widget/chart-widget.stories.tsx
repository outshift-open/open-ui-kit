import { Grid, Stack } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { ChartCategoryItem, ChartType } from "../common/types";
import {
  green500,
  orange500,
  red500,
  yellow500,
} from "@/theme/style/color-palette";

const chartBlue = "#3a95ff";
import {
  AWSServicesS3Bucket,
  AWSServicesRedshift,
  AWSServicesCloudFormation,
  AWSServicesRDS,
  Crossplane,
  Docker2,
  DockerCompose,
  GCPServicesCloudBuild,
} from "@/custom-icons";
import { ChartWidget } from "./chart-widget";
import { DocsHeader } from "storybook/components/docs-header.stories";

/**
 *  ### Gauge charts give a way to quickly see how well a given metric is performing against a target goal.
 */
const meta: Meta<typeof ChartWidget> = {
  title: "Charts/Chart Widget",
  component: ChartWidget,
  tags: ["autodocs"],
  parameters: {
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
      description: "Headline label of the chart widget.",
    },
    labelTooltip: {
      description: "Show an info icon with tooltip in the headline.",
    },
    type: {
      description: "Type of chart to display in the widget.",
    },
    data: {
      description: "The data to be shown in the chart.",
    },
    showTooltip: {
      description: "A flag of whether to show tooltip on chart.",
    },
    categories: {
      description: "Categories for charts that use them.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChartWidget>;

const graphs2_200 = "#EE8B97";
const graphs2_300 = "#E96A8D";
const graphs2_400 = "#DB5087";

const barData = [
  { name: "Group A", value: 500, color: green500 },
  { name: "Group D", value: 400, color: yellow500 },
  { name: "Group F", value: 300, color: orange500 },
  { name: "Group G", value: 150, color: red500 },
];

const barDataHorizontal = [
  { name: "Group A", value: 500, color: green500, icon: AWSServicesS3Bucket },
  {
    name: "Group D",
    value: 400,
    color: yellow500,
    icon: AWSServicesRedshift,
  },
  {
    name: "Group F",
    value: 300,
    color: orange500,
    icon: AWSServicesCloudFormation,
  },
  { name: "Group G", value: 150, color: red500, icon: AWSServicesRDS },
];

const donutData = [
  { name: "Group A", value: 400, color: "#0088FE" },
  { name: "Group B", value: 300, color: "#00C49F" },
  { name: "Group C", value: 300, color: "#FFBB28" },
  { name: "Group D", value: 200, color: "#FF8042" },
];

const gaugeData = [{ name: "Group A", value: 20, color: red500 }];

const categories = [
  { name: "Resolved", color: green500, icon: <GCPServicesCloudBuild /> },
  { name: "Critical", color: red500, icon: <Docker2 /> },
  { name: "New", color: yellow500, icon: <DockerCompose /> },
  { name: "Total", color: chartBlue, icon: <Crossplane /> },
];

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

const barGraphData = {
  headers: ["Services", "Breakdown"],
  bars: [
    { key: "PCI", color: graphs2_200 },
    { key: "PII", color: graphs2_300 },
    { key: "PHI", color: graphs2_400 },
  ],
  data: [
    {
      value: "us-east1",
      barData: {
        PCI: 15,
        PII: 10,
        PHI: 10,
      },
    },
    {
      value: "us-east2",
      barData: {
        PCI: 10,
        PII: 10,
        PHI: 10,
      },
    },
    {
      value: "europe-west1",
      barData: {
        PCI: 7,
        PII: 5,
        PHI: 10,
      },
    },
    {
      value: "europe-west3",
      barData: {
        PCI: 7,
        PII: 5,
        PHI: 10,
      },
    },
    {
      value: "eu-north-1",
      barData: {
        PCI: 4,
        PII: 3,
        PHI: 10,
      },
    },
    {
      value: "eu-north-3",
      barData: {
        PCI: 4,
        PII: 3,
        PHI: 10,
      },
    },
  ],
};

const chartData = {
  [ChartType.DONUT]: donutData,
  [ChartType.LINE]: lineData,
  [ChartType.VERTICAL_BAR]: barData,
  [ChartType.HORIZONTAL_BAR]: barDataHorizontal,
  [ChartType.GAUGE]: gaugeData,
};

export const ChartWidgetExample: Story = {
  render: (args) => (
    <Stack width="262px">
      <ChartWidget
        {...args}
        data={chartData[args.type as keyof typeof chartData]}
      />
    </Stack>
  ),
  args: {
    label: "Donut Chart",
    labelTooltip: "Label tooltip",
    data: donutData,
    type: ChartType.DONUT,
    showTooltip: true,
  },
};

export const ChartWidgetTypes: Story = {
  render: () => (
    <Grid container gap="10px">
      <Stack width="262px">
        <ChartWidget
          isLoading={false}
          label="Donut Chart"
          data={donutData}
          type={ChartType.DONUT}
          showTooltip
        />
      </Stack>
      <Stack width="262px">
        <ChartWidget
          isLoading={false}
          label="Gauge Chart"
          data={gaugeData}
          type={ChartType.GAUGE}
          showTooltip
        />
      </Stack>
      <Stack width="262px">
        <ChartWidget
          isLoading={false}
          label="Vertical Bar Chart"
          data={barData}
          type={ChartType.VERTICAL_BAR}
          showTooltip
        />
      </Stack>
      <Stack width="262px">
        <ChartWidget
          isLoading={false}
          label="Horizontal Bar Chart"
          data={barDataHorizontal}
          type={ChartType.HORIZONTAL_BAR}
          categories={[{ name: "Group" }, { name: "Value" }]}
          showTooltip
        />
      </Stack>
      <Stack width="262px">
        <ChartWidget
          isLoading={false}
          label="Line Chart"
          data={lineData}
          categories={categories}
          type={ChartType.LINE}
          showTooltip
        />
      </Stack>
      <Stack width="262px">
        <ChartWidget
          sx={{ height: "350px" }}
          isLoading={false}
          label="Bar Graph"
          data={barGraphData.data}
          headers={barGraphData.headers}
          bars={barGraphData.bars}
          type={ChartType.BAR_GRAPH}
          showTooltip
        />
      </Stack>
      <Stack width="262px">
        <ChartWidget
          isLoading={false}
          label="Horizontal Donut Chart"
          data={donutData}
          type={ChartType.DONUT}
          showTooltip
          isHorizontal={true}
        />
      </Stack>
    </Grid>
  ),
};
