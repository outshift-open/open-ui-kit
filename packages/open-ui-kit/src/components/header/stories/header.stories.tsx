/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {
  AccountCircleOutlined,
  ExpandMore,
  ExpandLess,
  GitHub,
  MenuBook,
  NotificationsNone,
  LogoutOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";
import { Button } from "@/components/button";
import { Menu, MenuItem } from "@/components/menu";
import { OutshiftBrand } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Header } from "..";
import type {
  GlobalSearchGroup,
  GlobalSearchItem,
  HeaderAction,
} from "../types";
import {
  getStoryBetaStyles,
  getStoryMenuItemStyles,
  getStoryMenuPaperStyles,
  getStoryTitleStyles,
} from "../styles";

const AppTitle = () => (
  <Stack direction="row" alignItems="center" gap={1}>
    <Typography sx={(theme) => getStoryTitleStyles(theme)}>
      Agent Directory
    </Typography>
    <Box component="span" sx={(theme) => getStoryBetaStyles(theme)}>
      Beta
    </Box>
  </Stack>
);

const UserSection = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant="tertariary"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        startIcon={<AccountCircleOutlined sx={{ width: 24, height: 24 }} />}
        endIcon={
          open ? (
            <ExpandLess sx={{ width: 16, height: 16 }} />
          ) : (
            <ExpandMore sx={{ width: 16, height: 16 }} />
          )
        }
        disableRipple
        sx={{
          paddingLeft: "4px",
          gap: "4px",
          "&.MuiButton-tertariary": {
            "&:focus": { border: "none !important" },
          },
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography
            variant="subtitle2"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextStrong,
              display: "block",
              lineHeight: "20px",
            })}
          >
            James Miller
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextDefault,
              display: "block",
              lineHeight: "16px",
            })}
          >
            Admin
          </Typography>
        </Box>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={(theme) => getStoryMenuPaperStyles(theme)}
      >
        <MenuItem
          onClick={() => setAnchorEl(null)}
          sx={(theme) => getStoryMenuItemStyles(theme)}
        >
          <PersonOutlineOutlined
            sx={(theme) => ({
              fontSize: 20,
              color: theme.palette.vars.baseTextDefault,
            })}
          />
          <Typography
            variant="body2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            Profile
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => setAnchorEl(null)}
          sx={(theme) => getStoryMenuItemStyles(theme)}
        >
          <LogoutOutlined
            sx={(theme) => ({
              fontSize: 20,
              color: theme.palette.vars.baseTextDefault,
            })}
          />
          <Typography
            variant="body2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextDefault })}
          >
            Log out
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

const allGroups: GlobalSearchGroup[] = [
  {
    key: "agents",
    label: "Agents",
    items: [
      {
        id: "a1",
        label: "Tabular Regression",
        subtitle: "ML / Classification",
      },
      { id: "a2", label: "NLP Summarizer", subtitle: "NLP / Text" },
      { id: "a3", label: "Vision Detector", subtitle: "Computer Vision" },
    ],
  },
  {
    key: "users",
    label: "Users",
    items: [
      { id: "u1", label: "James Miller", subtitle: "Admin" },
      { id: "u2", label: "Sarah Connor", subtitle: "Developer" },
    ],
  },
  {
    key: "projects",
    label: "Projects",
    items: [
      { id: "p1", label: "Agent Directory v2", subtitle: "Active" },
      { id: "p2", label: "Model Registry", subtitle: "In Review" },
    ],
  },
];

const defaultActions: HeaderAction[] = [
  {
    id: "docs",
    icon: <MenuBook />,
    tooltip: "View Documentation",
    href: "#",
    "aria-label": "documentation",
  },
  {
    id: "github",
    icon: <GitHub />,
    tooltip: "GitHub",
    href: "#",
    target: "_blank",
    "aria-label": "github",
  },
  {
    id: "notifications",
    icon: (
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          "&::after": (theme) => ({
            alignItems: "center",
            backgroundColor:
              theme.palette.vars.interactivePrimaryDefaultDefault,
            color: theme.palette.vars.baseTextInverse,
            borderRadius: "50%",
            content: '"1"',
            display: "flex",
            fontSize: "10px",
            height: "16px",
            justifyContent: "center",
            minWidth: "16px",
            position: "absolute",
            right: "-6px",
            top: "-8px",
          }),
        }}
      >
        <NotificationsNone />
      </Box>
    ),
    tooltip: "Notifications",
    "aria-label": "notifications",
  },
];

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Header"
          blurb="Header is a responsive and configurable component for application layouts. It includes slots for a logo, title, search, actions, and user profile."
          importLine={`import { Header } from "@open-ui-kit/core";`}
          includeStories={true}
        />
      ),
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["fixed", "absolute", "sticky", "static", "relative"],
    },
    logo: { control: { disable: true } },
    userSection: { control: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Main component",
  render: () => (
    <Header
      position="static"
      logo={<OutshiftBrand sx={{ width: 115, height: 45 }} />}
      title={<AppTitle />}
      globalSearchProps={{
        placeholder: "Search",
        groups: allGroups,
        width: "360px",
      }}
      actions={defaultActions}
      userSection={<UserSection />}
    />
  ),
};

const GlobalSearchStory = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<GlobalSearchItem | null>(null);

  const filtered = allGroups.map((g) => ({
    ...g,
    items: g.items.filter((item) =>
      item.label.toLowerCase().includes(search.toLowerCase()),
    ),
  }));

  return (
    <Box>
      <Header
        position="static"
        logo={<OutshiftBrand sx={{ width: 115, height: 45 }} />}
        title={<AppTitle />}
        globalSearchProps={{
          placeholder: "Search agents, users, projects…",
          value: search,
          groups: filtered,
          onSearch: setSearch,
          onSelect: (item) => {
            setSelected(item);
            setSearch(item.label);
          },
          onClear: () => {
            setSearch("");
            setSelected(null);
          },
          width: "360px",
        }}
        actions={defaultActions}
        userSection={<UserSection />}
      />
      {selected && (
        <Box sx={{ mt: 10, p: 2 }}>
          <Typography variant="body2">
            Selected: <strong>{selected.label}</strong>
            {selected.subtitle && ` — ${selected.subtitle}`}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export const WithGlobalSearch: Story = {
  name: "Interactive global search",
  render: () => <GlobalSearchStory />,
};

export const Minimal: Story = {
  name: "Item dropdown",
  render: () => (
    <Header
      position="static"
      logo={<OutshiftBrand sx={{ width: 115, height: 45 }} />}
      title={<AppTitle />}
      userSection={<UserSection />}
    />
  ),
};
