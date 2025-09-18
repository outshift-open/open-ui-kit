import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Backdrop, BackdropProps, Button } from "@mui/material";
import { Spinner } from "../spinner";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### The Backdrop component narrows the user's focus to a particular element on the screen.

 The Backdrop signals a state change within the application and can be used for creating loaders, dialogs, and more.
 In its simplest form, the Backdrop component will add a dimmed layer over your application.
 */
const meta: Meta<typeof Backdrop> = {
  title: "Components/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="The Backdrop component narrows the user's focus to a particular element on the screen. It signals a state change within the application and can be used for creating loaders, dialogs, and more."
          guideLink=""
          importLine="import { Backdrop } from '@open-ui-kit/core';"
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

const BackdropExample = (args: BackdropProps) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        {...args}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <Spinner color="inherit" />
      </Backdrop>
    </>
  );
};

export const Example: Story = {
  render: BackdropExample,
};
