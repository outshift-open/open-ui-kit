import Apps from "@mui/icons-material/Apps";
import { Stack } from "@mui/material";
import { FloatingButton, ThemeProvider } from "@open-ui-kit/core";

export default function FloatingButtonSizes() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap">
        <FloatingButton variant="primary" size="medium" startIcon={<Apps />}>
          Medium
        </FloatingButton>
        <FloatingButton variant="primary" size="small" startIcon={<Apps />}>
          Small
        </FloatingButton>
      </Stack>
    </ThemeProvider>
  );
}
