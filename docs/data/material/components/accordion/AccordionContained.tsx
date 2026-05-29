import * as React from "react";
import {
  Accordion,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function AccordionContained() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          contained
          defaultExpanded
          title="Access policy"
          subTitle="Private by default"
        >
          <Typography>
            Contained accordions add a visible surface around each disclosure
            item.
          </Typography>
        </Accordion>
        <Accordion contained title="Audit log" subTitle="30 days retained">
          <Typography>
            Keep related controls visually grouped without adding another card.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
