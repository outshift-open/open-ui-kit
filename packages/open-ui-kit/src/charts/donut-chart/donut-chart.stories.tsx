import { Box, Grid, Stack } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { DonutChart } from "./donut-chart";

const meta: Meta<typeof DonutChart> = {
  title: "Charts/Donut Chart",
  component: DonutChart,
  tags: ["autodocs"],
  argTypes: {
    data: {
      description:
        "Represents the data to be displayed in the Donut component.",
    },
    showTooltip: {
      description: "Allow to toggle on/off the display of tooltip on hover.",
    },
    handleClick: {
      description: "Optional, callback function to trigger on pie click.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DonutChart>;

/**
 * Basic Donut component with 4 categories
 */
export const Basic: Story = {
  render: (args) => (
    <Stack height="132px" width="132px">
      <DonutChart {...args} />
    </Stack>
  ),
  args: {
    data: [
      { name: "Group A", value: 400, color: "#0088FE" },
      { name: "Group B", value: 300, color: "#00C49F" },
      { name: "Group C", value: 300, color: "#FFBB28" },
      { name: "Group D", value: 200, color: "#FF8042" },
    ],
  },
};

/**
 * Multiple Donut components with different size of categories
 */
export const DonutTypes: Story = {
  render: () => (
    <Box sx={{ width: 600 }}>
      <Grid container justifyContent="space-between">
        <Stack height="132px" width="132px">
          <DonutChart
            data={[
              { name: "Group A", value: 600, color: "#1FD2FF" },
              { name: "Group B", value: 200, color: "#0051AF" },
            ]}
          />
        </Stack>
        <Stack height="132px" width="132px">
          <DonutChart
            data={[
              { name: "Group A", value: 300, color: "#C62953" },
              { name: "Group B", value: 150, color: "#F2643D" },
              { name: "Group C", value: 150, color: "#FFAF45" },
              { name: "Group D", value: 100, color: "#00B98D" },
            ]}
          />
        </Stack>
        <Stack height="132px" width="132px">
          <DonutChart
            data={[
              { name: "Group A", value: 400, color: "#C62953" },
              { name: "Group B", value: 350, color: "hsla(344, 66%, 50%, 1)" },
              { name: "Group C", value: 350, color: "hsla(344, 66%, 60%, 1)" },
              { name: "Group D", value: 350, color: "hsla(344, 66%, 70%, 1)" },
            ]}
          />
        </Stack>
      </Grid>
    </Box>
  ),
};

/**
 * Format big numbers to prevent overflow
 */
export const DonutWithBigNumbers: Story = {
  render: () => (
    <Stack height="132px" width="132px">
      <DonutChart
        data={[
          { name: "Group A", value: 555654, color: "pink" },
          { name: "Group B", value: 1154656, color: "salmon" },
        ]}
      />
    </Stack>
  ),
};
