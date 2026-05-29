import Apps from "@mui/icons-material/Apps";
import Tune from "@mui/icons-material/Tune";
import { Stack } from "@mui/material";
import { FloatingButton, ThemeProvider } from "@open-ui-kit/core";

export default function FloatingButtonIcons() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <FloatingButton variant="primary" size="medium">
          <Apps />
        </FloatingButton>
        <FloatingButton variant="secondary" size="medium">
          <Tune />
        </FloatingButton>
        <FloatingButton variant="primary" size="small">
          <Apps />
        </FloatingButton>
        <FloatingButton variant="secondary" size="small">
          <Tune />
        </FloatingButton>
      </Stack>
    </ThemeProvider>
  );
}
