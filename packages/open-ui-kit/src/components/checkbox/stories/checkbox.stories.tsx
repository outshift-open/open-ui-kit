import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormControlLabel, Stack, Typography } from "@mui/material";
import { Checkbox } from "../components/checkbox";
import type { CheckboxProps } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";

type CheckState = "Unchecked" | "Checked" | "Mixed";
type VisualState = "Default" | "Hover" | "Disabled";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
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
type Story = StoryObj<typeof Checkbox>;

const checkStates: CheckState[] = ["Unchecked", "Checked", "Mixed"];
const visualStates: VisualState[] = ["Default", "Hover", "Disabled"];

const getCheckboxProps = (
  checkState: CheckState,
  visualState: VisualState,
): CheckboxProps => ({
  defaultChecked: checkState === "Checked",
  disabled: visualState === "Disabled",
  indeterminate: checkState === "Mixed",
  sx: (theme) => ({
    color:
      visualState === "Hover" ? theme.palette.vars.controlIconHover : undefined,
  }),
});

const LabelText = ({
  children,
  disabled,
}: {
  children: string;
  disabled?: boolean;
}) => (
  <Typography
    variant="body2"
    sx={(theme) => ({
      color: disabled
        ? theme.palette.vars.baseTextDisabled
        : theme.palette.vars.baseTextDefault,
    })}
  >
    {children}
  </Typography>
);

const LabeledCheckbox = ({
  checkState,
  visualState,
}: {
  checkState: CheckState;
  visualState: VisualState;
}) => {
  const disabled = visualState === "Disabled";

  return (
    <FormControlLabel
      control={<Checkbox {...getCheckboxProps(checkState, visualState)} />}
      label={<LabelText disabled={disabled}>Label</LabelText>}
      sx={{ gap: "4px", m: 0 }}
    />
  );
};

const ColumnLabel = ({ children }: { children: string }) => (
  <Typography variant="body2" sx={{ minWidth: 104 }}>
    {children}
  </Typography>
);

const RowLabel = ({ children }: { children: string }) => (
  <Typography variant="body2" sx={{ textAlign: "right", width: 112 }}>
    {children}
  </Typography>
);

const StatesMatrix = ({ labels }: { labels: boolean }) => (
  <Stack gap={2}>
    <Stack direction="row" gap={5} sx={{ pl: "112px" }}>
      {visualStates.map((visualState) => (
        <ColumnLabel key={visualState}>{visualState}</ColumnLabel>
      ))}
    </Stack>
    {checkStates.map((checkState) => (
      <Stack
        key={checkState}
        direction="row"
        gap={5}
        sx={{ alignItems: "center" }}
      >
        <RowLabel>{checkState}</RowLabel>
        {visualStates.map((visualState) =>
          labels ? (
            <LabeledCheckbox
              key={visualState}
              checkState={checkState}
              visualState={visualState}
            />
          ) : (
            <Checkbox
              key={visualState}
              {...getCheckboxProps(checkState, visualState)}
            />
          ),
        )}
      </Stack>
    ))}
  </Stack>
);

export const States: Story = {
  render: () => (
    <Stack direction="row" gap={12} sx={{ flexWrap: "wrap" }}>
      <Stack gap={2}>
        <Typography variant="body1Semibold">States</Typography>
        <StatesMatrix labels />
      </Stack>
      <Stack gap={2}>
        <Typography variant="body1Semibold">Building blocks</Typography>
        <StatesMatrix labels={false} />
      </Stack>
    </Stack>
  ),
};

export const Unchecked: Story = {
  render: () => (
    <LabeledCheckbox checkState="Unchecked" visualState="Default" />
  ),
};

export const Checked: Story = {
  render: () => <LabeledCheckbox checkState="Checked" visualState="Default" />,
};

export const Mixed: Story = {
  render: () => <LabeledCheckbox checkState="Mixed" visualState="Default" />,
};

export const Disabled: Story = {
  render: () => (
    <Stack gap={1}>
      {checkStates.map((checkState) => (
        <LabeledCheckbox
          key={checkState}
          checkState={checkState}
          visualState="Disabled"
        />
      ))}
    </Stack>
  ),
};
