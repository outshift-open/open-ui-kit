import type { Meta } from "@storybook/react";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Step,
  StepLabel,
  Stepper,
  StepperProps,
  Typography,
} from "@mui/material";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof Stepper> = {
  title: "DEV/Stepper/Desktop",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;

function DesktopStepperComponent(args: StepperProps) {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} {...args}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1, textTransform: "none" }}
            >
              Back
            </Button>
            <Button onClick={handleNext} sx={{ textTransform: "none" }}>
              {activeStep === steps.length - 1 ? "Finish" : "Continue"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

type Story = StoryObj<typeof Stepper>;

export const SimpleDesktopStepper: Story = {
  render: DesktopStepperComponent,
  args: {
    orientation: "horizontal",
  },
};
