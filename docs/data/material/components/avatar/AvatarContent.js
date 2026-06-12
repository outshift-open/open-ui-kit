import * as React from "react";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function AvatarContent() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
        <Stack spacing={1.5} alignItems="center">
          <Avatar src="/static/logo.png" alt="Design system" />
          <Typography variant="body2Semibold">Image</Typography>
        </Stack>
        <Stack spacing={1.5} alignItems="center">
          <Avatar initials="RS" />
          <Typography variant="body2Semibold">Initials</Typography>
        </Stack>
        <Stack spacing={1.5} alignItems="center">
          <Avatar icon={<PersonIcon />} />
          <Typography variant="body2Semibold">Person icon</Typography>
        </Stack>
        <Stack spacing={1.5} alignItems="center">
          <Avatar icon={<GroupsIcon />} />
          <Typography variant="body2Semibold">Team icon</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
