import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  ThemeMode,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function GlassCard() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Midnight}>
      <Card glass sx={{ maxWidth: 360 }}>
        <CardHeader
          title="Introduce Resilient API Orchestration"
          subheader="Moderate"
        />
        <CardContent>
          <CardDescription variant="caption">
            Implement a layered request strategy with automatic retries,
            provider failover, and timeout tuning to reduce sensitivity to
            transient outages.
          </CardDescription>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
