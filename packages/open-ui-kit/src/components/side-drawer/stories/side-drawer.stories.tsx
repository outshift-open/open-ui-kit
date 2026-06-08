/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Stack, Typography } from "@/components";
import { useTheme } from "@/theme-provider/theme-provider";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { Severity } from "@/common";
import { Button } from "@/components/button";
import { BrowserRouter } from "react-router-dom";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { SideDrawer } from "../components/side-drawer";
import type { SideDrawerProps } from "../types";

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
          includeStories
        />
      ),
    },
  },
  argTypes: {
    severity: {
      control: "select",
      options: Object.values(Severity),
    },
    isLoading: { control: "boolean" },
    isError: { control: "boolean" },
    hideFooter: { control: "boolean" },
    hideFavorite: { control: "boolean" },
    hideCopyBtn: { control: "boolean" },
    hideTitleAction: { control: "boolean" },
    hidePrev: { control: "boolean" },
    hideNext: { control: "boolean" },
  },
  args: {
    titleText: "Drawer title H5",
    severity: Severity.CRITICAL,
    pageName: "finding",
    isLoading: false,
    isError: false,
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

const exampleActionButtons: SideDrawerProps["actionButtons"] = [
  <Button key="dismiss" variant="secondary" size="medium" onClick={noop}>
    button-link
  </Button>,
  <Button key="create" variant="secondary" size="medium" onClick={noop}>
    button-link
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
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: shortContent,
    actionButtons: exampleActionButtons,
  },
};

export const Scrollable: Story = {
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: longContent,
    titleText: "Scrollable Drawer",
  },
};

export const WithoutFooter: Story = {
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: shortContent,
    titleText: "No Footer",
    hideFooter: true,
  },
};

export const WithoutTitleAction: Story = {
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: shortContent,
    titleText: "No Title Icon",
    hideTitleAction: true,
  },
};

export const LoadingState: Story = {
  name: "Loading",
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: shortContent,
    titleText: "Loading Drawer",
    isLoading: true,
  },
};

export const ErrorState: Story = {
  name: "Error",
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: shortContent,
    titleText: "Error Drawer",
    isError: true,
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
  render: (args) => <DrawerComponent {...args} />,
  args: {
    children: shortContent,
    titleNode: <DrawerTitle />,
    actionButtons: exampleActionButtons,
    hideTitleAction: true,
    customDividerStyle: { display: "none" },
  },
};
