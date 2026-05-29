import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@mui/material";
import { IWidgetProps, Widget } from "../components/widget";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<IWidgetProps<string>> = {
  title: "Components/Widget",
  component: Widget,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Widget is a versatile component that can be used to display various types of content, including headers and body elements. It supports loading states and empty states, making it suitable for dynamic data presentation."
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
