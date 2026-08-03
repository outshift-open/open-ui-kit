/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Theme-aware gradient tokens.
 *
 * Mirrors `VarsType`: a single flat contract that every theme must implement,
 * mounted on the MUI palette as `palette.gradients`. Components read
 * `theme.palette.gradients.gradientDataVizCyanBlue` with no theme branching —
 * swapping the theme swaps the value, exactly like `palette.vars`.
 *
 * Token names come from the `gradient-token` labels in Figma "OXP"
 * (wvTxiCkZBmP2jH24hzydHR), frame 274405:38026 "Components with Gradients",
 * camelCased from the Figma path: `Gradient/Data-Viz-Cyan-Blue` ->
 * `gradientDataVizCyanBlue`.
 */
export interface GradientVarsType {
  // --- Fills ---------------------------------------------------------------
  gradientGaugeArcAmber: string;
  gradientGaugeArcTeal: string;
  gradientIconSubtractBlue: string;
  gradientDataVizCyanTeal: string;
  gradientDataVizCyanBlue: string;
  gradientDataVizPinkMagenta: string;
  /** Renamed: Figma labels this `Data-Viz-Pink-Magenta` but the stops are orange. */
  gradientDataVizOrangeAmber: string;
  /** Renamed: Figma labels this `Data-Viz-Pink-Magenta`; single stop, renders flat. */
  gradientDataVizPinkFlat: string;
  gradientDataVizPinkPurple: string;
  gradientDataVizOrangeGold: string;
  gradientDataVizBlueDark: string;
  gradientProgressBarTeal: string;
  gradientGraphFlow: string;
  gradientGraphFlowPink: string;
  gradientGraphFlowTeal: string;
  /** Renamed: Figma reuses `Graph-Flow` for this distinct maroon ramp. */
  gradientGraphFlowMaroon: string;
  gradientGlobalButtonPrimaryFill: string;
  /** Gradient text fill (`background-clip: text`). Figma: `Gradient/Text-White-Blue`. */
  gradientTextWhiteBlue: string;
  gradientGlobalDividerFade: string;
  gradientOverlayBlackFadeIn: string;
  gradientWelcomeCardBgDark: string;
  gradientAlertLineRed: string;
  gradientDashboardGraphNodeFill: string;
  gradientGraphConnectorFill: string;
  gradientIconButtonBlue: string;

  // --- Strokes -------------------------------------------------------------
  // Applied to borders. Colors and stop order are correct; angles and stop
  // offsets are approximate — see midnight-gradient-vars.ts.
  gradientCardGlassBg: string;
  /** Renamed: same stops as `gradientCardGlassBg` at 70% layer opacity. */
  gradientCardGlassBgSubtle: string;
  gradientGlobalBorderFade: string;
  /** Renamed: Figma reuses `Global-Border/Fade` for this distinct rainbow ramp. */
  gradientGlobalBorderRainbow: string;
  gradientGlobalButtonPrimaryBorderGlow: string;
  gradientDashboardGraphNodeBorder: string;
  gradientGraphConnectorStroke: string;
  gradientIconButtonBlueGlow: string;
  /** Named `Card-Highlight-Radial` in Figma, but the swatch fill is linear. */
  gradientCardHighlightRadial: string;

  // --- Radial glows --------------------------------------------------------
  gradientGlowOrange: string;
  gradientGlowPinkShadow: string;
  gradientBackgroundGlowBlue: string;
  gradientPanelExecBorder: string;
  gradientPanelBorderBlueCyanDark: string;
}
