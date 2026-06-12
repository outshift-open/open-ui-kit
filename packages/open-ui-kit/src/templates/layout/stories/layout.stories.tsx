/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material/styles";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Book, BugReport, Explore, Settings } from "@mui/icons-material";
import { MemoryRouter } from "react-router-dom";
import { Avatar, Box, Typography } from "@/components";
import { Button } from "@/components/button";
import { BasePage } from "@/templates/base-page";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Layout } from "../components/layout";
import type { LayoutProps } from "../types";

const meta: Meta<typeof Layout> = {
  title: "Templates/Layout",
  component: Layout,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: false,
      description: "Main page content rendered in the layout body.",
    },
    headerProps: {
      control: false,
      description: "Props forwarded to the fixed Header component.",
    },
    showHeader: {
      control: "boolean",
      description: "Shows or hides the fixed header.",
    },
    showSideNav: {
      control: "boolean",
      description: "Shows or hides the desktop side navigation drawer.",
    },
    sideNav: {
      control: false,
      description: "Content rendered inside the desktop side navigation.",
    },
  },
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          title="Layout"
          blurb="Layout provides the application shell: fixed header, optional desktop side navigation, and a responsive main content region."
          guideLink="#"
          importLine='import { Layout } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

const StoryLogo = () => {
  const theme = useTheme();

  return (
    <svg aria-hidden height="32" viewBox="0 0 100 100" width="32">
      <circle cx="50" cy="50" r="45" fill={theme.palette.vars.accentADefault} />
      <circle
        cx="50"
        cy="50"
        r="25"
        fill={theme.palette.vars.baseTextInverse}
      />
    </svg>
  );
};

const StoryUserSection = () => <Avatar initials="U" size="M" />;

const navItems = [
  { icon: <Explore aria-hidden />, label: "Explore", active: true },
  { icon: <BugReport aria-hidden />, label: "Issues" },
  { icon: <Settings aria-hidden />, label: "Settings" },
];

const StorySideNav = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
    {navItems.map(({ active, icon, label }) => (
      <Box
        key={label}
        component="button"
        type="button"
        sx={(theme) => ({
          alignItems: "center",
          backgroundColor: active
            ? theme.palette.vars.baseBackgroundHover
            : "transparent",
          border: "none",
          borderRadius: "8px",
          color: active
            ? theme.palette.vars.baseTextStrong
            : theme.palette.vars.baseTextDefault,
          cursor: "pointer",
          display: "flex",
          gap: "8px",
          padding: "8px",
          width: "100%",
          "&:hover": {
            backgroundColor: theme.palette.vars.baseBackgroundHover,
          },
          "& svg": {
            height: 24,
            width: 24,
          },
        })}
      >
        {icon}
        <Typography variant="caption" fontWeight={500}>
          {label}
        </Typography>
      </Box>
    ))}
  </Box>
);

const StoryContent = () => (
  <BasePage
    title="Runtime protection"
    description="Monitor workload findings by cluster and namespace."
    subNav={[
      { href: "/overview", label: "Overview", selected: true },
      { href: "/clusters", label: "Clusters" },
      { href: "/namespaces", label: "Namespaces" },
      { href: "/settings", label: "Settings" },
    ]}
    breadcrumbs={[{ text: "Home", link: "/" }]}
    rightSideItems={
      <>
        <Button variant="primary" size="small">
          Scan
        </Button>
        <Button variant="secondary" size="small">
          Export
        </Button>
      </>
    }
  >
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
  </BasePage>
);

const sharedHeaderProps: LayoutProps["headerProps"] = {
  logo: <StoryLogo />,
  title: (
    <Typography
      fontSize="18px"
      fontWeight={700}
      sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
    >
      Agent Directory
    </Typography>
  ),
  actions: [
    {
      id: "docs",
      icon: <Book />,
      tooltip: "View documentation",
      href: "#",
      "aria-label": "documentation",
    },
    {
      id: "issues",
      icon: <BugReport />,
      tooltip: "Report an issue",
      onClick: () => undefined,
      "aria-label": "report an issue",
    },
  ],
  userSection: <StoryUserSection />,
};

const defaultArgs: LayoutProps = {
  content: <StoryContent />,
  headerProps: sharedHeaderProps,
  sideNav: <StorySideNav />,
};

export const Default: Story = {
  args: defaultArgs,
};

export const WithoutHeader: Story = {
  args: {
    ...defaultArgs,
    showHeader: false,
  },
};

export const WithoutSideNav: Story = {
  args: {
    ...defaultArgs,
    showSideNav: false,
  },
};

export const HeaderOnly: Story = {
  args: {
    headerProps: sharedHeaderProps,
    showSideNav: false,
  },
};
