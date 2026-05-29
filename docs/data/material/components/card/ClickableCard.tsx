import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardDescription,
  CardHeader,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function ClickableCard() {
  return (
    <ThemeProvider>
      <CardActionArea sx={{ borderRadius: "8px", maxWidth: 380 }}>
        <Card>
          <CardHeader title="Incident review" subheader="Ready for triage" />
          <CardContent>
            <CardDescription>
              Open the review workspace and confirm the assigned service owner.
            </CardDescription>
          </CardContent>
        </Card>
      </CardActionArea>
    </ThemeProvider>
  );
}
