import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button, Stack, Typography, useTheme } from "@mui/material";
import { Severity } from "@/common";
import { BrowserRouter } from "react-router-dom";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import { DrawerShell, DrawerShellProps } from "../components/drawer-shell";

const meta: Meta<typeof DrawerShell> = {
  title: "DEV/DrawerShell",
  component: DrawerShell,
  tags: ["autodocs"],
  argTypes: {
    titleText: {
      description: "The title of the drawer.",
    },
    titleNode: {
      description:
        "The react node title of the drawer, for more complex usecases.",
    },
    isLoading: {
      description: "Shows loading state if true.",
    },
    isError: {
      description: "Shows error state if true.",
    },
    open: {
      description: "If true, the drawer is open. If false, it is closed.",
    },
    titleAction: {
      description:
        "The icon displayed beside the title. Default is 'OpenInNewTab' icon.",
    },
    severity: {
      description:
        "The severity level of the drawer - if set, shows a severity bar in the title.",
    },
    copyURL: {
      description: "The URL to be copied when the copy link button is clicked.",
    },
    pageName: {
      description: "The name of the page to show in the 'Go to page' button.",
    },
    disablePrev: {
      description: "If true, the previous button is disabled.",
    },
    disableNext: {
      description: "If true, the next button is disabled.",
    },
    hidePrev: {
      description: "If true, the previous button is hidden.",
    },
    hideNext: {
      description: "If true, the next button is hidden.",
    },
    hideFooter: {
      description: "If true, the footer is hidden.",
    },
    hideGotoPage: {
      description: "If true, the go-to page button is hidden.",
    },
    hideTitleAction: {
      description: "If true, the title icon is hidden.",
    },
    hideFavorite: {
      description: "If true, the favorite button is hidden.",
    },
    hideActionButtons: {
      description: "If true, the entire action buttons row is hidden.",
    },
    actionButtons: {
      description: "An array of JSX elements to be used as action buttons.",
    },
    isFavorite: {
      description: "If true, the component is marked as a favorite.",
    },
    onPrev: {
      description: "Function to execute when the previous button is clicked.",
    },
    onNext: {
      description: "Function to execute when the next button is clicked.",
    },
    onClose: {
      description: "Function to execute when the close button is clicked.",
    },
    onFavorite: {
      description: "Function to execute when the favorite button is clicked.",
    },
    onGotoPage: {
      description: "Function to execute when the go to page button is clicked.",
    },
    onTitleAction: {
      description: "Function to execute when the title icon is clicked.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DrawerShell>;

const shortContent = (
  <>
    <Typography variant="h4">Lorem ipsum dolor sit amet.</Typography>
    <Typography variant="body2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit in dolorum
      natus! Asperiores quasi reiciendis possimus dolorum soluta? Iste dolorem
      sequi praesentium dolor eos et consectetur autem minus, distinctio
      recusandae neque? Impedit quam quae nesciunt, facere pariatur nisi a ipsa
      neque iste rem, tempore alias. Facilis quisquam ullam officiis iusto.
    </Typography>
  </>
);

const longContent = [];

for (let i = 0; i < 20; i++) {
  longContent.push(shortContent);
}

const exampleActionButtons = [
  <Button key="dismiss" variant="secondary" onClick={() => alert("Dismissed!")}>
    Dismiss
  </Button>,
  <Button
    key="create-jira-ticket"
    variant="secondary"
    onClick={() => alert("Created!")}
  >
    Create Jira Ticket
  </Button>,
];

const DrawerComponent = ({ children, ...props }: DrawerShellProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Button onClick={() => setInternalIsOpen(true)}>Open Drawer</Button>
        <DrawerShell
          {...props}
          open={internalIsOpen}
          isFavorite={isFavorite}
          onClose={() => setInternalIsOpen(false)}
          onFavorite={() => setIsFavorite((currentValue) => !currentValue)}
          onPrev={() => alert("Prev!")}
          onNext={() => alert("Next!")}
          onGotoPage={() => alert("Going to page!")}
          onTitleAction={() => alert("Title icon!")}
          copyURL={"https://www.google.com"}
        >
          {children}
        </DrawerShell>
      </BrowserRouter>
    </>
  );
};

export const SimpleDrawer: Story = {
  render: DrawerComponent,
  args: {
    children: shortContent,
    titleText: "Simple Drawer",
    severity: Severity.INFORMATION,
    isLoading: false,
    actionButtons: exampleActionButtons,
    pageName: "finding",
  },
};

export const ScrollableDrawer: Story = {
  render: DrawerComponent,
  args: {
    children: longContent,
    titleText: "Scrollable Drawer",
    isLoading: false,
    pageName: "issue",
  },
};

export const DrawerWithoutIcon: Story = {
  render: DrawerComponent,
  args: {
    children: longContent,
    titleText: "Drawer without icon in title",
    hideTitleAction: true,
    isLoading: false,
    pageName: "issue",
  },
};

export const DrawerWithoutFooter: Story = {
  render: DrawerComponent,
  args: {
    children: longContent,
    titleText: "Drawer without footer",
    hideFooter: true,
    isLoading: false,
    pageName: "issue",
  },
};

const DrawerTitle = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} gap={"4px"}>
      <SmartToyOutlinedIcon sx={{ color: theme.palette.vars.accentGDefault }} />
      <Stack direction={"column"}>
        <Typography
          variant={"body1Semibold"}
          sx={{ color: theme.palette.vars.controlIconStrong }}
        >
          Assistant
        </Typography>
        <Typography
          variant={"body1"}
          sx={{ color: theme.palette.vars.controlIconStrong }}
        >
          Task
        </Typography>
      </Stack>
    </Stack>
  );
};

export const ComplexTitleDrawer: Story = {
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
