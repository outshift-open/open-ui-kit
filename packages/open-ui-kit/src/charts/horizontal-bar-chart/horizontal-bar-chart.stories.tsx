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
  },
};

export default meta;

type Story = StoryObj<typeof HorizontalBarChart>;

const getData = (theme: Theme, withIcons = false): ChartDataItem[] => [
  {
    name: "Cryptomining",
    value: 10,
    color: theme.palette.vars.accentADefault,
    icon: withIcons ? AWSCloudFormation : undefined,
  },
  {
    name: "Ransomware",
    value: 4,
    color: theme.palette.vars.accentADefault,
    icon: withIcons ? Ansible : undefined,
  },
  {
    name: "Data Destruction",
    value: 3,
    color: theme.palette.vars.accentADefault,
    icon: withIcons ? AzureResourceManager : undefined,
  },
  {
    name: "Data Exfiltration",
    value: 2,
    color: theme.palette.vars.accentADefault,
    icon: withIcons ? CommonIAC : undefined,
  },
  {
    name: "Application",
    value: 0,
    color: theme.palette.vars.accentADefault,
    icon: withIcons ? Docker2 : undefined,
  },
];

const categories = [{ name: "Attack Purpose" }, { name: "No. Attacks" }];

const ChartFrame = ({ children }: { children: ReactNode }) => (
  <Stack maxWidth="100%" width="400px">
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
