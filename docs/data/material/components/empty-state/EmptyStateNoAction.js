import * as React from "react";
import {
  EmptyState,
  GeneralSize,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function EmptyStateNoAction() {
  return (
    <ThemeProvider>
      <Stack direction="row" gap={4} flexWrap="wrap" justifyContent="center">
        <EmptyState
          variant="info"
          size={GeneralSize.Medium}
          title="No activity"
          description="Recent events will appear here automatically."
        />
        <EmptyState
          variant="positive"
          size={GeneralSize.Medium}
          title="All caught up"
          description="There are no open tasks for this workspace."
        />
      </Stack>
    </ThemeProvider>
  );
}
