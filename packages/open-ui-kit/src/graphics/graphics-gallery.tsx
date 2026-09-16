/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from "react";
import { Box, Stack, Typography } from "@/components";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import type { GraphicProps } from "./graphic";

type GraphicComponent = React.ComponentType<GraphicProps>;

type GraphicState = "Bold" | "Active" | "Inactive";

interface GraphicRow {
  category: string;
  exportBase: string;
  states: Partial<Record<GraphicState, [string, GraphicComponent]>>;
}

const SUBMENU_RE = /^(.+)SubmenuGraphic(Bold|Active|Inactive)$/;
const NAV_RE = /^(.+)Graphic(Bold|Active|Inactive)$/;
const LOGO_RE = /^(.+)LogoGraphic(Color)?$/;
const BRAND_LOGO_RE = /^(.+)BrandLogo$/;
const AI_SYMBOL_RE =
  /^CiscoAiAssistantSymbol(Default|Responding|ProcessingLoop|ProcessingStart|ProcessingEnd)$/;
const STANDALONE_GRAPHIC_LABELS: Record<string, string> = {
  OrganizationSwitcherGraphic: "organization-switcher-graphic",
};
const FIGMA_CATEGORY_LABELS: Record<string, string> = {
  ApiSecurity: "API security",
  Aws: "AWS",
  Azure: "Microsoft Azure",
  AzureDevops: "Azure_devops",
  CiCd: "CI-CD",
  Ciem: "CIEM",
  Gcp: "GCP",
  Gitlab: "GitLab",
  Kubernetes: "K8",
  Llm: "LLM",
  LlmProtection: "LLM Protection",
  RealtimeCdr: "Realtime CDR",
  ScanReport: "Scan-report",
  UsersScopes: "Users & Scopes",
};

function splitWords(pascal: string) {
  return (
    FIGMA_CATEGORY_LABELS[pascal] ??
    pascal.replace(/([a-z0-9])([A-Z])/g, "$1 $2")
  );
}

type LogoVariant = "Mono" | "Color";

interface LogoRow {
  category: string;
  exportBase: string;
  variants: Partial<Record<LogoVariant, [string, GraphicComponent]>>;
}

interface FlatEntry {
  category: string;
  name: string;
  Icon: GraphicComponent;
}

function groupBySource(allGraphics: Record<string, unknown>) {
  const nav = new Map<string, GraphicRow>();
  const submenu = new Map<string, GraphicRow>();
  const logos = new Map<string, LogoRow>();
  const brandLogos: FlatEntry[] = [];
  const aiSymbol: FlatEntry[] = [];
  const standaloneGraphics: FlatEntry[] = [];

  for (const [name, exportedValue] of Object.entries(allGraphics)) {
    if (typeof exportedValue !== "function") {
      continue;
    }

    const Component = exportedValue as GraphicComponent;
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

    const logoMatch = name.match(LOGO_RE);
    if (logoMatch) {
      const [, base, colorSuffix] = logoMatch;
      const variant: LogoVariant = colorSuffix ? "Color" : "Mono";
      const row = logos.get(base) ?? {
        category: splitWords(base),
        exportBase: `${base}LogoGraphic`,
        variants: {},
      };
      row.variants[variant] = [name, Component];
      logos.set(base, row);
      continue;
    }

    const brandLogoMatch = name.match(BRAND_LOGO_RE);
    if (brandLogoMatch) {
      const [, base] = brandLogoMatch;
      brandLogos.push({ category: splitWords(base), name, Icon: Component });
      continue;
    }

    const aiMatch = name.match(AI_SYMBOL_RE);
    if (aiMatch) {
      const [, state] = aiMatch;
      aiSymbol.push({ category: splitWords(state), name, Icon: Component });
      continue;
    }

    const standaloneLabel = STANDALONE_GRAPHIC_LABELS[name];
    if (standaloneLabel) {
      standaloneGraphics.push({
        category: standaloneLabel,
        name,
        Icon: Component,
      });
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

  const sortByCategory = <T extends { category: string }>(rows: Iterable<T>) =>
    Array.from(rows).sort((a, b) => a.category.localeCompare(b.category));

  return {
    nav: sortByCategory(nav.values()),
    submenu: sortByCategory(submenu.values()),
    logos: sortByCategory(logos.values()),
    brandLogos: sortByCategory(brandLogos),
    standaloneGraphics: sortByCategory(standaloneGraphics),
    aiSymbol: aiSymbol.sort(
      (a, b) =>
        AI_SYMBOL_ORDER.indexOf(a.name) - AI_SYMBOL_ORDER.indexOf(b.name),
    ),
  };
}

const AI_SYMBOL_ORDER = [
  "CiscoAiAssistantSymbolDefault",
  "CiscoAiAssistantSymbolResponding",
  "CiscoAiAssistantSymbolProcessingLoop",
  "CiscoAiAssistantSymbolProcessingStart",
  "CiscoAiAssistantSymbolProcessingEnd",
];

interface GraphicTileProps {
  name: string;
  Icon: GraphicComponent;
  label?: string;
}

function GraphicTile({ name, Icon, label }: GraphicTileProps) {
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
      <Icon fontSize="small" />
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
        {copied
          ? "Copied!"
          : (label ?? name.match(/(Bold|Active|Inactive)$/)?.[0])}
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

const LOGO_VARIANT_ORDER: LogoVariant[] = ["Mono", "Color"];

function LogoRowView({ row }: { row: LogoRow }) {
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
        {LOGO_VARIANT_ORDER.map((variant) => {
          const entry = row.variants[variant];
          if (!entry) {
            return null;
          }
          const [name, Icon] = entry;
          return (
            <GraphicTile key={name} name={name} Icon={Icon} label={variant} />
          );
        })}
      </Stack>
    </Box>
  );
}

function LogoSection({
  title,
  description,
  rows,
}: {
  title: string;
  description: string;
  rows: LogoRow[];
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
            {rows.length} logos
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
          <LogoRowView key={row.exportBase} row={row} />
        ))}
      </Box>
    </Stack>
  );
}

function FlatSection({
  title,
  description,
  entries,
}: {
  title: string;
  description: string;
  entries: FlatEntry[];
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
            {entries.length} exports
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
      <Stack direction="row" gap={1.5} sx={{ flexWrap: "wrap" }}>
        {entries.map((entry) => (
          <GraphicTile
            key={entry.name}
            name={entry.name}
            Icon={entry.Icon}
            label={entry.category}
          />
        ))}
      </Stack>
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
  allGraphics: Record<string, unknown>;
}

export function GraphicsGalleryView({ allGraphics }: GraphicsGalleryViewProps) {
  const { nav, submenu, logos, brandLogos, aiSymbol, standaloneGraphics } =
    useMemo(() => groupBySource(allGraphics), [allGraphics]);

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
      <FlatSection
        title="Standalone graphics"
        description="Individual graphics that do not use the Bold / Active / Inactive state model."
        entries={standaloneGraphics}
      />
      <LogoSection
        title="Logos"
        description={
          "Third-party and cloud-provider brand marks. Mono variants paint currentColor " +
          "and adopt the surrounding text color; Color variants use the vendor's fixed brand palette."
        }
        rows={logos}
      />
      <FlatSection
        title="AI"
        description="Cisco AI Assistant symbol states, used to represent assistant activity (idle, responding, processing)."
        entries={aiSymbol}
      />
      <FlatSection
        title="Brand logos"
        description="Wordmark lockups for Cisco, Agntcy, and Outshift. Fixed brand colors — not theme-aware."
        entries={brandLogos}
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
