/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { Severity } from "@/common";
import { Button } from "@/components/button";
import { BrowserRouter } from "react-router-dom";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SideDrawer, SideDrawerProps } from "../components/side-drawer";

const meta: Meta<typeof SideDrawer> = {
  title: "Components/SideDrawer",
  component: SideDrawer,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="SideDrawer is a right-anchored side drawer with a header (title, severity bar, navigation, actions), scrollable content area, and optional footer."
          guideLink=""
          importLine='import { SideDrawer } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof SideDrawer>;

const shortContent = (
  <>
    <Typography variant="h4">Lorem ipsum dolor sit amet.</Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit in dolorum
      natus! Asperiores quasi reiciendis possimus dolorum soluta?
    </Typography>
  </>
);

const longContent = Array.from({ length: 20 }, (_, i) => (
  <div key={i}>{shortContent}</div>
));

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

const exampleActionButtons = [
  <Button key="dismiss" variant="secondary" size="small" onClick={noop}>
    Dismiss
  </Button>,
  <Button key="create" variant="secondary" size="small" onClick={noop}>
    Create Jira Ticket
  </Button>,
];

const DrawerComponent = ({ children, ...props }: SideDrawerProps) => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <BrowserRouter>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <SideDrawer
        {...props}
        open={open}
        isFavorite={isFavorite}
        onClose={() => setOpen(false)}
        onFavorite={() => setIsFavorite((v) => !v)}
        onPrev={noop}
        onNext={noop}
        onGotoPage={noop}
        onTitleAction={noop}
        copyURL="https://www.example.com"
      >
        {children}
      </SideDrawer>
    </BrowserRouter>
  );
};

export const Default: Story = {
  name: "Default",
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleText: "Drawer Title",
    severity: Severity.INFORMATION,
    isLoading: false,
    actionButtons: exampleActionButtons,
    pageName: "finding",
  },
};

export const Scrollable: Story = {
  name: "Scrollable Content",
  render: DrawerComponent,
  args: {
    children: longContent,
    titleText: "Scrollable Drawer",
    isLoading: false,
    pageName: "issue",
  },
};

export const WithoutFooter: Story = {
  name: "Without Footer",
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleText: "No Footer",
    hideFooter: true,
    isLoading: false,
    pageName: "issue",
  },
};

export const WithoutTitleAction: Story = {
  name: "Without Title Action",
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleText: "No Title Icon",
    hideTitleAction: true,
    isLoading: false,
    pageName: "issue",
  },
};

export const LoadingState: Story = {
  name: "Loading",
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleText: "Loading Drawer",
    isLoading: true,
    pageName: "finding",
  },
};

export const ErrorState: Story = {
  name: "Error",
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleText: "Error Drawer",
    isError: true,
    pageName: "finding",
  },
};

const DrawerTitle = () => {
  const theme = useTheme();
  return (
    <Stack direction="row" gap="4px">
      <SmartToyOutlinedIcon sx={{ color: theme.palette.vars.accentGDefault }} />
      <Stack direction="column">
        <Typography
          variant="body1Semibold"
          sx={{ color: theme.palette.vars.controlIconStrong }}
        >
          Assistant
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.vars.controlIconStrong }}
        >
          Task
        </Typography>
      </Stack>
    </Stack>
  );
};

export const ComplexTitle: Story = {
  name: "Complex Title Node",
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleNode: <DrawerTitle />,
    isLoading: false,
    actionButtons: exampleActionButtons,
    pageName: "finding",
    hideTitleAction: true,
    customDividerStyle: { display: "none" },
  },
};
