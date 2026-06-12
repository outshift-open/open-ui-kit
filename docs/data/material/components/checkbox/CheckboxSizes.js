import * as React from "react";
import { FormControlLabel, Stack } from "@mui/material";
import { Checkbox, ThemeProvider } from "@open-ui-kit/core";

export default function CheckboxSizes() {
  return (
    <ThemeProvider>
      <Stack spacing={1}>
        <FormControlLabel
          control={<Checkbox size="small" defaultChecked />}
          label="Small"
          sx={{ margin: 0, gap: "4px" }}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Medium"
          sx={{ margin: 0, gap: "4px" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
