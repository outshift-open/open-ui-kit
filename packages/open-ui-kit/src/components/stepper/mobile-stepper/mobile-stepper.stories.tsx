import type { Meta } from "@storybook/react";
import {
  Box,
  Button,
  MobileStepper,
  MobileStepperProps,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import { StoryObj } from "@storybook/react";

const meta: Meta<typeof MobileStepper> = {
  title: "DEV/Stepper/MobileStepper",
  component: MobileStepper,
  tags: ["autodocs"],
};

export default meta;

function MobileStepperComponent(args: MobileStepperProps) {
  const steps = [
    {
      label: "Select campaign settings",
      description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: "Create an ad group",
      description:
        "An ad group contains one or more ads which target a shared set of keywords.",
    },
    {
      label: "Create an ad",
      description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <MobileStepper
        {...args}
        steps={maxSteps}
        activeStep={activeStep}
        nextButton={
          <Button
            variant="tertariary"
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ textTransform: "none" }}
          >
            <Typography>Next</Typography>
          </Button>
        }
        backButton={
          <Button
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ textTransform: "none" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            <Typography>Back</Typography>
          </Button>
        }
      />
    </Box>
  );
}

type Story = StoryObj<typeof MobileStepper>;

export const SimpleMobileStepper: Story = {
  render: MobileStepperComponent,
  args: {
    variant: "progress",
    position: "static",
  },
  // args disabled due react logic
  argTypes: {
    steps: {
      control: {
        disable: true,
      },
    },
    activeStep: {
      control: {
        disable: true,
      },
    },
    nextButton: {
      control: {
        disable: true,
      },
    },
    backButton: {
      control: {
        disable: true,
      },
    },
  },
};
