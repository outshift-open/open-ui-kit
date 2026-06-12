import * as React from "react";
import {
  Backdrop,
  Button,
  Spinner,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function BackdropWithMessage() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Process changes
      </Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Stack alignItems="center" spacing={2}>
          <Spinner color="inherit" />
          <Typography sx={{ color: "common.white" }} variant="body2">
            Processing, please wait...
          </Typography>
        </Stack>
      </Backdrop>
    </ThemeProvider>
  );
}
