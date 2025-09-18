import { Box, Divider, useTheme } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { LineChart, LineChartProps } from "./line-chart";

import LINE_DATA from "./story-data";
import { DotProps } from "recharts";

const meta: Meta<typeof LineChart> = {
  title: "Charts/Line Chart",
  component: LineChart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LineChart>;

const green500 = "#00b98d";
const grey50 = "e8e9ea";
const yellow500 = "#ffe659";
const blue500 = "#3a95ff";
const bordeaux500 = "#c62953";

const CustomizedDot = ({ cx, cy }: DotProps) => {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={6}
      fill={green500}
      stroke="none"
      onClick={() => console.log("Clicked dot")}
    />
  );
};

const LINE_CHART_TYPES: Record<string, LineChartProps> = {
  standard: {
    data: LINE_DATA,
    categories: [
      { name: "Critical", color: bordeaux500 },
      { name: "New", color: blue500 },
      { name: "Total", color: grey50 },
      { name: "Resolved", color: green500 },
    ],
    valueFormatter: (v) => v + "e",
    gridProps: { strokeDasharray: "4 4" },
  },
  minimum: {
    data: LINE_DATA,
    yAxisProps: { domain: [0, "auto"] },
    categories: [{ name: "Resolved", color: green500 }],
    lineProps: {
      activeDot: <CustomizedDot />,
    },
  },
  maximum: {
    data: LINE_DATA,
    yAxisProps: { domain: ["auto", 500] },
    categories: [
      { name: "Critical", color: bordeaux500 },
      { name: "New", color: blue500 },
      { name: "Total", color: grey50 },
      { name: "Resolved", color: green500 },
      { name: "Info", color: yellow500 },
    ],
  },
};

const BasicLineChart = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {Object.entries(LINE_CHART_TYPES).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            background: theme.palette.vars.baseBackgroundMedium,
            borderRadius: "8px",
          }}
        >
          <Box sx={{ padding: "5px 0 5px 10px" }}>{key}</Box>
          <Divider />
          <Box
            sx={{ height: "220px", width: "315px", padding: "0 10px 0 5px" }}
          >
            <LineChart {...value} subject="No. events per 5m" />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export const Basic: Story = {
  render: () => <BasicLineChart />,
};
