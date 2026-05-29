import * as React from "react";
import { Badge, Stack, ThemeProvider } from "@open-ui-kit/core";

const types = [
  "default",
  "excellent",
  "neutral",
  "error",
  "warning",
  "info",
  "success",
  "inactive",
  "moderate",
  "severe",
];

export default function BadgeTypes() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
        {types.map((type) => (
          <Badge key={type} type={type} content={type} />
        ))}
      </Stack>
    </ThemeProvider>
  );
}
