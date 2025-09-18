import { Meta, StoryObj } from "@storybook/react";
import { GaugeChart } from "./gauge-chart";
import { Typography } from "@mui/material";

/**
 *  ### Gauge charts give a way to quickly see how well a given metric is performing against a target goal.
 */
const meta: Meta<typeof GaugeChart> = {
  title: "Charts/Gauge Chart",
  component: GaugeChart,
  tags: ["autodocs"],
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

const bordeaux500 = "#c62953";
const orange500 = "#ffaf45";

export const GaugeChartError: Story = {
  args: {
    data: [{ name: "Gauge", value: 24, color: bordeaux500 }],
    customLabelComponent: <Typography variant={"caption"}>Good</Typography>,
  },
};

export const GaugeChartWarning: Story = {
  args: {
    data: [{ name: "Gauge", value: 75, color: orange500 }],
  },
};
