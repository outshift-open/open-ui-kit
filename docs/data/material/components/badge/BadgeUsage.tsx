import * as React from "react";
import MailIcon from "@mui/icons-material/Mail";
import {
  Badge,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function BadgeUsage() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={3} alignItems="center">
        <Badge type="success" content="Active" />
        <Badge type="warning" content="Review" />
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Badge
            type="info"
            content={<MailIcon aria-label="Inbox" />}
            notificationContent={8}
          />
          <Typography variant="body2">Unread messages</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
