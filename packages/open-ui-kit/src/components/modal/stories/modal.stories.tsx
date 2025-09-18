import React from "react";
import { Meta, StoryObj } from "@storybook/react";
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
import { DocsHeader } from "storybook/components/docs-header.stories-src";

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
  render: () => (
    <Stack gap={2}>
      <ModalComponent maxWidth="md" fullWidth title="md" />
      <ModalComponent maxWidth="lg" fullWidth title="lg" />
      <ModalComponent maxWidth="xl" fullWidth title="xl" />
    </Stack>
  ),
};
