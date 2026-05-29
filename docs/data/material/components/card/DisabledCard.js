import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function DisabledCard() {
  return (
    <ThemeProvider>
      <Card aria-disabled="true" sx={{ maxWidth: 360, opacity: 0.5 }}>
        <CardHeader title="Audit export" subheader="Unavailable" />
        <CardContent>
          <CardDescription>
            Exports unlock after the first scan completes for this workspace.
          </CardDescription>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
