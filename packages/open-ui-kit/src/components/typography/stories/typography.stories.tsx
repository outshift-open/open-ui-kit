import { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";

const variants = [
  { variant: "h1", label: "Title h1" },
  { variant: "h2", label: "Title h2" },
  { variant: "h3", label: "Title h3" },
  { variant: "h4", label: "Title h4" },
  { variant: "h5", label: "Title h5" },
  { variant: "h6", label: "Title h6" },
  { variant: "headingSubSection", label: "Title h7" },
  { variant: "subtitle1", label: "Subtitle 1" },
  { variant: "subtitle2", label: "Subtitle 2" },
  { variant: "body1Semibold", label: "Body 1 SemiBold" },
  { variant: "body2Semibold", label: "Body 2 SemiBold" },
  { variant: "body1", label: "Body 1" },
  { variant: "body2", label: "Body 2" },
  { variant: "captionSemibold", label: "Caption Bold" },
  { variant: "captionMedium", label: "Caption Medium" },
  { variant: "caption", label: "Caption" },
  { variant: "button", label: "Button" },
  { variant: "overline", label: "Caption Small" },
] as const;

const variantOptions = variants.map(({ variant }) => variant);

const meta: Meta<typeof Typography> = {
  title: "Foundations/Typography",
  component: Typography,
  args: {
    children: "Body 1",
    variant: "body1",
  },
  decorators: [
    (Story) => (
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.vars.baseBackgroundWeak,
          boxSizing: "border-box",
          color: theme.palette.vars.baseTextDefault,
          p: 2,
        })}
      >
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      control: "select",
      options: variantOptions,
    },
    sx: {
      control: false,
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Type"
          blurb="Open UI Kit uses modern, clean sans serif and monospace font families to make screens of precise and exacting technical information easy to scan."
          guideLink=""
          importLine='import { Typography } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <Stack gap={2}>
      {variants.map(({ variant, label }) => (
        <Box
          key={variant}
          sx={(theme) => ({
            borderBottom: `1px solid ${theme.palette.vars.baseBorderDefault}`,
            pb: 2,
          })}
        >
          <Typography variant={variant}>{label}</Typography>
        </Box>
      ))}
    </Stack>
  ),
};

export const Example: Story = {
  args: {
    children: "Title h1",
    variant: "h1",
  },
};

/**
 * The `gradient` prop fills the text with a gradient (`background-clip: text`)
 * instead of a flat color. It is a boolean, so it composes with any `variant`.
 * Figma: `Gradient/Text-White-Blue`.
 *
 * The ramp spans the line, so how far a string gets along it depends on how
 * much of the line it fills — a word stays white, a full line reaches the blue.
 */
export const Gradient: Story = {
  render: () => (
    <Stack gap={4} sx={{ maxWidth: 520 }}>
      <Stack gap={2}>
        <Typography variant="h1" gradient>
          Welcome Amy!
        </Typography>
        <Typography variant="h3" gradient>
          Gradient heading
        </Typography>
        <Typography variant="subtitle1" gradient>
          Gradient subtitle
        </Typography>
        <Typography variant="body1" gradient>
          Gradient body text — the fill works on any variant.
        </Typography>
        <Typography variant="caption" gradient>
          Gradient caption
        </Typography>
      </Stack>

      <Stack gap={2}>
        <Typography variant="h3" gradient>
          Hi
        </Typography>
        <Typography variant="h3" gradient>
          Welcome back to your workspace, Amy
        </Typography>
        <Typography variant="body1" gradient>
          Your Overall Quality Score represents a composite evaluation of agent
          performance across execution and output dimensions.
        </Typography>
      </Stack>
    </Stack>
  ),
};
