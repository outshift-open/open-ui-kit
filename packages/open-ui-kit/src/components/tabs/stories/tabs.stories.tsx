/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Tabs } from "../components/tabs";
import { Tab } from "../components/tab";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="Tabs make it easy to explore and switch between different views. Three types are supported: Main Tab, Subtab, and Toggle Tab."
          guideLink=""
          importLine='import { Tabs, Tab } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/* ─── Main Tab ─── */
const MainTabStory = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  return (
    <Stack spacing={2}>
      <Tabs value={value} onChange={(_, v) => setValue(v)} type="main">
        <Tab
          label="Tab"
          icon={
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.vars.baseTextWeak }}
            >
              10
            </Typography>
          }
          iconPosition="end"
        />
        <Tab
          label="Tab"
          icon={
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.vars.baseTextWeak }}
            >
              10
            </Typography>
          }
          iconPosition="end"
        />
        <Tab
          label="Tab"
          icon={
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.vars.baseTextWeak }}
            >
              10
            </Typography>
          }
          iconPosition="end"
        />
        <Tab
          label="Tab"
          icon={
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.vars.baseTextWeak }}
            >
              10
            </Typography>
          }
          iconPosition="end"
        />
        <Tab
          label="Tab"
          icon={
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.vars.baseTextWeak }}
            >
              10
            </Typography>
          }
          iconPosition="end"
        />
        <Tab
          label="Tab"
          icon={
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.vars.baseTextWeak }}
            >
              10
            </Typography>
          }
          iconPosition="end"
        />
      </Tabs>
    </Stack>
  );
};

export const MainTab: Story = {
  name: "Main Tab",
  render: () => <MainTabStory />,
};

/* ─── Subtab ─── */
const SubtabStory = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  return (
    <Tabs value={value} onChange={(_, v) => setValue(v)} type="subTab">
      <Tab
        label="Tab"
        icon={
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.vars.baseTextWeak }}
          >
            10
          </Typography>
        }
        iconPosition="end"
      />
      <Tab
        label="Tab"
        icon={
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.vars.baseTextWeak }}
          >
            10
          </Typography>
        }
        iconPosition="end"
      />
      <Tab
        label="Tab"
        icon={
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.vars.baseTextWeak }}
          >
            10
          </Typography>
        }
        iconPosition="end"
      />
      <Tab
        label="Tab"
        icon={
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.vars.baseTextWeak }}
          >
            10
          </Typography>
        }
        iconPosition="end"
      />
      <Tab
        label="Tab"
        icon={
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.vars.baseTextWeak }}
          >
            10
          </Typography>
        }
        iconPosition="end"
      />
      <Tab
        label="Tab"
        icon={
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.vars.baseTextWeak }}
          >
            10
          </Typography>
        }
        iconPosition="end"
      />
    </Tabs>
  );
};

export const Subtab: Story = {
  name: "Subtab",
  render: () => <SubtabStory />,
};

/* ─── Toggle Tab ─── */
const ToggleTabStory = () => {
  const [value, setValue] = useState(0);
  return (
    <Tabs value={value} onChange={(_, v) => setValue(v)} type="toggleTab">
      <Tab label="Tab" />
      <Tab label="Tab" />
      <Tab label="Tab" />
      <Tab label="Tab" />
      <Tab label="Tab" />
      <Tab label="Tab" />
    </Tabs>
  );
};

export const ToggleTab: Story = {
  name: "Toggle Tab",
  render: () => <ToggleTabStory />,
};

/* ─── States ─── */
const StatesStory = () => {
  const [value, setValue] = useState(0);
  return (
    <Stack spacing={3}>
      <Tabs value={value} onChange={(_, v) => setValue(v)} type="main">
        <Tab label="Active" />
        <Tab label="Disabled" disabled />
        <Tab label="Loading" loading />
      </Tabs>
    </Stack>
  );
};

export const States: Story = {
  name: "States",
  render: () => <StatesStory />,
};

/* ─── With Icon ─── */
const WithIconStory = () => {
  const [value, setValue] = useState(0);
  return (
    <Tabs value={value} onChange={(_, v) => setValue(v)} type="main">
      <Tab icon={<ManageAccountsIcon />} aria-label="icon only" />
      <Tab icon={<ManageAccountsIcon />} iconPosition="start" label="Tab" />
      <Tab icon={<ManageAccountsIcon />} iconPosition="end" label="Tab" />
    </Tabs>
  );
};

export const WithIcon: Story = {
  name: "With Icon",
  render: () => <WithIconStory />,
};

/* ─── Tabs with Subtabs ─── */
const TabsWithSubtabsStory = () => {
  const [mainVal, setMainVal] = useState(0);
  const [subVal, setSubVal] = useState(0);
  return (
    <Stack>
      <Tabs value={mainVal} onChange={(_, v) => setMainVal(v)} type="main">
        {["Tab", "Tab", "Tab", "Tab", "Tab", "Tab"].map((t, i) => (
          <Tab key={i} label={t} />
        ))}
      </Tabs>
      <Box
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.palette.vars.controlBorderStrong}`,
        })}
      >
        <Tabs value={subVal} onChange={(_, v) => setSubVal(v)} type="subTab">
          {["Tab", "Tab", "Tab", "Tab", "Tab", "Tab"].map((t, i) => (
            <Tab key={i} label={t} />
          ))}
        </Tabs>
      </Box>
    </Stack>
  );
};

export const TabsWithSubtabs: Story = {
  name: "Tabs with Subtabs",
  render: () => <TabsWithSubtabsStory />,
};

/* ─── Vertical ─── */
const VerticalStory = () => {
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ display: "flex", height: 200 }}>
      <Tabs
        value={value}
        onChange={(_, v) => setValue(v)}
        orientation="vertical"
        type="main"
      >
        <Tab label="Tab" />
        <Tab label="Tab" />
        <Tab label="Tab" />
      </Tabs>
    </Box>
  );
};

export const Vertical: Story = {
  name: "Vertical",
  render: () => <VerticalStory />,
};
