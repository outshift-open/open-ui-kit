import * as React from "react";
import { Accordion, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

export default function AccordionArrowPosition() {
  return (
    <ThemeProvider>
      <Stack spacing={3} sx={{ maxWidth: 720 }}>
        <Stack spacing={1}>
          <Typography variant="body2Semibold">Left arrow</Typography>
          <Accordion
            defaultExpanded
            title="Deployment summary"
            subTitle="Production cluster"
          >
            <Typography>
              Use the default left arrow when the accordion behaves like a list
              item.
            </Typography>
          </Accordion>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body2Semibold">Right arrow</Typography>
          <Accordion
            arrowPosition="right"
            defaultExpanded
            title="Deployment summary"
            subTitle="Production cluster"
          >
            <Typography>
              Use a right arrow when the summary text should align with
              surrounding content.
            </Typography>
          </Accordion>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
