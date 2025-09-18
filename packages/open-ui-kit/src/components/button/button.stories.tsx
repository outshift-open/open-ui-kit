import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  Button,
  ButtonProps,
  FormControlLabel,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import SaveIcon from "@mui/icons-material/Save";
import { Expand } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Toggle } from "../toggle";

/**
 * ### Buttons allow users to take actions, and make choices, with a single tap.

  Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like:

 * Modal windows
 * Forms
 * Cards
 * Toolbars
 */

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select", // Use a dropdown in Storybook
      options: ["primary", "secondary", "outlined", "tertariary"], // Define the allowed values
      description: "The variant of the button.",
      defaultValue: "primary", // Set the default value
    },
    color: {
      control: "select", // Use a dropdown in Storybook
      options: ["default", "negative"],
      // Define the allowed values
      description: "The color of the button.",
      defaultValue: "default", // Set the default value
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Buttons allow users to take actions, and make choices, with a single tap. Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like: Modal windows, Forms, Cards, Toolbars."
          guideLink=""
          importLine='import { Button } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const BasicButtons: Story = {
  render: (args: ButtonProps) => {
    return (
      <Stack direction="row" spacing={4}>
        <Stack direction="column" spacing={2}>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button size="small" variant="tertariary" {...args}>
              Text
            </Button>
            <Button size="small" variant="primary" {...args}>
              Contained
            </Button>
            <Button size="small" variant="outlined" {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button size="small" variant="tertariary" disabled {...args}>
              Text
            </Button>
            <Button size="small" variant="primary" disabled {...args}>
              Contained
            </Button>
            <Button size="small" variant="outlined" disabled {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button
              size="small"
              variant="tertariary"
              startIcon={<Expand />}
              {...args}
            >
              Text
            </Button>
            <Button
              size="small"
              variant="primary"
              startIcon={<Expand />}
              {...args}
            >
              Contained
            </Button>
            <Button
              size="small"
              variant="outlined"
              startIcon={<Expand />}
              {...args}
            >
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button
              size="small"
              variant="tertariary"
              endIcon={<Expand />}
              {...args}
            >
              Text
            </Button>
            <Button
              size="small"
              variant="primary"
              endIcon={<Expand />}
              {...args}
            >
              Contained
            </Button>
            <Button
              size="small"
              variant="outlined"
              endIcon={<Expand />}
              {...args}
            >
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button size="small" variant="tertariary" {...args}>
              <Expand />
            </Button>
            <Button size="small" variant="primary" {...args}>
              <Expand />
            </Button>
            <Button size="small" variant="outlined" {...args}>
              <Expand />
            </Button>
          </Stack>
        </Stack>

        <Stack direction="column" spacing={2}>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button variant="tertariary" {...args}>
              Text
            </Button>
            <Button variant="primary" {...args}>
              Contained
            </Button>
            <Button variant="outlined" {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button variant="tertariary" disabled {...args}>
              Text
            </Button>
            <Button variant="primary" disabled {...args}>
              Contained
            </Button>
            <Button variant="outlined" disabled {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button variant="tertariary" startIcon={<Expand />} {...args}>
              Text
            </Button>
            <Button variant="primary" startIcon={<Expand />} {...args}>
              Contained
            </Button>
            <Button variant="outlined" startIcon={<Expand />} {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button variant="tertariary" endIcon={<Expand />} {...args}>
              Text
            </Button>
            <Button variant="primary" endIcon={<Expand />} {...args}>
              Contained
            </Button>
            <Button variant="outlined" endIcon={<Expand />} {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button variant="primary" {...args}>
              <Expand />
            </Button>
            <Button variant="primary" {...args}>
              <Expand />
            </Button>
            <Button variant="outlined" {...args}>
              <Expand />
            </Button>
          </Stack>
        </Stack>
        <Stack direction="column" spacing={2}>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button size="large" variant="tertariary" {...args}>
              Text
            </Button>
            <Button size="large" variant="primary" {...args}>
              Contained
            </Button>
            <Button size="large" variant="outlined" {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button size="large" variant="tertariary" disabled {...args}>
              Text
            </Button>
            <Button size="large" variant="primary" disabled {...args}>
              Contained
            </Button>
            <Button size="large" variant="outlined" disabled {...args}>
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button
              size="large"
              variant="tertariary"
              startIcon={<Expand />}
              {...args}
            >
              Text
            </Button>
            <Button
              size="large"
              variant="primary"
              startIcon={<Expand />}
              {...args}
            >
              Contained
            </Button>
            <Button
              size="large"
              variant="outlined"
              startIcon={<Expand />}
              {...args}
            >
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button
              size="large"
              variant="tertariary"
              endIcon={<Expand />}
              {...args}
            >
              Text
            </Button>
            <Button
              size="large"
              variant="primary"
              endIcon={<Expand />}
              {...args}
            >
              Contained
            </Button>
            <Button
              size="large"
              variant="outlined"
              endIcon={<Expand />}
              {...args}
            >
              Outlined
            </Button>
          </Stack>
          <Stack spacing={2} direction="row" alignItems={"center"}>
            <Button size="large" variant="tertariary" {...args}>
              <Expand />
            </Button>
            <Button size="large" variant="primary" {...args}>
              <Expand />
            </Button>
            <Button size="large" variant="outlined" {...args}>
              <Expand />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    );
  },
};

export const IconAndLabelsButtons: Story = {
  render: (args: ButtonProps) => {
    return (
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" {...args} startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="primary" {...args} endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    );
  },
};

const Buttons = (args: ButtonProps) => {
  const [loading, setLoading] = React.useState(true);
  return (
    <Stack direction="row" spacing={2}>
      <Box>
        <FormControlLabel
          sx={{
            display: "block",
          }}
          control={
            <Toggle
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        />
        <Box sx={{ "& > button": { m: 1 } }}>
          <Button
            loading={loading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
            {...args}
          >
            <span>Save</span>
          </Button>
        </Box>
      </Box>
      <Button {...args}>Enabled</Button>
    </Stack>
  );
};
export const PrimaryButtons: Story = {
  render: (args: ButtonProps) => {
    return <Buttons {...args} />;
  },
};
