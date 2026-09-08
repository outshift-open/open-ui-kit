/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from "react";
import type { SvgIconProps } from "@mui/material";
import { Box, Stack, Typography } from "@/components";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { IconSection } from "./icon-gallery";
import { ICON_CATEGORY_GROUPS } from "./icon-categories";

type IconComponent = React.ComponentType<SvgIconProps>;

interface IconGalleryGroupedViewProps {
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

function GroupHeading({ title }: { title: string }) {
  return (
    <Typography
      component="h2"
      variant="h5"
      sx={(theme) => ({
        color: theme.palette.vars.baseTextStrong,
        m: 0,
        mt: 5,
        "&:first-of-type": { mt: 0 },
      })}
    >
      {title}
    </Typography>
  );
}

export function IconGalleryGroupedView({
  allIcons,
}: IconGalleryGroupedViewProps) {
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

  // Anything exported from `icons/` that isn't yet listed in
  // ICON_CATEGORY_GROUPS still needs to show up somewhere, so newly
  // migrated icons are never silently dropped from the docs page.
  const categorizedNames = useMemo(
    () =>
      new Set(
        ICON_CATEGORY_GROUPS.flatMap((group) =>
          group.categories.flatMap((category) => category.iconNames),
        ),
      ),
    [],
  );
  const uncategorized = entries.filter(([name]) => !categorizedNames.has(name));

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
        <Stack gap={0}>
          {ICON_CATEGORY_GROUPS.map((group) => {
            const groupSections = group.categories
              .map((category) => ({
                category,
                icons: category.iconNames
                  .filter((name) => allIcons[name])
                  .map(
                    (name) => [name, allIcons[name]] as [string, IconComponent],
                  ),
              }))
              .filter((section) => section.icons.length > 0);

            if (groupSections.length === 0) {
              return null;
            }

            return (
              <Box key={group.group}>
                <GroupHeading title={group.group} />
                {groupSections.map(({ category, icons }) => (
                  <IconSection
                    key={category.name}
                    title={category.name}
                    icons={icons}
                  />
                ))}
              </Box>
            );
          })}
          {uncategorized.length > 0 && (
            <Box>
              <GroupHeading title="Uncategorized" />
              <IconSection
                title="Not yet mapped to a Figma category"
                description="Add these to icon-categories.ts once their Figma category is known."
                icons={uncategorized}
              />
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
}

export function IconGalleryGroupedDocs({
  allIcons,
}: IconGalleryGroupedViewProps) {
  return (
    <ThemeProvider
      defaultMode={getInitialDarkMode() ? ThemeMode.Dark : ThemeMode.Light}
    >
      <IconGalleryGroupedView allIcons={allIcons} />
    </ThemeProvider>
  );
}
