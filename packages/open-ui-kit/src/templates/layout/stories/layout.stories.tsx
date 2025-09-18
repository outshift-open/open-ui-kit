import React, { useState } from "react";
import { Layout, LayoutProps } from "../components/layout";
import { Meta, StoryObj } from "@storybook/react/*";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { Book, BugReport } from "@mui/icons-material";
import { BrowserRouter } from "react-router-dom";
import { BasePage } from "@/templates/base-page";

const meta: Meta<typeof Layout> = {
  title: "Templates/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Layout is a template for creating consistent page layouts. It includes a header, side navigation, and a main content area."
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
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={<Avatar sx={{ width: 32, height: 32 }}>U</Avatar>}
        disableRipple
        disableFocusRipple
        variant="tertariary"
        sx={{ padding: 0 }}
      >
        User Name
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

const BasePageStory = () => {
  return (
    <BrowserRouter>
      <BasePage
        title="Base Page Example"
        description="This is a base page example with a title and description."
        subNav={[
          { href: "/section/page/tab1", label: "Tab 1" },
          { href: "/section/page/tab2", label: "Tab 2" },
          { href: "/section/page/tab3", label: "Tab 3" },
        ]}
        breadcrumbs={[
          { text: "Home", link: "/" },
          { text: "Section", link: "/section" },
          { text: "Page", link: "/section/page" },
        ]}
        rightSideItems={
          <>
            <Button disableElevation>Action 1</Button>
            <Button variant="outlined">Action 2</Button>
          </>
        }
      >
        <Box>
          <Typography variant="h4">Welcome to the Base Page</Typography>
          <Typography variant="body1">
            This is an example of a base page with a title and content.
          </Typography>
        </Box>
      </BasePage>
    </BrowserRouter>
  );
};

const TemplateLayout = (args: LayoutProps) => <Layout {...args} />;

export const Default: Story = {
  render: (args) => <TemplateLayout {...args} />,
  args: {
    headerProps: {
      logo: <StoryLogo />,
      title: (
        <Typography fontWeight={700} fontSize="18px" color="#00142B">
          My Application
        </Typography>
      ),
      position: "fixed",
      searchProps: {
        value: "",
        placeholder: "Search anything...",
        onChange: () => {
          ("");
        },
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
    },
  },
};

export const LayoutWithBasePage: Story = {
  render: (args) => <TemplateLayout {...args} />,
  args: {
    headerProps: {
      logo: <StoryLogo />,
      title: (
        <Typography fontWeight={700} fontSize="18px" color="#00142B">
          My Application
        </Typography>
      ),
      position: "fixed",
      searchProps: {
        value: "",
        placeholder: "Search anything...",
        onChange: () => {
          ("");
        },
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
    },
    content: <BasePageStory />,
  },
};
