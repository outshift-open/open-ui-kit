import * as React from "react";
import { FormControlLabel, Stack } from "@mui/material";
import { Checkbox, ThemeProvider } from "@open-ui-kit/core";

export default function CheckboxUsage() {
  return (
    <ThemeProvider>
      <Stack spacing={1}>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Send release notes"
          sx={{ margin: 0, gap: "4px" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Include archived projects"
          sx={{ margin: 0, gap: "4px" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
