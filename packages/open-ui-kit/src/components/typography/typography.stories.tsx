import { Typography } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### Typography allow users to show styled text.

There are predefined typographies across the system such as:

- Display1, Display2, Display3
- Headline1, Headline2, Headline3
- Body1, Body2, Body3
  The full list can be found on the theme.
 */
const meta: Meta<typeof Typography> = {
  title: "Foundations/Typography",
  component: Typography,
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Spark uses the Inter font typeface for body text. Sharp Sans
              covers typographic monospaced needs and Source San Pro provides
              Asian and Cyrillic alphabets for language localization."
          guideLink=""
          importLine='import { Typography } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Example: Story = {
  args: {
    children: "H1",
    variant: "h1",
  },
};

export const Headline1: Story = {
  args: {
    variant: "h1",
    children: "h1",
  },
};

export const Headline2: Story = {
  args: {
    variant: "h2",
    children: "h2",
  },
};

export const Headline3: Story = {
  args: {
    variant: "h3",
    children: "h3",
  },
};

export const Headline4: Story = {
  args: {
    variant: "h4",
    children: "h4",
  },
};

export const Headline5: Story = {
  args: {
    variant: "h5",
    children: "h5",
  },
};

export const Headline6: Story = {
  args: {
    variant: "h6",
    children: "h6",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "caption",
  },
};

export const Button: Story = {
  args: {
    variant: "button",
    children: "button",
  },
};

export const Title1: Story = {
  args: {
    variant: "subtitle1",
    children: "subtitle1",
  },
};

export const Title2: Story = {
  args: {
    variant: "subtitle2",
    children: "subtitle2",
  },
};

export const Body1: Story = {
  args: {
    variant: "body1",
    children: "body1",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children: "body2",
  },
};
