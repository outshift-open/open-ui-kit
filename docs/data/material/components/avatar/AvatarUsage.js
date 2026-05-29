import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function AvatarUsage() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar src="/static/logo.png" alt="Open UI Kit" />
        <Stack spacing={0.25}>
          <Typography variant="body2Semibold">Open UI Kit Core</Typography>
          <Typography variant="body2">Component library</Typography>
        </Stack>
        <Avatar initials="OU" />
        <Avatar icon={<PersonIcon />} />
      </Stack>
    </ThemeProvider>
  );
}
