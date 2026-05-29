import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogSubtitle,
  DialogTitle,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function DialogComposition() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Review changes
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-composition-title"
        aria-describedby="dialog-composition-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="dialog-composition-title">
          Publish configuration
        </DialogTitle>
        <DialogSubtitle>3 services will receive the update.</DialogSubtitle>
        <DialogContent>
          <DialogContentText id="dialog-composition-description">
            Review the destination, timing, and rollback plan before publishing
            this configuration.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="tertariary" onClick={() => setOpen(false)}>
            Not now
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
