/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import { Button } from "@/components/button";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { StepperPanel } from "../components/stepper-panel";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const meta: Meta<typeof StepperPanel> = {
  title: "Components/Stepper",
  component: StepperPanel,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="StepperPanel is a wizard-style layout component with a vertical sidebar showing step indicators and a main content area. Supports clickable steps, footer actions, and active/inactive state styling."
          guideLink=""
          importLine='import { StepperPanel } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof StepperPanel>;

const steps = [
  { label: "Stepper title" },
  { label: "Stepper title" },
  { label: "Stepper title" },
  { label: "Summary" },
];

const stepContent = [
  "Stepper title",
  "Stepper title",
  "Stepper title",
  "Summary",
];

/* ─── Interactive ─── */
const InteractiveStory = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <StepperPanel
      steps={steps}
      activeStep={activeStep}
      onStepClick={(index) => setActiveStep(index)}
      footer={
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="tertariary" size="small" onClick={noop}>
            Cancel
          </Button>
          <Typography
            variant="caption"
            sx={(theme) => ({ color: theme.palette.vars.baseTextWeak })}
          >
            All changes saved
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button
              variant="secondary"
              size="small"
              disabled={activeStep === 0}
              onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="small"
              onClick={() =>
                setActiveStep((s) => Math.min(steps.length - 1, s + 1))
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Stack>
        </Stack>
      }
      sx={{ width: "912px", height: "480px" }}
    >
      <Typography
        variant="h6"
        sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
      >
        {stepContent[activeStep]}
      </Typography>
      <Typography
        variant="body2"
        sx={(theme) => ({
          color: theme.palette.vars.baseTextDefault,
          mt: 1,
        })}
      >
        Subtitle
      </Typography>
    </StepperPanel>
  );
};

export const Default: Story = {
  name: "Default",
  render: () => <InteractiveStory />,
};

/* ─── Step 1 active ─── */
export const Step1Active: Story = {
  name: "Step 1 — Active",
  render: () => (
    <StepperPanel
      steps={steps}
      activeStep={0}
      sx={{ width: "912px", height: "480px" }}
      footer={
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <Button variant="secondary" size="small" disabled>
            Back
          </Button>
          <Button variant="primary" size="small">
            Next
          </Button>
        </Stack>
      }
    >
      <Typography
        variant="h6"
        sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
      >
        Stepper title
      </Typography>
    </StepperPanel>
  ),
};

/* ─── Step 3 active ─── */
export const Step3Active: Story = {
  name: "Step 3 — Active",
  render: () => (
    <StepperPanel
      steps={steps}
      activeStep={2}
      sx={{ width: "912px", height: "480px" }}
      footer={
        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <Button variant="secondary" size="small">
            Back
          </Button>
          <Button variant="primary" size="small">
            Next
          </Button>
        </Stack>
      }
    >
      <Typography
        variant="h6"
        sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
      >
        Stepper title
      </Typography>
    </StepperPanel>
  ),
};

/* ─── Without footer ─── */
export const WithoutFooter: Story = {
  name: "Without Footer",
  render: () => (
    <Box sx={{ width: "600px" }}>
      <StepperPanel steps={steps} activeStep={1}>
        <Typography
          variant="body2"
          sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
        >
          Content for step 2
        </Typography>
      </StepperPanel>
    </Box>
  ),
};
