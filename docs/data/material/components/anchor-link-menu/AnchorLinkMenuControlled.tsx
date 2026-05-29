import * as React from "react";
import {
  AnchorLinkMenu,
  type AnchorLinkMenuItem,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

const items: AnchorLinkMenuItem[] = [
  { id: "details", label: "Details" },
  { id: "members", label: "Members" },
  { id: "notifications", label: "Notifications" },
];

const labels: Record<string, string> = {
  details: "Workspace details",
  members: "Members and access",
  notifications: "Notifications",
};

export default function AnchorLinkMenuControlled() {
  const [selectedId, setSelectedId] = React.useState("details");

  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
        <Stack sx={{ width: 240 }}>
          <AnchorLinkMenu
            items={items}
            selectedId={selectedId}
            title="Settings"
            variant="floating"
            onSelect={setSelectedId}
          />
        </Stack>
        <Stack spacing={1.5} sx={{ maxWidth: 420 }}>
          <Typography variant="h6">{labels[selectedId]}</Typography>
          <Typography>
            Selecting a row updates local state. In a real page, the same state
            can come from scroll tracking, route hashes, or a parent layout.
          </Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
