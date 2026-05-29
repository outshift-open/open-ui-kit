import * as React from "react";
import {
  Avatar,
  AvatarGroup,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function AvatarGroups() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={6}>
        <Stack spacing={1.5}>
          <Typography variant="body2Semibold">Large</Typography>
          <AvatarGroup size="L">
            <Avatar initials="RS" />
            <Avatar initials="LM" />
            <Avatar initials="AP" />
            <Avatar initials="MK" />
            <Avatar initials="JT" />
          </AvatarGroup>
        </Stack>
        <Stack spacing={1.5}>
          <Typography variant="body2Semibold">Medium</Typography>
          <AvatarGroup size="M">
            <Avatar initials="RS" />
            <Avatar initials="LM" />
            <Avatar initials="AP" />
            <Avatar initials="MK" />
            <Avatar initials="JT" />
          </AvatarGroup>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
