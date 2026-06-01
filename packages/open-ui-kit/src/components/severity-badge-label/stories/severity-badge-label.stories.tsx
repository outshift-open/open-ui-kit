/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { Severity } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SeverityBadgeLabel } from "../components/severity-badge-label";
import type { SeverityBadgeScoreSystemItem } from "@/components/severity-badge";

const meta: Meta<typeof SeverityBadgeLabel> = {
  title: "Components/Severity/Badge Label",
  component: SeverityBadgeLabel,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="SeverityBadgeLabel combines a SeverityBadge indicator with a text label. Supports the same Severity enum and score system API as SeverityBadge."
          guideLink=""
          importLine='import { SeverityBadgeLabel } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityBadgeLabel>;

export const BySeverity: Story = {
  name: "By Severity",
  render: () => (
    <Stack direction="row" spacing={3} flexWrap="wrap">
      {Object.values(Severity).map((severity) => (
        <SeverityBadgeLabel key={severity} severity={severity} />
      ))}
    </Stack>
  ),
};

export const ByValue: Story = {
  name: "By Value",
  render: () => (
    <Stack direction="row" spacing={3}>
      <SeverityBadgeLabel value={90} />
      <SeverityBadgeLabel value={80} />
      <SeverityBadgeLabel value={60} />
      <SeverityBadgeLabel value={20} />
      <SeverityBadgeLabel />
    </Stack>
  ),
};

export const CustomScoreSystem: Story = {
  name: "Custom Score System",
  render: () => {
    const customScoreSystem: SeverityBadgeScoreSystemItem[] = [
      {
        threshold: 33,
        configuration: { color: "pink", value: 1, label: "Pink" },
      },
      {
        threshold: 66,
        configuration: { color: "purple", value: 3, label: "Purple" },
      },
    ];
    return (
      <Stack direction="row" spacing={3}>
        <SeverityBadgeLabel scoreSystem={customScoreSystem} value={22} />
        <SeverityBadgeLabel scoreSystem={customScoreSystem} value={55} />
        <SeverityBadgeLabel scoreSystem={customScoreSystem} />
      </Stack>
    );
  },
};

export const CustomLabel: Story = {
  name: "Custom Label",
  render: () => (
    <Stack direction="row" spacing={3}>
      <SeverityBadgeLabel severity={Severity.CRITICAL} label="Urgent" />
      <SeverityBadgeLabel severity={Severity.LOW} label="Minimal Risk" />
    </Stack>
  ),
};
