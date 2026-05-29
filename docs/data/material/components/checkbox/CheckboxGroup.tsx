import * as React from "react";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Checkbox, ThemeProvider } from "@open-ui-kit/core";

export default function CheckboxGroup() {
  return (
    <ThemeProvider>
      <FormControl component="fieldset">
        <FormLabel component="legend">Report sections</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Summary"
            sx={{ margin: 0, gap: "4px" }}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Findings"
            sx={{ margin: 0, gap: "4px" }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Raw logs"
            sx={{ margin: 0, gap: "4px" }}
          />
        </FormGroup>
      </FormControl>
    </ThemeProvider>
  );
}
