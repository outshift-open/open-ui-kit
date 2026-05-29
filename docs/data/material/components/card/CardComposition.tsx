import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function CardComposition() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Card sx={{ maxWidth: 320 }}>
          <CardHeader title="Marketing strategy" subheader="March 26, 2025" />
          <CardContent>
            <CardDescription>
              Collect campaign notes, owners, and next steps in one compact
              surface.
            </CardDescription>
          </CardContent>
          <CardActions sx={{ gap: 1 }}>
            <Button size="small" variant="primary">
              Open
            </Button>
            <Button size="small" variant="outlined">
              Archive
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 320 }}>
          <CardHeader title="Release checklist" subheader="3 items remaining" />
          <CardContent>
            <CardDescription>
              Track sign-offs before the release moves into the production
              window.
            </CardDescription>
          </CardContent>
          <CardActions sx={{ gap: 1 }}>
            <Button size="small" variant="primary">
              Continue
            </Button>
            <Button size="small" variant="outlined">
              Share
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </ThemeProvider>
  );
}
