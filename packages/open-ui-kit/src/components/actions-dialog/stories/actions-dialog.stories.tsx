/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { fn } from "storybook/test";
import { ActionsDialog } from "../components/actions-dialog";
import type { ActionsDialogProps } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Button } from "@/components/button";

const sampleBodyText =
  "Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.";

const sampleCommentSuggestions = [
  "This asset contains personal data.",
  "This asset contains health data.",
  "This asset contains financial data.",
];

const meta: Meta<ActionsDialogProps> = {
  title: "Components/Dialog/ActionsDialog",
  component: ActionsDialog,
  args: {
    confirmClicked: fn(),
    hideModal: fn(),
    mutationLoading: false,
    title: "Dialog title",
    bodyText: sampleBodyText,
    includeDismissCheckbox: false,
    dismissCheckboxText: "Don't show this alert again",
  },
  argTypes: {
    open: {
      table: { disable: true },
    },
    confirmClicked: {
      table: { disable: true },
    },
    hideModal: {
      table: { disable: true },
    },
    closeClicked: {
      table: { disable: true },
    },
    styleModal: {
      table: { disable: true },
    },
    mutationLoading: {
      control: "boolean",
      description: "Disables the primary action and shows a loading spinner.",
    },
    title: {
      control: "text",
      description: "Main dialog title.",
    },
    subTitle: {
      control: "text",
      description: "Optional subtitle displayed below the title.",
    },
    bodyText: {
      control: "text",
      description: "Main body copy shown before optional controls.",
    },
    includeDismissCheckbox: {
      control: "boolean",
      description: "Shows the optional dismiss checkbox.",
    },
    dismissCheckboxText: {
      control: "text",
      description: "Label for the optional dismiss checkbox.",
    },
    commentSuggestions: {
      control: "object",
      description: "Optional predefined comment choices.",
    },
  },
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
};

export default meta;

type Story = StoryObj<ActionsDialogProps>;

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

export const Default: Story = {
  render: (args) => <ActionsDialogWrapper {...args} />,
};

export const WithSubtitle: Story = {
  name: "With subtitle",
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    subTitle: "Dialog Subtitle",
    bodyText:
      "Dialogs disable all app functionality when they appear, and remain on screen until a required action has been taken.",
  },
};

export const WithDismissCheckbox: Story = {
  name: "With dismiss checkbox",
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    bodyText:
      "Dialogs are purposefully interruptive, so they should be used sparingly.",
    includeDismissCheckbox: true,
    dismissCheckboxText: "Don't show this alert again",
  },
};

export const WithCommentSuggestions: Story = {
  name: "With comment suggestions",
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    bodyText:
      "Add a short rationale before confirming so the team can review the decision later.",
    commentSuggestions: sampleCommentSuggestions,
  },
};

export const WithDismissAndComments: Story = {
  name: "With dismiss and comments",
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    bodyText:
      "Confirm the action, add a reason, and choose whether to suppress future prompts.",
    includeDismissCheckbox: true,
    commentSuggestions: sampleCommentSuggestions,
  },
};

export const Loading: Story = {
  render: (args) => <ActionsDialogWrapper {...args} />,
  args: {
    mutationLoading: true,
    bodyText: "The confirmation is being submitted.",
  },
};
