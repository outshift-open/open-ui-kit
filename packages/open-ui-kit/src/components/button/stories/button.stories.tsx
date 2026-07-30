import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageGrid } from "@/custom-icons";
import { Box, Stack } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Button } from "../components/button";
import type { ButtonProps } from "../types";

type ButtonVariant = NonNullable<ButtonProps["variant"]>;
type ButtonState = "default" | "hover" | "pressed" | "focus";

const defaultArgs = {
  children: "button-link",
  color: "default",
  size: "medium",
  variant: "primary",
} satisfies ButtonProps;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    children: {
      control: "text",
    },
    color: {
      control: "radio",
      options: ["default", "negative"],
    },
    disabled: {
      control: "boolean",
    },
    endIcon: {
      control: false,
    },
    loading: {
      control: "boolean",
    },
    loadingPosition: {
      control: "radio",
      options: ["start", "end", "center"],
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    startIcon: {
      control: false,
    },
    sx: {
      control: false,
    },
    variant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "gradient",
        "outlined",
        "gradientOutlined",
        "tertariary",
      ],
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
          blurb="Buttons let people trigger a single action. Use primary for the main action, secondary for inverse emphasis, outlined for supporting actions, tertiary for low-emphasis actions, and negative for destructive actions."
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

const buttonStateSx =
  (
    state: ButtonState,
    variant: ButtonVariant = "primary",
    color: ButtonProps["color"] = "default",
    size: ButtonProps["size"] = "medium",
  ): ButtonProps["sx"] =>
  (theme) => {
    const activeHorizontalPadding = size === "small" ? "11px" : "15px";

    if (state === "focus") {
      return {
        "&&": {
          outline: `2px solid ${theme.palette.vars.excellentBorderActive}`,
          outlineOffset: "2px",
        },
      };
    }

    if (color === "negative") {
      if (variant === "outlined") {
        return {
          "&&":
            state === "hover"
              ? {
                  borderColor: theme.palette.vars.negativeBorderHover,
                  color: theme.palette.vars.negativeTextHover,
                }
              : {
                  borderColor: theme.palette.vars.negativeBorderActive,
                  color: theme.palette.vars.negativeTextActive,
                },
        };
      }

      if (variant === "tertariary") {
        return {
          "&&": {
            color:
              state === "hover"
                ? theme.palette.vars.negativeTextHover
                : theme.palette.vars.negativeTextActive,
          },
        };
      }

      return {
        "&&": {
          backgroundColor:
            state === "hover"
              ? theme.palette.vars.negativeBackgroundHover
              : theme.palette.vars.negativeBackgroundActive,
          border:
            state === "pressed"
              ? `1px solid ${theme.palette.vars.negativeBorderDefault}`
              : undefined,
          color: theme.palette.vars.baseTextInverse,
          paddingLeft:
            state === "pressed" ? activeHorizontalPadding : undefined,
          paddingRight:
            state === "pressed" ? activeHorizontalPadding : undefined,
        },
      };
    }

    if (variant === "secondary") {
      return {
        "&&": {
          backgroundColor:
            state === "hover"
              ? theme.palette.vars.interactiveSecondaryDefaultHover
              : theme.palette.vars.interactiveSecondaryDefaultActive,
          border:
            state === "pressed"
              ? `1px solid ${theme.palette.vars.interactiveSecondaryDefaultDefault}`
              : undefined,
        },
      };
    }

    if (variant === "outlined") {
      return {
        "&&": {
          borderColor:
            state === "hover"
              ? theme.palette.vars.interactiveTertiaryHover
              : theme.palette.vars.interactiveTertiaryActive,
          color:
            state === "hover"
              ? theme.palette.vars.interactiveTextInHover
              : theme.palette.vars.interactiveTextInActive,
        },
      };
    }

    if (variant === "tertariary") {
      return {
        "&&": {
          color:
            state === "hover"
              ? theme.palette.vars.interactivePrimaryDefaultHover
              : theme.palette.vars.interactivePrimaryDefaultActive,
        },
      };
    }

    return {
      "&&": {
        backgroundColor:
          state === "hover"
            ? theme.palette.vars.interactivePrimaryDefaultHover
            : theme.palette.vars.interactivePrimaryDefaultActive,
        border:
          state === "pressed"
            ? `1px solid ${theme.palette.vars.interactivePrimaryDefaultDefault}`
            : undefined,
        paddingLeft: state === "pressed" ? activeHorizontalPadding : undefined,
        paddingRight: state === "pressed" ? activeHorizontalPadding : undefined,
      },
    };
  };

const RenderButton = ({
  state = "default",
  sx,
  variant = "primary",
  color = "default",
  size = "medium",
  ...args
}: ButtonProps & { state?: ButtonState }) => {
  const stateSx =
    state === "default"
      ? undefined
      : buttonStateSx(state, variant, color, size);

  return (
    <Button
      {...args}
      color={color}
      size={size}
      sx={[
        ...(Array.isArray(stateSx) ? stateSx : stateSx ? [stateSx] : []),
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      variant={variant}
    />
  );
};

const sizes = ["large", "medium", "small"] as const;
const variants: Array<{ label: string; variant: ButtonVariant }> = [
  { label: "Primary", variant: "primary" },
  { label: "Secondary", variant: "secondary" },
  { label: "Gradient", variant: "gradient" },
  { label: "Outlined", variant: "outlined" },
  { label: "Gradient Outlined", variant: "gradientOutlined" },
  { label: "Tertiary", variant: "tertariary" },
];

export const Default: Story = {
  args: defaultArgs,
  render: (args) => <RenderButton {...args} />,
};

export const Secondary: Story = {
  args: {
    ...defaultArgs,
    variant: "secondary",
  },
  render: (args) => <RenderButton {...args} />,
};

/** Gradient background fill — Figma token `Gradient/Global-Button-Primary/Fill`. */
export const Gradient: Story = {
  args: {
    ...defaultArgs,
    variant: "gradient",
  },
  render: (args) => <RenderButton {...args} />,
};

export const Outlined: Story = {
  args: {
    ...defaultArgs,
    variant: "outlined",
  },
  render: (args) => <RenderButton {...args} />,
};

/** Gradient border ring — Figma token `Gradient/Global-Button-Primary/Border-Glow`. */
export const GradientOutlined: Story = {
  args: {
    ...defaultArgs,
    variant: "gradientOutlined",
  },
  render: (args) => <RenderButton {...args} />,
};

export const Tertiary: Story = {
  args: {
    ...defaultArgs,
    variant: "tertariary",
  },
  render: (args) => <RenderButton {...args} />,
};

export const Sizes: Story = {
  render: (args) => (
    <Stack
      direction="row"
      gap={2}
      sx={{ alignItems: "center", flexWrap: "wrap" }}
    >
      {sizes.map((size) => (
        <RenderButton key={size} {...defaultArgs} {...args} size={size}>
          {size}
        </RenderButton>
      ))}
    </Stack>
  ),
};

const wrappingLabel = (size: (typeof sizes)[number]) =>
  `Button size: ${size}. A long button label that wraps onto multiple lines when width is constrained`;

export const WrappingLabelHeight: Story = {
  name: "Wrapping label height",
  render: (args) => (
    <Stack spacing={3} sx={{ maxWidth: "360px" }}>
      <Stack
        spacing={2}
        sx={{
          maxWidth: "140px",
          outline: "1px dashed",
          outlineColor: "divider",
          p: 1,
        }}
      >
        {sizes.map((size) => (
          <RenderButton key={size} {...defaultArgs} {...args} size={size}>
            {wrappingLabel(size)}
          </RenderButton>
        ))}
      </Stack>
    </Stack>
  ),
};

export const WithIcons: Story = {
  args: {
    ...defaultArgs,
    endIcon: <ImageGrid />,
    startIcon: <ImageGrid />,
    size: "large",
  },
  render: (args) => <RenderButton {...args} />,
};

export const IconOnly: Story = {
  args: {
    ...defaultArgs,
    children: <ImageGrid aria-label="Grid" />,
  },
  render: (args) => <RenderButton {...args} />,
};

/**
 * Icon-only carries its own gradient treatment 
 */
export const IconButtonAI: Story = {
  name: "Icon Button AI",
  args: {
    ...defaultArgs,
    children: <ImageGrid aria-label="Grid" />,
    variant: "gradient",
  },
  render: (args) => <RenderButton {...args} />,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  render: (args) => <RenderButton {...args} />,
};

export const Loading: Story = {
  args: {
    ...defaultArgs,
    loading: true,
    loadingPosition: "start",
    startIcon: <ImageGrid />,
  },
  render: (args) => <RenderButton {...args} />,
};

export const Hover: Story = {
  args: defaultArgs,
  render: (args) => <RenderButton {...args} state="hover" />,
};

export const Pressed: Story = {
  args: defaultArgs,
  render: (args) => <RenderButton {...args} state="pressed" />,
};

export const Focused: Story = {
  args: defaultArgs,
  render: (args) => <RenderButton {...args} state="focus" />,
};

export const Irreversible: Story = {
  render: (args) => (
    <Stack
      direction="row"
      gap={2}
      sx={{ alignItems: "center", flexWrap: "wrap" }}
    >
      {variants
        .filter(({ variant }) => variant !== "secondary")
        .map(({ label, variant }) => (
          <RenderButton
            key={variant}
            {...defaultArgs}
            {...args}
            color="negative"
            variant={variant}
          >
            {label}
          </RenderButton>
        ))}
    </Stack>
  ),
};
