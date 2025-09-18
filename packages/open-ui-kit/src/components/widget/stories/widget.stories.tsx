import { Meta, StoryObj } from "@storybook/react";
import { Button, Stack } from "@mui/material";
import { Kubernetes } from "@/custom-icons";
import { IWidgetProps, Widget } from "../components/widget";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<IWidgetProps<string>> = {
  title: "Components/Widget",
  component: Widget,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Widget is a versatile component that can be used to display various types of content, including headers, body elements, and legends. It supports loading states and empty states, making it suitable for dynamic data presentation."
          guideLink="#"
          importLine='import { Widget } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<IWidgetProps<string>>;

export const Default: Story = {
  render: (args) => <Widget {...args} />,
};

export const LoadingWidget: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    isLoading: true,
  },
};

export const EmptyStateWidget: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    isEmpty: true,
  },
};

export const WidgetWithoutLabel: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    isLoading: false,
    bodyElement: <>This is body element</>,
  },
};
export const GeneralPropsWidget: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    isLoading: false,
    bodyElement: <>This is body element</>,
    label: "General Header Label",
  },
};

export const LabelAsElement: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    isLoading: false,
    isEmpty: false,
    bodyElement: <>This is body element</>,
    label: <div style={{ color: "red" }}>label element</div>,
  },
};

export const LeftHeaderElement: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    isLoading: false,
    isEmpty: false,
    bodyElement: <>This is body element</>,
    label: "Just a label",
    headerLeftChildren: <Button>Left element</Button>,
  },
};

export const GeneralLegendWidget: Story = {
  render: (args) => <Widget {...args} />,
  args: {
    bodyElement: <>This is body element</>,
    isEmpty: false,
    label: "General Header Label",
    legend: {
      headers: ["col1", "col2", "col3"],
      rows: [
        {
          color: "red",
          values: {
            col1: "val1",
            col2: "val2",
            col3: "val3",
          },
        },
        {
          color: "blue",
          values: {
            col1: "val4",
            col2: "val5",
            col3: "val6",
          },
        },
        {
          color: "green",
          values: {
            col1: "val7",
            col2: "val8",
            col3: "val9",
          },
          tooltip: (
            <Stack direction={"row"} alignItems={"center"}>
              <Kubernetes /> K8s
            </Stack>
          ),
        },
      ],
    },
  },
};
