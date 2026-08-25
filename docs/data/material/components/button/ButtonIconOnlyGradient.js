import * as React from "react";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";
import { Button, Stack, ThemeMode, ThemeProvider } from "@open-ui-kit/core";

export default function ButtonIconOnlyGradient() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Midnight}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        useFlexGap
        flexWrap="wrap"
      >
        <Button aria-label="Start dictation" size="large" variant="gradient">
          <MicNoneOutlinedIcon />
        </Button>
        <Button aria-label="Start dictation" size="medium" variant="gradient">
          <MicNoneOutlinedIcon />
        </Button>
        <Button aria-label="Start dictation" size="small" variant="gradient">
          <MicNoneOutlinedIcon />
        </Button>
      </Stack>
    </ThemeProvider>
  );
}
