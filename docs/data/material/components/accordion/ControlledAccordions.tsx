import * as React from "react";
import {
  Accordion,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel-1");

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          expanded={expanded === "panel-1"}
          onChange={handleChange("panel-1")}
          title="Profile"
          subTitle="Identity and contact details"
        >
          <Typography>
            Controlled accordions are useful when only one section should stay
            open.
          </Typography>
        </Accordion>
        <Accordion
          expanded={expanded === "panel-2"}
          onChange={handleChange("panel-2")}
          title="Security"
          subTitle="Sessions and recovery options"
        >
          <Typography>
            Store the active panel in parent state and pass `expanded` plus
            `onChange` to each item.
          </Typography>
        </Accordion>
        <Accordion
          expanded={expanded === "panel-3"}
          onChange={handleChange("panel-3")}
          title="Billing"
          subTitle="Payment method and invoices"
        >
          <Typography>
            You can also set the state to `false` to collapse every section.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
