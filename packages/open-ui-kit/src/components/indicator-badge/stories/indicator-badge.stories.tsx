/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTheme } from "@mui/material";
import { IndicatorBadge, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { IndicatorBadgeValue } from "../types";

const meta: Meta<typeof IndicatorBadge> = {
  title: "Components/IndicatorBadge",
  component: IndicatorBadge,
  args: {
    value: 3,
  },
  argTypes: {
    value: {
      control: "radio",
      options: [0, 1, 2, 3, 4],
      description: "Segmented value. Filled bars grow from bottom to top.",
    },
    color: {
      control: false,
      description:
        "Resolved theme token color used by the backdrop and bar segments.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="IndicatorBadge"
          importLine={`import { IndicatorBadge } from "@open-ui-kit/core";`}
          blurb="Indicator badges display compact segmented values from 0 to 4."
          includeStories
        />
      ),
    },
  },
};

export default meta;

type IndicatorBadgeStory = StoryObj<typeof IndicatorBadge>;

const VALUES: IndicatorBadgeValue[] = [0, 1, 2, 3, 4];

const DefaultRender: IndicatorBadgeStory["render"] = (args) => {
  const theme = useTheme();

  return (
    <IndicatorBadge
      {...args}
      color={theme.palette.vars.negativeBackgroundActive}
    />
  );
};

const ValuesRender = () => {
  const theme = useTheme();
  const color = theme.palette.vars.negativeBackgroundActive;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      {VALUES.map((value) => (
        <Stack key={value} spacing={1} alignItems="center">
          <IndicatorBadge color={color} value={value} />
          <Typography variant="caption">{value}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const SeverityColorsRender = () => {
  const theme = useTheme();
  const examples = [
    {
      label: "Info",
      color: theme.palette.vars.neutralBackgroundDefault,
      value: 0,
    },
    {
      label: "Low",
      color: theme.palette.vars.warningBackgroundDefault,
      value: 1,
    },
    {
      label: "Medium",
      color: theme.palette.vars.warningBackgroundActive,
      value: 2,
    },
    {
      label: "High",
      color: theme.palette.vars.severeWarningBackgroundDefault,
      value: 3,
    },
    {
      label: "Critical",
      color: theme.palette.vars.negativeBackgroundActive,
      value: 4,
    },
  ] satisfies Array<{
    label: string;
    color: string;
    value: IndicatorBadgeValue;
  }>;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      {examples.map(({ label, color, value }) => (
        <Stack key={label} spacing={1} alignItems="center">
          <IndicatorBadge color={color} value={value} />
          <Typography variant="caption">{label}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

export const Default: IndicatorBadgeStory = {
  render: DefaultRender,
};

export const Values: IndicatorBadgeStory = {
  render: ValuesRender,
};

export const SeverityColors: IndicatorBadgeStory = {
  render: SeverityColorsRender,
};
