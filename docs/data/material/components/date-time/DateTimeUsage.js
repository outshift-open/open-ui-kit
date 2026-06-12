import * as React from "react";
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@open-ui-kit/core";

export default function DateTimeUsage() {
  return (
    <ThemeProvider>
      <Box
        sx={(theme) => ({
          width: 240,
          borderBottom: "1px solid",
          borderColor: theme.palette.vars.borderDefault,
          py: 1,
        })}
      >
        <Typography variant="body1">05/28/2026 09:30</Typography>
      </Box>
    </ThemeProvider>
  );
}
