import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { Toast, ToastProps } from "../components/toast";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast/Toast",
  component: Toast,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="The Toast component appears temporarily and floats above the UI to provide users with (non-critical) updates on an app's processes."
          guideLink=""
          importLine='import { Toast } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

const ToastComponent = (args: ToastProps) => {
  return (
    <Stack direction="column" spacing={2} display="flex">
      <Toast
        type={args.type}
        description="You can customize the content and actions."
        action={{
          label: "Reply",
          onClick: () => console.log("Button clicked"),
        }}
        {...args}
      />
    </Stack>
  );
};

export const Default: Story = {
  render: (args) => <ToastComponent {...args} />,
  args: {
    title: "Default Toast",
  },
};

export const ToastWithLongText: Story = {
  render: (args) => <ToastComponent {...args} />,
  args: {
    description:
      "This is a snackbar with long text. You can customize the content and actions.",
  },
};

export const ToastWithOutTitle: Story = {
  render: (args) => <ToastComponent {...args} />,
  args: {
    title: undefined,
  },
};

export const ToastType: Story = {
  render: (args) => (
    <Stack direction={"column"} spacing={2}>
      {(["default", "success", "error", "warning", "info"] as const).map(
        (type) =>
          ToastComponent({
            ...args,
            type,
            title: `Toast of type ${type}`,
            description: `This is a toast of type ${type}. You can customize the content and actions.`,
            action: {
              label: "Action",
              onClick: () => console.log(`Action clicked for type ${type}`),
            },
          }),
      )}
    </Stack>
  ),
};
