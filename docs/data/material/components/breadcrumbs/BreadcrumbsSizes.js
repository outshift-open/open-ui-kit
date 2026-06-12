import * as React from "react";
import NoSsr from "@mui/material/NoSsr";
import { MemoryRouter } from "react-router-dom";
import {
  Breadcrumbs,
  GeneralSize,
  Stack,
  ThemeProvider,
  Typography,
} from "@open-ui-kit/core";

const items = [
  { text: "Inventory", link: "/inventory" },
  { text: "Devices", link: "/inventory/devices" },
  { text: "Switch-042", link: "/inventory/devices/switch-042" },
];

export default function BreadcrumbsSizes() {
  return (
    <ThemeProvider>
      <NoSsr>
        <MemoryRouter>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography variant="body2Semibold">Medium</Typography>
              <Breadcrumbs items={items} size={GeneralSize.Medium} />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body2Semibold">Small</Typography>
              <Breadcrumbs items={items} size={GeneralSize.Small} />
            </Stack>
          </Stack>
        </MemoryRouter>
      </NoSsr>
    </ThemeProvider>
  );
}
