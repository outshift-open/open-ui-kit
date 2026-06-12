import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { CopyButton, ThemeProvider } from "@open-ui-kit/core";

export default function CopyButtonFeedback() {
  const [lastCopied, setLastCopied] = React.useState("Nothing copied yet");

  return (
    <ThemeProvider>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <CopyButton
          text="https://docs.open-ui-kit.local/releases/latest"
          aria-label="Copy release URL"
          onCopy={() => setLastCopied("Release URL copied")}
          disableMargin
        />
        <Typography variant="body2">{lastCopied}</Typography>
      </Stack>
    </ThemeProvider>
  );
}
