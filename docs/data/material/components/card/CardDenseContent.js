import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardSubheader,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function CardDenseContent() {
  return (
    <ThemeProvider>
      <Card sx={{ maxWidth: 420 }}>
        <CardHeader title="Deployment window" />
        <CardContent>
          <Stack spacing={1.5}>
            <div>
              <CardSubheader>Start</CardSubheader>
              <CardDescription>Tonight at 22:00 UTC</CardDescription>
            </div>
            <div>
              <CardSubheader>Owner</CardSubheader>
              <CardDescription>Platform operations</CardDescription>
            </div>
            <div>
              <CardSubheader>Impact</CardSubheader>
              <CardDescription>
                Admin settings remain read-only while changes are applied.
              </CardDescription>
            </div>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
