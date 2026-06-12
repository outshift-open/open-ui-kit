import * as React from "react";
import { Button, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function ButtonVariants() {
  return (
    <ThemeProvider>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        useFlexGap
        flexWrap="wrap"
      >
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="tertariary">Tertiary</Button>
      </Stack>
    </ThemeProvider>
  );
}
