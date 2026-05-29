import { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { Button, ButtonProps } from "./components/button";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Buttons allow users to take actions and make choices with a single tap. They communicate actions that users can take and are typically placed throughout the UI in places like modal windows, forms, cards, and toolbars."
          guideLink=""
          importLine={`import { Button } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: (args: ButtonProps) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small" variant="primary" {...args}>
        Button link
      </Button>
      <Button size="medium" variant="primary" {...args}>
        Button link
      </Button>
      <Button size="large" variant="primary" {...args}>
        Button link
      </Button>
    </Stack>
  ),
};

export const Secondary: Story = {
  render: (args: ButtonProps) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small" variant="secondary" {...args}>
        Button link
      </Button>
      <Button size="medium" variant="secondary" {...args}>
        Button link
      </Button>
      <Button size="large" variant="secondary" {...args}>
        Button link
      </Button>
    </Stack>
  ),
};

export const Outlined: Story = {
  render: (args: ButtonProps) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small" variant="outlined" {...args}>
        Button link
      </Button>
      <Button size="medium" variant="outlined" {...args}>
        Button link
      </Button>
      <Button size="large" variant="outlined" {...args}>
        Button link
      </Button>
    </Stack>
  ),
};

export const Tertiary: Story = {
  render: (args: ButtonProps) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button size="small" variant="tertariary" {...args}>
        Button link
      </Button>
      <Button size="medium" variant="tertariary" {...args}>
        Button link
      </Button>
      <Button size="large" variant="tertariary" {...args}>
        Button link
      </Button>
    </Stack>
  ),
};

export const Destructive: Story = {
  render: (args: ButtonProps) => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="primary" color="negative" {...args}>
          Button link
        </Button>
        <Button size="medium" variant="primary" color="negative" {...args}>
          Button link
        </Button>
        <Button size="large" variant="primary" color="negative" {...args}>
          Button link
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="outlined" color="negative" {...args}>
          Button link
        </Button>
        <Button size="medium" variant="outlined" color="negative" {...args}>
          Button link
        </Button>
        <Button size="large" variant="outlined" color="negative" {...args}>
          Button link
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button size="small" variant="tertariary" color="negative" {...args}>
          Button link
        </Button>
        <Button size="medium" variant="tertariary" color="negative" {...args}>
          Button link
        </Button>
        <Button size="large" variant="tertariary" color="negative" {...args}>
          Button link
        </Button>
      </Stack>
    </Stack>
  ),
};

export const WithIcons: Story = {
  render: (args: ButtonProps) => (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="primary" startIcon={<GridViewIcon />} {...args}>
          Button link
        </Button>
        <Button variant="primary" endIcon={<GridViewIcon />} {...args}>
          Button link
        </Button>
        <Button variant="primary" {...args}>
          <GridViewIcon />
        </Button>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="outlined" startIcon={<GridViewIcon />} {...args}>
          Button link
        </Button>
        <Button variant="outlined" endIcon={<GridViewIcon />} {...args}>
          Button link
        </Button>
        <Button variant="outlined" {...args}>
          <GridViewIcon />
        </Button>
      </Stack>
    </Stack>
  ),
};

export const Disabled: Story = {
  render: (args: ButtonProps) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button variant="primary" disabled {...args}>
        Button link
      </Button>
      <Button variant="secondary" disabled {...args}>
        Button link
      </Button>
      <Button variant="outlined" disabled {...args}>
        Button link
      </Button>
      <Button variant="tertariary" disabled {...args}>
        Button link
      </Button>
    </Stack>
  ),
};

export const Loading: Story = {
  render: (args: ButtonProps) => (
    <Stack direction="row" spacing={2} alignItems="center">
      <Button
        variant="primary"
        loading
        loadingPosition="start"
        startIcon={<GridViewIcon />}
        {...args}
      >
        Button link
      </Button>
      <Button
        variant="secondary"
        loading
        loadingPosition="start"
        startIcon={<GridViewIcon />}
        {...args}
      >
        Button link
      </Button>
      <Button
        variant="outlined"
        loading
        loadingPosition="start"
        startIcon={<GridViewIcon />}
        {...args}
      >
        Button link
      </Button>
    </Stack>
  ),
};
