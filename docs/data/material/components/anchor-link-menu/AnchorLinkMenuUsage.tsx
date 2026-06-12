import * as React from "react";
import {
  AnchorLinkMenu,
  type AnchorLinkMenuItem,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

const items: AnchorLinkMenuItem[] = [
  { id: "overview", label: "Overview" },
  { id: "setup", label: "Setup" },
  { id: "permissions", label: "Permissions" },
  { id: "notifications", label: "Notifications" },
];

export default function AnchorLinkMenuUsage() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
        <Stack sx={{ width: 220 }}>
          <AnchorLinkMenu
            items={items}
            selectedId="setup"
            title="On this page"
          />
        </Stack>
        <Stack spacing={1.5} sx={{ maxWidth: 420 }}>
          <Typography variant="h6">Setup</Typography>
          <Typography>
            Connect the required services, choose the defaults for this
            workspace, and review the options before moving to permissions.
          </Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
