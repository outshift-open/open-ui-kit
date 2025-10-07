/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { SeverityBadgeLabel } from "../components/severity-badge-label";
import { Severity } from "@/common";
import { SeverityBadgeScoreSystemItem } from "@/components";

/**
 *  ### A color indicator severity badge with label. Either works with Severity types or with a value score system.
 */
const meta: Meta<typeof SeverityBadgeLabel> = {
  title: "Components/SeverityBadgeLabel",
  component: SeverityBadgeLabel,
  tags: ["autodocs"],
};

export default meta;

type SeverityBadgeLabelStory = StoryObj<typeof SeverityBadgeLabel>;

export const Example: SeverityBadgeLabelStory = {
  render: (args) => <SeverityBadgeLabel {...args} />,
};

export const ExampleBySeverityType: SeverityBadgeLabelStory = {
  render: () => (
    <Stack direction={"row"} spacing={3}>
      {Object.keys(Severity).map((severity) => {
        return (
          <SeverityBadgeLabel key={severity} severity={severity as Severity} />
        );
      })}
    </Stack>
  ),
};

export const ExampleByValue: SeverityBadgeLabelStory = {
  render: () => (
    <Stack direction={"row"} spacing={3}>
      <SeverityBadgeLabel value={90} />
      <SeverityBadgeLabel value={80} />
      <SeverityBadgeLabel value={60} />
      <SeverityBadgeLabel value={20} />
      <SeverityBadgeLabel />
    </Stack>
  ),
};

export const ExampleByValueWithCustomScoreSystem: SeverityBadgeLabelStory = {
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
      <Stack direction={"row"} spacing={3}>
        <SeverityBadgeLabel scoreSystem={customScoreSystem} value={22} />
        <SeverityBadgeLabel scoreSystem={customScoreSystem} value={55} />
        <SeverityBadgeLabel scoreSystem={customScoreSystem} />
      </Stack>
    );
  },
};
