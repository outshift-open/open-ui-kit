import { BrowserRouter } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import { Stack } from "@mui/material";
import { MenuItem } from "../components/menu-item";
import { DocsHeader } from "storybook/components/docs-header.stories-src";

/**
 *  ### Link represent custom component with link and optional icon.
 */
const meta: Meta<typeof MenuItem> = {
  title: "Components/Menu/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <DocsHeader
          blurb="MenuItem is a component that can be used to create menu items, either as simple text or as links with optional icons."
          guideLink="#"
          importLine="import { MenuItem } from '@open-ui-kit/core';"
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof MenuItem>;

export const Example: Story = {
  render: () => (
    <BrowserRouter>
      <Stack spacing={2}>
        <MenuItem>Simple menu item</MenuItem>
        <MenuItem href="https://google.com">Link menu item</MenuItem>
        <MenuItem href="https://google.com" disabled>
          Disabled link menu item
        </MenuItem>
        <MenuItem href="https://google.com" openInNewTab>
          Link menu item: open in new window
        </MenuItem>
      </Stack>
    </BrowserRouter>
  ),
};
