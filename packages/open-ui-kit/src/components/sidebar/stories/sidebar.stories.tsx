import type { Meta, StoryObj } from "@storybook/react";
import {
  Box,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { action } from "@storybook/addon-actions";
import { SidebarItem } from "../types/sidebar.types";
import { Sidebar } from "../components/sidebar";
import React from "react";
import { Icons } from "@/index";

const SideBarItemSample = (props: SidebarItem) => {
  const [open, setIsOpen] = React.useState(false);
  const handleClick = () => {
    setIsOpen(!open);
  };
  return (
    <ListItem
      onClick={handleClick}
      sx={{
        backgroundColor: !open ? "transparent" : "#E8F1FF",
        border: "1px solid #D5DFF7",
        borderRadius: "8px",
        padding: "5px",
        width: open ? (props.iconOnly ? "210%" : "120%") : "100%",
      }}
    >
      <Stack direction="row" width="100%" alignItems="center">
        <ListItemIcon>{<Icons.KubernetesIcon />}</ListItemIcon>
        <ListItemText
          primary={
            <Typography
              letterSpacing={0.24}
              fontSize="14px"
              sx={{ overflowX: "hidden", textOverflow: "ellipsis" }}
            >
              A custom item
            </Typography>
          }
          sx={{
            minWidth: "2px",
            visibility: props.iconOnly ? "hidden" : "visible",
          }}
        />

        <Icons.KeyboardArrowRight
          sx={{
            visibility: props.iconOnly || open ? "hidden" : "visible",
          }}
        />
      </Stack>
    </ListItem>
  );
};
// We define our items here to reuse in stories.
const sampleSidebarItems: Array<SidebarItem | React.ReactElement> = [
  {
    id: "dashboard",
    tooltip: "Dashboard",
    icon: <Icons.Dashboard1 />,
    onClick: action("Dashboard clicked!"),
    "aria-label": "Go to Dashboard",
  },
  {
    id: "projects",
    tooltip: "Projects",
    icon: <Icons.GCPServicesProject />,
    href: "/projects",
    "aria-label": "View Projects",
  },
  {
    id: "documentation",
    tooltip: "Documentation",
    icon: <Icons.Folder />,
    href: "https://mui.com",
    target: "_blank", // Test external link
    "aria-label": "Open Documentation in new tab",
  },
  {
    id: "settings",
    tooltip: "Settings",
    icon: <Icons.Settings />,
    onClick: action("Settings clicked!"),
    "aria-label": "Open Settings",
  },
];

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar (Data-Driven)",
  component: Sidebar,

  parameters: {
    layout: "fullscreen",

    docs: {
      description: {
        component: `
A responsive and configurable Sidebar component for application layouts.
You can define the icons, title and links for each navbar item

### Import

You can import the component as follows:
\`\`\`tsx
import { Sidebar } from '@open-ui-kit/core';
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    navigationItems: {
      description: "Array of items to display in the sidebar.",
    },
    drawerWidth: {
      control: "text",
      description: "The width of the sidebar when it is open.",
    },
    initialOpen: {
      control: "boolean",
      description: "Sets the initial state of the sidebar.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story = {
  render: (args) => (
    <Box sx={{ display: "flex", minHeight: 400 }}>
      <Sidebar {...args} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Main Content Area</h1>
        <p>Interact with the sidebar items.</p>
        <p>
          Check the {"Actions"} tab in the Storybook panel to see onClick
          events.
        </p>
      </Box>
    </Box>
  ),
};

// Story for the default open state
export const OpenWithItems: Story = {
  ...Template,
  args: {
    navigationItems: sampleSidebarItems,
    initialOpen: true,
  },
};

// Story for the default closed state, highlighting the icons and tooltips
export const ClosedWithItems: Story = {
  ...Template,
  name: "Closed With Icons and Tooltips",
  args: {
    navigationItems: [
      ...sampleSidebarItems,
      <SideBarItemSample id="test-id" key="test-key" aria-label="test-aria" />,
    ],
    initialOpen: false,
  },
};

// Story showing an empty state
export const Empty: Story = {
  ...Template,
  name: "Empty State",
  args: {
    navigationItems: [], // Pass an empty array
    initialOpen: true,
  },
};
