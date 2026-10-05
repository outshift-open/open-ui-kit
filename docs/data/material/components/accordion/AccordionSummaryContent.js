import * as React from "react";
import ArrowForward from "@mui/icons-material/ArrowForward";
import GridView from "@mui/icons-material/GridView";
import Hub from "@mui/icons-material/Hub";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
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
            <Stack direction="row" alignItems="center" gap="8px">
              <Stack
                direction="row"
                alignItems="center"
                gap="4px"
                sx={(theme) => ({
                  color: theme.palette.vars.interactiveSecondaryDefaultDefault,
                })}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{ lineHeight: 1.25 }}
                >
                  View all
                </Typography>
                <ArrowForward fontSize="small" />
              </Stack>
              <KeyboardArrowRight
                fontSize="small"
                sx={(theme) => ({
                  color: theme.palette.vars.controlIconDefault,
                  transition: theme.transitions.create("transform", {
                    duration: theme.transitions.duration.shortest,
                  }),
                  ".MuiAccordionSummary-root:hover:not(.Mui-disabled) &": {
                    color: theme.palette.vars.controlIconStrong,
                  },
                  ".MuiAccordionSummary-root.Mui-expanded &": {
                    transform: "rotate(90deg)",
                  },
                  ".Mui-disabled &": {
                    color: theme.palette.vars.baseTextDisabled,
                  },
                })}
              />
            </Stack>
          }
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
