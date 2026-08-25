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
    variant: {
      control: "select",
      options: ["amber", "teal", "blue"],
      description:
        "Applies the design-approved gradient treatment: ramped 270° arc, ambient glow, and a % suffix.",
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
        data={getGaugeData(theme, 25, theme.palette.vars.negativeBorderDefault)}
      />
    </GaugeFrame>
  );
};

/*
 * Each gauge omits its data item's `color`, so the arc comes from the
 * component's own status ramp: success at 100, warning at 75, severe warning
 * at 50, negative at 25.
 */
const StatesTemplate = () => (
  <Stack direction="row" flexWrap="wrap" gap="24px">
    {[100, 75, 50, 25].map((value) => (
      <GaugeFrame key={value}>
        <GaugeChart data={[{ name: "Score", value }]} />
      </GaugeFrame>
    ))}
  </Stack>
);

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

/*
 * Gradient treatment — Figma `Gauge Chart` (274417:44466).
 *
 * One entry per widget in the frame, with the frame's labels and values:
 * each pairs a `gradient-token` arc swatch with the `Solid` glow swatch
 * behind the value.
 */
const gradientVariants: {
  label: string;
  variant: NonNullable<GaugeChartProps["variant"]>;
  value: number;
}[] = [
  { label: "Trip Planner", variant: "amber", value: 50 },
  { label: "Aether", variant: "teal", value: 82 },
  { label: "E-Commerce App", variant: "blue", value: 67 },
];

const GradientTemplate = ({
  label,
  variant,
  value,
}: {
  label: string;
  variant: GaugeChartProps["variant"];
  value: number;
}) => {
  const theme = useTheme();

  return (
    <Stack gap="16px" width="fit-content">
      <Typography variant="h6" color={theme.palette.vars.baseTextDefault}>
        {label}
      </Typography>
      <Stack alignItems="center" gap="8px">
        <Stack height="172px" width="172px">
          <GaugeChart
            data={getGaugeData(
              theme,
              value,
              theme.palette.vars.successBackgroundDefault,
            )}
            variant={variant}
            styleProps={{ customWidth: 172, customHeight: 172 }}
          />
        </Stack>
        <Typography variant="caption" color={theme.palette.vars.baseTextMedium}>
          Overall Performance
        </Typography>
      </Stack>
    </Stack>
  );
};

export const Default: Story = {
  render: (args) => <GaugeTemplate {...args} />,
  args: {
    maxValue: 100,
  },
};

/**
 * The three design-approved gauge ramps, one widget per `variant`: amber
 * (`Gradient/Gauge-Arc-Amber`), teal (`Gradient/Gauge-Arc-Teal`), and blue
 * (`Gradient/Icon-Subtract-Blue`), each glowing its paired solid behind the
 * value.
 */
export const Gradient: Story = {
  render: () => (
    <Stack direction="row" flexWrap="wrap" gap="48px">
      {gradientVariants.map((variant) => (
        <GradientTemplate key={variant.variant} {...variant} />
      ))}
    </Stack>
  ),
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
