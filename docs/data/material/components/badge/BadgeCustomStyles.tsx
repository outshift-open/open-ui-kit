import * as React from "react";
import { Badge, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function BadgeCustomStyles() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={2} alignItems="center">
        <Badge
          type="default"
          content="Beta"
          styleBadge={{ height: 20 }}
          styleContent={{ textTransform: "uppercase" }}
        />
        <Badge
          type="info"
          content="v1.6"
          styleBadge={{ minWidth: 42 }}
          styleContent={{ letterSpacing: 0 }}
        />
      </Stack>
    </ThemeProvider>
  );
}
