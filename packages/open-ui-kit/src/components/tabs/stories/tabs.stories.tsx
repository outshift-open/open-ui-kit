import type { Meta, StoryObj } from "@storybook/react";
import { Box, TabsProps, Typography, useTheme } from "@mui/material";
import { ReactNode, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import React from "react";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Tabs } from "../components/tabs";
import { Tab } from "../components/tab";

/**
 * ### Tabs make it easy to explore and switch between different views.

Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.
 */
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select", // Use a dropdown in Storybook
      options: ["main", "subTab", "toggleTab"], // Define the allowed values
      description: "The type of the Tabs component.",
      defaultValue: "main", // Set the default value
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tabs make it easy to explore and switch between different views."
          guideLink=""
          importLine='import { Tabs } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function WrapperBox({
  isScrollable = false,
  isVertical = false,
  ...rest
}: {
  isScrollable?: boolean;
  isVertical?: boolean;
  children: ReactNode;
}) {
  return (
    <Box
      sx={{
        maxWidth: isScrollable && !isVertical ? 480 : "100%",
        flexGrow: 1,
        display: "flex",
        flexDirection: isVertical ? "row" : "column",
        height: isScrollable && isVertical ? 300 : "auto",
      }}
    >
      {rest.children}
    </Box>
  );
}

function Template(args: TabsProps) {
  const [tab, setTab] = useState(0);
  const isScrollable = args.variant === "scrollable";
  const isVertical = args.orientation === "vertical";
  return (
    <WrapperBox isScrollable={isScrollable} isVertical={isVertical}>
      <Tabs
        {...args}
        value={tab}
        onChange={(_, val) => {
          setTab(val);
        }}
        aria-label="template tabs example"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
      </Tabs>
      <TabPanel value={tab} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={tab} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={tab} index={2}>
        Item Three
      </TabPanel>
    </WrapperBox>
  );
}

const WrappedLabelsTemplate = () => {
  const [value, setValue] = useState("one");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <WrapperBox>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab
          value="one"
          label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
          wrapped
        />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </WrapperBox>
  );
};

function StateTabsTemplate(args: TabsProps) {
  const [value, setValue] = useState(2);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WrapperBox>
      <Tabs
        {...args}
        value={value}
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Loading" loading />
      </Tabs>
    </WrapperBox>
  );
}

function CounterTabsTemplate() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WrapperBox>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="counter position tabs example"
      >
        <Tab
          icon={
            <Typography
              variant="subtitle1"
              color={theme.palette.vars.baseTextWeak}
            >
              10
            </Typography>
          }
          iconPosition="start"
          label="start"
        />
        <Tab
          icon={
            <Typography
              variant="subtitle1"
              color={theme.palette.vars.baseTextWeak}
            >
              10
            </Typography>
          }
          iconPosition="end"
          label="end"
        />
      </Tabs>
    </WrapperBox>
  );
}

function IconTabsTemplate() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <WrapperBox>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon position tabs example"
      >
        <Tab icon={<PhoneMissedIcon />} iconPosition="start" label="start" />
        <Tab icon={<FavoriteIcon />} iconPosition="end" label="end" />
      </Tabs>
    </WrapperBox>
  );
}

function IconTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
      <Tab icon={<PhoneIcon />} aria-label="phone" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" />
      <Tab icon={<PersonPinIcon />} aria-label="person" />
    </Tabs>
  );
}

export const BasicTabs: Story = {
  render: Template,
  args: {
    variant: "standard",
    textColor: "primary",
  },
};

export const WrappedLabels: Story = {
  render: WrappedLabelsTemplate,
  args: {
    variant: "standard",
  },
};

export const StatesTab: Story = {
  render: StateTabsTemplate,
  args: {
    variant: "standard",
  },
};

export const VerticalTabs: Story = {
  render: Template,
  args: {
    variant: "standard",
    orientation: "vertical",
  },
};

export const ColoredTab: Story = {
  render: Template,
  args: {
    variant: "standard",
    textColor: "secondary",
    indicatorColor: "secondary",
  },
};

export const CenteredTabs: Story = {
  render: Template,
  args: {
    variant: "standard",
    centered: true,
  },
};

export const ScrollableTabsButtonAuto: Story = {
  render: Template,
  args: {
    variant: "scrollable",
    scrollButtons: "auto",
  },
};

export const ScrollableVerticalTabsButtonAuto: Story = {
  render: Template,
  args: {
    orientation: "vertical",
    variant: "scrollable",
    scrollButtons: "auto",
  },
};

export const IconTabAndPosition = IconTabsTemplate.bind({});

export const CounterTabsAndPosition = CounterTabsTemplate.bind({});

export const IconTab = IconTabs.bind({});
