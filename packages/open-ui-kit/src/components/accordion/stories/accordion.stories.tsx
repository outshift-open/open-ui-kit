import { Meta, StoryObj } from "@storybook/react-vite";
import { DocsHeader } from "storybook/components/docs-header.stories";
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
          importLine={`import { Accordion } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<AccordionProps>;

const defaultChildren = <Typography variant="body2">Content</Typography>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...(args as AccordionProps)}>{args.children}</Accordion>
  ),
  args: {
    title: "Title",
    subTitle: "Text",
    size: "large",
    arrowPosition: "left",
    disabled: false,
    defaultExpanded: true,
    children: defaultChildren,
  },
};

export const ArrowLeft: Story = {
  render: (args) => (
    <Stack gap={2} width={300}>
      <Accordion {...(args as AccordionProps)} defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)} disabled defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)} disabled>
        {defaultChildren}
      </Accordion>
    </Stack>
  ),
  args: {
    title: "Title",
    subTitle: "Text",
    size: "large",
    arrowPosition: "left",
  },
};

export const ArrowRight: Story = {
  render: (args) => (
    <Stack gap={2} width={300}>
      <Accordion {...(args as AccordionProps)} defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)} disabled defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)} disabled>
        {defaultChildren}
      </Accordion>
    </Stack>
  ),
  args: {
    title: "Title",
    subTitle: "Text",
    size: "large",
    arrowPosition: "right",
  },
};

export const Medium: Story = {
  render: (args) => (
    <Stack gap={0} width={300}>
      <Accordion {...(args as AccordionProps)} defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)} disabled defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)} disabled>
        {defaultChildren}
      </Accordion>
    </Stack>
  ),
  args: {
    title: "Title",
    subTitle: "Text",
    size: "medium",
    arrowPosition: "left",
  },
};

export const ContainedMedium: Story = {
  render: (args) => (
    <Stack gap={2} width={300}>
      <Accordion {...(args as AccordionProps)} defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)} disabled defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)} disabled>
        {defaultChildren}
      </Accordion>
    </Stack>
  ),
  args: {
    title: "Title",
    subTitle: "Text",
    size: "medium",
    contained: true,
    arrowPosition: "left",
  },
};

export const Group: Story = {
  render: (args) => (
    <Stack width={300}>
      <Accordion {...(args as AccordionProps)} defaultExpanded>
        {defaultChildren}
      </Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)}>{defaultChildren}</Accordion>
      <Accordion {...(args as AccordionProps)} defaultExpanded>
        {defaultChildren}
      </Accordion>
    </Stack>
  ),
  args: {
    title: "Title",
    subTitle: "Text",
    size: "large",
    arrowPosition: "right",
  },
};
