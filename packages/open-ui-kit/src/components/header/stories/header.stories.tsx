/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Badge,
  Box,
  Chip,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
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
import { OutshiftBrand } from "@/custom-icons";
import { DocsHeader } from "storybook/components/docs-header.stories";
import Header from "../components/header";
import { GlobalSearchGroup, GlobalSearchItem, HeaderAction } from "../types";

/* ─── Title block: "Agent Directory" + "Beta" chip ─── */
const AppTitle = () => (
  <Stack direction="row" alignItems="center" gap={1}>
    <Typography
      sx={(theme) => ({
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "18px",
        lineHeight: "18px",
        color: theme.palette.vars.baseTextStrong,
      })}
    >
      Agent Directory
    </Typography>
    <Chip
      label="Beta"
      size="small"
      sx={(theme) => ({
        height: "20px",
        fontSize: "12px",
        fontWeight: 600,
        borderRadius: "12px",
        backgroundColor: theme.palette.vars.interactivePrimaryWeakDefault,
        color: theme.palette.vars.baseTextDefault,
        "& .MuiChip-label": { padding: "0 8px" },
      })}
    />
  </Stack>
);

/* ─── User section dropdown ─── */
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
        sx={(theme) => ({
          mt: "8px",
          "& .MuiPaper-root": {
            borderRadius: "8px",
            border: `1px solid ${theme.palette.vars.baseBorderDefault}`,
            boxShadow: theme.shadows[4],
            minWidth: "160px",
            padding: "4px",
          },
          "& .MuiList-root": { padding: 0 },
        })}
      >
        <MenuItem
          onClick={() => setAnchorEl(null)}
          sx={(theme) => ({
            borderRadius: "6px",
            gap: "8px",
            padding: "8px 12px",
            color: theme.palette.vars.baseTextDefault,
            "&:hover": {
              backgroundColor: theme.palette.vars.baseBackgroundHover,
            },
          })}
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
          sx={(theme) => ({
            borderRadius: "6px",
            gap: "8px",
            padding: "8px 12px",
            color: theme.palette.vars.baseTextDefault,
            "&:hover": {
              backgroundColor: theme.palette.vars.baseBackgroundHover,
            },
          })}
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

/* ─── Module-level stable constants (avoids re-render on every render call) ─── */
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
      <Badge
        badgeContent="1"
        sx={{
          "& .MuiBadge-badge": (theme) => ({
            backgroundColor:
              theme.palette.vars.interactivePrimaryDefaultDefault,
            color: "#fff",
            fontSize: "10px",
            minWidth: "16px",
            height: "16px",
            top: "-2px",
            right: "-2px",
          }),
        }}
      >
        <NotificationsNone />
      </Badge>
    ),
    tooltip: "Notifications",
    "aria-label": "notifications",
  },
];

/* ─── Meta ─── */
const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          blurb="Header is a responsive and configurable component for application layouts. It includes slots for a logo, title, search, actions, and user profile."
          guideLink=""
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

/* ─── Default ─── */
export const Default: Story = {
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

/* ─── Interactive global search ─── */
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
  render: () => <GlobalSearchStory />,
};

/* ─── Minimal ─── */
export const Minimal: Story = {
  name: "Minimal — Logo + User",
  render: () => (
    <Header
      position="static"
      logo={<OutshiftBrand sx={{ width: 115, height: 45 }} />}
      title={<AppTitle />}
      userSection={<UserSection />}
    />
  ),
};
