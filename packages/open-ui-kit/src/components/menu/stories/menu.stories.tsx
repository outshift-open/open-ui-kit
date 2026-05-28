import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  ListItemIcon,
  ListItemText,
  Menu,
  MenuProps,
  ListSubheader,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { MenuItem } from "../components/menu-item";
import { Button } from "@/components/button";
import { Divider } from "@mui/material";
import { DocsHeader } from "storybook/components/docs-header.stories";

const meta: Meta<typeof Menu> = {
  title: "Components/Menu/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Menu is a component that displays a list of choices on a temporary surface. It appears when the user interacts with a button or other control."
          guideLink=""
          importLine={`import { Menu, MenuItem } from "@open-ui-kit/core";`}
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

const MenuStory = (args: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  return (
    <>
      <Button
        variant="primary"
        id="basic-button"
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {args.children}
      </Menu>
    </>
  );
};

export const Default: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => <MenuItem key={x}>Menu Item {x}</MenuItem>),
  },
};

export const WithSelected: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => (
      <MenuItem key={x} selected={x === 2}>
        Menu Item {x}
      </MenuItem>
    )),
  },
};

export const WithIcons: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => (
      <MenuItem key={x}>
        <ListItemIcon>
          <Star fontSize="small" />
        </ListItemIcon>
        <ListItemText>Item with icon</ListItemText>
      </MenuItem>
    )),
  },
};

export const WithDivider: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key="1">Menu Item 1</MenuItem>,
      <MenuItem key="2" selected>
        Menu Item 2
      </MenuItem>,
      <Divider key="divider" />,
      <MenuItem key="3">Menu Item 3</MenuItem>,
    ],
  },
};

export const WithDisabled: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key="1">Menu Item 1</MenuItem>,
      <MenuItem key="2" disabled>
        Menu Item 2 (disabled)
      </MenuItem>,
      <MenuItem key="3">Menu Item 3</MenuItem>,
    ],
  },
};

export const Destructive: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key="1">Menu Item 1</MenuItem>,
      <MenuItem key="2" className="MuiMenuItem-destructive">
        Delete
      </MenuItem>,
    ],
  },
};

export const SizeMedium: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => (
      <MenuItem key={x} size={"medium" as never}>
        Menu Item {x}
      </MenuItem>
    )),
  },
};

export const SizeSmall: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => (
      <MenuItem key={x} size={"small" as never}>
        Menu Item {x}
      </MenuItem>
    )),
  },
};

export const WithCategories: Story = {
  render: MenuStory,
  args: {
    children: [
      <ListSubheader key="cat1">Category 1</ListSubheader>,
      <MenuItem key="1">Menu Item 1</MenuItem>,
      <MenuItem key="2">Menu Item 2</MenuItem>,
      <ListSubheader key="cat2">Category 2</ListSubheader>,
      <MenuItem key="3">Menu Item 3</MenuItem>,
      <MenuItem key="4">Menu Item 4</MenuItem>,
    ],
  },
};
