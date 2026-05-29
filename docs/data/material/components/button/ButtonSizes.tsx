import * as React from "react";
import { Button, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function ButtonSizes() {
  return (
    <ThemeProvider>
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ width: 72 }} variant="body2Semibold">
            Small
          </Typography>
          <Button size="small" variant="primary">Primary</Button>
          <Button size="small" variant="secondary">Secondary</Button>
          <Button size="small" variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ width: 72 }} variant="body2Semibold">
            Medium
          </Typography>
          <Button size="medium" variant="primary">Primary</Button>
          <Button size="medium" variant="secondary">Secondary</Button>
          <Button size="medium" variant="outlined">Outlined</Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography sx={{ width: 72 }} variant="body2Semibold">
            Large
          </Typography>
          <Button size="large" variant="primary">Primary</Button>
          <Button size="large" variant="secondary">Secondary</Button>
          <Button size="large" variant="outlined">Outlined</Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
