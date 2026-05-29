import * as React from "react";
import {
  AnchorLinkMenu,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

const items = [
  { id: "summary", label: "Summary" },
  { id: "activity", label: "Activity" },
  { id: "findings", label: "Findings" },
];

export default function AnchorLinkMenuVariants() {
  return (
    <ThemeProvider>
      <Stack direction={{ xs: "column", md: "row" }} spacing={6}>
        <Stack spacing={2} sx={{ width: 220 }}>
          <Typography variant="body2Semibold">Rail</Typography>
          <AnchorLinkMenu items={items} selectedId="activity" />
        </Stack>
        <Stack spacing={2} sx={{ width: 240 }}>
          <Typography variant="body2Semibold">Floating</Typography>
          <AnchorLinkMenu
            items={items}
            selectedId="activity"
            title="Contents"
            variant="floating"
          />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
