import type { Meta, StoryObj } from "@storybook/react-vite";
import type { Theme } from "@mui/material/styles";
import { ArrowForward, Github, ImageGrid } from "@/custom-icons";
import { Box, Stack, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Accordion } from "../components/accordion";
import type { AccordionProps } from "../types";

const contentSlot = (
  <Box
    sx={{
      alignItems: "center",
      border: (theme) => `1px dashed ${theme.palette.vars.accentHDefault}`,
      borderRadius: "2px",
      color: (theme) => theme.palette.vars.accentHDefault,
      display: "flex",
      fontSize: "12px",
      height: "30px",
      justifyContent: "center",
      lineHeight: "120%",
      width: "100%",
    }}
  >
    Content
  </Box>
);

const instanceSlot = (
  <Box
    component="span"
    sx={{
      border: (theme) => `1px dashed ${theme.palette.vars.accentHDefault}`,
      borderRadius: "2px",
      color: (theme) => theme.palette.vars.accentHDefault,
      fontSize: "12px",
      lineHeight: "120%",
      px: 0.5,
    }}
  >
    Instance
  </Box>
);

const storyWidth = {
  large: 300,
  medium: 234,
} as const;

const defaultArgs = {
  arrowPosition: "left",
  children: contentSlot,
  defaultExpanded: true,
  size: "large",
  subTitle: "Text",
  title: "Title",
} satisfies AccordionProps;

const meta: Meta<AccordionProps> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: defaultArgs,
  argTypes: {
    accordionSummaryProps: {
      control: false,
    },
    action: {
      control: false,
    },
    arrowPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    children: {
      control: false,
    },
    contained: {
      control: "boolean",
    },
    detailsContentBoxProps: {
      control: false,
    },
    disabled: {
      control: "boolean",
    },
    endSlot: {
      control: false,
    },
    expanded: {
      control: "boolean",
    },
    showDivider: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["large", "medium"],
    },
    subTitle: {
      control: "text",
    },
    subTitleEndIcon: {
      control: false,
    },
    subTitleSlot: {
      control: false,
    },
    subTitleStartIcon: {
      control: false,
    },
    title: {
      control: "text",
    },
    titleEndIcon: {
      control: false,
    },
    titleSlot: {
      control: false,
    },
    titleStartIcon: {
      control: false,
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
          title="Accordion"
          blurb="Accordions show and hide content inside compact page sections. They support left or right chevrons, contained treatments, summary slots, and grouped layouts."
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

const ConstrainedAccordion = (props: AccordionProps) => (
  <Box sx={{ maxWidth: "100%", width: storyWidth[props.size ?? "large"] }}>
    <Accordion {...props} />
  </Box>
);

const renderConstrainedAccordion = (args: Partial<AccordionProps>) => (
  <ConstrainedAccordion {...defaultArgs} {...args} />
);

const stateSummaryProps = (
  state: "focus" | "hover",
  summaryProps: AccordionProps["accordionSummaryProps"] = {},
): AccordionProps["accordionSummaryProps"] => ({
  ...summaryProps,
  className: [
    state === "focus" ? "Mui-focusVisible" : "",
    summaryProps.className,
  ]
    .filter(Boolean)
    .join(" "),
  sx: [
    ...(state === "hover"
      ? [
          (theme: Theme) => ({
            ".MuiAccordionSummary-expandIconWrapper": {
              color: theme.palette.vars.controlIconStrong,
            },
          }),
        ]
      : []),
    ...(Array.isArray(summaryProps.sx)
      ? summaryProps.sx
      : summaryProps.sx
        ? [summaryProps.sx]
        : []),
  ],
});

export const Default: Story = {
  args: defaultArgs,
  render: renderConstrainedAccordion,
};

export const Medium: Story = {
  args: {
    ...defaultArgs,
    size: "medium",
  },
  render: renderConstrainedAccordion,
};

export const ArrowRight: Story = {
  args: {
    ...defaultArgs,
    arrowPosition: "right",
  },
  render: renderConstrainedAccordion,
};

export const Contained: Story = {
  args: {
    ...defaultArgs,
    contained: true,
    size: "medium",
  },
  render: renderConstrainedAccordion,
};

export const Hover: Story = {
  args: {
    ...defaultArgs,
    accordionSummaryProps: stateSummaryProps("hover"),
  },
  render: renderConstrainedAccordion,
};

export const Focused: Story = {
  args: {
    ...defaultArgs,
    accordionSummaryProps: stateSummaryProps("focus"),
  },
  render: renderConstrainedAccordion,
};

export const Disabled: Story = {
  args: {
    ...defaultArgs,
    disabled: true,
  },
  render: renderConstrainedAccordion,
};

export const WithIcons: Story = {
  args: {
    ...defaultArgs,
    showDivider: true,
    subTitleEndIcon: <Github fontSize="small" />,
    subTitleStartIcon: <ImageGrid fontSize="small" />,
    titleEndIcon: <Github fontSize="small" />,
    titleStartIcon: <ImageGrid fontSize="small" />,
  },
  render: renderConstrainedAccordion,
};

export const WithAction: Story = {
  args: {
    ...defaultArgs,
    action: (
      <Typography variant="body2Semibold" color="primary">
        Link
      </Typography>
    ),
    endSlot: <ArrowForward fontSize="small" />,
    showDivider: true,
  },
  render: renderConstrainedAccordion,
};

export const WithSlots: Story = {
  args: {
    ...defaultArgs,
    endSlot: instanceSlot,
    showDivider: true,
    subTitleSlot: instanceSlot,
    titleSlot: instanceSlot,
  },
  render: (args) => (
    <Box sx={{ maxWidth: "100%", width: 620 }}>
      <Accordion {...defaultArgs} {...args} />
    </Box>
  ),
};

export const Group: Story = {
  render: () => (
    <Stack gap={2} sx={{ maxWidth: "100%", width: 300 }}>
      <Accordion title="Overview" subTitle="Ready" defaultExpanded>
        {contentSlot}
      </Accordion>
      <Accordion title="Configuration" subTitle="Draft">
        {contentSlot}
      </Accordion>
      <Accordion title="Validation" subTitle="Blocked" disabled>
        {contentSlot}
      </Accordion>
      <Accordion title="Deployment" subTitle="Queued" contained size="medium">
        {contentSlot}
      </Accordion>
    </Stack>
  ),
};
