/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from "react";
import type { SvgIconProps } from "@mui/material";
import { Box, Stack, Typography } from "@/components";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";

type GraphicComponent = React.ComponentType<SvgIconProps>;

type GraphicState = "Bold" | "Active" | "Inactive";

interface GraphicRow {
  category: string;
  exportBase: string;
  states: Partial<Record<GraphicState, [string, GraphicComponent]>>;
}

const SUBMENU_RE = /^(.+)SubmenuGraphic(Bold|Active|Inactive)$/;
const NAV_RE = /^(.+)Graphic(Bold|Active|Inactive)$/;

function splitWords(pascal: string) {
  return pascal.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
}

function groupBySource(allGraphics: Record<string, GraphicComponent>) {
  const nav = new Map<string, GraphicRow>();
  const submenu = new Map<string, GraphicRow>();

  for (const [name, Component] of Object.entries(allGraphics)) {
    const submenuMatch = name.match(SUBMENU_RE);
    if (submenuMatch) {
      const [, base, state] = submenuMatch;
      const row = submenu.get(base) ?? {
        category: splitWords(base),
        exportBase: `${base}SubmenuGraphic`,
        states: {},
      };
      row.states[state as GraphicState] = [name, Component];
      submenu.set(base, row);
      continue;
    }

    const navMatch = name.match(NAV_RE);
    if (navMatch) {
      const [, base, state] = navMatch;
      const row = nav.get(base) ?? {
        category: splitWords(base),
        exportBase: `${base}Graphic`,
        states: {},
      };
      row.states[state as GraphicState] = [name, Component];
      nav.set(base, row);
    }
  }

  const sortByCategory = (rows: Map<string, GraphicRow>) =>
    Array.from(rows.values()).sort((a, b) =>
      a.category.localeCompare(b.category),
    );

  return { nav: sortByCategory(nav), submenu: sortByCategory(submenu) };
}

interface GraphicTileProps {
  name: string;
  Icon: GraphicComponent;
}

function GraphicTile({ name, Icon }: GraphicTileProps) {
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
      aria-label={`Copy ${name} graphic export name`}
      sx={(theme) => ({
        alignItems: "center",
        backgroundColor: copied
          ? theme.palette.vars.successBackgroundWeak
          : theme.palette.vars.controlBackgroundDefault,
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
        minHeight: 88,
        minWidth: 88,
        p: 1.25,
        transition:
          "background-color 120ms ease, border-color 120ms ease, color 120ms ease",
        width: 100,
        "&:hover": {
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
        })}
      >
        {copied ? "Copied!" : name.match(/(Bold|Active|Inactive)$/)?.[0]}
      </Typography>
    </Box>
  );
}

const STATE_ORDER: GraphicState[] = ["Bold", "Active", "Inactive"];

function GraphicRowView({ row }: { row: GraphicRow }) {
  return (
    <Box
      sx={(theme) => ({
        alignItems: "center",
        borderBottom: `1px solid ${theme.palette.vars.baseBorderWeak}`,
        display: "flex",
        gap: 3,
        py: 2,
      })}
    >
      <Typography
        component="span"
        variant="body2"
        sx={(theme) => ({
          color: theme.palette.vars.baseTextDefault,
          minWidth: 200,
        })}
      >
        {row.category}
      </Typography>
      <Stack direction="row" gap={1.5}>
        {STATE_ORDER.map((state) => {
          const entry = row.states[state];
          if (!entry) {
            return null;
          }
          const [name, Icon] = entry;
          return <GraphicTile key={name} name={name} Icon={Icon} />;
        })}
      </Stack>
    </Box>
  );
}

function GraphicSection({
  title,
  description,
  rows,
}: {
  title: string;
  description: string;
  rows: GraphicRow[];
}) {
  return (
    <Stack gap={2} sx={{ mb: 6 }}>
      <Box>
        <Stack direction="row" gap={1.25} sx={{ alignItems: "baseline" }}>
          <Typography
            component="h2"
            variant="h6"
            sx={(theme) => ({ color: theme.palette.vars.baseTextStrong, m: 0 })}
          >
            {title}
          </Typography>
          <Typography
            component="span"
            variant="caption"
            sx={(theme) => ({ color: theme.palette.vars.baseTextWeak })}
          >
            {rows.length} graphics × {STATE_ORDER.length} states
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.vars.baseTextMedium,
            mt: 0.5,
          })}
        >
          {description}
        </Typography>
      </Box>
      <Box>
        {rows.map((row) => (
          <GraphicRowView key={row.exportBase} row={row} />
        ))}
      </Box>
    </Stack>
  );
}

function getInitialDarkMode() {
  if (typeof window === "undefined") {
    return false;
  }

  return new URLSearchParams(window.location.search)
    .get("globals")
    ?.includes("theme:dark");
}

interface GraphicsGalleryViewProps {
  allGraphics: Record<string, GraphicComponent>;
}

export function GraphicsGalleryView({ allGraphics }: GraphicsGalleryViewProps) {
  const { nav, submenu } = useMemo(
    () => groupBySource(allGraphics),
    [allGraphics],
  );

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
      <GraphicSection
        title="Navigation graphics"
        description={
          "Left-nav item marks. Each state paints its own theme.palette.vars tokens " +
          "(not currentColor) — Bold for the resting/unselected state, Active for the " +
          "selected state, Inactive for a disabled/muted state."
        }
        rows={nav}
      />
      <GraphicSection
        title="Submenu graphics"
        description="Secondary/submenu item marks, same Bold / Active / Inactive state model as the navigation graphics."
        rows={submenu}
      />
    </Box>
  );
}

export function GraphicsGalleryDocs({ allGraphics }: GraphicsGalleryViewProps) {
  return (
    <ThemeProvider
      defaultMode={getInitialDarkMode() ? ThemeMode.Dark : ThemeMode.Light}
    >
      <GraphicsGalleryView allGraphics={allGraphics} />
    </ThemeProvider>
  );
}
