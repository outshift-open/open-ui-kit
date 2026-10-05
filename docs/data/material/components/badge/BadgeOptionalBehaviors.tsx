import * as React from "react";
import { Star } from "@mui/icons-material";
import { Badge, type BadgeType, Stack, ThemeProvider } from "@open-ui-kit/core";

const types: BadgeType[] = ["excellent", "info", "success", "warning", "error"];

const labelledMarkers: { type: BadgeType; label: string }[] = [
  { type: "excellent", label: "Excellent" },
  { type: "info", label: "Info" },
  { type: "success", label: "Success" },
  { type: "warning", label: "Warning" },
  { type: "error", label: "Error" },
];

export default function BadgeOptionalBehaviors() {
  return (
    <ThemeProvider>
      <Stack spacing={3}>
        <Stack direction="row" spacing={1.5} useFlexGap flexWrap="wrap">
          {types.map((type) => (
            <Badge key={type} type={type} icon={<Star />} content={1} />
          ))}
        </Stack>
        <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
          {labelledMarkers.map(({ type, label }) => (
            <Badge key={type} shape="circle" type={type} content={label} />
          ))}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
