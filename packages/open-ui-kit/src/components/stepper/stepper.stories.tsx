import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Step,
  StepLabel,
  Stepper,
  StepperProps,
  Typography,
} from "@mui/material";
import { Button } from "@/components/button";
import React from "react";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper/MUI Stepper",
  component: Stepper,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const SimpleStepperComponent = (args: StepperProps) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    {
      label: "Step 1",
      description: `Step 1 text`,
    },
    {
      label: "Step 2",
      description: `Step 2 text`,
    },
    {
      label: "Step 3",
      description: `Step 3 text`,
    },
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
        {steps.map(({ label }, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {steps[activeStep] && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {steps[activeStep].description}
        </Box>
      )}
      {activeStep === steps.length ? (
        <>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              variant="tertariary"
              onClick={handleReset}
              sx={{ marginRight: "auto" }}
            >
              Reset
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              variant="secondary"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Button variant="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export const SimpleStepper: Story = {
  render: SimpleStepperComponent,
};
