import * as React from "react";
import {
  Accordion,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function AccordionDividers() {
  return (
    <ThemeProvider>
      <Stack spacing={3} sx={{ maxWidth: 720 }}>
        <Stack spacing={1}>
          <Typography variant="body2Semibold">Medium default divider</Typography>
          <Accordion
            defaultExpanded
            size="medium"
            title="Runtime"
            subTitle="Node 22"
          >
            <Typography>
              Medium uncontained accordions show a divider by default to keep
              dense rows easy to scan.
            </Typography>
          </Accordion>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2Semibold">Forced divider</Typography>
          <Accordion
            defaultExpanded
            showDivider
            title="Runtime"
            subTitle="Node 22"
          >
            <Typography>
              Use showDivider when a large summary needs stronger separation
              between the title and subtitle.
            </Typography>
          </Accordion>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
