import { Meta, StoryObj } from "@storybook/react";
import { LoadingErrorState } from "../components/loading-error-state";

/**
 *  ### The LoadingErrorState component display error message to the user when the application fails to load data from API.
 */
const meta: Meta<typeof LoadingErrorState> = {
  title: "DEV/LoadingErrorState",
  component: LoadingErrorState,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LoadingErrorState>;

export const Default: Story = {
  render: () => <LoadingErrorState />,
};
