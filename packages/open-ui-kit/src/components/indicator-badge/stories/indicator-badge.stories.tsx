/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography, useTheme } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { IndicatorBadge } from "../components/indicator-badge";

const meta: Meta<typeof IndicatorBadge> = {
  title: "Components/IndicatorBadge",
  component: IndicatorBadge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          importLine="import { IndicatorBadge } from '@open-ui-kit/core';"
          blurb="Indicator badges display compact segmented values from 0 to 4."
          guideLink=""
        />
      ),
    },
  },
};

export default meta;

type IndicatorBadgeStory = StoryObj<typeof IndicatorBadge>;

const Values = () => {
  const theme = useTheme();
  const color = theme.palette.vars.negativeBackgroundActive;

  return (
    <Stack direction="row" spacing={3} alignItems="center">
      {[0, 1, 2, 3, 4].map((value) => (
        <Stack key={value} spacing={1} alignItems="center">
          <IndicatorBadge color={color} value={value as 0 | 1 | 2 | 3 | 4} />
          <Typography variant="caption">{value}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const SeverityColors = () => {
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
  ] as const;

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

export const ValuesStory: IndicatorBadgeStory = {
  name: "Values",
  render: Values,
};

export const SeverityColorsStory: IndicatorBadgeStory = {
  name: "Severity Colors",
  render: SeverityColors,
};
