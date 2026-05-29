import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@open-ui-kit/core";

export default function DateTimePickerDemo() {
  return (
    <ThemeProvider>
      <Stack spacing={1.5}>
        <Box
          sx={(theme) => ({
            width: 240,
            borderBottom: "1px solid",
            borderColor: theme.palette.vars.borderDefault,
            py: 1,
          })}
        >
          <Typography variant="body1">05/28/2026 14:00</Typography>
        </Box>
        <Typography variant="body2">Selected: May 28, 2026 14:00</Typography>
      </Stack>
    </ThemeProvider>
  );
}
