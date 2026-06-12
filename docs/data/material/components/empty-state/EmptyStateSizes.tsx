import * as React from "react";
import {
  EmptyState,
  GeneralSize,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function EmptyStateSizes() {
  return (
    <ThemeProvider>
      <Stack spacing={3} alignItems="center">
        <EmptyState
          variant="info"
          size={GeneralSize.Large}
          title="No reports yet"
          description="Reports will appear here after the first scheduled export completes."
          actionTitle="Schedule report"
          actionCallback={() => {}}
        />
        <EmptyState
          variant="warning"
          size={GeneralSize.Medium}
          title="No filters selected"
          description="Choose at least one filter to preview matching assets."
          actionTitle="Add filter"
          actionCallback={() => {}}
        />
        <EmptyState
          variant="negative"
          size={GeneralSize.Small}
          description="No matches found"
        />
      </Stack>
    </ThemeProvider>
  );
}
