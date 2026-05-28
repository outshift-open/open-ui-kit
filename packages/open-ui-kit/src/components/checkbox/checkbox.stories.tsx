import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormControlLabel, FormGroup, Stack } from "@mui/material";
import { Checkbox, CheckboxProps } from "./components/checkbox";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Checkboxes allow the user to select one or more items from a set. Used for selecting multiple values from several options. Do not use when the user should only select one option — use Radio instead."
          guideLink=""
          importLine={`import { Checkbox } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

const LabeledCheckbox = (props: CheckboxProps & { label?: string }) => {
  const { label = "Label", ...rest } = props;
  return (
    <FormControlLabel
      control={<Checkbox {...rest} />}
      label={label}
      sx={{ margin: 0, gap: "4px" }}
    />
  );
};

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "All three check states (Unchecked, Checked, Mixed) across Default, and Disabled.",
      },
    },
  },
  render: () => (
    <Stack direction="row" spacing={4}>
      <FormGroup>
        <LabeledCheckbox label="Unchecked" />
        <LabeledCheckbox label="Checked" defaultChecked />
        <LabeledCheckbox label="Mixed" indeterminate />
      </FormGroup>
      <FormGroup>
        <LabeledCheckbox label="Unchecked" disabled />
        <LabeledCheckbox label="Checked" defaultChecked disabled />
        <LabeledCheckbox label="Mixed" indeterminate disabled />
      </FormGroup>
    </Stack>
  ),
};

export const Unchecked: Story = {
  render: () => <LabeledCheckbox label="Label" />,
};

export const Checked: Story = {
  render: () => <LabeledCheckbox label="Label" defaultChecked />,
};

export const Mixed: Story = {
  render: () => <LabeledCheckbox label="Label" indeterminate />,
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: "All check states in the disabled variant.",
      },
    },
  },
  render: () => (
    <FormGroup>
      <LabeledCheckbox label="Unchecked" disabled />
      <LabeledCheckbox label="Checked" defaultChecked disabled />
      <LabeledCheckbox label="Mixed" indeterminate disabled />
    </FormGroup>
  ),
};
