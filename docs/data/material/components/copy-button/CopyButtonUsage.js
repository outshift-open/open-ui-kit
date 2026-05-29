import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CopyButton, ThemeProvider } from "@open-ui-kit/core";

const workspaceId = "wksp_prod_8f21d4";

export default function CopyButtonUsage() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Box>
          <Typography variant="caption">Workspace ID</Typography>
          <Typography variant="body2">{workspaceId}</Typography>
        </Box>
        <CopyButton
          text={workspaceId}
          aria-label="Copy workspace ID"
          disableMargin
        />
      </Stack>
    </ThemeProvider>
  );
}
