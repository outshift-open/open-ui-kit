import * as React from "react";
import {
  Card,
  CardAlertHeader,
  CardContent,
  CardDescription,
  CardHeader,
  Stack,
  ThemeMode,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function AlertCard() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Midnight}>
      <Stack gap={2} sx={{ maxWidth: 435 }}>
        <Card alert="critical">
          <CardAlertHeader timestamp="4m ago">CRITICAL ALERT</CardAlertHeader>
          <CardHeader title="Optimization Failure in High-Density Travel Planning Cluster" />
          <CardContent>
            <CardDescription variant="body2">
              The system detected a revision loop during itinerary optimization
              within a high-density semantic cluster. The agent produced an
              itinerary that violated walking constraints, triggering an
              optimization cycle before producing the final output.
            </CardDescription>
          </CardContent>
        </Card>
        <Card alert="warning">
          <CardAlertHeader timestamp="3h ago">WARNING</CardAlertHeader>
          <CardHeader title="Post-generation correction occurred" />
          <CardContent>
            <CardDescription variant="body2">
              Initial itinerary violated constraints and required a revision
              pass. Consider improving constraint conditioning upstream.
            </CardDescription>
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  );
}
