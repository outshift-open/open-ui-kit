import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function CardUsage() {
  return (
    <ThemeProvider>
      <Card sx={{ maxWidth: 360 }}>
        <CardHeader
          title="Workspace health"
          subheader="Updated 2 minutes ago"
        />
        <CardContent>
          <CardDescription>
            Review open findings, ownership gaps, and configuration drift for
            this workspace.
          </CardDescription>
        </CardContent>
        <CardActions>
          <Button size="small" variant="tertariary">
            View details
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
