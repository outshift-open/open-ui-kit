import { StepLabel } from "@mui/material";
import type { Meta } from "@storybook/react-vite";
import { StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof StepLabel> = {
  title: "DEV/Stepper/StepLabel",
  component: StepLabel,
  tags: ["autodocs"],
};

export default meta;

type StepLabelStory = StoryObj<typeof StepLabel>;

export const BasicStepLabel: StepLabelStory = {
  render: (args) => <StepLabel {...args}>Step 1</StepLabel>,
};
