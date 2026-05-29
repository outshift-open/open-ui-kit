import * as React from "react";
import {
  EmptyState,
  GeneralSize,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

const variants = [
  ["info", "No matches found"],
  ["positive", "Everything is resolved"],
  ["warning", "Configuration missing"],
  ["negative", "Unable to load results"],
];

export default function EmptyStateVariants() {
  return (
    <ThemeProvider>
      <Stack direction="row" gap={3} flexWrap="wrap" justifyContent="center">
        {variants.map(([variant, description]) => (
          <EmptyState
            key={variant}
            variant={variant}
            size={GeneralSize.Medium}
            title={variant}
            description={description}
          />
        ))}
      </Stack>
    </ThemeProvider>
  );
}
