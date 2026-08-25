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
  gradientCardInsightBorder,
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
  /*
   * Graph-connector card family — Figma `Section 3` (274455:54313).
   *
   * The TODO that used to sit here ("166.51deg read from a 2:1 swatch") is
   * resolved: the card in that section exports as an SVG carrying all three
   * gradient defs verbatim, so these are exact rather than sampled.
   *
   * The angle differs from the old swatch reading because Figma normalises a
   * gradient transform to its layer box — the same caveat recorded on
   * `gradientCardInsightBorder`. On the 215x207 card the fill vector runs
   * (0,4) -> (116.6,256.4), which is 155.21deg in CSS; the 120x60 swatch
   * squeezes that to the 166.51deg previously recorded. The card is the real
   * usage, so it wins.
   *
   * Both fills carry `fill-opacity="0.16"` in the export — the "(16%)" on the
   * swatch labels. That is baked into the stops here rather than left for the
   * consumer: 0.22 -> 0.035, 0.10 -> 0.016, 0.40 -> 0.064, 0.05 -> 0.008.
   */
  gradientGraphConnectorFill: `linear-gradient(155.21deg, ${alpha(stops.graphConnectorBlue, 0.035)} 0%, ${alpha(stops.graphConnectorBlue, 0.016)} 100%)`,
  // Anchored bottom-centre, radii 85% of the card in both axes — the export
  // rotates a (176.14, 182.947) scale by -90deg about (107.5, 211).
  gradientGraphConnectorGlow: `radial-gradient(85% 85% at 50% 100%, ${alpha(stops.graphConnectorBlue, 0.064)} 0%, ${alpha(stops.graphConnectorBlue, 0.008)} 100%)`,

  gradientIconButtonBlue: `linear-gradient(180deg, ${stops.iconButtonBlueStart} 0%, ${stops.iconButtonBlueMid} 54.12%, ${stops.iconButtonBlueEnd} 120.67%)`,

  // --- Strokes -------------------------------------------------------------
  // Applied to borders — needs `border-image` or a padding-box/border-box
  // double-background; a gradient string alone will not render as a border.
  //
  // The Figma MCP server flattens a gradient stroke to its first stop, so these
  // were recovered by rendering each swatch and sampling the border band pixel
  // by pixel, then un-compositing against the card background. Direction and
  // stop offsets below are measured, not guessed. All nine are horizontal.

  /*
   * Glass card family — Figma `Glass Card` (274490:55387).
   *
   * These are EXACT, not sampled: the updated frame exports the card surface
   * and its flair as SVGs whose gradient defs can be read directly (nodes
   * 274490:55140 and 274490:55139, at the mockup's 0.8928 scale). An earlier
   * linear 5% -> 35% reading of the fill was a pixel-fit of this same radial:
   * a corner-anchored radial sampled along one row degrades to exactly that
   * ramp, and both agree with the published `Card-Glass-BG/Stop-0-White-5%`
   * variable at the far corner.
   *
   * The fill is a radial anchored at the card's TOP-RIGHT corner (the SVG
   * centres it at its own origin and the mockup rotates it 90deg clockwise),
   * with both radii spanning the full card. Behind it sits the Glow-Teal
   * flair, and the whole surface backdrop-blurs at `cardGlassBlur`.
   */
  gradientCardGlassBg: `radial-gradient(100% 100% at 100% 0%, ${alpha(stops.glassWhite, 0.4)} 0%, ${alpha(stops.glassWhite, 0.05)} 100%)`,
  // The "70%" the old swatch label carried, applied to the fill: the value to
  // reach for on an already-light surface.
  gradientCardGlassBgSubtle: `radial-gradient(100% 100% at 100% 0%, ${alpha(stops.glassWhite, 0.28)} 0%, ${alpha(stops.glassWhite, 0.035)} 100%)`,
  // `Card-Glass-BORDER`: the hairline is a vertical ramp that holds white 30%
  // over the upper card and fades out entirely by the bottom edge. From the
  // SVG stroke def (offsets 10% / 75% / 100% after the 90deg rotation).
  gradientCardGlassBorder: `linear-gradient(180deg, ${alpha(stops.glassWhite, 0.3)} 10%, ${alpha(stops.glassWhiteWeak, 0.3)} 75%, ${alpha(stops.glassGray, 0)} 100%)`,
  // `Dashboard-Card/Fill/Cyan-Purple`: the flair behind the glass blur. The swatch says
  // "Radial" but the layer's own def is linear (same label drift as
  // `gradientCardHighlightRadial` below); cyan at the top of the streak,
  // periwinkle at the bottom. Alphas are part of the token (37% / 73%).
  //
  // The negative first offset is the whole point of this token. In Figma the
  // ramp is defined over the LAYER box (121.4132 tall, y -19.1782 -> 102.235 in
  // the export of node 274666:38565), but the crescent actually painted inside
  // that box only spans y 35.9785 -> 102.235 — its path's cubic
  // `C327.375 20.2369, 172.023 18.837, 39.3263 83.4893` bottoms out at
  // t = 0.50983, well short of the control points near y 19.
  //
  // So the visible flair never shows pure cyan: its top edge already sits
  // (35.9785 + 19.1782) / 121.4132 = 45.429% of the way to periwinkle.
  // Anchoring the ramp at -83.247% reproduces that slice over a box that IS
  // the crescent — solve (0 - p) / (100 - p) = 0.45429 for p.
  gradientDashboardCardFillCyanPurple: `linear-gradient(180deg, ${alpha(stops.glassGlowCyan, 0.37)} -83.247%, ${alpha(stops.glassGlowPeriwinkle, 0.73)} 100%)`,
  // `Card-Glass-CTA-Glow`: mint -> blue -> pink -> gold sweep behind the glass
  // CTA button, designed to be layer-blurred (~45) by the consumer. Geometry is
  // the flattened export's own: centre and radii normalised to its viewBox.
  gradientCardGlassCtaGlow: `radial-gradient(87% 72% at 6.5% 14%, ${stops.glassCtaMint} 44%, ${stops.glassCtaBlue} 50%, ${stops.dataVizPink} 58%, ${stops.glassCtaGold} 99%)`,

  // Measured: the blue stop renders #0a60ff, not the #0a66ff shown on the label.
  // Ramps slate to blue, matching the toast instances that use it — the swatch
  // preview runs the other way, but the applied instances are authoritative.
  gradientGlobalBorderFade: `linear-gradient(90deg, ${alpha(stops.globalBorderSlateWeak, 0.7)} 10%, ${stops.globalBorderSlate} 31%, ${stops.buttonPrimaryGlowCyan} 51%, ${stops.panelExecBorderBlue} 79%)`,
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
  // Alpha ramps UP left to right (6% -> 16%), opposite to the label order.
  // Originally measured by sampling; the card SVG in `Section 3`
  // (274455:54313) exports this stroke def verbatim and confirms it exactly,
  // including the pure-horizontal vector (0,107.5) -> (215,107.5).
  gradientGraphConnectorStroke: `linear-gradient(90deg, ${alpha(stops.graphConnectorBlue, 0.06)} 0%, ${alpha(stops.graphConnectorBlue, 0.16)} 100%)`,
  gradientIconButtonBlueGlow: `linear-gradient(90deg, ${stops.iconButtonGlowBlue} 0%, ${alpha(stops.iconButtonGlowBlue, 0)} 100%)`,
  // Named `Card-Highlight-Radial` in Figma, but the swatch fill is linear.
  // Measured: starts fully opaque, not at the 70% the label implies.
  // Vertical, not horizontal: the swatch rectangle is drawn sideways, but the
  // only place the ramp is applied — the Activity Timeline rail (274455:53823)
  // — runs it top to bottom. Same swatch-vs-instance split as the toast border.
  gradientCardHighlightRadial: `linear-gradient(180deg, ${stops.glassWhite} 0%, ${alpha(stops.glassGray, 0)} 100%)`,

  // --- Radial glows --------------------------------------------------------
  // Figma's intermediate stops are linear interpolations between the designed
  // stops, so only the designed stops are kept.

  // The three status glows share one geometry: a circle centred on the top-left
  // corner, matching the dot swatches. `farthest-side` because the timeline dot
  // export (274455:53827) puts the end stop one box-width from that corner, not
  // one diagonal — CSS would otherwise default to `farthest-corner` and stretch
  // the ramp 41% too far, so the end colour never actually landed.
  gradientGlowOrange: `radial-gradient(circle farthest-side at 0% 0%, ${alpha(stops.glowOrangeStart, 0.8)} 0%, ${alpha(stops.glowOrangeEnd, 0.8)} 100%)`,
  gradientGlowGreen: `radial-gradient(circle farthest-side at 0% 0%, ${alpha(stops.glowGreenStart, 0.7)} 0%, ${alpha(stops.glowGreenEnd, 0.7)} 100%)`,
  gradientGlowRed: `radial-gradient(circle farthest-side at 0% 0%, ${alpha(stops.glowRedStart, 0.4)} 0%, ${alpha(stops.glowRedEnd, 0.4)} 100%)`,
  gradientGlowPinkShadow: `radial-gradient(ellipse at 29% -56%, ${alpha(stops.dataVizPink, 0.5)} 0%, ${alpha(stops.overlayBlack, 0.6)} 100%)`,
  gradientBackgroundGlowBlue: `radial-gradient(ellipse 50% 100% at 50% 50%, ${alpha(stops.glowBlueStart, 0.3)} 0%, ${alpha(stops.glowBlueMid, 0.3)} 26.923%, ${alpha(stops.glowBlueDeep, 0.3)} 55.769%, ${alpha(stops.glowBlueEnd, 0)} 82.692%)`,
  // Measured, not radial despite the swatch label — see `gradient-vars-base.ts`.
  // Shared with every theme.
  gradientPanelExecBorder: gradientCardInsightBorder,
  gradientPanelBorderBlueCyanDark: `radial-gradient(ellipse at 50% 50%, ${stops.panelExecBorderBlue} 0%, ${stops.panelBorderCyanDark} 100%)`,
};
