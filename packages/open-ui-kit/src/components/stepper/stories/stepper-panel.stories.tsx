/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Button, Stack, Typography } from "@/components";
import { purplePalette } from "@/theme/style/color-palette";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { StepperPanel } from "../components/stepper-panel";
import type { StepperPanelProps } from "../types";

const steps = [
  { label: "Stepper title" },
  { label: "Stepper title" },
  { label: "Stepper title" },
  { label: "Summary" },
];

const stateSteps = [
  { label: "Completed step", state: "completed" },
  {
    label: "Current step",
    state: "current",
    subtitle: "Description of this step - Optional",
  },
  { label: "Idle step", state: "idle" },
  { label: "Disabled step", state: "disabled" },
] satisfies StepperPanelProps["steps"];

const defaultArgs = {
  steps,
  activeStep: 0,
  sx: { width: "912px", height: "480px" },
} satisfies Partial<StepperPanelProps>;

const ContentSlot = () => (
  <Box
    sx={{
      alignItems: "center",
      backgroundColor: purplePalette.alpha10,
      border: `1px dashed ${purplePalette[600]}`,
      borderRadius: "2px 2px 12px 2px",
      boxSizing: "border-box",
      color: purplePalette[600],
      display: "flex",
      flexShrink: 0,
      fontSize: "12px",
      height: "302px",
      justifyContent: "center",
      lineHeight: "14px",
      width: "100%",
    }}
  >
    Instance Slot
  </Box>
);

const PanelContent = ({ title = "Stepper title" }: { title?: string }) => (
  <>
    <Box
      sx={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
        gap: "4px",
        height: "48px",
      }}
    >
      <Typography
        sx={(theme) => ({
          color: theme.palette.vars.baseTextStrong,
          fontFamily: "Sharp Sans",
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "24px",
        })}
      >
        {title}
      </Typography>
      <Typography
        sx={(theme) => ({
          color: theme.palette.vars.baseTextMedium,
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "0.25px",
          lineHeight: "20px",
        })}
      >
        Subtitle
      </Typography>
    </Box>
    <ContentSlot />
  </>
);

const Footer = ({
  activeStep,
  onBack,
  onNext,
}: {
  activeStep: number;
  onBack?: () => void;
  onNext?: () => void;
}) => (
  <Stack
    alignItems="center"
    direction="row"
    justifyContent="space-between"
    sx={{ width: "100%" }}
  >
    <Button variant="tertariary" size="small">
      Cancel
    </Button>
    <Typography
      variant="caption"
      sx={(theme) => ({ color: theme.palette.vars.baseTextMedium })}
    >
      All changes saved
    </Typography>
    <Stack direction="row" spacing={1}>
      <Button
        variant="outlined"
        size="small"
        disabled={activeStep === 0}
        onClick={onBack}
      >
        Back
      </Button>
      <Button variant="primary" size="small" onClick={onNext}>
        {activeStep === steps.length - 1 ? "Finish" : "Next"}
      </Button>
    </Stack>
  </Stack>
);

const InteractivePanel = (args: StepperPanelProps) => {
  const [activeStep, setActiveStep] = useState(args.activeStep);

  return (
    <StepperPanel
      {...args}
      activeStep={activeStep}
      onStepClick={setActiveStep}
      footer={
        <Footer
          activeStep={activeStep}
          onBack={() => setActiveStep((step) => Math.max(0, step - 1))}
          onNext={() =>
            setActiveStep((step) => Math.min(steps.length - 1, step + 1))
          }
        />
      }
    >
      <PanelContent />
    </StepperPanel>
  );
};

const meta = {
  title: "Components/Stepper/StepperPanel",
  component: StepperPanel,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    activeStep: {
      control: { type: "number", min: 0, max: 5 },
      description: "Zero-based active step index.",
    },
    collapseButtonAriaLabel: {
      control: "text",
      description: "Accessible label for the sidebar collapse control.",
    },
    collapsed: {
      control: "boolean",
      description: "Controls the compact icon-only sidebar state.",
    },
    defaultCollapsed: {
      control: "boolean",
      description: "Initial compact sidebar state for uncontrolled usage.",
    },
    onCollapseClick: {
      action: "collapse clicked",
      description: "Called when the sidebar collapse control is clicked.",
    },
    onCollapsedChange: {
      action: "collapsed changed",
      description: "Called with the next collapsed state after toggling.",
    },
    onStepClick: {
      action: "step clicked",
      description: "Called with the zero-based index when a step is clicked.",
    },
    sx: {
      control: "object",
      description: "Root container style overrides.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Stepper Panel"
          blurb="StepperPanel is a wizard-style layout component with a vertical sidebar, active step indicator, main content area, optional footer actions, and a collapse control."
          guideLink=""
          importLine='import { StepperPanel } from "@open-ui-kit/core";'
          includeStories
        />
      ),
    },
  },
} satisfies Meta<typeof StepperPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <InteractivePanel {...args} />,
};

export const Collapsed: Story = {
  args: {
    activeStep: 0,
    collapsed: true,
  },
  render: (args) => (
    <StepperPanel
      {...args}
      footer={<Footer activeStep={args.activeStep ?? 0} />}
    >
      <PanelContent />
    </StepperPanel>
  ),
};

export const FiveSteps: Story = {
  args: {
    activeStep: 0,
    steps: [
      { label: "Stepper title" },
      { label: "Stepper title" },
      { label: "Stepper title" },
      { label: "Stepper title" },
      { label: "Summary" },
    ],
  },
  render: (args) => (
    <StepperPanel
      {...args}
      footer={<Footer activeStep={args.activeStep ?? 0} />}
    >
      <PanelContent />
    </StepperPanel>
  ),
};

export const StepStates: Story = {
  args: {
    activeStep: 1,
    steps: stateSteps,
  },
  render: (args) => (
    <StepperPanel
      {...args}
      footer={<Footer activeStep={args.activeStep ?? 0} />}
    >
      <PanelContent />
    </StepperPanel>
  ),
};

export const CollapsedStepStates: Story = {
  args: {
    activeStep: 1,
    collapsed: true,
    steps: stateSteps,
  },
  render: (args) => (
    <StepperPanel
      {...args}
      footer={<Footer activeStep={args.activeStep ?? 0} />}
    >
      <PanelContent />
    </StepperPanel>
  ),
};

export const WithoutFooter: Story = {
  args: {
    activeStep: 1,
  },
  render: (args) => (
    <StepperPanel {...args}>
      <PanelContent title="Content for step 2" />
    </StepperPanel>
  ),
};
