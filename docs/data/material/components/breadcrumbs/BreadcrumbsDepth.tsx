import * as React from "react";
import NoSsr from "@mui/material/NoSsr";
import { MemoryRouter } from "react-router-dom";
import {
  Breadcrumbs,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

const levels = [
  [{ text: "Workspaces", link: "/workspaces" }],
  [
    { text: "Workspaces", link: "/workspaces" },
    { text: "Platform", link: "/workspaces/platform" },
  ],
  [
    { text: "Workspaces", link: "/workspaces" },
    { text: "Platform", link: "/workspaces/platform" },
    { text: "Members", link: "/workspaces/platform/members" },
  ],
  [
    { text: "Workspaces", link: "/workspaces" },
    { text: "Platform", link: "/workspaces/platform" },
    { text: "Members", link: "/workspaces/platform/members" },
    { text: "Invite review", link: "/workspaces/platform/members/invite" },
  ],
];

export default function BreadcrumbsDepth() {
  return (
    <ThemeProvider>
      <NoSsr>
        <MemoryRouter>
          <Stack spacing={1.5}>
            {levels.map((items) => (
              <Breadcrumbs key={items.length} items={items} />
            ))}
          </Stack>
        </MemoryRouter>
      </NoSsr>
    </ThemeProvider>
  );
}
