import * as React from "react";
import {
  Accordion,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function DisabledAccordion() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          defaultExpanded
          title="Available section"
          subTitle="Ready to edit"
        >
          <Typography>This section can be expanded and collapsed.</Typography>
        </Accordion>
        <Accordion disabled title="Locked section" subTitle="Requires access">
          <Typography>
            Disabled accordions keep the content unavailable and remove keyboard
            interaction.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
