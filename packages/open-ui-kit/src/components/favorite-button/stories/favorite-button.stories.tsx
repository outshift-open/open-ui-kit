import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import {
  FavoriteButton,
  FavoriteButtonProps,
} from "../components/favorite-button";

const meta: Meta<typeof FavoriteButton> = {
  title: "Components/FavoriteButton",
  component: FavoriteButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FavoriteButton>;

interface FavoriteButtonWrapperProps {
  isCheckedInitial: boolean;
}

const FavoriteButtonWrapper = ({
  isCheckedInitial,
}: FavoriteButtonWrapperProps) => {
  const [isChecked, setIsChecked] = useState(isCheckedInitial);
  const handleOnClick = () => {
    setIsChecked(!isChecked);
  };
  return <FavoriteButton isChecked={isChecked} onClick={handleOnClick} />;
};

export const FavoriteButtonComponentStory = ({
  isChecked: initialIsChecked,
  ...args
}: FavoriteButtonProps) => {
  const [isChecked, setIsChecked] = useState(initialIsChecked);
  const handleOnClick = () => setIsChecked(!isChecked);

  return (
    <FavoriteButton {...args} isChecked={isChecked} onClick={handleOnClick} />
  );
};
export const FavoriteButtonComponent: Story = {
  render: FavoriteButtonComponentStory,
};

export const FavoriteButtonComponentUsage: Story = {
  render: () => {
    return (
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <FavoriteButtonWrapper isCheckedInitial={false} />
          <Typography>{"Default not checked"}</Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <FavoriteButtonWrapper isCheckedInitial={true} />
          <Typography>{"Default checked"}</Typography>
        </Stack>
      </Stack>
    );
  },
};

export const FavoriteWithoutBackground: Story = {
  render: () => {
    return (
      <FavoriteButton
        withBackground={false}
        isChecked
        onClick={() => {
          console.log("Clicked!");
        }}
      />
    );
  },
};
