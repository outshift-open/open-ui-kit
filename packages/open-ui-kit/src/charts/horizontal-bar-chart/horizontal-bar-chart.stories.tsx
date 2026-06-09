/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { HorizontalBarChart } from "./horizontal-bar-chart";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { ChartDataItem } from "../common/types";
import {
  AWSCloudFormation,
  Ansible,
  AzureResourceManager,
  CommonIAC,
  Docker2,
} from "@/custom-icons";

const meta: Meta<typeof HorizontalBarChart> = {
  title: "Charts/HorizontalBarChart",
  component: HorizontalBarChart,
  tags: ["autodocs"],
  parameters: {
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
};

export default meta;

type Story = StoryObj<typeof HorizontalBarChart>;

const data: ChartDataItem[] = [
  {
    name: "Cryptomining",
    value: 10,
    color: "#3a95ff",
    icon: AWSCloudFormation,
  },
  { name: "Ransomware", value: 4, color: "#3a95ff", icon: Ansible },
  {
    name: "Data Destruction",
    value: 3,
    color: "#3a95ff",
    icon: AzureResourceManager,
  },
  {
    name: "Data Exfiltration",
    value: 2,
    color: "#3a95ff",
    icon: CommonIAC,
  },
  {
    name: "Application",
    value: 0,
    color: "#3a95ff",
    icon: Docker2,
  },
];

export const Example: Story = {
  render: (args) => {
    return (
      <div style={{ width: "400px" }}>
        <HorizontalBarChart {...args} />
      </div>
    );
  },
  args: {
    data,
    handleClick: (item) => alert(JSON.stringify(item)),
    categories: [{ name: "Attack Purpose" }, { name: "No. Attacks" }],
  },
};
