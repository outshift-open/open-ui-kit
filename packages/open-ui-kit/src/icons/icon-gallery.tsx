/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from "react";
import type { SvgIconProps } from "@mui/material";
import { Box, Stack, Typography } from "@/components";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";

type IconComponent = React.ComponentType<SvgIconProps>;

interface IconTileProps {
  name: string;
  Icon: IconComponent;
}

function IconTile({ name, Icon }: IconTileProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(name).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <Box
      component="button"
      type="button"
      onClick={handleCopy}
      title={`Click to copy: ${name}`}
      aria-label={`Copy ${name} icon export name`}
      sx={(theme) => ({
        alignItems: "center",
        backgroundColor: copied
          ? theme.palette.vars.successBackgroundWeak
          : "transparent",
        border: `1px solid ${
          copied
            ? theme.palette.vars.successBorderDefault
            : theme.palette.vars.controlBorderWeak
        }`,
        borderRadius: "8px",
        color: copied
          ? theme.palette.vars.successTextDefault
          : theme.palette.vars.controlIconDefault,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        font: "inherit",
        gap: 1,
        justifyContent: "center",
        minHeight: 96,
        minWidth: 96,
        p: 1.5,
        transition:
          "background-color 120ms ease, border-color 120ms ease, color 120ms ease",
        width: 104,
        "&:hover": {
          backgroundColor: copied
            ? theme.palette.vars.successBackgroundWeak
            : theme.palette.vars.baseBackgroundHover,
          borderColor: copied
            ? theme.palette.vars.successBorderDefault
            : theme.palette.vars.controlBorderHover,
        },
        "&:focus-visible": {
          borderColor: theme.palette.vars.controlBorderActive,
          outline: `2px solid ${theme.palette.vars.controlBorderActive}`,
          outlineOffset: 2,
        },
      })}
    >
      <Icon sx={{ fontSize: 24 }} />
      <Typography
        component="span"
        variant="caption"
        sx={(theme) => ({
          color: copied
            ? theme.palette.vars.successTextDefault
            : theme.palette.vars.baseTextWeak,
          lineHeight: "14px",
          maxWidth: "100%",
          overflowWrap: "anywhere",
          textAlign: "center",
        })}
      >
        {copied ? "Copied!" : name}
      </Typography>
    </Box>
  );
}

interface IconSectionProps {
  title: string;
  description?: string;
  icons: [string, IconComponent][];
}

export function IconSection({ title, description, icons }: IconSectionProps) {
  return (
    <Stack gap={2} sx={{ mb: 6 }}>
      <Box
        sx={(theme) => ({
          borderTop: `1px solid ${theme.palette.vars.baseBorderDefault}`,
          pt: 2.5,
        })}
      >
        <Stack direction="row" gap={1.25} sx={{ alignItems: "baseline" }}>
          <Typography
            component="h2"
            variant="h6"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextStrong,
              m: 0,
            })}
          >
            {title}
          </Typography>
          <Typography
            component="span"
            variant="caption"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextWeak,
            })}
          >
            {icons.length} icons
          </Typography>
        </Stack>
        {description && (
          <Typography
            variant="body2"
            sx={(theme) => ({
              color: theme.palette.vars.baseTextMedium,
              mt: 0.5,
            })}
          >
            {description}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(104px, 100%), 104px))",
        }}
      >
        {icons.map(([name, Icon]) => (
          <IconTile key={name} name={name} Icon={Icon} />
        ))}
      </Box>
    </Stack>
  );
}

interface IconGalleryViewProps {
  allIcons: Record<string, IconComponent>;
}

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return false;
  }

  return new URLSearchParams(window.location.search)
    .get("globals")
    ?.includes("theme:dark");
}

const CLOUD_PREFIXES = [
  "AWS",
  "Azure",
  "AZURE",
  "GCP",
  "Oracle",
  "OCI",
  "Kube",
  "KUB",
];

function isCloudIcon(name: string) {
  return CLOUD_PREFIXES.some((prefix) => name.startsWith(prefix));
}

export function IconGalleryView({ allIcons }: IconGalleryViewProps) {
  const [search, setSearch] = useState("");

  const entries = useMemo(
    () => Object.entries(allIcons) as [string, IconComponent][],
    [allIcons],
  );

  const filtered = search
    ? entries.filter(([name]) =>
        name.toLowerCase().includes(search.toLowerCase()),
      )
    : null;

  const systemIcons = entries.filter(([name]) => !isCloudIcon(name));
  const cloudIcons = entries.filter(([name]) => isCloudIcon(name));

  return (
    <Box
      sx={(theme) => ({
        backgroundColor:
          theme.palette.mode === "dark"
            ? theme.palette.vars.baseBackgroundWeak
            : "transparent",
        maxWidth: 1120,
      })}
    >
      <Box sx={{ mb: 5, position: "relative" }}>
        <Box
          component="input"
          type="text"
          placeholder="Search icons..."
          value={search}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(event.target.value)
          }
          aria-label="Search icons"
          sx={(theme) => ({
            backgroundColor: theme.palette.vars.controlBackgroundDefault,
            border: `1px solid ${theme.palette.vars.controlBorderDefault}`,
            borderRadius: "8px",
            boxSizing: "border-box",
            color: theme.palette.vars.baseTextDefault,
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            height: 44,
            lineHeight: "20px",
            outline: "none",
            px: 2,
            pr: search ? 6 : 2,
            width: "100%",
            "&::placeholder": {
              color: theme.palette.vars.baseTextWeak,
              opacity: 1,
            },
            "&:focus": {
              borderColor: theme.palette.vars.controlBorderActive,
              boxShadow: `0 0 0 2px ${theme.palette.vars.controlBorderActive}`,
            },
          })}
        />
        {search && (
          <Box
            component="button"
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear icon search"
            sx={(theme) => ({
              alignItems: "center",
              backgroundColor: "transparent",
              border: 0,
              borderRadius: "8px",
              color: theme.palette.vars.controlIconDefault,
              cursor: "pointer",
              display: "flex",
              fontSize: 18,
              height: 44,
              justifyContent: "center",
              lineHeight: 1,
              p: 0,
              position: "absolute",
              right: 0,
              top: 0,
              width: 44,
              "&:hover": {
                color: theme.palette.vars.controlIconHover,
              },
              "&:focus-visible": {
                outline: `2px solid ${theme.palette.vars.controlBorderActive}`,
                outlineOffset: -4,
              },
            })}
          >
            x
          </Box>
        )}
      </Box>

      {filtered ? (
        <IconSection
          title={`Search results for "${search}"`}
          icons={filtered}
        />
      ) : (
        <>
          <IconSection
            title="General System Icons"
            description="UI and navigation icons used across the product."
            icons={systemIcons}
          />
          <IconSection
            title="Feature & Cloud Icons"
            description="Cloud provider, service, and security feature icons."
            icons={cloudIcons}
          />
        </>
      )}
    </Box>
  );
}

export function IconGalleryDocs({ allIcons }: IconGalleryViewProps) {
  return (
    <ThemeProvider
      defaultMode={getInitialDarkMode() ? ThemeMode.Dark : ThemeMode.Light}
    >
      <IconGalleryView allIcons={allIcons} />
    </ThemeProvider>
  );
}
