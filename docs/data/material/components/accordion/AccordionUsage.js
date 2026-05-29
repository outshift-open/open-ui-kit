import * as React from "react";
import {
  Accordion,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function AccordionUsage() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          defaultExpanded
          title="Workspace details"
          subTitle="Name, owner, and visibility"
        >
          <Typography>
            Review the basic settings that identify this workspace across the
            product.
          </Typography>
        </Accordion>
        <Accordion title="Members" subTitle="Invites and permissions">
          <Typography>
            Manage who can access this workspace and what they can change.
          </Typography>
        </Accordion>
        <Accordion title="Notifications" subTitle="Email and in-app updates">
          <Typography>
            Decide which product events should notify the team.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
