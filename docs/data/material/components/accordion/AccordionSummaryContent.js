import * as React from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import GridView from "@mui/icons-material/GridView";
import Hub from "@mui/icons-material/Hub";
import { Box } from "@mui/material";
import { Accordion, Stack, ThemeProvider, Typography } from "@open-ui-kit/core";

function SlotLabel({ children }) {
  return (
    <Box
      component="span"
      sx={{
        border: "1px dashed #9747FF",
        borderRadius: "2px",
        color: "#9747FF",
        fontSize: "12px",
        lineHeight: "120%",
        px: 0.5,
      }}
    >
      {children}
    </Box>
  );
}

export default function AccordionSummaryContent() {
  return (
    <ThemeProvider>
      <Stack spacing={2} sx={{ maxWidth: 720 }}>
        <Accordion
          defaultExpanded
          showDivider
          title="Inventory"
          subTitle="24 assets"
          titleStartIcon={<GridView fontSize="small" />}
          subTitleEndIcon={<Hub fontSize="small" />}
          action={
            <Typography variant="body2Semibold" color="primary">
              View all
            </Typography>
          }
          endSlot={<ArrowForward fontSize="small" />}
        >
          <Typography>
            Add icons and action content when the summary needs extra context
            without opening the panel.
          </Typography>
        </Accordion>
        <Accordion
          defaultExpanded
          size="medium"
          title="Policy"
          subTitle="Enforced"
          titleSlot={<SlotLabel>custom title slot</SlotLabel>}
          subTitleSlot={<SlotLabel>custom subtitle slot</SlotLabel>}
        >
          <Typography>
            Slots are useful for badges, counters, instance labels, and other
            compact metadata.
          </Typography>
        </Accordion>
      </Stack>
    </ThemeProvider>
  );
}
