import * as React from "react";
import { Banner, Stack, ThemeProvider } from "@open-ui-kit/core";

export default function BannerCloseButton() {
  const [closed, setClosed] = React.useState(false);

  return (
    <ThemeProvider>
      <Stack spacing={2}>
        {!closed && (
          <Banner
            status="warning"
            text="Dismissible banner. Closing it calls onClose."
            onClose={() => setClosed(true)}
          />
        )}
        <Banner
          status="info"
          showCloseButton={false}
          text="Persistent banner without a close button."
        />
      </Stack>
    </ThemeProvider>
  );
}
