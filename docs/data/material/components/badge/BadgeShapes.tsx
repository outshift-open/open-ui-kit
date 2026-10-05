import * as React from "react";
import {
  Badge,
  type BadgeShape,
  type BadgeSize,
  type BadgeType,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

const markers: { shape: BadgeShape; size: BadgeSize; type: BadgeType }[] = [
  { shape: "circle", size: "small", type: "info" },
  { shape: "circle", size: "medium", type: "success" },
  { shape: "triangleUp", size: "medium", type: "warning" },
  { shape: "triangleDown", size: "medium", type: "error" },
  { shape: "dash", size: "medium", type: "inactive" },
];

export default function BadgeShapes() {
  return (
    <ThemeProvider>
      <Stack direction="row" spacing={4} useFlexGap alignItems="center">
        {markers.map(({ shape, size, type }) => (
          <Badge
            key={`${shape}-${size}`}
            shape={shape}
            size={size}
            type={type}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
}
