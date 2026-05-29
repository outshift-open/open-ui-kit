import * as React from "react";
import NoSsr from "@mui/material/NoSsr";
import GridViewIcon from "@mui/icons-material/GridView";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { MemoryRouter } from "react-router-dom";
import {
  Breadcrumbs,
  IconPosition,
  ThemeProvider,
} from "@open-ui-kit/core";

const items = [
  {
    text: "Dashboard",
    link: "/dashboard",
    Icon: GridViewIcon,
  },
  {
    text: "Projects",
    link: "/dashboard/projects",
    Icon: FolderOutlinedIcon,
  },
  {
    text: "Settings",
    link: "/dashboard/projects/settings",
    Icon: SettingsOutlinedIcon,
  },
];

export default function BreadcrumbsWithIcons() {
  return (
    <ThemeProvider>
      <NoSsr>
        <MemoryRouter>
          <Breadcrumbs items={items} iconPosition={IconPosition.LeftIcon} />
        </MemoryRouter>
      </NoSsr>
    </ThemeProvider>
  );
}
