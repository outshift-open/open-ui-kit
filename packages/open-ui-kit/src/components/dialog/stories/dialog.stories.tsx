import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { JSX } from "react/jsx-runtime";
import {
  Dialog,
  DialogTitle,
  DialogSubtitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
} from "..";
import { Stack } from "@mui/material";
import { Button } from "@/components/button";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until a required action has been taken. Dialogs are purposefully interruptive, so they should be used sparingly."
          guideLink=""
          importLine={`import { Dialog, DialogTitle, DialogSubtitle, DialogActions, DialogContent } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
  argTypes: {
    maxWidth: {
      description:
        "Dialog **content width** preset (MUI). This string is **not** the same as layout viewport breakpoints (`theme.breakpoints`). See the **Dialog sizes** story.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogComponent = (
  args: JSX.IntrinsicAttributes & Omit<DialogProps, "open">,
) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        {`Open dialog ${args.title ?? ""}`}
      </Button>
      <Dialog
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Dialog title</DialogTitle>
        <DialogSubtitle id="dialog-subtitle">Dialog Subtitle</DialogSubtitle>
        <DialogContent>
          <DialogContentText>
            Dialog is a type of modal window that appears in front of app
            content to provide critical information or ask for a decision.
            Dialogs are purposefully interruptive, so they should be used
            sparingly.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} variant="tertariary">
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} variant="primary" autoFocus>
            Action
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export const Default: Story = {
  render: DialogComponent,
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
      <DialogComponent maxWidth="sm" fullWidth title='S — maxWidth="sm"' />
      <DialogComponent maxWidth="md" fullWidth title='M — maxWidth="md"' />
      <DialogComponent maxWidth="lg" fullWidth title='L — maxWidth="lg"' />
    </Stack>
  ),
};
