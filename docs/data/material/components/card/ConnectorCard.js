import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  ThemeMode,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function ConnectorCard() {
  return (
    <ThemeProvider defaultMode={ThemeMode.Midnight}>
      <Card connector sx={{ maxWidth: 280 }}>
        <Typography
          variant="captionSemibold"
          sx={(theme) => ({ color: theme.palette.vars.baseTextMedium })}
        >
          Divergent Planning Paths
        </Typography>
        <CardHeader title="Agents fail to converge on a consistent decision state" />
        <CardContent>
          <CardDescription variant="body2">
            The Itinerary Planner and Schedule Planner increasingly disagree on
            the ordering of the same set of activities.
          </CardDescription>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
