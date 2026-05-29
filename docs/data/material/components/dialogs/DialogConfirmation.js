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

export default function DialogConfirmation() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button variant="outlined" color="negative" onClick={() => setOpen(true)}>
        Delete project
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-confirmation-title"
        aria-describedby="dialog-confirmation-description"
        role="alertdialog"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="dialog-confirmation-title">
          Delete project?
        </DialogTitle>
        <DialogSubtitle>This action cannot be undone.</DialogSubtitle>
        <DialogContent>
          <DialogContentText id="dialog-confirmation-description">
            All saved views, reports, and project-level settings will be removed
            for every collaborator.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="tertariary" onClick={() => setOpen(false)}>
            Keep project
          </Button>
          <Button
            variant="primary"
            color="negative"
            onClick={() => setOpen(false)}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
