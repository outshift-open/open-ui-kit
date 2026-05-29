import * as React from "react";
import { FormControlLabel, Stack, Typography } from "@mui/material";
import { Checkbox, ThemeProvider } from "@open-ui-kit/core";

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  return (
    <ThemeProvider>
      <Stack spacing={1}>
        <FormControlLabel
          control={
            <Checkbox
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
          }
          label="Notify workspace owners"
          sx={{ margin: 0, gap: "4px" }}
        />
        <Typography variant="body2">
          Notifications are {checked ? "enabled" : "disabled"}.
        </Typography>
      </Stack>
    </ThemeProvider>
  );
}
