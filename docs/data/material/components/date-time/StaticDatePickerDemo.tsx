import * as React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { ThemeProvider } from "@open-ui-kit/core";

const days = ["S", "M", "T", "W", "T", "F", "S"];
const dates = Array.from({ length: 31 }, (_, index) => index + 1);

export default function StaticDatePickerDemo() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 316 }}>
        <Typography variant="body2Semibold">May 2026</Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 32px)", gap: 1 }}>
          {days.map((day, index) => (
            <Typography key={`${day}-${index}`} variant="caption" align="center">
              {day}
            </Typography>
          ))}
          {dates.map((date) => (
            <Box
              key={date}
              sx={(theme) => ({
                width: 32,
                height: 32,
                display: "grid",
                placeItems: "center",
                borderRadius: "4px",
                border:
                  date === 28
                    ? `1px solid ${theme.palette.vars.interactiveTertiaryActive}`
                    : "1px solid transparent",
                backgroundColor:
                  date === 28
                    ? theme.palette.vars.controlBackgroundDefault
                    : "transparent",
              })}
            >
              <Typography variant="subtitle2">{date}</Typography>
            </Box>
          ))}
        </Box>
      </Stack>
    </ThemeProvider>
  );
}
