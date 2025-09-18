import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Avatar, Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { Book, BugReport, ExpandMore, ExpandLess } from "@mui/icons-material";
import { DocsHeader } from "storybook/components/docs-header.stories-src";
import Header from "../components/header";

// Mock Logo and User Section components remain the same...
const StoryLogo = () => (
  <svg height="32" viewBox="0 0 100 100" width="32">
    <circle cx="50" cy="50" r="45" fill="#007BFF" />
    <circle cx="50" cy="50" r="25" fill="#FFFFFF" />
  </svg>
);

const StoryUserSection = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button
        onClick={handleClick}
        startIcon={
          <Avatar
            sx={{
              width: "20px",
              height: "20px",
              paddingTop: "-20px",
              "&:hover": { backgroundColor: "inherit" },
            }}
          ></Avatar>
        }
        variant="tertariary"
        sx={{
          textAlign: "left",
          paddingLeft: "4px",
          "&.MuiButton-tertariary": {
            "&:focus": {
              border: "none !important",
            },
          },
        }}
        endIcon={
          open ? (
            <ExpandLess width={16} height={16} sx={{ marginBottom: "20px" }} />
          ) : (
            <ExpandMore width={16} height={16} sx={{ marginBottom: "20px" }} />
          )
        }
        disableRipple
        disableFocusRipple
        focusRipple={false}
      >
        <div>
          <Typography
            variant="subtitle2"
            sx={(theme) => ({ color: theme.palette.vars.baseTextStrong })}
          >
            Username
          </Typography>
          <Typography
            variant="caption"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextDefault,
              marginTop: "-4px",
            })}
          >
            ROLE
          </Typography>
        </div>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ mt: 1 }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A responsive and configurable Header component for application layouts.
It includes slots for a logo, title, search, actions, and user profile.

### Import

You can import the component as follows:
\`\`\`tsx
import { Header } from '@open-ui-kit/core';
\`\`\`
        `,
      },
      page: () => (
        <DocsHeader
          blurb="Header is a responsive and configurable component for application layouts. It includes slots for a logo, title, search, actions, and user profile. The Header component adapts to different screen sizes and provides a consistent navigation experience."
          guideLink=""
          importLine='import { Header } from "@open-ui-kit/core";'
        />
      ),
    },
  },
  argTypes: {
    position: {
      control: "select",
      options: ["fixed", "absolute", "sticky", "static", "relative"],
    },
    elevation: {
      control: { type: "range", min: 0, max: 24, step: 1 },
    },
    logo: { control: { disable: true } },
    userSection: { control: { disable: true } },
    searchProps: { control: { type: "object" } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const HeaderTemplate: Story["render"] = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchValue, setSearchValue] = useState(args.searchProps?.value ?? "");

  const searchProps = args.searchProps
    ? {
        ...args.searchProps,
        onChangeCallback: (value: string) => {
          setSearchValue(value);
        },
      }
    : undefined;

  return (
    <Box minHeight={80}>
      <Header {...args} searchProps={searchProps} />
    </Box>
  );
};

export const Default: Story = {
  args: {
    logo: <StoryLogo />,
    title: (
      <Typography
        variant="h1"
        fontWeight={700}
        fontSize="18px"
        lineHeight="18px"
        sx={(theme) => ({ color: theme.palette.vars.brandTextSecondary })}
      >
        My Application
      </Typography>
    ),
    position: "fixed",
    searchProps: {
      onChangeCallback: (value: string) => {
        console.log("Search value changed:", value);
      },
      placeholder: "Search",
    },
    actions: [
      {
        id: "docs",
        icon: <Book />,
        tooltip: "View Documentation",
        href: "#",
        "aria-label": "documentation",
      },
      {
        id: "issues",
        icon: <BugReport />,
        tooltip: "Report an Issue",
        onClick: () => alert("Issue reporting coming soon!"),
        "aria-label": "report an issue",
      },
    ],
    userSection: <StoryUserSection />,
  },
  render: HeaderTemplate,
};

export const Minimal: Story = {
  args: {
    logo: <StoryLogo />,
    title: "Minimal Header",
    position: "static",
  },
};

export const ScrollingBehavior: Story = {
  args: {
    ...Default.args,
    position: "fixed",
  },
  decorators: [
    (Story) => (
      <Box overflow="hidden">
        <Story />
      </Box>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "This story includes a tall container to demonstrate the scrolling behavior of the header when `position` is set to `sticky` or `fixed`.",
      },
    },
  },
  render: (args) => (
    <Box maxHeight={300} overflow="auto">
      <HeaderTemplate {...args} />
      <Box sx={{ padding: 4, paddingTop: 12 }}>
        <Typography variant="h4">Scroll Down to See the Effect</Typography>
        <Typography height="200vh">
          {`The Header component above is set to position: ${args.position}. When
          you scroll this container, the header should remain "stuck" at the top
          of the view. This demonstrates how the header behaves on a long page.`}
        </Typography>
      </Box>
    </Box>
  ),
};
