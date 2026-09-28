import * as React from "react";
import { Accordion, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function AccordionHover() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          variant="hover"
          defaultExpanded
          title="Notification settings"
          subTitle="Email and in-app"
        >
          <Typography>
            Hover accordions look like the default variant until the pointer is
            over them, then show the contained surface.
          </Typography>
        </Accordion>
        <Accordion
          variant="hover"
          title="Connected apps"
          subTitle="3 integrations"
        >
          <Typography>
            Use this variant for dense lists where a permanent surface would add
            too much visual weight.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
