import * as React from "react";
import { Box } from "@mui/material";
import { Divider, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function DividerOrientation() {
  return (
    <ThemeProvider>
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 540 }}>
        <Box>
          <Typography variant="body2Semibold">Horizontal</Typography>
          <Divider aria-hidden="true" sx={{ mt: 1.5 }} />
        </Box>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ minHeight: 72 }}
        >
          <Typography variant="body2">Overview</Typography>
          <Divider orientation="vertical" flexItem aria-hidden="true" />
          <Typography variant="body2">Metrics</Typography>
          <Divider
            orientation="vertical"
            variant="bold"
            flexItem
            aria-hidden="true"
          />
          <Typography variant="body2">Settings</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
