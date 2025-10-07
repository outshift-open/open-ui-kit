/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { SeverityBadge } from "../components/severity-badge";
import { Severity } from "@/common";
import { SeverityBadgeScoreSystemItem } from "../types/severity-badge.types";

/**
 *  ### A color indicator severity badge. Either works with Severity types or with a value score system.
 */
const meta: Meta<typeof SeverityBadge> = {
  title: "Components/SeverityBadge",
  component: SeverityBadge,
  tags: ["autodocs"],
};

export default meta;

type SeverityBadgeStory = StoryObj<typeof SeverityBadge>;

export const Example: SeverityBadgeStory = {
  render: (args) => <SeverityBadge {...args} />,
};

export const ExampleBySeverityType: SeverityBadgeStory = {
  render: () => (
    <Stack direction={"row"} spacing={3}>
      {Object.keys(Severity).map((severity) => {
        return <SeverityBadge key={severity} severity={severity as Severity} />;
      })}
    </Stack>
  ),
};

export const ExampleByValue: SeverityBadgeStory = {
  render: () => (
    <Stack direction={"row"} spacing={3}>
      <SeverityBadge value={90} />
      <SeverityBadge value={80} />
      <SeverityBadge value={60} />
      <SeverityBadge value={20} />
      <SeverityBadge />
    </Stack>
  ),
};

export const ExampleByValueWithCustomScoreSystem: SeverityBadgeStory = {
  render: () => {
    const customScoreSystem: SeverityBadgeScoreSystemItem[] = [
      { threshold: 33, configuration: { color: "#ee82ee", value: 1 } },
      { threshold: 66, configuration: { color: "#6a5acd", value: 3 } },
    ];

    return (
      <Stack direction={"row"} spacing={3}>
        <SeverityBadge scoreSystem={customScoreSystem} value={22} />
        <SeverityBadge scoreSystem={customScoreSystem} value={55} />
        <SeverityBadge scoreSystem={customScoreSystem} />
      </Stack>
    );
  },
};
