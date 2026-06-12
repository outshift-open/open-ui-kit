import * as React from "react";
import { FormControlLabel, FormGroup, Stack } from "@mui/material";
import { Checkbox, ThemeProvider } from "@open-ui-kit/core";

const labeled = (label, checkbox) => (
  <FormControlLabel
    control={checkbox}
    label={label}
    sx={{ margin: 0, gap: "4px" }}
  />
);

export default function CheckboxStates() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
        <FormGroup>
          {labeled("Unchecked", <Checkbox />)}
          {labeled("Checked", <Checkbox defaultChecked />)}
          {labeled("Mixed", <Checkbox indeterminate />)}
        </FormGroup>
        <FormGroup>
          {labeled("Disabled", <Checkbox disabled />)}
          {labeled("Disabled checked", <Checkbox defaultChecked disabled />)}
          {labeled("Disabled mixed", <Checkbox indeterminate disabled />)}
        </FormGroup>
      </Stack>
    </ThemeProvider>
  );
}
