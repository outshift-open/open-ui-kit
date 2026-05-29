import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { CopyButton, CopyButtonSize, ThemeProvider } from "@open-ui-kit/core";

const sizes: CopyButtonSize[] = ["large", "medium", "small"];

export default function CopyButtonSizes() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={4} alignItems="center">
        {sizes.map((size) => (
          <Stack key={size} spacing={1} alignItems="center">
            <CopyButton
              text={`${size} copied value`}
              size={size}
              aria-label={`Copy ${size} value`}
              disableMargin
            />
            <Typography variant="caption">{size}</Typography>
          </Stack>
        ))}
      </Stack>
    </ThemeProvider>
  );
}
