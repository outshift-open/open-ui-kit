import { styled, alpha } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import {
  LogoWithCopyMenu,
  DeferredAppSearch,
} from "@mui/internal-core-docs/AppLayout";
import ThemeModeToggle from "docs/src/components/header/ThemeModeToggle";
import { useTranslate } from "@mui/internal-core-docs/i18n";
import { Link } from "@mui/internal-core-docs/Link";
import {
  OpenUiKitLogomarkIcon,
  openUiKitSvgLogoString,
  openUiKitSvgWordmarkString,
} from "docs/src/branding/OpenUiKitLogo";

const Header = styled("header")(({ theme }) => [
  {
    position: "sticky",
    top: 0,
    transition: theme.transitions.create("top"),
    zIndex: theme.zIndex.appBar,
    backgroundColor: "rgba(255,255,255,0.8)",
    backdropFilter: "blur(8px)",
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  } as const,
  theme.applyDarkStyles({
    backgroundColor: alpha(theme.palette.primaryDark[900], 0.7),
  }),
]);

const HEIGHT = 60;

interface AppHeaderProps {
  gitHubRepository?: string;
}

export default function AppHeader(props: AppHeaderProps) {
  const { gitHubRepository = "https://github.com/outshift-open/open-ui-kit" } =
    props;
  const t = useTranslate();

  return (
    <Header>
      <GlobalStyles
        styles={{
          ":root": {
            "--MuiDocs-header-height": `${HEIGHT}px`,
          },
        }}
      />
      <Container
        sx={{ display: "flex", alignItems: "center", minHeight: HEIGHT }}
      >
        <LogoWithCopyMenu
          logo={OpenUiKitLogomarkIcon}
          logomarkSvgString={openUiKitSvgLogoString}
          logotypeSvgString={openUiKitSvgWordmarkString}
        />
        <Box sx={{ display: { xs: "none", md: "initial" } }}>
          <Stack direction="row" spacing={0.5} sx={{ ml: 1 }}>
            <Button
              component={Link}
              href="/open-ui-kit-core/"
              size="small"
              color="inherit"
            >
              Docs
            </Button>
            <Button
              component={Link}
              href="/open-ui-kit-core/all-components/"
              size="small"
              color="inherit"
            >
              Components
            </Button>
            <Button
              component="a"
              href="https://www.npmjs.com/package/@open-ui-kit/core"
              target="_blank"
              rel="noopener"
              size="small"
              color="inherit"
            >
              Package
            </Button>
          </Stack>
        </Box>
        <Box sx={{ ml: "auto" }} />
        <Stack direction="row" spacing={1}>
          <DeferredAppSearch />
          <Tooltip title={t("appFrame.github")} enterDelay={300}>
            <IconButton
              component="a"
              color="primary"
              size="small"
              href={gitHubRepository}
              target="_blank"
              rel="noopener"
              data-ga-event-category="header"
              data-ga-event-action="github"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <ThemeModeToggle />
        </Stack>
        <Box sx={{ display: { md: "none" }, ml: 1 }}>
          <Button
            component={Link}
            href="/open-ui-kit-core/"
            size="small"
            color="primary"
          >
            Docs
          </Button>
        </Box>
      </Container>
    </Header>
  );
}
