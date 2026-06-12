/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog,
  DialogTitle,
  DialogSubtitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
} from "..";
import { Stack } from "@/components";
import { Button } from "@/components/button";
import { InputField } from "@/components/input-field";
import { CodeBlock } from "@/components/code-block";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  args: {
    maxWidth: "sm",
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Dialog"
          blurb="Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly."
          importLine={`import { Dialog, DialogTitle, DialogSubtitle, DialogActions, DialogContent, DialogContentText } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
  argTypes: {
    open: {
      table: { disable: true },
    },
    onClose: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    fullWidth: {
      control: "boolean",
      description: "Stretches the dialog paper to the selected size preset.",
    },
    maxWidth: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "Dialog content width preset. sm maps to 480px, md to 720px, and lg to 1200px with responsive viewport constraints.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;
type DialogStoryProps = Omit<DialogProps, "children" | "open"> & {
  children?: React.ReactNode | ((closeDialog: () => void) => React.ReactNode);
  triggerLabel?: string;
};

const description =
  "Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs are purposefully interruptive, so they should be used sparingly.";

const DialogComponent = ({
  triggerLabel = "Open dialog",
  children,
  ...args
}: DialogStoryProps) => {
  const [open, setOpen] = React.useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        {triggerLabel}
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={closeDialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        {typeof children === "function"
          ? children(closeDialog)
          : (children ?? (
              <>
                <DialogTitle id="dialog-title">Dialog title</DialogTitle>
                <DialogSubtitle id="dialog-subtitle">
                  Dialog Subtitle
                </DialogSubtitle>
                <DialogContent>
                  <DialogContentText id="dialog-description">
                    {description}
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog} variant="tertariary">
                    Cancel
                  </Button>
                  <Button onClick={closeDialog} variant="primary" autoFocus>
                    Action
                  </Button>
                </DialogActions>
              </>
            ))}
      </Dialog>
    </div>
  );
};

export const Default: Story = {
  render: DialogComponent,
};

export const WithInputs: Story = {
  name: "With input content",
  render: (args) => (
    <DialogComponent {...args} triggerLabel="Open input dialog">
      {(closeDialog) => (
        <>
          <DialogTitle id="dialog-title">Dialog title</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              {description}
            </DialogContentText>
            <Stack gap="12px" sx={{ marginTop: "16px" }}>
              <InputField label="Label" placeholder="Placeholder text" />
              <InputField label="Label" placeholder="Placeholder text" />
              <InputField label="Label" placeholder="Placeholder text" />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} variant="tertariary">
              Cancel
            </Button>
            <Button onClick={closeDialog} variant="primary">
              Action
            </Button>
          </DialogActions>
        </>
      )}
    </DialogComponent>
  ),
};

export const WithCodeBlock: Story = {
  name: "With code block",
  render: (args) => (
    <DialogComponent
      {...args}
      triggerLabel="Open code dialog"
      maxWidth="md"
      fullWidth
    >
      {(closeDialog) => (
        <>
          <DialogTitle id="dialog-title">Dialog title</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              {description}
            </DialogContentText>
            <CodeBlock
              language="bash"
              showLineNumbers={false}
              text={`helm upgrade --create-namespace -n -i
deployment/api-controller \\
--dependency-update \\
--set global.agentId=[AGENT_ID]`}
              sx={{ marginTop: "16px" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} variant="tertariary">
              Cancel
            </Button>
            <Button onClick={closeDialog} variant="primary">
              Action
            </Button>
          </DialogActions>
        </>
      )}
    </DialogComponent>
  ),
};

export const Actions: Story = {
  name: "Dialog actions",
  render: (args) => (
    <DialogComponent {...args} triggerLabel="Open actions dialog">
      {(closeDialog) => (
        <>
          <DialogTitle id="dialog-title">Dialog title</DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} variant="tertariary">
              Cancel
            </Button>
            <Button onClick={closeDialog} variant="primary">
              Action
            </Button>
          </DialogActions>
        </>
      )}
    </DialogComponent>
  ),
};

export const DialogSizes: Story = {
  name: "Dialog sizes (content width)",
  parameters: {
    docs: {
      description: {
        story:
          "S / M / L content presets map to MUI maxWidth sm / md / lg. These are not layout breakpoints.",
      },
    },
  },
  render: () => (
    <Stack gap={2}>
      <DialogComponent
        maxWidth="sm"
        fullWidth
        triggerLabel='Open S dialog - maxWidth="sm"'
      />
      <DialogComponent
        maxWidth="md"
        fullWidth
        triggerLabel='Open M dialog - maxWidth="md"'
      />
      <DialogComponent
        maxWidth="lg"
        fullWidth
        triggerLabel='Open L dialog - maxWidth="lg"'
      />
    </Stack>
  ),
};
