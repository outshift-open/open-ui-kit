import { Meta, StoryObj } from "@storybook/react";
import { BasePage, BasePageProps } from "../components/base-page";
import { Box, Button } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { BrowserRouter } from "react-router-dom";

const meta: Meta<typeof BasePage> = {
  title: "Templates/BasePage",
  component: BasePage,
  argTypes: {
    title: { control: "text", description: "The title of the page" },
    description: {
      control: "text",
      description: "The description of the page",
    },
    subNav: { control: "object", description: "Sub-navigation items" },
    breadcrumbs: {
      control: "object",
      description: "Breadcrumb navigation items",
    },
    rightSideItems: {
      control: "object",
      description: "Items displayed on the right side of the page",
    },
    children: { control: "text", description: "Content of the page" },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="BasePage is a template for creating pages with a consistent layout. It includes a header, breadcrumbs, and optional sub-navigation and right-side items."
          guideLink="#"
          importLine='import { BasePage } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof BasePage>;

const TemplateBasePage = (args: BasePageProps) => (
  <BasePage {...args}>{args.children}</BasePage>
);

export const Default: Story = {
  render: (args) => (
    <TemplateBasePage {...args}>{args.children}</TemplateBasePage>
  ),
  args: {
    title: "Default Page",
    description: "This is a default page description.",
    children: <Box>Page content goes here.</Box>,
  },
};

export const WithSubNav: Story = {
  render: (args) => (
    <BrowserRouter>
      <TemplateBasePage {...args}>{args.children}</TemplateBasePage>
    </BrowserRouter>
  ),
  args: {
    title: "Page with SubNav",
    description: "This page includes a sub-navigation.",
    subNav: [
      { href: "/section/page/tab1", label: "Tab 1" },
      { href: "/section/page/tab2", label: "Tab 2" },
      { href: "/section/page/tab3", label: "Tab 3" },
    ],
    children: <Box>Page content with sub-navigation goes here..</Box>,
  },
};

export const WithBreadcrumbs: Story = {
  render: (args) => (
    <BrowserRouter>
      <TemplateBasePage {...args}>{args.children}</TemplateBasePage>
    </BrowserRouter>
  ),
  args: {
    title: "Page with Breadcrumbs",
    description: "This page includes breadcrumbs for navigation.",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Section", link: "/section" },
      { text: "Page", link: "/section/page" },
    ],
    children: <Box>Page content with breadcrumb goes here.</Box>,
  },
};

export const WithRightSideItems: Story = {
  render: (args) => (
    <TemplateBasePage {...args}>{args.children}</TemplateBasePage>
  ),
  args: {
    title: "Page with Right Side Items",
    description: "This page includes items on the right side.",
    rightSideItems: (
      <>
        <Button disableElevation>Action 1</Button>
        <Button variant="outlined">Action 2</Button>
      </>
    ),
    children: <Box>Page content with right side items goes here.</Box>,
  },
};

export const AllProps: Story = {
  render: (args) => (
    <BrowserRouter>
      <TemplateBasePage {...args}>{args.children}</TemplateBasePage>
    </BrowserRouter>
  ),
  args: {
    title: "Page with All Props",
    description: "This page demonstrates all available props.",
    subNav: [
      { href: "/section/page/tab1", label: "Tab 1" },
      { href: "/section/page/tab2", label: "Tab 2" },
      { href: "/section/page/tab3", label: "Tab 3" },
    ],
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Section", link: "/section" },
      { text: "Page", link: "/section/page" },
    ],
    rightSideItems: (
      <>
        <Button disableElevation>Action 1</Button>
        <Button variant="outlined">Action 2</Button>
      </>
    ),
    children: <Box>Page content with all props goes here.</Box>,
  },
};
