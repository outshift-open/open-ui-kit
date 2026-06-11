/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useEffect, useState } from "react";
import { Box, Button } from "@/components";
import { purplePalette } from "@/theme/style/color-palette";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { StepperModal } from "../components/stepper-modal";
import { steppedModalActionsStyles } from "../styles";
import type { StepperModalProps } from "../types";

const modalSteps = [
  { label: "Stepped modal title" },
  { label: "Stepped modal title" },
  { label: "Stepped modal title" },
];

const modalStateSteps = [
  { label: "Completed", state: "completed" },
  { label: "Current", state: "current" },
  { label: "Idle", state: "idle" },
  { label: "Disabled", state: "disabled" },
] satisfies StepperModalProps["steps"];

const description =
  "Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Diam ut venenatis tellus in metus vulputate eu. Sed sed risus pretium quam vulputate dignissim suspendisse in.";

const ModalContentSlot = () => (
  <Box
    sx={{
      alignItems: "center",
      alignSelf: "stretch",
      backgroundColor: purplePalette.alpha10,
      border: `1px dashed ${purplePalette[600]}`,
      borderRadius: "2px 2px 12px 2px",
      boxSizing: "border-box",
      color: purplePalette[600],
      display: "flex",
      flexShrink: 0,
      fontSize: "12px",
      height: "30px",
      justifyContent: "center",
      lineHeight: "14px",
      width: "720px",
    }}
  >
    Instance Slot
  </Box>
);

const ModalFooter = ({ onCancel }: { onCancel: () => void }) => (
  <>
    <Button variant="tertariary" size="small" onClick={onCancel}>
      Cancel
    </Button>
    <Box sx={steppedModalActionsStyles}>
      <Button
        variant="outlined"
        size="small"
        sx={(theme) => ({
          borderColor: theme.palette.vars.warningBorderDefault,
        })}
      >
        Back
      </Button>
      <Button variant="primary" size="small">
        Next
      </Button>
    </Box>
  </>
);

const StepperModalStory = (args: StepperModalProps) => {
  const [open, setOpen] = useState(Boolean(args.open));

  useEffect(() => {
    setOpen(Boolean(args.open));
  }, [args.open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="primary" size="small" onClick={handleOpen}>
        Open stepper modal
      </Button>
      <StepperModal
        {...args}
        open={open}
        onClose={handleClose}
        footer={<ModalFooter onCancel={handleClose} />}
      >
        <ModalContentSlot />
      </StepperModal>
    </>
  );
};

const defaultArgs = {
  activeStep: 1,
  description,
  open: false,
  steps: modalSteps,
  subtitle: "Optional descriptor goes here.",
  title: "Stepped modal title",
} satisfies Partial<StepperModalProps>;

const meta = {
  title: "Components/Stepper/StepperModal",
  component: StepperModal,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    activeStep: {
      control: { type: "number", min: 0, max: modalSteps.length - 1 },
      description: "Zero-based active step index.",
    },
    description: {
      control: "text",
      description: "Body copy rendered under the modal step series.",
    },
    subtitle: {
      control: "text",
      description: "Optional descriptor rendered below the title.",
    },
    title: {
      control: "text",
      description: "Modal title.",
    },
    open: {
      control: "boolean",
      description: "Controls whether the stepper dialog is visible.",
    },
    sx: {
      control: "object",
      description: "Dialog paper style overrides.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Stepper Modal"
          blurb="StepperModal is a dialog-style workflow surface with a horizontal step series, title area, body content, and footer actions."
          guideLink=""
          importLine='import { StepperModal } from "@open-ui-kit/core";'
          includePrimary={false}
          includeStories
        />
      ),
    },
  },
} satisfies Meta<typeof StepperModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <StepperModalStory {...args} />,
};

export const FirstStep: Story = {
  args: {
    activeStep: 0,
  },
  render: (args) => <StepperModalStory {...args} />,
};

export const FinalStep: Story = {
  args: {
    activeStep: 2,
  },
  render: (args) => <StepperModalStory {...args} />,
};

export const StepStates: Story = {
  args: {
    activeStep: 1,
    steps: modalStateSteps,
  },
  render: (args) => <StepperModalStory {...args} />,
};
