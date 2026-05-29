import * as React from "react";
import { EmptyState, GeneralSize, ThemeProvider } from "@open-ui-kit/core";

export default function EmptyStateUsage() {
  return (
    <ThemeProvider>
      <EmptyState
        variant="info"
        size={GeneralSize.Large}
        title="No projects yet"
        description="Create a project to start collecting findings, owners, and reports in one place."
        actionTitle="Create project"
        actionCallback={() => {}}
      />
    </ThemeProvider>
  );
}
