import * as React from "react";
import { Box, Typography } from "@mui/material";
import { CopyButton, ThemeProvider } from "@open-ui-kit/core";

const command = "yarn workspace @open-ui-kit/core storybook";

export default function CopyButtonPositioned() {
  return (
    <ThemeProvider>
      <Box
        sx={(theme) => ({
          position: "relative",
          maxWidth: 520,
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          padding: "16px 56px 16px 16px",
        })}
      >
        <Typography variant="caption">Local Storybook</Typography>
        <Typography variant="body2">{command}</Typography>
        <CopyButton
          text={command}
          aria-label="Copy Storybook command"
          position="right"
          top="18px"
          right="16px"
          tooltipPlacement="left"
        />
      </Box>
    </ThemeProvider>
  );
}
