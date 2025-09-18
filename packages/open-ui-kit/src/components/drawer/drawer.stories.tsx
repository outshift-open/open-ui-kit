import { Drawer } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { PersistentDrawerLeft } from "./persistent-drawer";
import { BasicDrawer } from "./basic-drawer";

/**
 * ### Navigation drawers provide access to destinations in your app.
Side sheets are surfaces containing supplementary content that are anchored to the left or right edge of the screen.
 */
const meta: Meta<typeof Drawer> = {
  title: "DEV/Drawer",
  component: Drawer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const BasicDrawerStory: Story = {
  render: BasicDrawer,
  parameters: {
    // Sets the diffThreshold for 0.2 for a specific story.
    chromatic: { diffThreshold: 0.2 },
  },
};
export const PersistentDrawerLeftStory: Story = {
  render: PersistentDrawerLeft,
  parameters: {
    // Sets the diffThreshold for 0.2 for a specific story.
    chromatic: { diffThreshold: 0.2 },
  },
};
