/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react";
import { IndicatorBadge } from "../components/indicator-badge";

const meta: Meta<typeof IndicatorBadge> = {
  title: "Components/IndicatorBadge",
  component: IndicatorBadge,
  args: { color: "red", value: 3 },
  tags: ["autodocs"],
};

export default meta;

type IndicatorBadgeStory = StoryObj<typeof IndicatorBadge>;

export const Example: IndicatorBadgeStory = {
  render: (args) => <IndicatorBadge {...args} />,
};
