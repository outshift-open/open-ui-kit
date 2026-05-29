import * as React from "react";
import { EmptyState, GeneralSize, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function EmptyStateDirection() {
  return (
    <ThemeProvider>
      <Stack spacing={4}>
        <EmptyState
          variant="info"
          size={GeneralSize.Medium}
          direction="column"
          title="Column layout"
          description="Use this for centered cards, tables, and full-page empty views."
        />
        <EmptyState
          variant="positive"
          size={GeneralSize.Medium}
          direction="row"
          title="Row layout"
          description="Use this when the surrounding panel has enough horizontal room."
          actionTitle="View summary"
          actionCallback={() => {}}
        />
      </Stack>
    </ThemeProvider>
  );
}
