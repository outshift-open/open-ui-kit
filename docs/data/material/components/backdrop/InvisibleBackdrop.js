import * as React from "react";
import {
  Backdrop,
  Button,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function InvisibleBackdrop() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Show invisible backdrop
      </Button>
      <Backdrop
        invisible
        open={open}
        onClick={() => setOpen(false)}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Stack
          spacing={1}
          sx={{
            p: 2,
            borderRadius: 1,
            bgcolor: "background.paper",
            boxShadow: 3,
          }}
        >
          <Typography variant="body2Semibold">Context panel</Typography>
          <Typography variant="body2">Click outside to dismiss.</Typography>
        </Stack>
      </Backdrop>
    </ThemeProvider>
  );
}
