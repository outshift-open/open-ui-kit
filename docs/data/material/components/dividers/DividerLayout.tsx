import * as React from "react";
import { Box } from "@mui/material";
import { Divider, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

const rows = [
  ["Environment", "Production"],
  ["Policy", "Inherited"],
  ["Retention", "90 days"],
];

export default function DividerLayout() {
  return (
    <ThemeProvider>
      <Box
        sx={(theme) => ({
          width: "100%",
          maxWidth: 520,
          border: "1px solid",
          borderColor: theme.palette.vars.borderDefault,
          borderRadius: 1,
          p: 2,
        })}
      >
        <Typography variant="body1Semibold">Project settings</Typography>
        <Divider variant="bold" aria-hidden="true" sx={{ my: 2 }} />
        <Stack spacing={1.5}>
          {rows.map(([label, value], index) => (
            <React.Fragment key={label}>
              {index > 0 ? <Divider aria-hidden="true" /> : null}
              <Stack direction="row" justifyContent="space-between" gap={2}>
                <Typography variant="body2">{label}</Typography>
                <Typography variant="body2Semibold">{value}</Typography>
              </Stack>
            </React.Fragment>
          ))}
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
