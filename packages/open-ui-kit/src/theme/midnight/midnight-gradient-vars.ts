/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { alpha } from "@mui/material/styles";
import type { GradientVarsType } from "@/types/gradient-vars";
import {
  baseGradientVars,
  gradientButtonPrimaryBorderGlow,
  gradientButtonPrimaryFill,
  gradientTextWhiteBlue,
} from "@/theme/style/gradient-vars-base";
import { gradientsRedPressed } from "@/theme/style/gradients";
import {
  blue300,
  blue500,
  midnightGradientStops as stops,
  teal300,
} from "@/theme/style/color-palette";

/*
 * Midnight gradient unique tokens
 */
export const midnightGradientVars: GradientVarsType = {
  ...baseGradientVars,

  // --- Fills ---------------------------------------------------------------

  gradientGaugeArcAmber: `linear-gradient(90deg, ${stops.gaugeArcAmber} 0%, ${alpha(stops.gaugeArcAmber, 0.78)} 100%)`,
  gradientGaugeArcTeal: `linear-gradient(90deg, ${stops.gaugeArcTealStart} 0%, ${stops.gaugeArcTealEnd} 100%)`,
  gradientIconSubtractBlue: `linear-gradient(90deg, ${stops.iconSubtractBlue} 0%, ${blue500} 100%)`,

  // TODO(verify): 170.415deg read from a 2:1 swatch.
  gradientDataVizCyanTeal: `linear-gradient(170.415deg, ${alpha(stops.dataVizCyan, 0.6)} 13.912%, ${alpha(stops.dataVizTeal, 0.6)} 82.071%)`,
  gradientDataVizCyanBlue: `linear-gradient(90deg, ${teal300} 0%, ${blue300} 100%)`,

  gradientDataVizPinkMagenta: `linear-gradient(180deg, ${alpha(stops.dataVizPink, 0.7)} 0%, ${alpha(stops.dataVizMagenta, 0.7)} 100%)`,
  // Figma labels this `Data-Viz-Pink-Magenta`, but the stops are orange.
  gradientDataVizOrangeAmber: `linear-gradient(180deg, ${alpha(stops.dataVizOrange, 0.7)} 0%, ${alpha(stops.dataVizAmber, 0.7)} 100%)`,
  // Figma labels this `Data-Viz-Pink-Magenta`; one stop, so it renders flat.
  gradientDataVizPinkFlat: `linear-gradient(90deg, ${alpha(stops.dataVizPink, 0.2)} 0%, ${alpha(stops.dataVizPink, 0.2)} 50%)`,

  gradientDataVizPinkPurple: `linear-gradient(180deg, ${alpha(stops.dataVizPink, 0.2)} 11.117%, ${alpha(stops.dataVizPurple, 0.2)} 111.54%)`,
  gradientDataVizOrangeGold: `linear-gradient(180deg, ${alpha(stops.dataVizOrange, 0.2)} 11.117%, ${alpha(stops.dataVizGold, 0.2)} 111.54%)`,
  gradientDataVizBlueDark: `linear-gradient(180deg, ${alpha(stops.dataVizBlue, 0.2)} 0%, ${alpha(blue300, 0.2)} 100%)`,

  // TODO(verify): 10.276deg read from a 2:1 swatch.
  gradientProgressBarTeal: `linear-gradient(10.276deg, ${alpha(stops.dataVizFadeGray, 0)} 32.561%, ${stops.dataVizMint} 69.418%)`,

  gradientGraphFlow: `linear-gradient(90deg, ${alpha(stops.graphFlowGray, 0.2)} 0%, ${alpha(stops.graphFlowTeal, 0.2)} 50%)`,
  gradientGraphFlowPink: `linear-gradient(90deg, ${alpha(stops.graphFlowGray, 0.2)} 0%, ${alpha(stops.dataVizPink, 0.2)} 50%)`,
  // Single stop in Figma, so this is a flat fill rather than a ramp.
  gradientGraphFlowTeal: alpha(stops.graphFlowTeal, 0.2),
  // Figma reuses `Graph-Flow` for this distinct maroon ramp.
  gradientGraphFlowMaroon: `linear-gradient(90deg, ${alpha(stops.graphFlowMaroon, 0.2)} 0%, ${alpha(stops.graphFlowTeal, 0.2)} 50%)`,

  // Shared with every theme — see `gradient-vars-base.ts`.
  gradientGlobalButtonPrimaryFill: gradientButtonPrimaryFill,
  // Shared with every theme — see `gradient-vars-base.ts`.
  gradientTextWhiteBlue,
  gradientGlobalDividerFade: `linear-gradient(90deg, ${stops.panelExecBorderBlue} 0%, ${stops.dataVizCyan} 0%, ${stops.dataVizCyan} 21.692%, ${stops.dataVizOrange} 55.827%, ${stops.globalDividerPink} 100%)`,

  gradientOverlayBlackFadeIn: `linear-gradient(180deg, ${alpha(stops.overlayBlack, 0.65)} 52.404%, ${alpha(stops.overlayGray, 0)} 100%)`,
  // TODO(verify): 146.411deg read from a 2:1 swatch.
  gradientWelcomeCardBgDark: `linear-gradient(146.411deg, ${stops.welcomeCardStart} 64.87%, ${alpha(stops.welcomeCardEnd, 0.5)} 91.196%)`,

  // Identical stops and offsets to the existing `gradientsRedPressed` token, so
  // it is reused to preserve the canonical 124.96deg angle. Figma exported this
  // as 144.426deg because its angles are aspect-ratio dependent (2:1 swatch).
  gradientAlertLineRed: gradientsRedPressed,

  // TODO(verify): 150.642deg read from a 2:1 swatch. Two stacked fills.
  gradientDashboardGraphNodeFill: `linear-gradient(90deg, ${alpha(stops.overlayBlack, 0.2)} 0%, ${alpha(stops.overlayBlack, 0.2)} 100%), linear-gradient(150.642deg, ${alpha(stops.graphNodeFillBlue, 0.09)} 26.471%, ${alpha(stops.graphNodeFillDark, 0.15)} 88.419%)`,
  // TODO(verify): 166.51deg read from a 2:1 swatch.
  gradientGraphConnectorFill: `linear-gradient(166.51deg, ${alpha(stops.graphConnectorBlue, 0.035)} 0%, ${alpha(stops.graphConnectorBlue, 0.016)} 100%)`,

  gradientIconButtonBlue: `linear-gradient(180deg, ${stops.iconButtonBlueStart} 0%, ${stops.iconButtonBlueMid} 54.12%, ${stops.iconButtonBlueEnd} 120.67%)`,

  // --- Strokes -------------------------------------------------------------
  // Applied to borders — needs `border-image` or a padding-box/border-box
  // double-background; a gradient string alone will not render as a border.
  //
  // The Figma MCP server flattens a gradient stroke to its first stop, so these
  // were recovered by rendering each swatch and sampling the border band pixel
  // by pixel, then un-compositing against the card background. Direction and
  // stop offsets below are measured, not guessed. All nine are horizontal.

  // Measured: alpha holds at 0.30 to ~72%, then falls linearly to 0.
  gradientCardGlassBg: `linear-gradient(90deg, ${alpha(stops.glassWhite, 0.3)} 0%, ${alpha(stops.glassWhiteWeak, 0.3)} 72%, ${alpha(stops.glassGray, 0)} 100%)`,
  // Figma labels this swatch "LINEAR - 70%", but it renders pixel-identical to
  // `gradientCardGlassBg` — the 70% is not applied to the fill. Kept as a
  // separate token because the design documents it as one; values intentionally
  // match until design confirms whether the label or the fill is authoritative.
  gradientCardGlassBgSubtle: `linear-gradient(90deg, ${alpha(stops.glassWhite, 0.3)} 0%, ${alpha(stops.glassWhiteWeak, 0.3)} 72%, ${alpha(stops.glassGray, 0)} 100%)`,

  // Measured: first stop renders #0a60ff, not the #0a66ff shown on the label.
  gradientGlobalBorderFade: `linear-gradient(90deg, ${stops.panelExecBorderBlue} 0%, ${stops.buttonPrimaryGlowCyan} 50%, ${stops.globalBorderSlate} 70%, ${alpha(stops.globalBorderSlateWeak, 0.7)} 100%)`,
  // `Input-Border-Blue` — Figma `Input Field` (274417:44475), swatch labelled
  // "DARK original: FFFFFF -> 0A60FF". Both stops already exist, so this adds
  // no new colour. Sampling the rendered field's top border confirms a plain
  // horizontal ramp: near-white at 13% across, (130,173,254) at 50%, and
  // (39,114,255) at 88%, extrapolating to #0a60ff at the right edge.
  gradientInputBorderBlue: `linear-gradient(90deg, ${stops.glassWhite} 0%, ${stops.panelExecBorderBlue} 100%)`,
  // Figma reuses `Global-Border/Fade` for this distinct rainbow ramp.
  gradientGlobalBorderRainbow: `linear-gradient(90deg, ${stops.panelExecBorderBlue} 0%, ${stops.dataVizCyan} 33%, ${stops.globalDividerPink} 83%, ${stops.dataVizOrange} 100%)`,

  // Shared with every theme — see `gradient-vars-base.ts`.
  gradientGlobalButtonPrimaryBorderGlow: gradientButtonPrimaryBorderGlow,
  gradientDashboardGraphNodeBorder: `linear-gradient(90deg, ${alpha(stops.globalBorderSlateWeak, 0.7)} 0%, ${stops.globalBorderSlate} 100%)`,
  // Measured: alpha ramps UP left to right (6% -> 16%), opposite to the label order.
  gradientGraphConnectorStroke: `linear-gradient(90deg, ${alpha(stops.graphConnectorBlue, 0.06)} 0%, ${alpha(stops.graphConnectorBlue, 0.16)} 100%)`,
  gradientIconButtonBlueGlow: `linear-gradient(90deg, ${stops.iconButtonGlowBlue} 0%, ${alpha(stops.iconButtonGlowBlue, 0)} 100%)`,
  // Named `Card-Highlight-Radial` in Figma, but the swatch fill is linear.
  // Measured: starts fully opaque, not at the 70% the label implies.
  gradientCardHighlightRadial: `linear-gradient(90deg, ${stops.glassWhite} 0%, ${alpha(stops.glassGray, 0)} 100%)`,

  // --- Radial glows --------------------------------------------------------
  // TODO(verify): geometry approximated from Figma's SVG `gradientTransform`
  // matrix. Figma's intermediate stops are linear interpolations between the
  // designed stops, so only the designed stops are kept.

  // The three status glows share one geometry: a circle centred on the top-left
  // corner, matching the dot swatches. Orange was previously an approximated
  // ellipse and is realigned here.
  gradientGlowOrange: `radial-gradient(circle at 0% 0%, ${alpha(stops.glowOrangeStart, 0.8)} 0%, ${alpha(stops.glowOrangeEnd, 0.8)} 100%)`,
  gradientGlowGreen: `radial-gradient(circle at 0% 0%, ${alpha(stops.glowGreenStart, 0.7)} 0%, ${alpha(stops.glowGreenEnd, 0.7)} 100%)`,
  gradientGlowRed: `radial-gradient(circle at 0% 0%, ${alpha(stops.glowRedStart, 0.4)} 0%, ${alpha(stops.glowRedEnd, 0.4)} 100%)`,
  gradientGlowPinkShadow: `radial-gradient(ellipse at 29% -56%, ${alpha(stops.dataVizPink, 0.5)} 0%, ${alpha(stops.overlayBlack, 0.6)} 100%)`,
  gradientBackgroundGlowBlue: `radial-gradient(ellipse 50% 100% at 50% 50%, ${alpha(stops.glowBlueStart, 0.3)} 0%, ${alpha(stops.glowBlueMid, 0.3)} 26.923%, ${alpha(stops.glowBlueDeep, 0.3)} 55.769%, ${alpha(stops.glowBlueEnd, 0)} 82.692%)`,
  gradientPanelExecBorder: `radial-gradient(ellipse at 50% 50%, ${stops.panelExecBorderBlue} 0%, ${stops.dataVizCyan} 33%, ${stops.globalBorderSlate} 66%, ${alpha(stops.globalBorderSlateWeak, 0.7)} 100%)`,
  gradientPanelBorderBlueCyanDark: `radial-gradient(ellipse at 50% 50%, ${stops.panelExecBorderBlue} 0%, ${stops.panelBorderCyanDark} 100%)`,
};
