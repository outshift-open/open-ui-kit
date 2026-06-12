/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Grid, Stack, useTheme } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { DonutChart, type DonutProps } from "./donut-chart";

const meta: Meta<typeof DonutChart> = {
  title: "Charts/Donut Chart",
  component: DonutChart,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Donut Chart"
          blurb="DonutChart shows proportions of categorical data. The center displays the total value. Slice colors are set per data item."
          guideLink="#"
          importLine='import { DonutChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    data: {
      control: false,
      description: "Category values and token colors rendered as donut slices.",
    },
    showTooltip: {
      control: "boolean",
      description: "Whether to show a tooltip when hovering a slice.",
    },
    handleClick: {
      action: "slice clicked",
      description:
        "Called with the selected slice data when a segment is clicked.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DonutChart>;

const getDefaultData = (theme: Theme): DonutProps["data"] => [
  {
    name: "Healthy",
    value: 400,
    color: theme.palette.vars.successBackgroundDefault,
  },
  {
    name: "Warning",
    value: 300,
    color: theme.palette.vars.warningBackgroundDefault,
  },
  {
    name: "Total",
    value: 300,
    color: theme.palette.vars.accentADefault,
  },
  {
    name: "Critical",
    value: 200,
    color: theme.palette.vars.negativeBackgroundDefault,
  },
];

const getTwoSegmentData = (theme: Theme): DonutProps["data"] => [
  {
    name: "Compliant",
    value: 600,
    color: theme.palette.vars.successBackgroundDefault,
  },
  {
    name: "Review",
    value: 200,
    color: theme.palette.vars.accentADefault,
  },
];

const getCriticalRampData = (theme: Theme): DonutProps["data"] => [
  {
    name: "Critical",
    value: 400,
    color: theme.palette.vars.negativeBackgroundDefault,
  },
  {
    name: "Warning",
    value: 350,
    color: theme.palette.vars.warningBackgroundDefault,
  },
  {
    name: "Healthy",
    value: 350,
    color: theme.palette.vars.successBackgroundDefault,
  },
  {
    name: "Total",
    value: 350,
    color: theme.palette.vars.accentADefault,
  },
];

const getBigNumberData = (theme: Theme): DonutProps["data"] => [
  {
    name: "Open",
    value: 555654,
    color: theme.palette.vars.warningBackgroundDefault,
  },
  {
    name: "Closed",
    value: 1154656,
    color: theme.palette.vars.successBackgroundDefault,
  },
];

const DonutFrame = ({ children }: { children: ReactNode }) => (
  <Stack height="132px" width="132px">
    {children}
  </Stack>
);

const DefaultTemplate = (args: Partial<DonutProps>) => {
  const theme = useTheme();
  const { data = getDefaultData(theme), ...rest } = args;

  return (
    <DonutFrame>
      <DonutChart data={data} {...rest} />
    </DonutFrame>
  );
};

const SegmentCountsTemplate = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: 600 }}>
      <Grid container justifyContent="space-between">
        <DonutFrame>
          <DonutChart data={getTwoSegmentData(theme)} />
        </DonutFrame>
        <DonutFrame>
          <DonutChart data={getDefaultData(theme)} />
        </DonutFrame>
        <DonutFrame>
          <DonutChart data={getCriticalRampData(theme)} />
        </DonutFrame>
      </Grid>
    </Box>
  );
};

const BigNumberTemplate = () => {
  const theme = useTheme();

  return (
    <DonutFrame>
      <DonutChart data={getBigNumberData(theme)} />
    </DonutFrame>
  );
};

const WithoutTooltipTemplate = () => {
  const theme = useTheme();

  return (
    <DonutFrame>
      <DonutChart data={getDefaultData(theme)} showTooltip={false} />
    </DonutFrame>
  );
};

const ClickableTemplate = (args: Partial<DonutProps>) => {
  const theme = useTheme();
  const { data = getDefaultData(theme), ...rest } = args;

  return (
    <DonutFrame>
      <DonutChart data={data} {...rest} />
    </DonutFrame>
  );
};

export const Default: Story = {
  render: (args) => <DefaultTemplate {...args} />,
  args: {
    showTooltip: true,
  },
};

export const SegmentCounts: Story = {
  render: () => <SegmentCountsTemplate />,
};

export const BigNumber: Story = {
  render: () => <BigNumberTemplate />,
};

export const WithoutTooltip: Story = {
  render: () => <WithoutTooltipTemplate />,
};

export const Clickable: Story = {
  render: (args) => <ClickableTemplate {...args} />,
  args: {
    showTooltip: true,
  },
};
