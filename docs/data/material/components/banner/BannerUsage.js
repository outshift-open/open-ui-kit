import * as React from "react";
import { Banner, ThemeProvider } from "@open-ui-kit/core";

export default function BannerUsage() {
  return (
    <ThemeProvider>
      <Banner
        status="info"
        text="Scheduled maintenance starts tonight at 22:00 UTC."
      />
    </ThemeProvider>
  );
}
