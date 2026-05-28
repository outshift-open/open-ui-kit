import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  ActionsDialog,
  ActionsDialogProps,
} from "../components/actions-dialog";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Button } from "@/components/button";

export default {
  title: "Components/Dialog/ActionsDialog",
  component: ActionsDialog,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="ActionsDialog is a dialog used to confirm actions that require user input. It includes a title, body text, optional comment input with suggestions, and an optional dismiss checkbox."
          guideLink=""
          importLine={`import { ActionsDialog } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
} as Meta<ActionsDialogProps>;

const ActionsDialogWrapper = (props: ActionsDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <ActionsDialog {...props} open={open} hideModal={() => setOpen(false)} />
    </>
  );
};

type Story = StoryObj<ActionsDialogProps>;

export const Default: Story = {
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    confirmClicked: (dismiss, comment) =>
      console.log("confirm clicked", dismiss, comment),
    mutationLoading: false,
    title: 'Mark asset as "Sensitive"?',
    includeDismissCheckbox: true,
    bodyText:
      'Marking an asset as "Sensitive" will prioritize high severity alerts on it.',
    commentSuggestions: [
      "This asset is sensitive because it contains PII.",
      "This asset is sensitive because it contains PHI.",
      "This asset is sensitive because it contains financial data.",
    ],
  },
};

export const WithSubtitle: Story = {
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    confirmClicked: (dismiss, comment) =>
      console.log("confirm clicked", dismiss, comment),
    mutationLoading: false,
    title: "Confirm action",
    subTitle: "This action cannot be undone",
    bodyText: "Are you sure you want to proceed with this action?",
  },
};

export const WithDismissOnly: Story = {
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    confirmClicked: (dismiss, comment) =>
      console.log("confirm clicked", dismiss, comment),
    mutationLoading: false,
    title: "Dismiss alert?",
    bodyText: "This will dismiss the alert and remove it from your feed.",
    includeDismissCheckbox: true,
    dismissCheckboxText: "Don't show this alert again",
  },
};
