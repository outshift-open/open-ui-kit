import type { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import ErrorIcon from "@mui/icons-material/Error";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Step, Stepper, StepLabel } from "@mui/material";

const meta: Meta<typeof Step> = {
  title: "DEV/Stepper/Step",
  component: Step,
  tags: ["autodocs"],
};

export default meta;

type StepStory = StoryObj<typeof Step>;

export const BasicStep: StepStory = {
  render: (args) => (
    <Stepper>
      <Step {...args}>
        <StepLabel>Step 1</StepLabel>
      </Step>
    </Stepper>
  ),
  args: { active: true },
};

export const CompleteStep: StepStory = {
  render: (args) => (
    <Stepper>
      <Step {...args}>
        <StepLabel>Step 1</StepLabel>
      </Step>
    </Stepper>
  ),
  args: { completed: true },
};

export const ErrorStep: StepStory = {
  render: (args) => (
    <Stepper>
      <Step {...args}>
        <StepLabel error icon={<ErrorIcon color="error" />}>
          Step 1
        </StepLabel>
      </Step>
    </Stepper>
  ),
  args: {},
};

export const DisabledStep: StepStory = {
  render: (args) => (
    <Stepper>
      <Step {...args}>
        <StepLabel>Step 1</StepLabel>
      </Step>
    </Stepper>
  ),
  args: { disabled: true },
};

export const WarningStep: StepStory = {
  render: (args) => (
    <Stepper>
      <Step {...args}>
        <StepLabel icon={<ReportProblemIcon color="warning" />}>
          Step 1
        </StepLabel>
      </Step>
    </Stepper>
  ),
  args: {},
};
