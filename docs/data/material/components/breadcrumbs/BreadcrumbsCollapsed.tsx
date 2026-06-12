import * as React from "react";
import NoSsr from "@mui/material/NoSsr";
import { MemoryRouter } from "react-router-dom";
import { Breadcrumbs, ThemeProvider } from "@open-ui-kit/core";

const items = [
  { text: "Organization", link: "/organization" },
  { text: "Workspaces", link: "/organization/workspaces" },
  { text: "Platform", link: "/organization/workspaces/platform" },
  { text: "Members", link: "/organization/workspaces/platform/members" },
  {
    text: "Invite review",
    link: "/organization/workspaces/platform/members/invite",
  },
];

export default function BreadcrumbsCollapsed() {
  return (
    <ThemeProvider>
      <NoSsr>
        <MemoryRouter>
          <Breadcrumbs items={items} maximumNumberOfVisibleBreadcrumbs={2} />
        </MemoryRouter>
      </NoSsr>
    </ThemeProvider>
  );
}
