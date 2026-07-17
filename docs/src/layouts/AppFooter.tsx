import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { Link } from "@mui/internal-core-docs/Link";
import { OpenUiKitLogomarkIcon } from "docs/src/branding/OpenUiKitLogo";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Open UI Kit Core", href: "/open-ui-kit-core/" },
      { label: "Components", href: "/open-ui-kit-core/all-components/" },
      {
        label: "Storybook",
        href: "/storybook/",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        label: "Installation",
        href: "/open-ui-kit-core/getting-started/installation/",
      },
      { label: "Usage", href: "/open-ui-kit-core/getting-started/usage/" },
      { label: "Support", href: "/open-ui-kit-core/getting-started/support/" },
      {
        label: "Versions",
        href: "/open-ui-kit-core/getting-started/versions/",
      },
    ],
  },
  {
    title: "Explore",
    links: [
      {
        label: "All components",
        href: "/open-ui-kit-core/all-components/",
      },
      { label: "Button", href: "/open-ui-kit-core/react-button/" },
      { label: "Text Field", href: "/open-ui-kit-core/react-text-field/" },
      {
        label: "Storybook",
        href: "/storybook/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com/outshift-open/open-ui-kit" },
      {
        label: "Issues",
        href: "https://github.com/outshift-open/open-ui-kit/issues",
      },
      {
        label: "Discussions",
        href: "https://github.com/outshift-open/open-ui-kit/discussions",
      },
      { label: "npm", href: "https://www.npmjs.com/package/@open-ui-kit/core" },
    ],
  },
];

export default function AppFooter() {
  return (
    <Container component="footer">
      <Box
        sx={{
          py: { xs: 4, sm: 8 },
          display: "grid",
          gridAutoColumns: "1fr",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "1fr 1.75fr",
            lg: "1fr 1fr",
          },
          gridTemplateRows: "auto",
          "& a:not(.MuiIconButton-root)": {
            pt: 0.5,
            pb: 0.5,
            color: "text.secondary",
            typography: "body2",
            "&:hover": {
              color: "primary.main",
              textDecoration: "underline",
            },
          },
        }}
      >
        <div>
          <Link
            prefetch={false}
            href="/"
            aria-label="Go to the homepage"
            sx={{ mb: 2 }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <OpenUiKitLogomarkIcon height={28} width={28} />
              <Typography sx={{ fontWeight: 800, color: "#00142b" }}>
                Open UI Kit
              </Typography>
            </Box>
          </Link>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ fontWeight: "semiBold" }}
          >
            Built for product teams
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", mb: 1, maxWidth: 320 }}
          >
            Reusable React components, design tokens, and documentation for
            consistent interfaces.
          </Typography>
        </div>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
            gridAutoColumns: "1fr",
            gap: 2,
          }}
        >
          {footerGroups.map((group) => (
            <Box
              key={group.title}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: "semiBold", mb: 0.5 }}
              >
                {group.title}
              </Typography>
              {group.links.map((link) => {
                const isExternal = link.href.startsWith("http");

                return (
                  <Link
                    key={link.href}
                    prefetch={false}
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </Box>
          ))}
        </Box>
      </Box>
      <Divider />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: { sm: "space-between" },
          gap: { xs: 2, sm: 1 },
          my: 4,
        }}
      >
        <Typography
          variant="caption"
          sx={{ color: "text.tertiary", fontWeight: 400 }}
        >
          Copyright © {new Date().getFullYear()} Open UI Kit contributors.
        </Typography>
        <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: "wrap" }}>
          <IconButton
            target="_blank"
            rel="noopener"
            href="https://github.com/outshift-open/open-ui-kit"
            aria-label="GitHub"
            title="GitHub"
            size="small"
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener"
            href="https://github.com/outshift-open/open-ui-kit/releases"
            aria-label="Releases"
            title="Releases"
            size="small"
          >
            <RssFeedIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}
