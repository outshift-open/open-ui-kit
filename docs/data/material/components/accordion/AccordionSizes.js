import * as React from "react";
import {
  Accordion,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function AccordionSizes() {
  return (
    <ThemeProvider>
      <Stack spacing={3} sx={{ maxWidth: 720 }}>
        <Stack spacing={1}>
          <Typography variant="body2Semibold">Large</Typography>
          <Accordion
            defaultExpanded
            title="Environment"
            subTitle="Region and runtime details"
          >
            <Typography>
              Large accordions work well for page-level sections and readable
              content groups.
            </Typography>
          </Accordion>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2Semibold">Medium</Typography>
          <Accordion
            defaultExpanded
            size="medium"
            title="Environment"
            subTitle="Region and runtime details"
          >
            <Typography>
              Medium accordions are more compact for drawers, panels, and dense
              settings.
            </Typography>
          </Accordion>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
