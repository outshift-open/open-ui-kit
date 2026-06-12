import * as React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import { alpha } from "@mui/material/styles";
import { BrandingCssVarsProvider } from "@mui/internal-core-docs/branding";
import { Link } from "@mui/internal-core-docs/Link";
import ThemeModeToggle from "docs/src/components/header/ThemeModeToggle";
import {
  OpenUiKitLogomarkIcon,
  openUiKitSvgLogoString,
} from "docs/src/branding/OpenUiKitLogo";

const features = [
  {
    title: "Application components",
    description:
      "Reusable React building blocks with sensible defaults for dense product screens.",
  },
  {
    title: "Themeable by design",
    description:
      "Light and dark palettes, interaction states, spacing, and typography stay aligned.",
  },
  {
    title: "Docs beside code",
    description:
      "Usage notes and examples live with the package, so adoption stays practical.",
  },
];

const installCommand =
  "npm install @open-ui-kit/core @mui/material @emotion/react @emotion/styled";

const openUiKitColors = {
  surfaceLight50: "#fbfcfe",
  surfaceLight100: "#f5f8fd",
  surfaceLight200: "#eff3fc",
  surfaceDark500: "#0d274d",
  surfaceDark800: "#041930",
  surfaceDark900: "#00142b",
  blue50: "#e8f1ff",
  blue100: "#9bcaff",
  blue200: "#79b9ff",
  blue300: "#187adc",
  blue400: "#0063c2",
  blue500: "#0051af",
  grey50: "#e8e9ea",
  grey100: "#c5c7cb",
  grey200: "#9ea2a8",
  grey400: "#59616b",
  grey500: "#3c4551",
  orange500: "#fbaf45",
};

export default function HomePage() {
  const [installCopied, setInstallCopied] = React.useState(false);

  const handleCopyInstall = React.useCallback(async () => {
    await navigator.clipboard.writeText(installCommand);
    setInstallCopied(true);
    window.setTimeout(() => setInstallCopied(false), 1600);
  }, []);

  return (
    <BrandingCssVarsProvider>
      <Head>
        <title>Open UI Kit</title>
        <meta
          name="description"
          content="Open UI Kit is an open source React component library and design system for product teams."
        />
      </Head>
      <Box
        component="header"
        sx={(theme) => ({
          position: "fixed",
          top: { xs: 10, md: 14 },
          left: 0,
          right: 0,
          zIndex: 10,
          px: { xs: 2, md: 3 },
          pointerEvents: "none",
        })}
      >
        <Container
          sx={(theme) => ({
            minHeight: { xs: 52, md: 56 },
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.75, sm: 1 },
            pointerEvents: "auto",
            border: "1px solid",
            borderColor: alpha(openUiKitColors.grey100, 0.72),
            borderRadius: "999px",
            bgcolor: alpha("#ffffff", 0.76),
            boxShadow: "0 8px 24px rgba(200, 213, 245, 0.22)",
            backdropFilter: "blur(14px)",
            px: { xs: 1.25, md: 1.5 },
            ...theme.applyDarkStyles({
              bgcolor: alpha(openUiKitColors.surfaceDark900, 0.76),
              borderColor: alpha(openUiKitColors.blue300, 0.22),
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.22)",
            }),
          })}
        >
          <Stack
            component={Link}
            href="/"
            direction="row"
            spacing={1.25}
            sx={{
              alignItems: "center",
              minWidth: 0,
              textDecoration: "none",
            }}
          >
            <OpenUiKitLogomarkIcon height={30} width={30} />
            <Typography
              sx={(theme) => ({
                fontWeight: 800,
                color: openUiKitColors.grey500,
                whiteSpace: "nowrap",
                display: { xs: "none", sm: "block" },
                ...theme.applyDarkStyles({
                  color: openUiKitColors.grey50,
                }),
              })}
            >
              Open UI Kit
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {[
              ["Docs", "/open-ui-kit-core/"],
              ["Components", "/open-ui-kit-core/all-components/"],
              [
                "Storybook",
                "https://main--68cc22452afe30d90e4ca977.chromatic.com",
              ],
            ].map(([label, href]) => {
              const isExternal = href.startsWith("http");

              return (
                <Button
                  key={href}
                  component={Link}
                  href={href}
                  {...(isExternal ? { target: "_blank", rel: "noopener" } : {})}
                  variant="text"
                  size="small"
                  sx={(theme) => ({
                    color: openUiKitColors.grey400,
                    fontWeight: 700,
                    px: 1.4,
                    borderRadius: "999px",
                    "&:hover": {
                      bgcolor: alpha(openUiKitColors.blue50, 0.78),
                      color: openUiKitColors.blue500,
                    },
                    ...theme.applyDarkStyles({
                      color: "#c7d6ec",
                      "&:hover": {
                        bgcolor: alpha(openUiKitColors.blue300, 0.12),
                        color: openUiKitColors.blue100,
                      },
                    }),
                  })}
                >
                  {label}
                </Button>
              );
            })}
          </Stack>
          <Button
            component={Link}
            href="/open-ui-kit-core/"
            variant="text"
            size="small"
            sx={(theme) => ({
              color: openUiKitColors.blue500,
              fontWeight: 700,
              display: { xs: "inline-flex", md: "none" },
              borderRadius: "999px",
              ...theme.applyDarkStyles({
                color: openUiKitColors.blue100,
              }),
            })}
          >
            Docs
          </Button>
          <ThemeModeToggle />
          <IconButton
            component="a"
            href="https://github.com/outshift-open/open-ui-kit"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            sx={(theme) => ({
              color: openUiKitColors.blue500,
              width: 36,
              height: 36,
              border: "1px solid",
              borderColor: alpha(openUiKitColors.grey200, 0.6),
              bgcolor: alpha("#ffffff", 0.34),
              "&:hover": {
                borderColor: alpha(openUiKitColors.blue300, 0.8),
                bgcolor: alpha(openUiKitColors.blue50, 0.8),
              },
              ...theme.applyDarkStyles({
                color: openUiKitColors.blue100,
                borderColor: alpha(openUiKitColors.blue300, 0.28),
                bgcolor: alpha(openUiKitColors.blue500, 0.1),
                "&:hover": {
                  borderColor: alpha(openUiKitColors.blue200, 0.62),
                  bgcolor: alpha(openUiKitColors.blue500, 0.18),
                },
              }),
            })}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
        </Container>
      </Box>

      <Box
        component="main"
        sx={(theme) => ({
          height: "100vh",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${openUiKitColors.surfaceLight50} 0%, ${openUiKitColors.blue50} 52%, ${openUiKitColors.surfaceLight100} 100%)`,
          transition: "background 150ms ease",
          ...theme.applyDarkStyles({
            background: `linear-gradient(180deg, ${openUiKitColors.surfaceDark900} 0%, ${openUiKitColors.surfaceDark500} 54%, ${openUiKitColors.surfaceDark800} 100%)`,
          }),
        })}
      >
        <Container
          sx={{
            height: "100%",
            display: "grid",
            gridTemplateRows: "1fr auto",
            alignItems: "center",
            pt: { xs: 9, md: 10 },
            pb: { xs: 3, md: 4 },
          }}
        >
          <Box sx={{ maxWidth: 880, minWidth: 0 }}>
            <Box
              component="img"
              alt=""
              src={`data:image/svg+xml;utf8,${encodeURIComponent(openUiKitSvgLogoString)}`}
              sx={{
                width: { xs: 54, md: 64 },
                height: { xs: 54, md: 64 },
                mb: { xs: 2, md: 2.5 },
              }}
            />
            <Typography
              variant="h1"
              sx={(theme) => ({
                maxWidth: 780,
                fontSize: { xs: 38, sm: 52, md: 70 },
                lineHeight: 1,
                fontWeight: 800,
                color: openUiKitColors.grey500,
                ...theme.applyDarkStyles({
                  color: "#ffffff",
                }),
              })}
            >
              Open UI Kit
            </Typography>
            <Typography
              sx={(theme) => ({
                mt: { xs: 2, md: 3 },
                maxWidth: 720,
                color: openUiKitColors.grey400,
                fontSize: { xs: 17, md: 21 },
                lineHeight: 1.45,
                ...theme.applyDarkStyles({
                  color: "#c7d6ec",
                }),
              })}
            >
              A React component library for teams who want polished defaults,
              flexible tokens, and documentation that stays close to the code.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.25}
              sx={{ mt: { xs: 3, md: 3.5 } }}
            >
              <Button
                component={Link}
                href="/open-ui-kit-core/"
                size="large"
                variant="contained"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={(theme) => ({
                  "&&": {
                    color: "#ffffff",
                  },
                  bgcolor: openUiKitColors.blue500,
                  boxShadow: "0px 4px 12px rgba(200, 213, 245, 0.5)",
                  "& .MuiButton-endIcon": {
                    color: "inherit",
                  },
                  "&:hover": {
                    bgcolor: openUiKitColors.blue400,
                    color: "#ffffff",
                  },
                  "&:focus-visible": {
                    color: "#ffffff",
                  },
                  ...theme.applyDarkStyles({
                    bgcolor: openUiKitColors.blue300,
                    boxShadow: "0px 4px 12px rgba(6, 34, 66, 0.5)",
                    "&:hover": {
                      bgcolor: openUiKitColors.blue400,
                      color: "#ffffff",
                    },
                  }),
                })}
              >
                Read the docs
              </Button>
              <Button
                component="a"
                href="https://www.npmjs.com/package/@open-ui-kit/core"
                target="_blank"
                rel="noopener"
                size="large"
                variant="outlined"
                sx={(theme) => ({
                  color: openUiKitColors.blue500,
                  borderColor: openUiKitColors.blue100,
                  bgcolor: alpha(openUiKitColors.blue50, 0.32),
                  "&:hover": {
                    borderColor: openUiKitColors.blue300,
                    bgcolor: openUiKitColors.blue50,
                  },
                  ...theme.applyDarkStyles({
                    color: openUiKitColors.blue100,
                    borderColor: alpha(openUiKitColors.blue200, 0.45),
                    bgcolor: alpha(openUiKitColors.surfaceDark900, 0.2),
                    "&:hover": {
                      borderColor: openUiKitColors.blue100,
                      bgcolor: alpha(openUiKitColors.blue500, 0.18),
                    },
                  }),
                })}
              >
                View package
              </Button>
            </Stack>
            <Box
              sx={(theme) => ({
                mt: { xs: 2, md: 2.5 },
                display: "inline-grid",
                gap: 0.75,
                maxWidth: "100%",
                px: 1.5,
                py: 1.1,
                borderRadius: "8px",
                border: "1px solid",
                borderColor: alpha(openUiKitColors.grey100, 0.88),
                bgcolor: alpha("#ffffff", 0.58),
                color: openUiKitColors.grey500,
                overflowX: "auto",
                boxShadow: "0px 4px 12px rgba(200, 213, 245, 0.24)",
                ...theme.applyDarkStyles({
                  borderColor: alpha(openUiKitColors.blue300, 0.22),
                  bgcolor: alpha(openUiKitColors.surfaceDark900, 0.35),
                  color: openUiKitColors.grey50,
                  boxShadow: "0px 4px 12px rgba(6, 34, 66, 0.34)",
                }),
              })}
            >
              <Stack
                direction="row"
                spacing={1}
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Typography
                  sx={(theme) => ({
                    color: openUiKitColors.grey400,
                    fontSize: 12,
                    fontWeight: 800,
                    lineHeight: 1,
                    ...theme.applyDarkStyles({
                      color: openUiKitColors.blue100,
                    }),
                  })}
                >
                  1. Install the package and peer dependencies
                </Typography>
                <Tooltip title={installCopied ? "Copied" : "Copy install"}>
                  <IconButton
                    aria-label="Copy npm install command"
                    size="small"
                    onClick={handleCopyInstall}
                    sx={(theme) => ({
                      width: 28,
                      height: 28,
                      color: openUiKitColors.blue500,
                      border: "1px solid",
                      borderColor: alpha(openUiKitColors.blue100, 0.8),
                      bgcolor: alpha(openUiKitColors.blue50, 0.5),
                      "&:hover": {
                        bgcolor: openUiKitColors.blue50,
                        borderColor: openUiKitColors.blue300,
                      },
                      ...theme.applyDarkStyles({
                        color: openUiKitColors.blue100,
                        borderColor: alpha(openUiKitColors.blue300, 0.28),
                        bgcolor: alpha(openUiKitColors.blue500, 0.1),
                        "&:hover": {
                          bgcolor: alpha(openUiKitColors.blue500, 0.18),
                          borderColor: alpha(openUiKitColors.blue200, 0.62),
                        },
                      }),
                    })}
                  >
                    {installCopied ? (
                      <CheckRoundedIcon sx={{ fontSize: 16 }} />
                    ) : (
                      <ContentCopyRoundedIcon sx={{ fontSize: 15 }} />
                    )}
                  </IconButton>
                </Tooltip>
              </Stack>
              <Box
                component="code"
                sx={{
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: { xs: 12, md: 13 },
                  lineHeight: 1.5,
                  whiteSpace: "nowrap",
                }}
              >
                {installCommand}
              </Box>
              <Box
                component="code"
                sx={(theme) => ({
                  fontFamily:
                    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                  fontSize: { xs: 12, md: 13 },
                  lineHeight: 1.5,
                  color: openUiKitColors.blue500,
                  whiteSpace: "nowrap",
                  ...theme.applyDarkStyles({
                    color: openUiKitColors.blue100,
                  }),
                })}
              >
                2. Wrap your root with import {"{ ThemeProvider }"} from
                &quot;@open-ui-kit/core&quot;
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 3, md: 2.5 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 1.5, md: 3 },
            }}
          >
            {features.map((feature) => (
              <Box
                key={feature.title}
                sx={(theme) => ({
                  borderTop: "3px solid",
                  borderColor: openUiKitColors.blue300,
                  pt: { xs: 1.2, md: 1.75 },
                  ...theme.applyDarkStyles({
                    borderColor: openUiKitColors.blue200,
                  }),
                })}
              >
                <Typography
                  sx={(theme) => ({
                    fontWeight: 800,
                    fontSize: { xs: 14, md: 16 },
                    color: openUiKitColors.grey500,
                    ...theme.applyDarkStyles({
                      color: "#ffffff",
                    }),
                  })}
                >
                  {feature.title}
                </Typography>
                <Typography
                  sx={(theme) => ({
                    mt: 0.75,
                    color: openUiKitColors.grey400,
                    fontSize: { xs: 13, md: 15 },
                    lineHeight: 1.55,
                    ...theme.applyDarkStyles({
                      color: "#c7d6ec",
                    }),
                  })}
                >
                  {feature.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </BrandingCssVarsProvider>
  );
}
