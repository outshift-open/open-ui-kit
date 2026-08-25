import * as React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardHeader,
  ThemeMode,
  ThemeProvider,
} from "@open-ui-kit/core";

export default function CardWithImage() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Midnight}>
      <Card
        image="/static/images/cards/welcome-card.jpg"
        sx={{ maxWidth: 432 }}
      >
        <CardHeader
          title="Explain"
          subheader="Uncover the “why” behind your app’s behavior."
        />
        <CardContent>
          <CardDescription variant="caption">
            Get clear, AI-powered explanations for events, anomalies, or
            performance changes.
          </CardDescription>
        </CardContent>
        <CardActions sx={{ alignSelf: "stretch", justifyContent: "flex-end" }}>
          <Button size="small" variant="tertariary">
            Get Started
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}
