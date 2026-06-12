/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Icon } from "@/components/icon";
import { DocsHeader } from "storybook/components/docs-header.stories";
import { Menu, MenuItem, MenuSubheader, type MenuProps } from "..";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu/Menu",
  component: Menu,
  args: {
    width: 180,
  },
  argTypes: {
    anchorEl: {
      table: { disable: true },
    },
    children: {
      table: { disable: true },
    },
    onClose: {
      table: { disable: true },
    },
    open: {
      table: { disable: true },
    },
    width: {
      control: "number",
      description: "Optional menu paper width.",
    },
  },
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          title="Menu"
          blurb="Menu is a component that displays a list of choices on a temporary surface. It appears when the user interacts with a button or other control."
          guideLink=""
          importLine={`import { Menu, MenuItem } from "@open-ui-kit/core";`}
          includeStories
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const MenuStory = ({ children, width, ...args }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant="primary"
        id="basic-button"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        Open Menu
      </Button>
      <Menu
        {...args}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        width={width}
      >
        {children}
      </Menu>
    </>
  );
};

export const Default: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((item) => (
      <MenuItem key={item}>Menu item {item}</MenuItem>
    )),
  },
};

export const Selected: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((item) => (
      <MenuItem key={item} selected={item === 2}>
        Menu item {item}
      </MenuItem>
    )),
  },
};

export const Disabled: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key="view">View details</MenuItem>,
      <MenuItem key="disabled" disabled>
        Disabled item
      </MenuItem>,
      <MenuItem key="settings">Settings</MenuItem>,
    ],
  },
};

export const WithIcon: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key="favorite">
        <Icon fontSize="small">star</Icon>
        Favorite
      </MenuItem>,
      <MenuItem key="archive">
        <Icon fontSize="small">archive</Icon>
        Archive
      </MenuItem>,
      <MenuItem key="settings">
        <Icon fontSize="small">settings</Icon>
        Settings
      </MenuItem>,
    ],
  },
};

export const WithDivider: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key="profile">Profile</MenuItem>,
      <MenuItem key="billing">Billing</MenuItem>,
      <Divider key="divider" />,
      <MenuItem key="logout" destructive>
        Sign out
      </MenuItem>,
    ],
  },
};

export const Sizes: Story = {
  render: MenuStory,
  args: {
    width: 160,
    children: [
      <MenuItem key="large" size="large">
        Large item
      </MenuItem>,
      <MenuItem key="medium" size="medium">
        Medium item
      </MenuItem>,
      <MenuItem key="small" size="small">
        Small item
      </MenuItem>,
    ],
  },
};

export const WithSubheaders: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuSubheader key="actions">Actions</MenuSubheader>,
      <MenuItem key="run">Run scan</MenuItem>,
      <MenuItem key="pause">Pause scan</MenuItem>,
      <MenuSubheader key="admin">Admin</MenuSubheader>,
      <MenuItem key="delete" destructive>
        Delete scan
      </MenuItem>,
    ],
  },
};
