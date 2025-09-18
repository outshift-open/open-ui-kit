import { Meta, StoryObj } from "@storybook/react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Accordion, AccordionProps } from "../components/accordion";
import { Stack, Typography } from "@mui/material";

const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Accordions are used to show and hide content. They can be used to organize content into sections, allowing users to expand and collapse sections as needed."
          guideLink=""
          importLine='import { Accordion } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  render: (args) => (
    <Accordion title="Accordion Title" {...args}>
      {args.children}
    </Accordion>
  ),
  args: {
    subTitle: "Title 2 Text",
    titleDetails: "Accordion Details",
    id: "accordion-1",
    disabled: false,
    children: <>Details</>,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <Stack gap={4}>
      <Stack>
        <Typography sx={{ marginBottom: "12px" }}>Medium:</Typography>
        <Accordion title="Accordion Title" size="medium" {...args}>
          {args.children}
        </Accordion>
      </Stack>
      <Stack>
        <Typography sx={{ marginBottom: "12px" }}>Large:</Typography>
        <Accordion title="Accordion Title" size="large" {...args}>
          {args.children}
        </Accordion>
      </Stack>
    </Stack>
  ),
  args: {
    subTitle: "Title 2 Text",
    id: "accordion-1",
    disabled: false,
    children: <>Details</>,
  },
};

export const Variants: Story = {
  render: (args) => (
    <Stack gap={4}>
      <Accordion title="Disabled title" disabled size="large" {...args}>
        {args.children}
      </Accordion>
      <Accordion contained title="Contained title" size="medium" {...args}>
        {args.children}
      </Accordion>
    </Stack>
  ),
  args: {
    subTitle: "Title 2 Text",
    id: "accordion-1",
    children: <>Details</>,
  },
};
