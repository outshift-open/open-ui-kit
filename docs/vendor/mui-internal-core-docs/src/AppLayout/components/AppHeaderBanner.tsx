import * as React from "react";
import Typography from "@mui/material/Typography";
import type { Theme } from "@mui/material/styles";
import { Link } from "../../Link";
import { FEATURE_TOGGLE } from "../../constants";

const linkStyleOverrides = (theme: Theme) => ({
  color: "inherit",
  textDecorationColor: "currentColor",
  "&:hover": {
    color: (theme.vars || theme).palette.primary[200],
  },
  ...theme.applyDarkStyles({
    color: "inherit",
    "&:hover": {
      color: (theme.vars || theme).palette.primary[200],
    },
  }),
});

function getCustomMessage() {
  return (
    <React.Fragment>
      {`Open UI Kit docs are moving into their new home. Start with the `}
      &nbsp;
      <Link
        href="/open-ui-kit-core/"
        target="_blank"
        rel="noopener"
        underline="always"
        sx={linkStyleOverrides}
      >
        documentation →
      </Link>
    </React.Fragment>
  );
}

function getDefaultHiringMessage() {
  return (
    <React.Fragment>
      Open UI Kit is open source. Issues and contributions are
      welcome.&nbsp;&#160;
      <Link
        href="https://github.com/outshift-open/open-ui-kit"
        target="_blank"
        rel="noopener"
        underline="always"
        sx={linkStyleOverrides}
      >
        View GitHub →
      </Link>
    </React.Fragment>
  );
}

export function AppHeaderBanner() {
  const showCustomMessage = true;
  const bannerMessage = showCustomMessage
    ? getCustomMessage()
    : getDefaultHiringMessage();

  return FEATURE_TOGGLE.enable_website_banner ? (
    <Typography
      sx={[
        {
          fontWeight: "medium",
        },
        (theme) => ({
          color: "#fff",
          p: "12px",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "start", sm: "center" },
          justifyContent: "center",
          fontSize: theme.typography.pxToRem(13),
          background: `linear-gradient(-90deg, ${(theme.vars || theme).palette.primary[700]}, ${
            (theme.vars || theme).palette.primary[500]
          } 120%)`,
          ...theme.applyDarkStyles({
            background: `linear-gradient(90deg, ${(theme.vars || theme).palette.primary[900]}, ${
              (theme.vars || theme).palette.primary[600]
            } 120%)`,
          }),
        }),
      ]}
    >
      {bannerMessage}
    </Typography>
  ) : null;
}
