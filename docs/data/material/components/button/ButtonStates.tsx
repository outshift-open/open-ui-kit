import * as React from "react";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Button, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function ButtonStates() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center" useFlexGap flexWrap="wrap">
        <Button disabled variant="primary">Disabled</Button>
        <Button loading loadingPosition="start" startIcon={<SaveOutlinedIcon />} variant="primary">
          Saving
        </Button>
        <Button loading loadingPosition="start" startIcon={<SaveOutlinedIcon />} variant="outlined">
          Syncing
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
