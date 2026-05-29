import * as React from "react";
import { Box } from "@mui/material";
import { Divider, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function DividerVariantsOpen() {
  return (
    <ThemeProvider>
      <Stack spacing={3} sx={{ width: "100%", maxWidth: 520 }}>
        <Box>
          <Typography variant="caption">Default</Typography>
          <Divider aria-hidden="true" sx={{ mt: 1 }} />
        </Box>
        <Box>
          <Typography variant="caption">Bold</Typography>
          <Divider variant="bold" aria-hidden="true" sx={{ mt: 1 }} />
        </Box>
        <Box>
          <Typography variant="caption">Middle</Typography>
          <Divider variant="middle" aria-hidden="true" sx={{ mt: 1 }} />
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
