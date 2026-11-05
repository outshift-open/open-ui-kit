import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography, Checkbox } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import type { CheckboxProps } from "../types";

type CheckState = "unchecked" | "checked" | "mixed";
type VisualState = "default" | "hover" | "disabled";

const defaultArgs = {
  defaultChecked: false,
  disabled: false,
  indeterminate: false,
  slotProps: {
    input: { "aria-label": "Select option" },
  },
} satisfies CheckboxProps;

const meta: Meta<CheckboxProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    formControlLabelProps: {
      control: false,
    },
    indeterminate: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
    name: {
      control: "text",
    },
    onChange: {
      control: false,
    },
    slotProps: {
      control: false,
    },
    sx: {
      control: false,
    },
    value: {
      control: "text",
    },
  },
  decorators: [
    (Story) => (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.vars.baseBackgroundStrong,
          boxSizing: "border-box",
          color: theme.palette.vars.baseTextDefault,
          p: 3,
        })}
      >
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Used for selecting multiple values from several options. Do not use when the user should only select one option, use Radio button instead. If checking the box enacts an immediate result, use Toggle instead."
          guideLink=""
          includeStories={true}
          importLine='import { Checkbox } from "@open-ui-kit/core";'
          title="Checkbox"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxProps>;

const stateLabel: Record<CheckState, string> = {
  unchecked: "Unchecked",
  checked: "Checked",
  mixed: "Mixed",
};

const checkboxStateProps = (
  checkState: CheckState,
  visualState: VisualState = "default",
): CheckboxProps => {
  const props: CheckboxProps = {
    defaultChecked: checkState === "checked",
    disabled: visualState === "disabled",
    indeterminate: checkState === "mixed",
  };

  if (visualState === "hover") {
    props.sx = (theme) => ({
      "&&": {
        color: theme.palette.vars.controlIconHover,
      },
    });
  }

  return props;
};

const LabeledCheckbox = ({
  checkState = "unchecked",
  visualState = "default",
  label = "Label",
  sx,
  ...args
}: CheckboxProps & {
  checkState?: CheckState;
  label?: string;
  visualState?: VisualState;
}) => {
  const stateProps = checkboxStateProps(checkState, visualState);
  const disabled = visualState === "disabled" || args.disabled;

  return (
    <Checkbox
      {...args}
      {...stateProps}
      // The visible label provides the accessible name, so drop the bare-story aria-label.
      slotProps={{ input: {} }}
      disabled={disabled}
      label={label}
      sx={[
        ...(Array.isArray(stateProps.sx)
          ? stateProps.sx
          : stateProps.sx
            ? [stateProps.sx]
            : []),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    />
  );
};

const checkStates = ["unchecked", "checked", "mixed"] as const;
const visualStates = ["default", "hover", "disabled"] as const;

export const Default: Story = {
  args: defaultArgs,
  render: (args) => <Checkbox {...args} />,
};

export const Checked: Story = {
  args: {
    ...defaultArgs,
    defaultChecked: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export const Indeterminate: Story = {
  args: {
    ...defaultArgs,
    indeterminate: true,
  },
  render: (args) => <Checkbox {...args} />,
};

export const WithLabel: Story = {
  args: defaultArgs,
  render: (args) => <LabeledCheckbox {...args} />,
};

export const Disabled: Story = {
  render: (args) => (
    <Stack gap={1}>
      {checkStates.map((checkState) => (
        <LabeledCheckbox
          key={checkState}
          {...args}
          checkState={checkState}
          visualState="disabled"
        />
      ))}
    </Stack>
  ),
};

export const Hover: Story = {
  render: (args) => (
    <Stack gap={1}>
      {checkStates.map((checkState) => (
        <LabeledCheckbox
          key={checkState}
          {...args}
          checkState={checkState}
          visualState="hover"
        />
      ))}
    </Stack>
  ),
};

export const BareStates: Story = {
  render: (args) => (
    <Stack
      direction="row"
      gap={3}
      sx={{ alignItems: "center", flexWrap: "wrap" }}
    >
      {visualStates.map((visualState) => (
        <Stack key={visualState} gap={1}>
          <Typography variant="body2Semibold">{visualState}</Typography>
          {checkStates.map((checkState) => (
            <Checkbox
              key={checkState}
              {...args}
              {...checkboxStateProps(checkState, visualState)}
              slotProps={{ input: {} }}
              label={stateLabel[checkState]}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};
