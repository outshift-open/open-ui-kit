import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Section from "docs/src/layouts/Section";
import SectionHeadline from "@mui/internal-core-docs/SectionHeadline";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { OpenUiKitLogomarkIcon } from "docs/src/branding/OpenUiKitLogo";

function NotFoundIllustration() {
  return (
    <Box
      sx={(theme) => ({
        mx: "auto",
        mb: 4,
        height: { xs: 220, sm: 190 },
        width: { xs: 280, sm: 420 },
        display: "flex",
        flexDirection: "column",
        borderRadius: "20px",
        border: "1px solid",
        borderColor: "primary.200",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(231, 241, 255, 0.92), rgba(255, 255, 255, 0.96))",
        boxShadow: "0 24px 60px rgba(24, 122, 220, 0.16)",
        ...theme.applyDarkStyles({
          borderColor: "primaryDark.700",
          background:
            "linear-gradient(180deg, rgba(1, 30, 62, 0.98), rgba(0, 20, 43, 0.98))",
          boxShadow: "0 24px 60px rgba(0, 0, 0, 0.34)",
        }),
      })}
    >
      <Box
        sx={{
          p: 1.5,
          display: "flex",
          gap: "6px",
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        {["error.500", "warning.500", "success.500"].map((color) => (
          <Box
            key={color}
            sx={{
              width: 10,
              height: 10,
              borderRadius: 2,
              bgcolor: color,
              opacity: 0.85,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
      >
        <Box
          sx={(theme) => ({
            display: "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems: "center",
            gap: 2,
            width: "100%",
            p: 2,
            borderRadius: "16px",
            border: "1px solid",
            borderColor: "primary.200",
            bgcolor: "rgba(255,255,255,0.74)",
            ...theme.applyDarkStyles({
              borderColor: "primaryDark.700",
              bgcolor: "rgba(0, 20, 43, 0.62)",
            }),
          })}
        >
          <OpenUiKitLogomarkIcon width={46} height={46} />
          <Box>
            <Typography sx={{ fontWeight: 700, color: "text.primary" }}>
              Open UI Kit Core
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              This route is not in the docs map.
            </Typography>
          </Box>
          <SearchRoundedIcon sx={{ color: "primary.500" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default function NotFoundHero() {
  return (
    <Section
      bg="gradient"
      sx={{
        minHeight: "calc(100vh - var(--MuiDocs-header-height, 60px))",
        display: "flex",
        alignItems: "center",
        "& .MuiContainer-root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <NotFoundIllustration />
      <SectionHeadline
        alwaysCenter
        title={
          <Typography
            component="h1"
            variant="h4"
            sx={{ fontWeight: "semiBold" }}
          >
            Page not found
          </Typography>
        }
        description="That page is not part of the Open UI Kit docs yet. Head back to the component library or search the docs from the header."
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={1.5}
        sx={{ mt: 3 }}
        useFlexGap
      >
        <Button
          component={Link}
          href="/open-ui-kit-core/"
          variant="contained"
          endIcon={<ArrowForwardRoundedIcon />}
          underline="none"
        >
          Open docs
        </Button>
        <Button
          component={Link}
          href="/open-ui-kit-core/all-components/"
          variant="outlined"
          underline="none"
        >
          Browse components
        </Button>
      </Stack>
    </Section>
  );
}
