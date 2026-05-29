import * as React from "react";
import {
  Banner,
  type StatusBanner,
  Stack,
  ThemeProvider,
} from "@open-ui-kit/core";

const statuses: Array<[StatusBanner, string]> = [
  ["negative", "Deployment failed. Review the error log before retrying."],
  ["warning", "Certificate expires in 7 days."],
  ["success", "Changes were saved successfully."],
  ["info", "Scheduled maintenance starts tonight at 22:00 UTC."],
  ["excellent", "Workspace health score improved this week."],
];

export default function BannerStatuses() {
  return (
    <ThemeProvider>
      <Stack spacing={2}>
        {statuses.map(([status, text]) => (
          <Banner key={status} status={status} text={text} />
        ))}
      </Stack>
    </ThemeProvider>
  );
}
