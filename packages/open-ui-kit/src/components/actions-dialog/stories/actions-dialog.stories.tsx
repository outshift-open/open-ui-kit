import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { ActionsDialog } from "../components/actions-dialog";
import type { ActionsDialogProps } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Button } from "@/components/button";

export default {
  title: "Components/Dialog/ActionsDialog",
  component: ActionsDialog,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="ActionsDialog"
          blurb="ActionsDialog is a confirmation dialog with body text, optional comment suggestions, an optional dismiss checkbox, and cancel/confirm actions."
          importLine={`import { ActionsDialog } from "@open-ui-kit/core";`}
          includeStories
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
    title: "Dialog title",
    subTitle: "Dialog Subtitle",
    includeDismissCheckbox: true,
    bodyText:
      "Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.",
    commentSuggestions: [
      "This asset is sensitive because it contains PII.",
      "This asset is sensitive because it contains PHI.",
      "This asset is sensitive because it contains financial data.",
    ],
  },
};

export const WithSubtitle: Story = {
  name: "With subtitle",
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    confirmClicked: (dismiss, comment) =>
      console.log("confirm clicked", dismiss, comment),
    mutationLoading: false,
    title: "Dialog title",
    subTitle: "Dialog Subtitle",
    bodyText:
      "Dialogs disable all app functionality when they appear, and remain on screen until a required action has been taken.",
  },
};

export const WithDismissOnly: Story = {
  name: "With dismiss checkbox",
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    confirmClicked: (dismiss, comment) =>
      console.log("confirm clicked", dismiss, comment),
    mutationLoading: false,
    title: "Dialog title",
    bodyText:
      "Dialogs are purposefully interruptive, so they should be used sparingly.",
    includeDismissCheckbox: true,
    dismissCheckboxText: "Don't show this alert again",
  },
};
