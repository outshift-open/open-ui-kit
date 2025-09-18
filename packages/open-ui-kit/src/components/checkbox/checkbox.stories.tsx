import type { Meta, StoryObj } from "@storybook/react";
import {
  FormControlLabel,
  FormGroup,
  Typography,
  CheckboxProps,
  Stack,
  FormControl,
  FormLabel,
  FormHelperText,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Checkboxes allow the user to select one or more items from a set.

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches.
If you have a single option, avoid using a checkbox and use an on/off switch instead.
 */
const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Checkboxes allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off."
          guideLink=""
          importLine='import { Checkbox } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Example: Story = {};

const Checkboxes = (args: CheckboxProps) => {
  return (
    <Stack direction="column">
      <Stack direction="row" alignItems={"center"}>
        <Checkbox {...args} indeterminate={true} />
        <Typography variant="body2" sx={{ marginLeft: "4px" }}>
          Indeterminate
        </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"}>
        <Checkbox {...args} />
        <Typography variant="body2" sx={{ marginLeft: "4px" }}>
          Checkmark
        </Typography>
      </Stack>
    </Stack>
  );
};

export const Default: Story = {
  render: Checkboxes,
  args: {
    color: "primary",
    defaultChecked: true,
  },
};

export const Secondary: Story = {
  render: Checkboxes,
  args: {
    color: "primary",
    defaultChecked: true,
  },
};

export const Error: Story = {
  render: Checkboxes,
  args: {
    color: "error",
    defaultChecked: true,
  },
};

export const Success: Story = {
  render: Checkboxes,
  args: {
    color: "success",
    defaultChecked: true,
  },
};

export const Warning: Story = {
  render: Checkboxes,
  args: {
    color: "warning",
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  render: function CheckboxesWithLabels() {
    const [state, setState] = useState({
      gilad: true,
      jason: false,
      antoine: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.checked,
      });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;
    return (
      <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label={
              <Typography variant="body2" sx={{ marginLeft: "4px" }}>
                Gilad Gray
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label={
              <Typography variant="body2" sx={{ marginLeft: "4px" }}>
                Jason Killian
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label={
              <Typography variant="body2" sx={{ marginLeft: "4px" }}>
                Antoine Llorca
              </Typography>
            }
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    );
  },
};
