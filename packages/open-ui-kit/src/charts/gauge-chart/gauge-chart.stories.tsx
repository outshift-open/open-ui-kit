/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, Typography, useTheme } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { GaugeChart, type GaugeChartProps } from "./gauge-chart";

const meta: Meta<typeof GaugeChart> = {
  title: "Charts/Gauge Chart",
  component: GaugeChart,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
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
      control: false,
      description: "Single metric value and token color rendered in the gauge.",
    },
    maxValue: {
      control: "number",
      description: "Target value used to calculate the filled arc.",
    },
    customLabelComponent: {
      control: false,
      description: "Optional content shown under the central number.",
    },
    styleProps: {
      control: false,
      description: "Optional width, height, and label-position overrides.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GaugeChart>;

const getGaugeData = (
  theme: Theme,
  value: number,
  color: string,
): GaugeChartProps["data"] => [
  {
    name: "Score",
    value,
    color,
  },
];

const GaugeFrame = ({ children }: { children: ReactNode }) => (
  <Stack height="132px" width="132px">
    {children}
  </Stack>
);

const GaugeTemplate = (args: Partial<GaugeChartProps>) => {
  const theme = useTheme();
  const {
    data = getGaugeData(
      theme,
      100,
      theme.palette.vars.successBackgroundDefault,
    ),
    ...rest
  } = args;

  return (
    <GaugeFrame>
      <GaugeChart data={data} {...rest} />
    </GaugeFrame>
  );
};

const WarningTemplate = (args: Partial<GaugeChartProps>) => {
  const theme = useTheme();

  return (
    <GaugeFrame>
      <GaugeChart
        {...args}
        data={getGaugeData(
          theme,
          75,
          theme.palette.vars.warningBackgroundDefault,
        )}
      />
    </GaugeFrame>
  );
};

const CriticalTemplate = (args: Partial<GaugeChartProps>) => {
  const theme = useTheme();

  return (
    <GaugeFrame>
      <GaugeChart
        {...args}
        data={getGaugeData(
          theme,
          25,
          theme.palette.vars.negativeBackgroundDefault,
        )}
      />
    </GaugeFrame>
  );
};

const StatesTemplate = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" flexWrap="wrap" gap="24px">
      {[100, 75, 50, 25].map((value, index) => {
        const color =
          index === 0
            ? theme.palette.vars.successBackgroundDefault
            : index === 1
              ? theme.palette.vars.warningBackgroundDefault
              : theme.palette.vars.negativeBackgroundDefault;

        return (
          <GaugeFrame key={value}>
            <GaugeChart data={getGaugeData(theme, value, color)} />
          </GaugeFrame>
        );
      })}
    </Stack>
  );
};

const WithLabelTemplate = () => {
  const theme = useTheme();

  return (
    <GaugeFrame>
      <GaugeChart
        data={getGaugeData(
          theme,
          75,
          theme.palette.vars.warningBackgroundDefault,
        )}
        customLabelComponent={
          <Typography
            variant="caption"
            color={theme.palette.vars.baseTextMedium}
          >
            Good
          </Typography>
        }
      />
    </GaugeFrame>
  );
};

const CustomMaxTemplate = () => {
  const theme = useTheme();

  return (
    <GaugeFrame>
      <GaugeChart
        data={getGaugeData(theme, 42, theme.palette.vars.accentADefault)}
        maxValue={50}
      />
    </GaugeFrame>
  );
};

export const Default: Story = {
  render: (args) => <GaugeTemplate {...args} />,
  args: {
    maxValue: 100,
  },
};

export const Warning: Story = {
  render: (args) => <WarningTemplate {...args} />,
  args: {
    maxValue: 100,
  },
};

export const Critical: Story = {
  render: (args) => <CriticalTemplate {...args} />,
  args: {
    maxValue: 100,
  },
};

export const States: Story = {
  render: () => <StatesTemplate />,
};

export const WithLabel: Story = {
  render: () => <WithLabelTemplate />,
};

export const CustomMax: Story = {
  render: () => <CustomMaxTemplate />,
};
