/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Layout, LayoutProps } from "../components/layout";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Avatar } from "@mui/material";
import { Box, Typography } from "@/components";
import { Book, BugReport, Explore, Settings } from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom";
import { BasePage } from "@/templates/base-page";
import { Button } from "@/components/button";

const meta: Meta<typeof Layout> = {
  title: "Templates/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Layout"
          blurb="Layout is a template for creating consistent page layouts. It includes a fixed header, side navigation, and a main content area."
          guideLink="#"
          importLine='import { Layout } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Layout>;

const StoryLogo = () => (
  <svg height="32" viewBox="0 0 100 100" width="32">
    <circle cx="50" cy="50" r="45" fill="#007BFF" />
    <circle cx="50" cy="50" r="25" fill="#FFFFFF" />
  </svg>
);

const StoryUserSection = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={handleClick}
        variant="tertariary"
        sx={{ padding: 0, gap: "8px" }}
      >
        <Avatar sx={{ width: 32, height: 32 }}>U</Avatar>
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="subtitle2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
          >
            James Miller
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            Admin
          </Typography>
        </Box>
      </Button>
      {anchorEl && <div onClick={handleClose} />}
    </>
  );
};

const StorySideNav = () => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
    <Box
      component="button"
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        width: "100%",
        backgroundColor: theme.palette.vars.baseBackgroundHover,
        color: theme.palette.vars.baseTextStrong,
        "&:hover": {
          backgroundColor: theme.palette.vars.baseBackgroundHover,
        },
      })}
    >
      <Explore sx={{ width: 24, height: 24 }} />
      <Typography variant="caption" fontWeight={500}>
        Explore
      </Typography>
    </Box>
    <Box
      component="button"
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        width: "100%",
        background: "transparent",
        color: theme.palette.vars.baseTextDefault,
        "&:hover": {
          backgroundColor: theme.palette.vars.baseBackgroundHover,
        },
      })}
    >
      <BugReport sx={{ width: 24, height: 24 }} />
      <Typography variant="caption" fontWeight={500}>
        Agent Directory
      </Typography>
    </Box>
    <Box
      component="button"
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        width: "100%",
        background: "transparent",
        color: theme.palette.vars.baseTextDefault,
        "&:hover": {
          backgroundColor: theme.palette.vars.baseBackgroundHover,
        },
      })}
    >
      <Settings sx={{ width: 24, height: 24 }} />
      <Typography variant="caption" fontWeight={500}>
        Settings
      </Typography>
    </Box>
  </Box>
);

const StoryContent = () => (
  <BrowserRouter>
    <BasePage
      title="Page Title"
      description="Description"
      subNav={[
        { href: "/tab1", label: "Tab" },
        { href: "/tab2", label: "Tab" },
        { href: "/tab3", label: "Tab" },
        { href: "/tab4", label: "Tab" },
        { href: "/tab5", label: "Tab" },
        { href: "/tab6", label: "Tab" },
      ]}
      breadcrumbs={[{ text: "Home", link: "/" }]}
      rightSideItems={
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
      }
    >
      {[1, 2, 3, 4, 5].map((i) => (
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
            Title
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
    </BasePage>
  </BrowserRouter>
);

const sharedHeaderProps: LayoutProps["headerProps"] = {
  logo: <StoryLogo />,
  title: (
    <Typography
      fontWeight={700}
      fontSize="18px"
      sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
    >
      Agent Directory
    </Typography>
  ),
  searchProps: {
    value: "",
    placeholder: "Search",
    onChange: () => undefined,
  },
  actions: [
    {
      id: "docs",
      icon: <Book />,
      tooltip: "View Documentation",
      href: "#",
      "aria-label": "documentation",
    },
    {
      id: "issues",
      icon: <BugReport />,
      tooltip: "Report an Issue",
      onClick: () => alert("Issue reporting coming soon!"),
      "aria-label": "report an issue",
    },
  ],
  userSection: <StoryUserSection />,
};

export const Default: Story = {
  args: {
    headerProps: sharedHeaderProps,
  },
};

export const WithSideNav: Story = {
  render: (args: LayoutProps) => <Layout {...args} />,
  args: {
    headerProps: sharedHeaderProps,
    sideNav: <StorySideNav />,
  },
};

export const WithContent: Story = {
  render: (args: LayoutProps) => <Layout {...args} />,
  args: {
    headerProps: sharedHeaderProps,
    sideNav: <StorySideNav />,
    content: <StoryContent />,
  },
};

export const NoHeader: Story = {
  args: {
    showHeader: false,
    sideNav: <StorySideNav />,
    content: <StoryContent />,
  },
};

export const NoSideNav: Story = {
  args: {
    headerProps: sharedHeaderProps,
    showSideNav: false,
    content: <StoryContent />,
  },
};
