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

export default function DialogUsage() {
  const [open, setOpen] = React.useState(false);

  return (
    <ThemeProvider>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-usage-title"
        aria-describedby="dialog-usage-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="dialog-usage-title">Invite teammate</DialogTitle>
        <DialogSubtitle>Share access to this workspace.</DialogSubtitle>
        <DialogContent>
          <DialogContentText id="dialog-usage-description">
            The teammate will receive an email invitation and can join once they
            accept it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="tertariary" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)} autoFocus>
            Send invite
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
