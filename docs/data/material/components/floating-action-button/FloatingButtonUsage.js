import Apps from "@mui/icons-material/Apps";
import { FloatingButton, ThemeProvider } from "@open-ui-kit/core";

export default function FloatingButtonUsage() {
  return (
    <ThemeProvider>
      <FloatingButton variant="primary" size="medium" startIcon={<Apps />}>
        Create
      </FloatingButton>
    </ThemeProvider>
  );
}
