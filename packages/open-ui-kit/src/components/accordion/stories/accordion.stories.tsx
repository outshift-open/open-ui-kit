import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowForward, GridView, Hub } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Accordion, type AccordionProps } from "../components/accordion";

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
          includeStories={true}
          importLine='import { Accordion } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<AccordionProps>;

const contentSlot = (
  <Box
    sx={{
      alignItems: "center",
      border: "1px dashed #9747FF",
      borderRadius: "2px",
      color: "#9747FF",
      display: "flex",
      fontSize: "12px",
      height: "30px",
      justifyContent: "center",
      lineHeight: "120%",
      width: "100%",
    }}
  >
    content
  </Box>
);

const instanceSlot = (
  <Box
    component="span"
    sx={{
      border: "1px dashed #9747FF",
      borderRadius: "2px",
      color: "#9747FF",
      fontSize: "12px",
      lineHeight: "120%",
      px: 0.5,
    }}
  >
    instance Slot
  </Box>
);

const sectionLabel = (label: string) => (
  <Typography
    variant="caption"
    sx={{
      alignSelf: "flex-start",
      bgcolor: "#D4B3FF",
      borderRadius: "4px",
      color: "#4C00AE",
      fontWeight: 500,
      px: 0.5,
      py: 0.25,
    }}
  >
    {label}
  </Typography>
);

const storyWidth = {
  large: 300,
  medium: 234,
} as const;

type StoryAccordionProps = Partial<AccordionProps> & { focused?: boolean };

const renderAccordion = ({
  focused = false,
  accordionSummaryProps,
  children = contentSlot,
  title = "Title",
  subTitle = "Text",
  ...props
}: StoryAccordionProps) => (
  <Accordion
    title={title}
    subTitle={subTitle}
    defaultExpanded
    {...props}
    accordionSummaryProps={{
      ...(focused ? { className: "Mui-focusVisible" } : {}),
      ...accordionSummaryProps,
    }}
  >
    {children}
  </Accordion>
);

const StateColumn = ({
  arrowPosition,
  size = "large",
  contained = false,
}: Pick<AccordionProps, "arrowPosition" | "size" | "contained">) => (
  <Stack gap={size === "medium" && !contained ? 0 : 2} width={storyWidth[size]}>
    {renderAccordion({ arrowPosition, size, contained })}
    {renderAccordion({ arrowPosition, size, contained })}
    {renderAccordion({ arrowPosition, size, contained, disabled: true })}
    {renderAccordion({ arrowPosition, size, contained, focused: true })}
  </Stack>
);

const ExtrasGrid = () => (
  <Stack
    gap={4}
    sx={(theme) => ({
      backgroundColor: theme.palette.vars.baseBackgroundMedium,
      border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
      borderRadius: "8px",
      p: 4,
      width: 620,
    })}
  >
    <Stack gap={2}>
      {sectionLabel("show dividers")}
      <Stack direction="row" gap={3}>
        {renderAccordion({ size: "large", showDivider: true })}
        {renderAccordion({ size: "medium", showDivider: true })}
      </Stack>
    </Stack>
    <Stack gap={2}>
      {sectionLabel("show icons")}
      <Stack direction="row" gap={3}>
        {renderAccordion({
          size: "large",
          titleStartIcon: <GridView fontSize="small" />,
          titleEndIcon: <Hub fontSize="small" />,
          subTitleStartIcon: <GridView fontSize="small" />,
          subTitleEndIcon: <Hub fontSize="small" />,
        })}
        {renderAccordion({
          size: "medium",
          titleStartIcon: <GridView fontSize="small" />,
          subTitleEndIcon: <Hub fontSize="small" />,
        })}
      </Stack>
    </Stack>
    <Stack gap={2}>
      {sectionLabel("show link")}
      <Stack direction="row" gap={3}>
        {renderAccordion({
          action: (
            <Typography variant="body2Semibold" color="primary">
              Link
            </Typography>
          ),
          endSlot: <ArrowForward fontSize="small" />,
        })}
        {renderAccordion({
          size: "medium",
          action: (
            <Typography variant="body2Semibold" color="primary">
              Link
            </Typography>
          ),
          endSlot: <ArrowForward fontSize="small" />,
        })}
      </Stack>
    </Stack>
    <Stack gap={2}>
      {sectionLabel("option instances")}
      {renderAccordion({
        showDivider: true,
        titleSlot: instanceSlot,
        subTitleSlot: instanceSlot,
        endSlot: instanceSlot,
      })}
      {renderAccordion({
        size: "medium",
        showDivider: true,
        titleSlot: instanceSlot,
        subTitleSlot: instanceSlot,
        endSlot: instanceSlot,
      })}
    </Stack>
    <Stack gap={2}>
      {sectionLabel("option two text")}
      {renderAccordion({
        title: "Title",
        subTitle: "Text",
        showDivider: true,
        action: <Typography variant="h6">Text</Typography>,
        endSlot: <Typography variant="h6">Text</Typography>,
      })}
      {renderAccordion({
        size: "medium",
        title: "Title",
        subTitle: "Text",
        showDivider: true,
        action: <Typography variant="body2Semibold">Text</Typography>,
        endSlot: <Typography variant="body2Semibold">Text</Typography>,
      })}
    </Stack>
  </Stack>
);

export const Default: Story = {
  render: () => (
    <Stack gap={6} alignItems="flex-start">
      <Stack gap={5}>
        <Stack direction="row" gap={5}>
          <Stack gap={2}>
            {sectionLabel("arrow left")}
            {sectionLabel("Default Large")}
            <StateColumn arrowPosition="left" size="large" />
          </Stack>
          <Stack gap={2}>
            {sectionLabel("arrow right")}
            {sectionLabel("Default Large")}
            <StateColumn arrowPosition="right" size="large" />
          </Stack>
        </Stack>
        <Stack direction="row" gap={5}>
          <Stack gap={2}>
            {sectionLabel("Default Medium")}
            <StateColumn arrowPosition="left" size="medium" />
          </Stack>
          <Stack gap={2}>
            {sectionLabel("Default Medium")}
            <StateColumn arrowPosition="right" size="medium" />
          </Stack>
        </Stack>
        <Stack direction="row" gap={5}>
          <Stack gap={2}>
            {sectionLabel("Contained Medium")}
            <StateColumn arrowPosition="left" size="medium" contained />
          </Stack>
          <Stack gap={2}>
            {sectionLabel("Contained Medium")}
            <StateColumn arrowPosition="right" size="medium" contained />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" gap={5} alignItems="flex-start">
        <Stack gap={5}>
          {sectionLabel("Extras")}
          <ExtrasGrid />
        </Stack>
        <Stack gap={2} width={300}>
          {sectionLabel("group")}
          {renderAccordion({ arrowPosition: "left" })}
          {renderAccordion({ arrowPosition: "left" })}
          {renderAccordion({ arrowPosition: "left" })}
          {renderAccordion({ arrowPosition: "left" })}
          {renderAccordion({ arrowPosition: "left", size: "medium" })}
          {renderAccordion({ arrowPosition: "right", size: "medium" })}
          {renderAccordion({ arrowPosition: "right", size: "medium" })}
          {renderAccordion({ arrowPosition: "right", size: "medium" })}
          {renderAccordion({
            arrowPosition: "left",
            size: "medium",
            contained: true,
          })}
          {renderAccordion({
            arrowPosition: "right",
            size: "medium",
            contained: true,
          })}
          {renderAccordion({
            arrowPosition: "right",
            size: "medium",
            contained: true,
          })}
          {renderAccordion({
            arrowPosition: "right",
            size: "medium",
            contained: true,
          })}
        </Stack>
      </Stack>
    </Stack>
  ),
};

export const ArrowLeft: Story = {
  name: "arrow left",
  render: () => <StateColumn arrowPosition="left" size="large" />,
};

export const ArrowRight: Story = {
  name: "arrow right",
  render: () => <StateColumn arrowPosition="right" size="large" />,
};

export const DefaultMedium: Story = {
  render: () => <StateColumn arrowPosition="left" size="medium" />,
};

export const ContainedMedium: Story = {
  render: () => <StateColumn arrowPosition="left" size="medium" contained />,
};

export const Extras: Story = {
  render: () => <ExtrasGrid />,
};

export const Group: Story = {
  name: "group",
  render: () => (
    <Stack gap={2} width={300}>
      {renderAccordion({ arrowPosition: "left" })}
      {renderAccordion({ arrowPosition: "left" })}
      {renderAccordion({ arrowPosition: "left" })}
      {renderAccordion({ arrowPosition: "left" })}
      {renderAccordion({ arrowPosition: "left", size: "medium" })}
      {renderAccordion({ arrowPosition: "right", size: "medium" })}
      {renderAccordion({
        arrowPosition: "right",
        size: "medium",
        contained: true,
      })}
      {renderAccordion({
        arrowPosition: "right",
        size: "medium",
        contained: true,
      })}
    </Stack>
  ),
};
