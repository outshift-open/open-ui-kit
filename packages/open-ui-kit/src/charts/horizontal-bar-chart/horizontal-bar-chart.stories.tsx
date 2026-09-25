/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, useTheme } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { ReactNode } from "react";
import {
  AWSCloudFormation,
  Ansible,
  AzureResourceManager,
  CommonIAC,
  Docker2,
} from "@/custom-icons";
import { action } from "storybook/actions";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { ChartDataItem } from "../common/types";
import {
  HorizontalBarChart,
  type HorizontalBarChartProps,
} from "./horizontal-bar-chart";

const meta: Meta<typeof HorizontalBarChart> = {
  title: "Charts/HorizontalBarChart",
  component: HorizontalBarChart,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Horizontal Bar Chart"
          blurb="HorizontalBarChart displays items as horizontal progress bars. Bar width is proportional to the item's value relative to the maximum."
          guideLink="#"
          importLine='import { HorizontalBarChart } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    data: {
      control: false,
      description: "Items rendered as horizontal bars.",
    },
    categories: {
      control: false,
      description: "Optional header labels shown above the chart.",
    },
    handleClick: {
      description: "Called with the selected item when a row is activated.",
    },
    variant: {
      control: "radio",
      options: ["labelled", "inline"],
      description:
        '"labelled" (default) shows the name/value row above each bar. "inline" shows the name before the bar and the value after it, all on the same line.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof HorizontalBarChart>;

const ICONS = [
  AWSCloudFormation,
  Ansible,
  AzureResourceManager,
  CommonIAC,
  Docker2,
];

/**
 * 12 rows — more than the 240px story frame shows at the 18px bar height, so
 * every variant scrolls vertically.
 */
const ATTACKS: [name: string, value: number][] = [
  ["Cryptomining", 10],
  ["Ransomware", 4],
  ["Data Destruction", 3],
  ["Data Exfiltration", 2],
  ["Credential Theft", 9],
  ["Phishing", 8],
  ["Privilege Escalation", 7],
  ["Lateral Movement", 6],
  ["Denial of Service", 5],
  ["Supply Chain", 3],
  ["Insider Threat", 1],
  ["Application", 0],
];

const getData = (theme: Theme, withIcons = false): ChartDataItem[] =>
  ATTACKS.map(([name, value], i) => ({
    name,
    value,
    color: theme.palette.vars.accentADefault,
    icon: withIcons ? ICONS[i % ICONS.length] : undefined,
  }));

const categories = [{ name: "Attack Purpose" }, { name: "No. Attacks" }];

/** A fixed height, so rows beyond it scroll vertically. */
const ChartFrame = ({ children }: { children: ReactNode }) => (
  <Stack maxWidth="100%" width="400px" height="240px">
    {children}
  </Stack>
);

const DefaultTemplate = (args: Partial<HorizontalBarChartProps>) => {
  const theme = useTheme();
  const { data = getData(theme), categories: storyCategories = categories } =
    args;

  return (
    <ChartFrame>
      <HorizontalBarChart {...args} categories={storyCategories} data={data} />
    </ChartFrame>
  );
};

const WithIconsTemplate = (args: Partial<HorizontalBarChartProps>) => {
  const theme = useTheme();

  return (
    <ChartFrame>
      <HorizontalBarChart
        {...args}
        categories={categories}
        data={getData(theme, true)}
      />
    </ChartFrame>
  );
};

const EmptyTemplate = () => {
  const theme = useTheme();

  return (
    <ChartFrame>
      <HorizontalBarChart
        categories={categories}
        data={[
          {
            name: "No attacks",
            value: 0,
            color: theme.palette.vars.accentADefault,
          },
        ]}
      />
    </ChartFrame>
  );
};

const InlineTemplate = () => {
  const theme = useTheme();

  return (
    <ChartFrame>
      <HorizontalBarChart variant="inline" data={getData(theme)} />
    </ChartFrame>
  );
};

export const Default: Story = {
  render: (args) => <DefaultTemplate {...args} />,
};

export const WithIcons: Story = {
  render: (args) => <WithIconsTemplate {...args} />,
};

export const Clickable: Story = {
  render: (args) => <WithIconsTemplate {...args} />,
  args: {
    handleClick: action("bar clicked"),
  },
};

export const Empty: Story = {
  render: () => <EmptyTemplate />,
};

export const Inline: Story = {
  render: () => <InlineTemplate />,
};
