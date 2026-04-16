import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { JSX } from "react/jsx-runtime";
import { ModalSubtitle } from "../components/modal-subtitle";
import { ModalTitle } from "../components/modal-title";
import {
  Modal,
  ModalActions,
  ModalContent,
  ModalContentText,
  ModalProps,
} from "..";
import { Button, Stack } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";

/**
 * ###  Modals inform users about a task and can contain critical information, require decisions, or involve multiple tasks.

Simple modals can provide additional details or actions about a list item.
For example, they can display:

- avatars
- icons
- clarifying subtext
- orthogonal actions
 */
const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Modals inform users about a task and can contain critical information, require decisions, or involve multiple tasks. Simple modals can provide additional details or actions about a list item."
          guideLink=""
          importLine="import { Modal } from '@open-ui-kit/core';"
        />
      ),
    },
  },
  argTypes: {
    maxWidth: {
      description:
        "Dialog **content width** preset (MUI). This string is **not** the same as layout viewport breakpoints (`theme.breakpoints`). See the **Dialog sizes** story and `docs/new-breakpoints-branch-changes.md`.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalComponent = (
  args: JSX.IntrinsicAttributes & Omit<ModalProps, "open">,
) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        {`Open dialog ${args.title ?? ""}`}
      </Button>
      <Modal
        {...args}
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <ModalTitle id="dialog-title">{"Dialog title example"}</ModalTitle>
        <ModalSubtitle id="dialog-subtitle">
          {"Dialog subtitle example"}
        </ModalSubtitle>
        <ModalContent>
          <ModalContentText>
            Dialog content text for example. We can write here a lot of text and
            data to make it wider.
          </ModalContentText>
        </ModalContent>
        <ModalActions>
          <Button onClick={handleClose} variant="outlined">
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </ModalActions>
      </Modal>
    </div>
  );
};

export const SimpleModal: Story = {
  render: ModalComponent,
};

export const DialogSizes: Story = {
  name: "Dialog sizes (content width)",
  parameters: {
    docs: {
      description: {
        story:
          "Labels use M / L / XL (content) to avoid confusing these with layout breakpoints. Engineers still set MUI maxWidth (md / lg / xl) as shown in each row. Mapping: theme/mui/dialog.tsx docblock and docs/new-breakpoints-branch-changes.md.",
      },
    },
  },
  render: () => (
    <Stack gap={2}>
      <ModalComponent
        maxWidth="md"
        fullWidth
        title='M (content), maxWidth="md", 600px paper'
      />
      <ModalComponent
        maxWidth="lg"
        fullWidth
        title='L (content), maxWidth="lg", 1024px paper'
      />
      <ModalComponent
        maxWidth="xl"
        fullWidth
        title='XL (content), maxWidth="xl", 1440px paper'
      />
    </Stack>
  ),
};
