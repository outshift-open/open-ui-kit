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
import { SeverityBadgeLabel } from "../components/severity-badge-label";
import type { SeverityBadgeScoreSystemItem } from "@/components/severity-badge";

const meta: Meta<typeof SeverityBadgeLabel> = {
  title: "Components/Severity/Badge Label",
  component: SeverityBadgeLabel,
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
    label: {
      control: "text",
    },
    scoreSystem: {
      control: false,
    },
    containerStackProps: {
      control: false,
    },
    labelTypographyProps: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Severity Badge Label"
          blurb="SeverityBadgeLabel combines a SeverityBadge indicator with a text label. Supports the same Severity enum and score system API as SeverityBadge."
          guideLink=""
          importLine='import { SeverityBadgeLabel } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityBadgeLabel>;

export const Default: Story = {
  render: (args) => <SeverityBadgeLabel {...args} />,
};

export const BySeverity: Story = {
  render: () => (
    <Stack direction="row" gap="24px" alignItems="center" flexWrap="wrap">
      {Object.values(Severity).map((severity) => (
        <SeverityBadgeLabel key={severity} severity={severity} />
      ))}
    </Stack>
  ),
};

export const ByValue: Story = {
  render: () => (
    <Stack direction="row" gap="24px" alignItems="center" flexWrap="wrap">
      <SeverityBadgeLabel value={90} />
      <SeverityBadgeLabel value={80} />
      <SeverityBadgeLabel value={60} />
      <SeverityBadgeLabel value={20} />
      <SeverityBadgeLabel />
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
        label: "Info bucket",
      },
    },
    {
      threshold: 66,
      configuration: {
        color: theme.palette.vars.interactivePrimaryDefaultDefault,
        value: 3,
        label: "Primary bucket",
      },
    },
  ];

  return (
    <Stack direction="row" gap="24px" alignItems="center" flexWrap="wrap">
      <SeverityBadgeLabel scoreSystem={customScoreSystem} value={22} />
      <SeverityBadgeLabel scoreSystem={customScoreSystem} value={55} />
      <SeverityBadgeLabel scoreSystem={customScoreSystem} />
    </Stack>
  );
};

export const CustomScoreSystem: Story = {
  render: () => <CustomScoreSystemExample />,
};

export const CustomLabel: Story = {
  render: () => (
    <Stack direction="row" gap="24px" alignItems="center">
      <SeverityBadgeLabel severity={Severity.CRITICAL} label="Urgent" />
      <SeverityBadgeLabel severity={Severity.LOW} label="Minimal Risk" />
    </Stack>
  ),
};
