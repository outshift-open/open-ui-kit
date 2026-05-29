import * as React from "react";
import { Divider, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function DividerWithText() {
  return (
    <ThemeProvider>
      <Stack spacing={2.5} sx={{ width: "100%", maxWidth: 520 }}>
        <Typography variant="body2">Current access</Typography>
        <Divider component="div" role="presentation">
          Pending
        </Divider>
        <Typography variant="body2">3 invitations waiting for review</Typography>
        <Divider component="div" role="presentation" textAlign="left">
          Archived
        </Divider>
        <Typography variant="body2">Older requests are retained for audit.</Typography>
      </Stack>
    </ThemeProvider>
  );
}
