/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Box, Stack, Typography } from "@/components";
import { CopyButton } from "@/components/copy-button";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import type { Theme } from "@mui/material/styles";
import type { ComponentProps } from "react";

export interface TypographyVariant {
  token: string;
  label: string;
  usage: string;
  family: string;
  fontWeight: number;
  fontWeightLabel: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing?: string;
  variant?: ComponentProps<typeof Typography>["variant"];
}

interface TypographySectionProps {
  title: string;
  description?: string;
  variants: TypographyVariant[];
}

const metadataLabelSx = (theme: Theme) => ({
  color: theme.palette.vars.baseTextMedium,
  fontWeight: 600,
  minWidth: 64,
});

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return false;
  }

  return new URLSearchParams(window.location.search)
    .get("globals")
    ?.includes("theme:dark");
}

function MetaLine({ label, value }: { label: string; value: string }) {
  return (
    <Stack direction="row" gap={1.5} sx={{ alignItems: "baseline" }}>
      <Typography variant="captionSemibold" sx={metadataLabelSx}>
        {label}
      </Typography>
      <Typography
        variant="caption"
        sx={(theme) => ({
          color: theme.palette.vars.baseTextDefault,
        })}
      >
        {value}
      </Typography>
    </Stack>
  );
}

function TypographyRow({ variant }: { variant: TypographyVariant }) {
  const {
    token,
    label,
    usage,
    family,
    fontWeight,
    fontWeightLabel,
    fontSize,
    lineHeight,
    letterSpacing,
    variant: muiVariant,
  } = variant;

  return (
    <Box
      sx={(theme) => ({
        borderBottom: `1px solid ${theme.palette.vars.baseBorderMedium}`,
        py: { xs: 3, md: 4 },
        "&:last-of-type": {
          borderBottom: 0,
        },
      })}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={{ xs: 2, md: 4 }}
        sx={{ justifyContent: "space-between" }}
      >
        <Typography
          component="p"
          variant={muiVariant}
          sx={(theme) => ({
            color: theme.palette.vars.baseTextStrong,
            flex: "1 1 auto",
            fontFamily: family,
            fontSize,
            fontWeight,
            letterSpacing: letterSpacing ?? 0,
            lineHeight,
            m: 0,
            minWidth: 0,
            overflowWrap: "anywhere",
          })}
        >
          {label}
        </Typography>
        <Typography
          variant="captionSemibold"
          sx={(theme) => ({
            color: theme.palette.vars.baseTextDefault,
            flex: { xs: "0 1 auto", md: "0 1 440px" },
            maxWidth: 440,
          })}
        >
          {usage}
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={{ xs: 1.25, sm: 4 }}
        sx={{
          alignItems: { xs: "flex-start", sm: "center" },
          mt: 2,
        }}
      >
        <Stack gap={1.25} sx={{ minWidth: 160 }}>
          <MetaLine label="Family" value={fontWeightLabel} />
          <MetaLine label="Size" value={fontSize} />
          <MetaLine label="Line height" value={lineHeight} />
          {letterSpacing && <MetaLine label="Tracking" value={letterSpacing} />}
        </Stack>
        <CopyButton
          text={token}
          size="medium"
          disableMargin
          copyLabel={`Copy ${token} token`}
          copiedLabel={`${token} copied`}
          sx={(theme) => ({
            border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
            borderRadius: "8px",
            height: 44,
            width: 44,
          })}
        />
      </Stack>
    </Box>
  );
}

function TypographySectionContent({
  title,
  description,
  variants,
}: TypographySectionProps) {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.vars.baseBackgroundStrong,
        borderRadius: { xs: "12px", md: 0 },
        mb: 6,
        p: { xs: 2, md: 0 },
      })}
    >
      <Stack gap={3}>
        <Box
          sx={(theme) => ({
            borderTop: `2px solid ${theme.palette.vars.baseBorderStrong}`,
            pt: 3,
          })}
        >
          <Typography
            component="h2"
            variant="h5"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextDefault,
              m: 0,
            })}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              variant="body2"
              sx={(theme) => ({
                color: theme.palette.vars.baseTextStrong,
                mt: 1,
              })}
            >
              {description}
            </Typography>
          )}
        </Box>
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.vars.controlBackgroundDefault,
            borderRadius: "16px",
            px: { xs: 2, md: 3 },
          })}
        >
          {variants.map((variant) => (
            <TypographyRow key={variant.token} variant={variant} />
          ))}
        </Box>
      </Stack>
    </Box>
  );
}

export function TypographySection(props: TypographySectionProps) {
  return (
    <ThemeProvider
      defaultMode={getInitialDarkMode() ? ThemeMode.Dark : ThemeMode.Light}
    >
      <TypographySectionContent {...props} />
    </ThemeProvider>
  );
}
