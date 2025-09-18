import { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/system";
import { Toggle } from "../components/toggle";

/**
 * ### Switches toggle the state of a single setting on or off.

Toggle are the preferred way to adjust settings on mobile.
The option that the switch controls, as well as the state it's in,
should be made clear from the corresponding inline label.
 */
const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Toggle {...args} />
      <Toggle color={args.color} checked={false} />
      <Toggle color={args.color} checked disabled />
      <Toggle color={args.color} disabled />
    </Box>
  ),
  args: {
    color: "primary",
    defaultChecked: true,
  },
};

export const Error: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Toggle {...args} />
      <Toggle color={args.color} checked={false} />
      <Toggle color={args.color} checked disabled />
      <Toggle color={args.color} disabled />
    </Box>
  ),
  args: {
    color: "error",
    defaultChecked: true,
  },
};

export const Info: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Toggle {...args} />
      <Toggle color={args.color} checked={false} />
      <Toggle color={args.color} checked disabled />
      <Toggle color={args.color} disabled />
    </Box>
  ),
  args: {
    color: "info",
    defaultChecked: true,
  },
};
export const Success: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Toggle {...args} />
      <Toggle color={args.color} checked={false} />
      <Toggle color={args.color} checked disabled />
      <Toggle color={args.color} disabled />
    </Box>
  ),
  args: {
    color: "success",
    defaultChecked: true,
  },
};

export const Warning: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", gap: "8px" }}>
      <Toggle {...args} />
      <Toggle color={args.color} checked={false} />
      <Toggle color={args.color} checked disabled />
      <Toggle color={args.color} disabled />
    </Box>
  ),
  args: {
    color: "warning",
    defaultChecked: true,
  },
};
