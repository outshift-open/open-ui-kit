import * as React from "react";
import { Button, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function ButtonUsage() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="primary">Save changes</Button>
        <Button variant="secondary">Preview</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </ThemeProvider>
  );
}
