import * as React from "react";
import { Stack } from "@mui/material";
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

const sizes = [
  { label: "Small", maxWidth: "sm", title: 'Small - maxWidth="sm"' },
  { label: "Medium", maxWidth: "md", title: 'Medium - maxWidth="md"' },
  { label: "Large", maxWidth: "lg", title: 'Large - maxWidth="lg"' },
];

export default function DialogSizes() {
  const [activeSize, setActiveSize] = React.useState(null);
  const active = sizes.find((size) => size.maxWidth === activeSize);

  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
        {sizes.map((size) => (
          <Button
            key={size.maxWidth}
            variant="secondary"
            onClick={() => setActiveSize(size.maxWidth)}
          >
            {size.label}
          </Button>
        ))}
      </Stack>
      <Dialog
        open={Boolean(active)}
        onClose={() => setActiveSize(null)}
        aria-labelledby="dialog-size-title"
        aria-describedby="dialog-size-description"
        maxWidth={active?.maxWidth}
        fullWidth
      >
        <DialogTitle id="dialog-size-title">{active?.title}</DialogTitle>
        <DialogSubtitle>Content width preset</DialogSubtitle>
        <DialogContent>
          <DialogContentText id="dialog-size-description">
            Choose a larger preset only when the content needs more horizontal
            space to stay readable.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="primary" onClick={() => setActiveSize(null)}>
            Done
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}
