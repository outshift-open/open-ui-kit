import * as React from "react";
import { FormControlLabel, FormGroup } from "@mui/material";
import { Checkbox, ThemeProvider } from "@open-ui-kit/core";

export default function CheckboxLabels() {
  return (
    <ThemeProvider>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Required approval"
          sx={{ margin: 0, gap: "4px" }}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Optional reviewer"
          sx={{ margin: 0, gap: "4px" }}
        />
        <FormControlLabel
          control={<Checkbox disabled />}
          label="Locked by policy"
          sx={{ margin: 0, gap: "4px" }}
        />
      </FormGroup>
    </ThemeProvider>
  );
}
