/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import { Severity } from "@/common";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SeverityBadge } from "../components/severity-badge";
import { SeverityBadgeScoreSystemItem } from "../types/severity-badge.types";

const meta: Meta<typeof SeverityBadge> = {
  title: "Components/Severity/Badge",
  component: SeverityBadge,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="SeverityBadge is a color indicator that works with either Severity enum values or a numeric score system with configurable thresholds."
          guideLink=""
          importLine='import { SeverityBadge } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SeverityBadge>;

export const BySeverity: Story = {
  name: "By Severity",
  render: () => (
    <Stack direction="row" spacing={3}>
      {Object.values(Severity).map((severity) => (
        <SeverityBadge key={severity} severity={severity} />
      ))}
    </Stack>
  ),
};

export const ByValue: Story = {
  name: "By Value",
  render: () => (
    <Stack direction="row" spacing={3}>
      <SeverityBadge value={90} />
      <SeverityBadge value={80} />
      <SeverityBadge value={60} />
      <SeverityBadge value={20} />
      <SeverityBadge />
    </Stack>
  ),
};

export const CustomScoreSystem: Story = {
  name: "Custom Score System",
  render: () => {
    const customScoreSystem: SeverityBadgeScoreSystemItem[] = [
      { threshold: 33, configuration: { color: "#ee82ee", value: 1 } },
      { threshold: 66, configuration: { color: "#6a5acd", value: 3 } },
    ];
    return (
      <Stack direction="row" spacing={3}>
        <SeverityBadge scoreSystem={customScoreSystem} value={22} />
        <SeverityBadge scoreSystem={customScoreSystem} value={55} />
        <SeverityBadge scoreSystem={customScoreSystem} />
      </Stack>
    );
  },
};
