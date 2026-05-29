import * as React from "react";
import { Box } from "@mui/material";
import { Divider, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function DividerUsage() {
  return (
    <ThemeProvider>
      <Box sx={{ width: "100%", maxWidth: 520 }}>
        <Typography variant="body1Semibold">Workspace health</Typography>
        <Typography variant="body2" sx={{ mt: 0.5, mb: 2 }}>
          Review status, ownership, and recent activity in one compact panel.
        </Typography>
        <Divider aria-hidden="true" />
        <Stack spacing={0.75} sx={{ mt: 2 }}>
          <Typography variant="body2">Status: protected</Typography>
          <Typography variant="body2">Owner: Platform team</Typography>
          <Typography variant="body2">Last scan: 12 minutes ago</Typography>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
