import { Meta, StoryObj } from "@storybook/react";
import { Box, Divider, useTheme } from "@mui/material";
import { BarGraph } from "./bar-graph";
import { Stack, Typography } from "@mui/material";

import { AWSServicesCloudWatch } from "@/custom-icons";
import { OverflowTooltip } from "@/components";
import { PropsWithChildren } from "react";

/**
 *  ### Bar graph express quantities using stacked bars.
 */
const meta: Meta<typeof BarGraph> = {
  title: "Charts/Bar Graph",
  component: BarGraph,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof BarGraph>;

const green500 = "#00b98d";
const red500 = "#f2643d";
const bordeaux700 = "#b91f42";
const orange500 = "#ffaf45";
const graphs2_200 = "#EE8B97";
const graphs2_300 = "#E96A8D";
const graphs2_400 = "#DB5087";

const barGraphData = {
  headers: ["Services", "Health Breakdown"],
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

const customLabelComponent = (
  <Stack direction={"row"} alignItems={"center"} gap={"2px"}>
    <AWSServicesCloudWatch />
    <Typography component="div" maxWidth={120} variant="button">
      <OverflowTooltip someLongText="AWS CloudWatch" value="AWS CloudWatch" />
    </Typography>
  </Stack>
);

const barGraphDataWithCustomLabel = {
  headers: ["Services", "Health Breakdown"],
  bars: [
    { key: "Critical", color: bordeaux700 },
    { key: "High", color: red500 },
    { key: "Medium", color: orange500 },
    { key: "Low", color: green500 },
  ],
  data: [
    {
      value: customLabelComponent,
      barData: {
        Critical: 15,
        High: 10,
        Medium: 10,
        Low: 10,
      },
    },
    {
      value: customLabelComponent,
      barData: {
        Critical: 10,
        High: 10,
        Medium: 10,
        Low: 10,
      },
    },
    {
      value: customLabelComponent,
      barData: {
        Critical: 7,
        High: 5,
        Medium: 10,
        Low: 10,
      },
    },
  ],
};

const BarGraphContainer = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: "10px" }}>
      <Box
        sx={{
          padding: "0 10px",
          background: theme.palette.vars.baseBackgroundMedium,
          borderRadius: "8px",
        }}
      >
        <Typography>Bar Graph</Typography>
        <Divider />
        <Box sx={{ height: "400px", width: "328px" }} padding={"8px"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export const Basic: Story = {
  render: () => (
    <BarGraphContainer>
      <BarGraph
        bars={barGraphData.bars}
        data={barGraphData.data}
        headers={barGraphData.headers}
      />
    </BarGraphContainer>
  ),
};

export const WithCustomLabels: Story = {
  render: () => (
    <BarGraphContainer>
      <BarGraph
        bars={barGraphDataWithCustomLabel.bars}
        data={barGraphDataWithCustomLabel.data}
        headers={barGraphDataWithCustomLabel.headers}
      />
    </BarGraphContainer>
  ),
};
