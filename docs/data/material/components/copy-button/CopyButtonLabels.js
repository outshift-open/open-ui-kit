import * as React from "react";
import { Stack } from "@mui/material";
import { CopyButton, ThemeProvider } from "@open-ui-kit/core";

export default function CopyButtonLabels() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={3} alignItems="center">
        <CopyButton
          text="npm install @open-ui-kit/core"
          aria-label="Copy npm command"
          copyLabel="Copy command"
          copiedLabel="Command copied"
          tooltipPlacement="right"
          disableMargin
        />
        <CopyButton
          text="token_placeholder"
          aria-label="Copy access token"
          copyLabel="Copy token"
          copiedLabel="Token copied"
          tooltipPlacement="bottom"
          disableMargin
        />
      </Stack>
    </ThemeProvider>
  );
}
