import * as React from "react";
import { alpha } from "@mui/material/styles";
import { Link } from "../../Link";
import { FEATURE_TOGGLE } from "../../constants";

const showSurveyMessage = false;
const newVersion = false;

function isBlackFriday() {
  const today = Date.now();
  const start = new Date("2024-11-25").getTime();
  const end = new Date("2024-12-07T23:59:59Z").getTime();
  return today > start && today < end;
}

let hadHydrated = false;

export function AppFrameBanner() {
  if (!FEATURE_TOGGLE.enable_docsnav_banner) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mounted, setMounted] = React.useState(hadHydrated);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    hadHydrated = true;
    setMounted(true);
  }, []);

  let message = "";
  let href = "";

  if (showSurveyMessage) {
    message = `Help shape the Open UI Kit roadmap. Share feedback with the maintainers.`;
    href = "https://github.com/outshift-open/open-ui-kit/issues";
  } else if (mounted && isBlackFriday()) {
    message = `Open UI Kit docs are ready for review. Share feedback with the maintainers.`;
    href = "https://github.com/outshift-open/open-ui-kit/issues";
  } else if (newVersion) {
    message = `Open UI Kit docs are now available. Start with the overview.`;
    href = "/open-ui-kit-core/";
  }

  // Guard with NEXT_RUNTIME so this check is dead-code-eliminated from client bundles.
  if (process.env.NEXT_RUNTIME) {
    if (message.length > 100) {
      throw new Error(
        `Docs-infra: AppFrameBanner message is too long. It will overflow on smaller screens.`,
      );
    }
  }

  if (message === "" || href === "") {
    return null;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      variant="caption"
      sx={[
        (theme) => ({
          padding: theme.spacing("6px", 1.5),
          display: { xs: "none", md: "block" },
          fontWeight: "medium",
          textWrap: "nowrap",
          maxHeight: "34px",
          backgroundColor: alpha(theme.palette.primary[50], 0.8),
          border: "1px solid",
          borderColor: (theme.vars || theme).palette.divider,
          borderRadius: 1,
          transition: "all 150ms ease",
          "&:hover, &:focus-visible": {
            backgroundColor: alpha(theme.palette.primary[100], 0.4),
            borderColor: (theme.vars || theme).palette.primary[200],
          },
        }),
        (theme) =>
          theme.applyDarkStyles({
            backgroundColor: alpha(theme.palette.primary[900], 0.15),
            "&:hover, &:focus-visible": {
              backgroundColor: alpha(theme.palette.primary[900], 0.4),
              borderColor: (theme.vars || theme).palette.primary[900],
            },
          }),
      ]}
    >
      {message}
    </Link>
  );
}
