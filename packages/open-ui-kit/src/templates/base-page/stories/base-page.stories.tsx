/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { BasePage } from "../components/base-page";
import { Box, Typography } from "@/components";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { BrowserRouter } from "react-router-dom";
import { Button } from "@/components/button";

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
          title="Base Page"
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

const SampleContent = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
    {[1, 2, 3].map((i) => (
      <Box
        key={i}
        sx={(theme) => ({
          borderRadius: "8px",
          border: `1px solid ${theme.palette.divider}`,
          padding: "16px",
        })}
      >
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
        >
          Section {i}
        </Typography>
        <Box
          sx={(theme) => ({
            height: "24px",
            backgroundColor: theme.palette.vars.baseBackgroundStrong,
            borderRadius: "4px",
            mt: 1,
          })}
        />
      </Box>
    ))}
  </Box>
);

export const Default: Story = {
  render: (args) => <BasePage {...args} />,
  args: {
    title: "Page Title",
    description: "Description",
    children: <SampleContent />,
  },
};

export const WithSubNav: Story = {
  render: (args) => (
    <BrowserRouter>
      <BasePage {...args} />
    </BrowserRouter>
  ),
  args: {
    title: "Page Title",
    description: "Description",
    subNav: [
      { href: "/tab1", label: "Tab 10" },
      { href: "/tab2", label: "Tab 10" },
      { href: "/tab3", label: "Tab 10" },
      { href: "/tab4", label: "Tab 10" },
      { href: "/tab5", label: "Tab 10" },
    ],
    children: <SampleContent />,
  },
};

export const WithBreadcrumbs: Story = {
  render: (args) => (
    <BrowserRouter>
      <BasePage {...args} />
    </BrowserRouter>
  ),
  args: {
    title: "Page Title",
    description: "Description",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Section", link: "/section" },
    ],
    children: <SampleContent />,
  },
};

export const WithRightSideItems: Story = {
  render: (args) => (
    <BrowserRouter>
      <BasePage {...args} />
    </BrowserRouter>
  ),
  args: {
    title: "Page Title",
    description: "Description",
    breadcrumbs: [{ text: "Home", link: "/" }],
    rightSideItems: (
      <>
        <Button variant="primary" size="small">
          button-link
        </Button>
        <Button variant="secondary" size="small">
          button-link
        </Button>
        <Button variant="outlined" size="small">
          button-link
        </Button>
      </>
    ),
    children: <SampleContent />,
  },
};

export const AllProps: Story = {
  render: (args) => (
    <BrowserRouter>
      <BasePage {...args} />
    </BrowserRouter>
  ),
  args: {
    title: "Page Title",
    description: "Description",
    subNav: [
      { href: "/tab1", label: "Tab 10" },
      { href: "/tab2", label: "Tab 10" },
      { href: "/tab3", label: "Tab 10" },
      { href: "/tab4", label: "Tab 10" },
      { href: "/tab5", label: "Tab 10" },
      { href: "/tab6", label: "Tab 10" },
    ],
    breadcrumbs: [{ text: "Home", link: "/" }],
    rightSideItems: (
      <>
        <Button variant="primary" size="small">
          button-link
        </Button>
        <Button variant="secondary" size="small">
          button-link
        </Button>
        <Button variant="outlined" size="small">
          button-link
        </Button>
        <Button variant="outlined" size="small">
          button-link
        </Button>
      </>
    ),
    children: <SampleContent />,
  },
};
