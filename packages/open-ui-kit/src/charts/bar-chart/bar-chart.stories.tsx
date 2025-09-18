import { Meta, StoryObj } from "@storybook/react";
import { BarChart } from "./bar-chart";
import { Box, Divider, useTheme } from "@mui/material";

/**
 *  ### Bar charts express quantities through a bar's length, using a common baseline.
 */
const meta: Meta<typeof BarChart> = {
  title: "Charts/Bar Chart",
  component: BarChart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarChart>;

const green500 = "#00b98d";
const yellow500 = "#ffe659";
const red500 = "#f2643d";
const bordeaux500 = "#c62953";

const getBarCountTypes = () => {
  return {
    standard: {
      title: "Standard",
      data: [
        { name: "Group A", value: 500, color: green500 },
        { name: "Group D", value: 400, color: yellow500 },
        { name: "Group F", value: 300, color: red500 },
        { name: "Group G", value: 150, color: bordeaux500 },
      ],
    },
    minimum: {
      title: "Minimum",
      data: [
        { name: "Group A", value: 500, color: green500 },
        { name: "Group D", value: 400, color: yellow500 },
      ],
    },
    maximum: {
      title: "Maximum",
      data: [
        { name: "Group A", value: 520, color: green500 },
        { name: "Group A", value: 500, color: green500 },
        { name: "Group D", value: 400, color: yellow500 },
        { name: "Group D", value: 380, color: yellow500 },
        { name: "Group F", value: 300, color: red500 },
        { name: "Group F", value: 280, color: red500 },
        { name: "Group G", value: 150, color: bordeaux500 },
      ],
    },
  };
};

const BasicBarChart = () => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      {Object.entries(getBarCountTypes()).map(([key, value]) => (
        <Box
          key={key}
          sx={{
            padding: "0 10px",
            background: theme.palette.vars.baseBackgroundMedium,
            borderRadius: "8px",
          }}
        >
          <Box>{value.title}</Box>
          <Divider />
          <Box sx={{ height: "188px", width: "230px" }}>
            <BarChart data={value.data} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export const Basic: Story = {
  render: () => {
    return <BasicBarChart />;
  },
};

export const HandleClick: Story = {
  render: () => (
    <Box sx={{ height: "188px", width: "230px" }}>
      <BarChart
        data={[
          { name: "Group A", value: 500, color: green500 },
          { name: "Group B", value: 200, color: yellow500 },
        ]}
        handleClick={(item) => alert(JSON.stringify(item))}
      />
    </Box>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <Box sx={{ height: "188px", width: "230px" }}>
      <BarChart
        data={[
          { name: "Group A", value: 500, color: green500 },
          { name: "Group B", value: 200, color: yellow500 },
        ]}
        showTooltip
      />
    </Box>
  ),
};
