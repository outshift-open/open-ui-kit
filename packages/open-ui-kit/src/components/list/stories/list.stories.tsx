/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "../";
import { Divider } from "@/components/divider";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
  tags: ["autodocs"],
  parameters: {
    actions: { argTypesRegex: null },
    docs: {
      page: () => (
        <DocsHeader
          blurb="List displays a vertical sequence of items. Items support icons, secondary text, selection, hover, focus, disabled, and dense states — all styled via theme tokens."
          guideLink=""
          importLine='import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Basic: Story = {
  render: () => (
    <List sx={{ maxWidth: 360 }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </List>
  ),
};

const WithSelectedList = () => {
  const [selected, setSelected] = useState(0);
  return (
    <List sx={{ maxWidth: 360 }}>
      {["Inbox", "Drafts", "Trash"].map((label, i) => (
        <ListItem key={label} disablePadding>
          <ListItemButton
            selected={selected === i}
            onClick={() => setSelected(i)}
          >
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export const WithSelected: Story = {
  render: () => <WithSelectedList />,
};

export const WithSubheader: Story = {
  render: () => (
    <List
      sx={{ maxWidth: 360 }}
      subheader={<ListSubheader>Mailbox</ListSubheader>}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Inbox" secondary="3 unread" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
    </List>
  ),
};

export const Dense: Story = {
  render: () => (
    <List dense sx={{ maxWidth: 360 }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Dense item 1" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Dense item 2" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Dense item 3" />
        </ListItemButton>
      </ListItem>
    </List>
  ),
};

export const WithDivider: Story = {
  render: () => (
    <List sx={{ maxWidth: 360 }}>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Inbox" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton disabled>
          <ListItemText primary="Disabled item" />
        </ListItemButton>
      </ListItem>
    </List>
  ),
};
