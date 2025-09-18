import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuProps,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { MenuItem } from "../components/menu-item";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 * ### A menu displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control.
 */
const meta: Meta<typeof Menu> = {
  title: "Components/Menu/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="Menu is a component that displays a list of choices on a temporary surface. It appears when the user interacts with a button or other control."
          guideLink="#"
          importLine="import { Menu } from '@open-ui-kit/core';"
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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button id="basic-button" onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {args.children}
      </Menu>
    </>
  );
};

export const Example: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => (
      <MenuItem key={x} selected={x === 2}>
        Menu Item {x}
      </MenuItem>
    )),
  },
};

export const MenuWithIcons: Story = {
  render: MenuStory,
  args: {
    children: [1, 2, 3].map((x) => (
      <MenuItem key={x} selected={x === 2}>
        <ListItemIcon>
          <Star fontSize="small" />
        </ListItemIcon>
        <ListItemText>Item with icon</ListItemText>
      </MenuItem>
    )),
  },
};

export const MenuWithDivider: Story = {
  render: MenuStory,
  args: {
    children: [
      <MenuItem key={"1"}>Menu Item 1</MenuItem>,
      <MenuItem selected key={"2"}>
        Menu Item 2
      </MenuItem>,
      <Divider key={"divider"} />,
      <MenuItem key={"3"}>Menu Item 3</MenuItem>,
    ],
  },
};
