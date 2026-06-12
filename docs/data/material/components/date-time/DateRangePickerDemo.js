import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@open-ui-kit/core";

function RangeField({ label, value }) {
  return (
    <Box
      sx={(theme) => ({
        flex: 1,
        minWidth: 180,
        border: "1px solid",
        borderColor: theme.palette.vars.borderDefault,
        borderRadius: "4px",
        px: 1.5,
        py: 1,
      })}
    >
      <Typography variant="caption">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

export default function DateRangePickerDemo() {
  return (
    <ThemeProvider>
      <Stack spacing={1.5}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
          <RangeField label="Start date" value="05/28/2026" />
          <RangeField label="End date" value="06/04/2026" />
        </Stack>
        <Box
          sx={{
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 1,
            px: 2,
            py: 1.5,
          }}
        >
          <Typography variant="body2">
            Range: May 28, 2026 - June 4, 2026
          </Typography>
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
