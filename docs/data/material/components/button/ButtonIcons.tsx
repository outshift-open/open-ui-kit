import * as React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { Button, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function ButtonIcons() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center" useFlexGap flexWrap="wrap">
        <Button startIcon={<SaveOutlinedIcon />} variant="primary">
          Save
        </Button>
        <Button endIcon={<GridViewIcon />} variant="outlined">
          View grid
        </Button>
        <Button aria-label="Open grid view" variant="primary">
          <GridViewIcon />
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
