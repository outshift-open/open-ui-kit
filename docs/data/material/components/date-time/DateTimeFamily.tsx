import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@open-ui-kit/core";

function FieldPreview({ label, value }: { label: string; value: string }) {
  return (
    <Box
      sx={(theme) => ({
        minWidth: 220,
        borderBottom: "1px solid",
        borderColor: theme.palette.vars.borderDefault,
        py: 1,
      })}
    >
      <Typography variant="caption">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

export default function DateTimeFamily() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
        <FieldPreview label="Date" value="06/15/2026" />
        <FieldPreview label="Time" value="16:30" />
      </Stack>
    </ThemeProvider>
  );
}
