import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function AvatarSizes() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={5}>
        <Stack spacing={1.5}>
          <Typography variant="body2Semibold">Large</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar size="L" src="/static/logo.png" alt="Open UI Kit" />
            <Avatar size="L" initials="OU" />
            <Avatar size="L" icon={<PersonIcon />} />
          </Stack>
        </Stack>
        <Stack spacing={1.5}>
          <Typography variant="body2Semibold">Medium</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar size="M" src="/static/logo.png" alt="Open UI Kit" />
            <Avatar size="M" initials="OU" />
            <Avatar size="M" icon={<PersonIcon />} />
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
