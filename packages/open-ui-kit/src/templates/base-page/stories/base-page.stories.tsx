/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { MemoryRouter } from "react-router-dom";
import { Box, Typography } from "@/components";
import { Button } from "@/components/button";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { BasePage } from "../components/base-page";

const meta: Meta<typeof BasePage> = {
  title: "Templates/Base Page",
  component: BasePage,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    breadcrumbs: {
      control: "object",
      description: "Breadcrumb navigation items rendered above the heading.",
    },
    children: {
      control: false,
      description: "Main page content.",
    },
    containerProps: {
      control: false,
      description: "Props applied to the outer page container.",
    },
    description: {
      control: "text",
      description: "Supporting text rendered below the heading.",
    },
    rightSideItems: {
      control: false,
      description: "Actions displayed on the right side of the header.",
    },
    subNav: {
      control: "object",
      description: "Optional tab navigation items rendered below the header.",
    },
    tabsProps: {
      control: false,
      description: "Props forwarded to the sub-navigation Tabs component.",
    },
    title: {
      control: "text",
      description: "Page heading content.",
    },
    useBreadcrumbs: {
      control: "boolean",
      description: "Hides breadcrumb rendering when set to false.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Base Page"
          blurb="BasePage is a template for creating pages with a consistent header, breadcrumbs, optional sub-navigation, and right-side actions."
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
    {["Summary", "Activity", "Recommendations"].map((label) => (
      <Box
        key={label}
        sx={(theme) => ({
          border: `1px solid ${theme.palette.vars.controlBorderStrong}`,
          borderRadius: "8px",
          padding: "16px",
        })}
      >
        <Typography
          variant="h6"
          sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
        >
          {label}
        </Typography>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.vars.baseBackgroundStrong,
            borderRadius: "4px",
            height: "24px",
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
    title: "Inventory overview",
    description: "Review asset posture and recent changes.",
    children: <SampleContent />,
  },
};

export const WithSubNav: Story = {
  render: (args) => <BasePage {...args} />,
  args: {
    title: "Cloud accounts",
    description: "Manage account groups and discovery status.",
    subNav: [
      { href: "/overview", label: "Overview", selected: true },
      { href: "/accounts", label: "Accounts" },
      { href: "/policies", label: "Policies" },
      { href: "/activity", label: "Activity" },
    ],
    children: <SampleContent />,
  },
};

export const WithBreadcrumbs: Story = {
  render: (args) => <BasePage {...args} />,
  args: {
    title: "Policy details",
    description: "Inspect assigned resources and enforcement health.",
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Policies", link: "/policies" },
    ],
    children: <SampleContent />,
  },
};

export const WithRightSideItems: Story = {
  render: (args) => <BasePage {...args} />,
  args: {
    title: "Reports",
    description: "Create and export compliance reports.",
    breadcrumbs: [{ text: "Home", link: "/" }],
    rightSideItems: (
      <>
        <Button variant="primary" size="small">
          Create
        </Button>
        <Button variant="secondary" size="small">
          Export
        </Button>
      </>
    ),
    children: <SampleContent />,
  },
};

export const Complete: Story = {
  render: (args) => <BasePage {...args} />,
  args: {
    title: "Runtime protection",
    description: "Monitor workload findings by cluster and namespace.",
    subNav: [
      { href: "/overview", label: "Overview", selected: true },
      { href: "/clusters", label: "Clusters" },
      { href: "/namespaces", label: "Namespaces" },
      { href: "/settings", label: "Settings" },
    ],
    breadcrumbs: [
      { text: "Home", link: "/" },
      { text: "Runtime", link: "/runtime" },
    ],
    rightSideItems: (
      <>
        <Button variant="primary" size="small">
          Scan
        </Button>
        <Button variant="secondary" size="small">
          Export
        </Button>
      </>
    ),
    children: <SampleContent />,
  },
};

export const ContentOnly: Story = {
  render: (args) => <BasePage {...args} />,
  args: {
    title: "",
    useBreadcrumbs: false,
    children: <SampleContent />,
  },
};
