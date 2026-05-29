import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@mui/material";
import { Backdrop } from "../components/backdrop";
import type { BackdropProps } from "../types";
import { Button } from "../../button";
import { Spinner } from "../../spinner";
import { DocsHeader } from "storybook/components/docs-header.stories";

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
          importLine={`import { Backdrop } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

const BackdropWithState = ({
  children,
  ...args
}: Omit<BackdropProps, "open">) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show backdrop
      </Button>
      <Backdrop
        {...args}
        open={open}
        onClick={() => setOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        {children}
      </Backdrop>
    </>
  );
};

export const WithSpinner: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default use case — a dimmed overlay with a centered spinner to block interaction during loading. Click anywhere on the backdrop to dismiss.",
      },
    },
  },
  render: () => (
    <BackdropWithState>
      <Spinner color="inherit" />
    </BackdropWithState>
  ),
};

export const WithMessage: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Backdrop with a spinner and a status message. Useful for longer operations where users benefit from knowing what is happening.",
      },
    },
  },
  render: () => (
    <BackdropWithState>
      <Stack alignItems="center" spacing={2}>
        <Spinner color="inherit" />
        <Typography color="white" variant="body2">
          Processing, please wait…
        </Typography>
      </Stack>
    </BackdropWithState>
  ),
};

export const Invisible: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The `invisible` prop removes the dimmed overlay while keeping the backdrop's click-away and focus-trap behaviour. Useful when the blocking element (e.g. a popover) provides its own visual context.",
      },
    },
  },
  render: () => (
    <BackdropWithState invisible>
      <Typography color="text.primary" variant="body2">
        Click anywhere to dismiss
      </Typography>
    </BackdropWithState>
  ),
};
