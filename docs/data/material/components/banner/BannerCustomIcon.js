import * as React from "react";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { Banner, ThemeProvider } from "@open-ui-kit/core";

export default function BannerCustomIcon() {
  return (
    <ThemeProvider>
      <Banner
        status="excellent"
        icon={<CampaignOutlinedIcon />}
        text="New template pack is available for this workspace."
      />
    </ThemeProvider>
  );
}
