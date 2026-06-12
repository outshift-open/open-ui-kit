import * as React from "react";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Badge, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function BadgeNotification() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={4} alignItems="center">
        <Badge
          type="info"
          content={<MailIcon aria-label="Inbox" />}
          notificationContent={3}
        />
        <Badge
          type="warning"
          content={<NotificationsIcon aria-label="Alerts" />}
          notificationContent={7}
        />
        <Badge
          type="success"
          content={<TaskAltIcon aria-label="Completed tasks" />}
          notificationContent={12}
        />
      </Stack>
    </ThemeProvider>
  );
}
