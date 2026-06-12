import * as React from "react";
import { Button, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function ButtonDestructive() {
  return (
    <ThemeProvider>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        useFlexGap
        flexWrap="wrap"
      >
        <Button color="negative" variant="primary">
          Delete
        </Button>
        <Button color="negative" variant="outlined">
          Remove access
        </Button>
        <Button color="negative" variant="tertariary">
          Discard
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
