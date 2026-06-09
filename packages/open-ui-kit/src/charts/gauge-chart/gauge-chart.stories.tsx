import { Meta, StoryObj } from "@storybook/react-vite";
import { GaugeChart } from "./gauge-chart";
import { Typography } from "@mui/material";
import { red500 } from "@/theme/style/color-palette";
import { DocsHeader } from "storybook/components/docs-header.stories";

const chartOrange = "#ffaf45";

/**
 *  ### Gauge charts give a way to quickly see how well a given metric is performing against a target goal.
 */
const meta: Meta<typeof GaugeChart> = {
  title: "Charts/Gauge Chart",
  component: GaugeChart,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Gauge Chart"
          blurb="GaugeChart shows how well a metric is performing against a target. Pass a single data item with value and color."
          guideLink="#"
          importLine='import { GaugeChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    data: {
      description:
        "The data to be shown in the gauge chart, should contain only one value",
    },
    maxValue: {
      description:
        "The target goal of the gauge. If set, the bar will reflect the value relative to the target goal.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GaugeChart>;

export const GaugeChartError: Story = {
  args: {
    data: [{ name: "Gauge", value: 24, color: red500 }],
    customLabelComponent: <Typography variant={"caption"}>Good</Typography>,
  },
};

export const GaugeChartWarning: Story = {
  args: {
    data: [{ name: "Gauge", value: 75, color: chartOrange }],
  },
};
