import { Meta, StoryObj } from "@storybook/react";
import { Legend, TRow } from "../components/legend";
import { TooltipSize } from "../..";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof Legend> = {
  title: "Components/Legend",
  component: Legend,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          importLine="import { Legend } from '@open-ui-kit/core';"
          blurb="A legend component for displaying legend information with optional tooltips and click actions."
          guideLink=""
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Legend>;

const bordeaux500 = "#c62953";

const onClick = ({ color, values }: TRow<"Type" | "Total" | "Trend">) => {
  alert(`${values["Type"]}, ${values["Total"]}, ${values["Trend"]}, ${color}`);
};

export const ChartLegend: Story = {
  render: () => (
    <Legend
      headers={["Type", "Total", "Trend"]}
      rows={[
        {
          color: bordeaux500,
          values: { Type: "Malware", Total: "4", Trend: "+2%" },
          tooltip: "Malware",
        },
        {
          color: bordeaux500,
          values: { Type: "AWS Guardduty", Total: "25", Trend: "+2%" },
          tooltip: "AWS Guardduty",
          tooltipProps: { size: TooltipSize.Medium },
        },
        {
          color: bordeaux500,
          values: { Type: "K8s Runtime", Total: "5", Trend: "+2%" },
          tooltip: "K8s",
        },
      ]}
    />
  ),
};

export const LegendTableWithClickableRows: Story = {
  render: () => (
    <Legend
      headers={["Type", "Total", "Trend"]}
      rows={[
        {
          color: bordeaux500,
          values: { Type: "Malware", Total: "4", Trend: "+2%" },
          onClick,
          tooltip: "Malware",
        },
        {
          color: bordeaux500,
          values: { Type: "AWS Guardduty", Total: "25", Trend: "+2%" },
          onClick,
        },
        {
          color: bordeaux500,
          values: { Type: "K8s Runtime", Total: "5", Trend: "+2%" },
          onClick,
        },
        {
          color: bordeaux500,
          values: { Type: "K8s Runtime", Total: "5", Trend: "+2%" },
          onClick,
        },
      ]}
    />
  ),
};
