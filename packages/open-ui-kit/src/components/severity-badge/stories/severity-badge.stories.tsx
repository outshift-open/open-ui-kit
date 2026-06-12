/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Severity } from "@/common";
import { Stack } from "@/components";
import { useTheme } from "@/theme-provider/theme-provider";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SeverityBadge } from "../components/severity-badge";
import type { SeverityBadgeScoreSystemItem } from "../types";

const meta: Meta<typeof SeverityBadge> = {
  title: "Components/Severity/Badge",
  component: SeverityBadge,
  tags: ["autodocs"],
  args: {
    severity: Severity.CRITICAL,
  },
  argTypes: {
    severity: {
      control: "select",
      options: Object.values(Severity),
    },
    value: {
      control: { type: "number", min: 0, max: 100 },
    },
    scoreSystem: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Severity Badge"
          blurb="SeverityBadge is a color indicator that works with either Severity enum values or a numeric score system with configurable thresholds."
          guideLink=""
          importLine='import { SeverityBadge } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityBadge>;

export const Default: Story = {
  render: (args) => <SeverityBadge {...args} />,
};

export const BySeverity: Story = {
  render: () => (
    <Stack direction="row" gap="24px" alignItems="center">
      {Object.values(Severity).map((severity) => (
        <SeverityBadge key={severity} severity={severity} />
      ))}
    </Stack>
  ),
};

export const ByValue: Story = {
  render: () => (
    <Stack direction="row" gap="24px" alignItems="center">
      <SeverityBadge value={90} />
      <SeverityBadge value={80} />
      <SeverityBadge value={60} />
      <SeverityBadge value={20} />
      <SeverityBadge />
    </Stack>
  ),
};

const CustomScoreSystemExample = () => {
  const theme = useTheme();
  const customScoreSystem: SeverityBadgeScoreSystemItem[] = [
    {
      threshold: 33,
      configuration: {
        color: theme.palette.vars.infoBackgroundDefault,
        value: 1,
      },
    },
    {
      threshold: 66,
      configuration: {
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
        value: 3,
      },
    },
  ];

  return (
    <Stack direction="row" gap="24px" alignItems="center">
      <SeverityBadge scoreSystem={customScoreSystem} value={22} />
      <SeverityBadge scoreSystem={customScoreSystem} value={55} />
      <SeverityBadge scoreSystem={customScoreSystem} />
    </Stack>
  );
};

export const CustomScoreSystem: Story = {
  render: () => <CustomScoreSystemExample />,
};
