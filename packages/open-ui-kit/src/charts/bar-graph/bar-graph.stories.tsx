/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import type { ComponentProps, ReactNode } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, Typography } from "@/components";
import { BarGraph, type BarProps } from "./bar-graph";
import { AWSServicesCloudWatch } from "@/custom-icons";
import { OverflowTooltip } from "@/components/overflow-tooltip";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { BarGraphItem } from "../common/types";

/**
 *  ### Bar graph express quantities using stacked bars.
 */
const meta: Meta<typeof BarGraph> = {
  title: "Charts/Bar Graph",
  component: BarGraph,
  tags: ["autodocs"],
  argTypes: {
    data: {
      control: "object",
      description: "Rows with a label value and keyed stacked bar values.",
    },
    bars: {
      control: "object",
      description: "Stacked segment keys and theme-token colors.",
    },
    headers: {
      control: "object",
      description: "Two column labels for the row label and stacked bars.",
    },
    showLegend: {
      control: "boolean",
      description: "Shows the legend row below the graph.",
    },
    showTooltip: {
      control: "boolean",
      description: "Shows the default stacked-bar tooltip.",
    },
    customTooltip: {
      control: false,
      description: "Optional Recharts tooltip renderer.",
    },
    handleClick: {
      control: false,
      description: "Called when the Recharts graph is selected.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Bar Graph"
          blurb="BarGraph displays stacked horizontal bars for comparing multiple categories across items. Pass bars to define each category key and color."
          guideLink="#"
          importLine='import { BarGraph } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof BarGraph>;

const headers = ["Services", "Health Breakdown"];

const useRiskBars = (): BarProps[] => {
  const theme = useTheme();

  return [
    { key: "Critical", color: theme.palette.vars.negativeBackgroundDefault },
    { key: "Warning", color: theme.palette.vars.warningBackgroundDefault },
    { key: "Healthy", color: theme.palette.vars.successBackgroundDefault },
  ];
};

const data: BarGraphItem[] = [
  {
    value: "us-east-1",
    barData: {
      Critical: 4,
      Warning: 14,
      Healthy: 7,
    },
  },
  {
    value: "us-east-2",
    barData: {
      Critical: 2,
      Warning: 12,
      Healthy: 9,
    },
  },
  {
    value: "eu-west-1",
    barData: {
      Critical: 1,
      Warning: 8,
      Healthy: 13,
    },
  },
  {
    value: "eu-north-1",
    barData: {
      Critical: 0,
      Warning: 6,
      Healthy: 14,
    },
  },
];

const customLabel = (
  <Stack direction="row" alignItems="center" gap="4px">
    <AWSServicesCloudWatch aria-hidden sx={{ fontSize: 20 }} />
    <Typography component="div" maxWidth={120} variant="button">
      <OverflowTooltip value="AWS CloudWatch">AWS CloudWatch</OverflowTooltip>
    </Typography>
  </Stack>
);

const dataWithCustomLabels: BarGraphItem[] = [
  {
    value: customLabel,
    barData: {
      Critical: 4,
      Warning: 14,
      Healthy: 7,
    },
  },
  {
    value: customLabel,
    barData: {
      Critical: 2,
      Warning: 12,
      Healthy: 9,
    },
  },
  {
    value: customLabel,
    barData: {
      Critical: 0,
      Warning: 7,
      Healthy: 15,
    },
  },
];

const BarGraphFrame = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <Stack width="360px">
    <Typography variant="button" mb="8px">
      {title}
    </Typography>
    <Stack height="384px" width="360px">
      {children}
    </Stack>
  </Stack>
);

const ThemedBarGraph = ({
  customLabels = false,
  showLegend = true,
  showTooltip = true,
}: {
  customLabels?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
}) => {
  const bars = useRiskBars();

  return (
    <BarGraph
      bars={bars}
      data={customLabels ? dataWithCustomLabels : data}
      headers={headers}
      showLegend={showLegend}
      showTooltip={showTooltip}
    />
  );
};

const DefaultExample = (args: Partial<ComponentProps<typeof BarGraph>>) => {
  const bars = useRiskBars();

  return (
    <BarGraphFrame title="Bar Graph">
      <BarGraph
        {...args}
        bars={args.bars ?? bars}
        data={args.data ?? data}
        headers={args.headers ?? headers}
      />
    </BarGraphFrame>
  );
};

export const Default: Story = {
  args: {
    showLegend: true,
    showTooltip: true,
  },
  render: (args) => <DefaultExample {...args} />,
};

export const WithCustomLabels: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <BarGraphFrame title="Custom Labels">
      <ThemedBarGraph customLabels />
    </BarGraphFrame>
  ),
};

export const WithoutLegend: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <BarGraphFrame title="Without Legend">
      <ThemedBarGraph showLegend={false} />
    </BarGraphFrame>
  ),
};

export const WithoutTooltip: Story = {
  parameters: {
    controls: { disable: true },
  },
  render: () => (
    <BarGraphFrame title="Without Tooltip">
      <ThemedBarGraph showTooltip={false} />
    </BarGraphFrame>
  ),
};
