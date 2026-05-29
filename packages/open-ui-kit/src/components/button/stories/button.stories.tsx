import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@mui/material";
import GridViewIcon from "@mui/icons-material/GridView";
import { Button } from "../components/button";
import type { ButtonProps } from "../types";
import { DocsHeader } from "storybook/components/docs-header.stories";

type ButtonVariant = NonNullable<ButtonProps["variant"]>;
type ButtonSize = NonNullable<ButtonProps["size"]>;
type ButtonState = "default" | "hover" | "pressed" | "disabled" | "focus";
type IconExample = "no icon" | "left icon" | "right icon" | "icon alone";

const variants: Array<{
  label: string;
  variant: ButtonVariant;
  color?: ButtonProps["color"];
}> = [
  { label: "Primary", variant: "primary" },
  { label: "Secondary", variant: "secondary" },
  { label: "Outlined", variant: "outlined" },
  { label: "Tertiary", variant: "tertariary" },
  { label: "Irreversible Primary", variant: "primary", color: "negative" },
  { label: "Irreversible Outlined", variant: "outlined", color: "negative" },
  { label: "Irreversible Tertiary", variant: "tertariary", color: "negative" },
];

const sizes: ButtonSize[] = ["large", "medium", "small"];
const states: ButtonState[] = [
  "default",
  "hover",
  "pressed",
  "disabled",
  "focus",
];
const iconExamples: IconExample[] = [
  "no icon",
  "left icon",
  "right icon",
  "icon alone",
];

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
          importLine='import { Button } from "@open-ui-kit/core";'
          title="Button"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

const figmaLabel = (label: string) => (
  <Typography
    variant="caption"
    sx={{
      bgcolor: "#D4B3FF",
      borderRadius: "4px",
      color: "#4C00AE",
      fontWeight: 500,
      px: 0.5,
      py: 0.25,
      width: "fit-content",
      whiteSpace: "nowrap",
    }}
  >
    {label}
  </Typography>
);

const stateSx = (
  state: ButtonState,
  variant: ButtonVariant,
  color?: ButtonProps["color"],
): ButtonProps["sx"] => {
  if (state === "focus") {
    return (theme) => ({
      outline: `2px solid ${theme.palette.vars.excellentBorderDefault}`,
      outlineOffset: "2px",
    });
  }

  if (state === "hover") {
    return (theme) => {
      if (color === "negative") {
        return variant === "tertariary"
          ? { color: theme.palette.vars.negativeBackgroundHover }
          : {
              backgroundColor:
                variant === "outlined"
                  ? "transparent"
                  : theme.palette.vars.negativeBackgroundHover,
              borderColor:
                variant === "outlined"
                  ? theme.palette.vars.negativeBackgroundHover
                  : undefined,
              color:
                variant === "outlined"
                  ? theme.palette.vars.negativeBackgroundHover
                  : theme.palette.vars.baseTextInverse,
            };
      }

      if (variant === "primary") {
        return {
          backgroundColor: theme.palette.vars.interactivePrimaryDefaultHover,
        };
      }
      if (variant === "secondary") {
        return {
          backgroundColor: theme.palette.vars.interactiveSecondaryDefaultHover,
        };
      }
      if (variant === "outlined") {
        return {
          borderColor: theme.palette.vars.interactiveTertiaryHover,
          color: theme.palette.vars.interactiveTextInHover,
        };
      }

      return { color: theme.palette.vars.interactivePrimaryDefaultHover };
    };
  }

  if (state === "pressed") {
    return (theme) => {
      if (color === "negative") {
        return variant === "tertariary"
          ? { color: theme.palette.vars.negativeBackgroundActive }
          : {
              backgroundColor:
                variant === "outlined"
                  ? "transparent"
                  : theme.palette.vars.negativeBackgroundActive,
              borderColor:
                variant === "outlined"
                  ? theme.palette.vars.negativeBackgroundActive
                  : theme.palette.vars.negativeBorderDefault,
              color:
                variant === "outlined"
                  ? theme.palette.vars.negativeBackgroundActive
                  : theme.palette.vars.baseTextInverse,
            };
      }

      if (variant === "primary") {
        return {
          backgroundColor: theme.palette.vars.interactivePrimaryDefaultActive,
          border: `1px solid ${theme.palette.vars.interactivePrimaryDefaultDefault}`,
        };
      }
      if (variant === "secondary") {
        return {
          backgroundColor: theme.palette.vars.interactiveSecondaryDefaultActive,
          border: `1px solid ${theme.palette.vars.interactiveSecondaryDefaultDefault}`,
        };
      }
      if (variant === "outlined") {
        return {
          borderColor: theme.palette.vars.interactiveTertiaryActive,
          color: theme.palette.vars.interactiveTextInActive,
        };
      }

      return { color: theme.palette.vars.interactivePrimaryDefaultActive };
    };
  }

  return undefined;
};

const ExampleButton = ({
  iconExample,
  state = "default",
  color,
  disabled,
  endIcon,
  startIcon,
  sx,
  variant = "primary",
  ...props
}: ButtonProps & {
  iconExample: IconExample;
  state?: ButtonState;
}) => {
  const icon = <GridViewIcon />;
  const content = iconExample === "icon alone" ? icon : "button-link";
  const internalSx = stateSx(state, variant, color);

  return (
    <Button
      {...props}
      color={color}
      disabled={state === "disabled" || disabled}
      endIcon={iconExample === "right icon" ? (endIcon ?? icon) : undefined}
      startIcon={iconExample === "left icon" ? (startIcon ?? icon) : undefined}
      sx={[
        ...(Array.isArray(internalSx)
          ? internalSx
          : internalSx
            ? [internalSx]
            : []),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      variant={variant}
    >
      {content}
    </Button>
  );
};

const VariantMatrix = ({
  variant,
  color,
}: {
  variant: ButtonVariant;
  color?: ButtonProps["color"];
}) => (
  <Stack gap={3}>
    {sizes.map((size) => (
      <Stack key={size} gap={1.5}>
        {figmaLabel(`Size ${size}`)}
        {states.map((state) => (
          <Stack key={state} direction="row" gap={2} sx={{ flexWrap: "wrap" }}>
            <Box sx={{ width: 72 }}>{figmaLabel(`state ${state}`)}</Box>
            {iconExamples.map((iconExample) => (
              <ExampleButton
                key={iconExample}
                color={color}
                iconExample={iconExample}
                size={size}
                state={state}
                variant={variant}
              />
            ))}
          </Stack>
        ))}
        <Stack direction="row" gap={2} sx={{ pl: 11 }}>
          <Button
            color={color}
            loading
            loadingPosition="start"
            size={size}
            startIcon={<GridViewIcon />}
            variant={variant}
          >
            button-link
          </Button>
        </Stack>
      </Stack>
    ))}
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack gap={5}>
      <Stack
        direction="row"
        gap={5}
        sx={{ alignItems: "flex-start", flexWrap: "wrap" }}
      >
        {variants.slice(0, 4).map(({ label, variant, color }) => (
          <Stack key={label} gap={2}>
            {figmaLabel(label)}
            <VariantMatrix color={color} variant={variant} />
          </Stack>
        ))}
      </Stack>
      <Stack gap={2}>
        {figmaLabel("Irreversible")}
        <Stack
          direction="row"
          gap={5}
          sx={{ alignItems: "flex-start", flexWrap: "wrap" }}
        >
          {variants.slice(4).map(({ label, variant, color }) => (
            <Stack key={label} gap={2}>
              {figmaLabel(label)}
              <VariantMatrix color={color} variant={variant} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const Primary: Story = {
  render: () => <VariantMatrix variant="primary" />,
};

export const Secondary: Story = {
  render: () => <VariantMatrix variant="secondary" />,
};

export const Outlined: Story = {
  render: () => <VariantMatrix variant="outlined" />,
};

export const Tertiary: Story = {
  render: () => <VariantMatrix variant="tertariary" />,
};

export const Irreversible: Story = {
  render: () => (
    <Stack direction="row" gap={5} sx={{ alignItems: "flex-start" }}>
      <VariantMatrix color="negative" variant="primary" />
      <VariantMatrix color="negative" variant="outlined" />
      <VariantMatrix color="negative" variant="tertariary" />
    </Stack>
  ),
};
