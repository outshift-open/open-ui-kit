import * as React from "react";
import {
  Backdrop,
  Button,
  Spinner,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function BackdropUsage() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show backdrop
      </Button>
      <Backdrop
        open={open}
        onClick={() => setOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Spinner color="inherit" />
      </Backdrop>
    </ThemeProvider>
  );
}
