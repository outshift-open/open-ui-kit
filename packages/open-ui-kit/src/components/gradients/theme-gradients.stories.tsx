/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Meta, StoryObj } from "@storybook/react-vite";
import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography } from "@/components";
import type { GradientVarsType } from "@/types/gradient-vars";
import { DocsHeader } from "storybook/components/docs-header.stories";

type TokenKey = keyof GradientVarsType;

// Strokes sit on a border, so they are previewed as a ring rather than a fill.
const STROKE_TOKENS: readonly TokenKey[] = [
  "gradientCardGlassBg",
  "gradientCardGlassBgSubtle",
  "gradientGlobalBorderFade",
  "gradientGlobalBorderRainbow",
  "gradientGlobalButtonPrimaryBorderGlow",
  "gradientDashboardGraphNodeBorder",
  "gradientGraphConnectorStroke",
  "gradientIconButtonBlueGlow",
  "gradientCardHighlightRadial",
];

const RADIAL_TOKENS: readonly TokenKey[] = [
  "gradientGlowOrange",
  "gradientGlowGreen",
  "gradientGlowRed",
  "gradientGlowPinkShadow",
  "gradientBackgroundGlowBlue",
  "gradientPanelExecBorder",
  "gradientPanelBorderBlueCyanDark",
];

function FillSwatch({ name, value }: { name: string; value: string }) {
  const theme = useTheme();
  return (
    <Stack gap="6px" sx={{ width: 232 }}>
      <Box
        sx={{
          width: "100%",
          height: 60,
          borderRadius: "6px",
          background: value,
          border: `1px solid ${theme.palette.vars.baseBorderWeak}`,
        }}
      />
      <Typography variant="captionMedium" color={theme.palette.vars.baseTextDefault} noWrap>
        {name}
      </Typography>
    </Stack>
  );
}

function StrokeSwatch({ name, value }: { name: string; value: string }) {
  const theme = useTheme();
  return (
    <Stack gap="6px" sx={{ width: 232 }}>
      <Box
        sx={{
          width: "100%",
          height: 60,
          borderRadius: "6px",
          border: "4px solid transparent",
          // Gradient borders need the padding-box/border-box double-background
          // trick — a gradient string alone will not render as a border.
          background: `linear-gradient(${theme.palette.vars.baseBackgroundStrong}, ${theme.palette.vars.baseBackgroundStrong}) padding-box, ${value} border-box`,
        }}
      />
      <Typography variant="captionMedium" color={theme.palette.vars.baseTextDefault} noWrap>
        {name}
      </Typography>
    </Stack>
  );
}

function Group({
  title,
  note,
  tokens,
  variant,
}: {
  title: string;
  note?: string | undefined;
  tokens: [string, string][];
  variant: "fill" | "stroke";
}) {
  const theme = useTheme();
  const Swatch = variant === "stroke" ? StrokeSwatch : FillSwatch;
  return (
    <Stack gap="14px">
      <Stack gap="2px">
        <Typography variant="body2Semibold" color={theme.palette.vars.baseTextStrong}>
          {title}
        </Typography>
        {note ? (
          <Typography variant="caption" color={theme.palette.vars.baseTextWeak}>
            {note}
          </Typography>
        ) : null}
      </Stack>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {tokens.map(([name, value]) => (
          <Swatch key={name} name={name} value={value} />
        ))}
      </Box>
    </Stack>
  );
}

const ThemeGradientsDemo = () => {
  const theme = useTheme();
  const entries = Object.entries(theme.palette.gradients) as [string, string][];

  const strokes = entries.filter(([k]) =>
    STROKE_TOKENS.includes(k as TokenKey),
  );
  const radials = entries.filter(([k]) =>
    RADIAL_TOKENS.includes(k as TokenKey),
  );
  const fills = entries.filter(
    ([k]) =>
      !STROKE_TOKENS.includes(k as TokenKey) &&
      !RADIAL_TOKENS.includes(k as TokenKey),
  );

  return (
    <Stack
      gap="40px"
      sx={{
        backgroundColor: theme.palette.vars.baseBackgroundStrong,
        boxSizing: "border-box",
        p: { xs: "32px 24px", md: "56px" },
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Stack gap="8px">
        <Typography variant="h6" fontWeight={700} color={theme.palette.vars.baseTextStrong}>
          Theme gradients
        </Typography>
        <Typography variant="body2" color={theme.palette.vars.baseTextDefault}>
          Read from <code>theme.palette.gradients</code>. Switch the theme in the
          toolbar — every swatch re-resolves with no code branching. Values are
          designed for Midnight; Light, Dark and IoC currently fall back to a
          provisional base set.
        </Typography>
      </Stack>

      <Group title="Fills" tokens={fills} variant="fill" />
      <Group
        title="Strokes"
        note="Rendered with the padding-box/border-box trick. Angles and stop offsets are approximate — see TODO(verify) in midnight-gradient-vars.ts."
        tokens={strokes}
        variant="stroke"
      />
      <Group
        title="Radial glows"
        note="Geometry approximated from Figma's SVG matrix."
        tokens={radials}
        variant="fill"
      />
    </Stack>
  );
};

const meta: Meta<typeof ThemeGradientsDemo> = {
  title: "Foundations/Theme Gradients",
  component: ThemeGradientsDemo,
  parameters: {
    actions: { argTypesRegex: null },
    layout: "fullscreen",
    docs: {
      page: () => (
        <DocsHeader
          title="Theme Gradients"
          blurb="Gradient tokens that switch with the active theme, mounted on the MUI palette as theme.palette.gradients."
          importLine='import { useTheme } from "@open-ui-kit/core";'
        />
      ),
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeGradientsDemo>;

export const All: Story = {
  render: () => <ThemeGradientsDemo />,
};
