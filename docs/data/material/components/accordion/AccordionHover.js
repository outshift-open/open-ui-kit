import * as React from "react";
import { Accordion, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function AccordionHover() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          variant="hover"
          defaultExpanded
          title="Access policy"
          subTitle="Private by default"
        >
          <Typography>
            Hover accordions stay transparent and show their border only on
            hover.
          </Typography>
        </Accordion>
        <Accordion
          variant="hover"
          title="Audit log"
          subTitle="30 days retained"
        >
          <Typography>
            Keep related controls visually grouped without adding another card.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
