import * as React from "react";
import NoSsr from "@mui/material/NoSsr";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumbs, ThemeProvider } from "@open-ui-kit/core";

const items = [
  { text: "Workspaces", link: "/workspaces" },
  { text: "Platform", link: "/workspaces/platform" },
  { text: "Access settings", link: "/workspaces/platform/access" },
];

export default function BreadcrumbsUsage() {
  return (
    <ThemeProvider>
      <NoSsr>
        <MemoryRouter>
          <Breadcrumbs items={items} />
        </MemoryRouter>
      </NoSsr>
    </ThemeProvider>
  );
}
