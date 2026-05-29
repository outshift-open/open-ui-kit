import Apps from "@mui/icons-material/Apps";
import { Stack } from "@mui/material";
import { FloatingButton, ThemeProvider } from "@open-ui-kit/core";

export default function FloatingButtonDisabled() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <FloatingButton variant="primary" size="medium" startIcon={<Apps />} disabled>
          Primary
        </FloatingButton>
        <FloatingButton
          variant="secondary"
          size="medium"
          startIcon={<Apps />}
          disabled
        >
          Secondary
        </FloatingButton>
      </Stack>
    </ThemeProvider>
  );
}
