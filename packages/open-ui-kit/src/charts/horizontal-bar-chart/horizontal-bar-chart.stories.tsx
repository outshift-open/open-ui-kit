import { Meta, StoryObj } from "@storybook/react";
import { HorizontalBarChart } from "./horizontal-bar-chart";
import { ChartDataItem } from "@/charts";
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
