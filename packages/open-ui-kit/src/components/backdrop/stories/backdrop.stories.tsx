import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack, Typography } from "@/components";
import { Button } from "@/components/button";
import { Spinner } from "@/components/spinner";
import { Backdrop } from "../components/backdrop";
import type { BackdropProps } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta = {
  title: "Components/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  args: {
    invisible: false,
  },
  argTypes: {
    children: { table: { disable: true } },
    invisible: { control: "boolean" },
    onClick: { table: { disable: true } },
    open: { table: { disable: true } },
    sx: { control: false },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Backdrop"
          blurb="The Backdrop component narrows the user's focus to a particular element on the screen. It signals a state change within the application and can be used for creating loaders, dialogs, and more."
          guideLink=""
          importLine={`import { Backdrop } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
} satisfies Meta<typeof Backdrop>;

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
      <Backdrop {...args} open={open} onClick={() => setOpen(false)}>
        {children}
      </Backdrop>
    </>
  );
};

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Default use case — a dimmed overlay with a centered spinner to block interaction during loading. Click anywhere on the backdrop to dismiss.",
      },
    },
  },
  render: (args) => (
    <BackdropWithState {...args}>
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
  render: (args) => (
    <BackdropWithState {...args}>
      <Stack alignItems="center" spacing={2}>
        <Spinner color="inherit" />
        <Typography
          sx={(theme) => ({ color: theme.palette.vars.baseTextInverse })}
          variant="body2"
        >
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
  args: {
    invisible: true,
  },
  render: (args) => (
    <BackdropWithState {...args}>
      <Typography color="text.primary" variant="body2">
        Click anywhere to dismiss
      </Typography>
    </BackdropWithState>
  ),
};
