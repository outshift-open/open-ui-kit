/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { GradientVarsType } from "@/types/gradient-vars";
import { midnightGradientStops as stops } from "./color-palette";
import {
  gradientsBackgroundDark,
  gradientsIllustrationsBlue,
  gradientsIllustrationsGreen,
  gradientsIllustrationsLightBlue,
  gradientsIllustrationsOrange,
  gradientsIllustrationsPink,
  gradientsIllustrationsPurple,
  gradientsIllustrationsRainbow,
  gradientsRedPressed,
  gradientsSecondaryDefault,
  gradientsSecondaryHover,
} from "./gradients";

/*
 * Button gradients — shared by every theme.
 *
 * Unlike the rest of this file these are real design values, not placeholders.
 * Design has not diverged them per theme and the Button gradient variants must
 * look identical everywhere, so they are defined once here and re-used by
 * `midnight-gradient-vars.ts` instead of being overridden per theme.
 * Source: Figma frames 274405:44106 and I274405:38087;25258:78851.
 */
export const gradientButtonPrimaryFill = `linear-gradient(90deg, ${stops.buttonPrimaryFillStart} 0%, ${stops.buttonPrimaryFillEnd} 100%)`;
export const gradientButtonPrimaryBorderGlow = `linear-gradient(90deg, ${stops.buttonPrimaryGlowBlue} 0%, ${stops.buttonPrimaryGlowCyan} 50%, ${stops.buttonPrimaryGlowTeal} 100%)`;

/*
 * Card insight border — `Gradient/Panel-Exec-Border`, shared by every theme.
 *
 * The Figma swatch is LABELLED "Radial", but it is not. Sampling the border of
 * the rendered `Card/Basic Interactive` (274405:44327) and of the swatch itself
 * gives the same diagonal signature — the top edge ramps blue -> cyan -> slate,
 * the right edge is uniformly slate, and the left edge holds blue before
 * turning cyan near the bottom. That is a diagonal linear ramp.
 *
 * Angle and offsets are measured from the 318x214 card, which is the real
 * usage. Figma normalises gradient transforms to the layer box, so the same
 * token measures differently on the 120x60 documentation swatch — re-measure
 * before reusing this on a very differently proportioned surface.
 */
export const gradientCardInsightBorder = `linear-gradient(135deg, ${stops.panelExecBorderBlue} 25%, ${stops.dataVizCyan} 34%, ${stops.globalBorderSlate} 60%, rgba(77, 99, 128, 0.7) 100%)`;

/* Text gradient — shared by every theme, like the button gradients above.
 *
 * A real design value (not a placeholder). Design has not diverged it per theme,
 * so it is defined once and reused everywhere via `background-clip: text`.
 * Source: Figma "OXP" (wvTxiCkZBmP2jH24hzydHR), `Gradient/Text-White-Blue`
 * (frame 274405:44228, "Welcome Amy!"), white -> blue, left to right.
 */
export const gradientTextWhiteBlue = `linear-gradient(90deg, ${stops.textWhiteBlueStart} 0%, ${stops.textWhiteBlueMid} 51.28%, ${stops.textWhiteBlueEnd} 100%)`;

/*
 * Base gradient tokens — the fallback every theme starts from.
 *
 * Apart from the three shared gradients above (the two button gradients and the
 * text gradient), this deliberately contains NO new design values.
 *
 * The gradient set was designed for the Midnight theme only (Figma "OXP",
 * frame 274405:38026). Light, Dark and IoC have no design-approved gradients
 * yet, but `GradientVarsType` is a total contract, so they need a value for
 * every key. Each remaining entry is therefore mapped to the closest gradient
 * this library already ships in `gradientsPalette` — chosen so components
 * render something on-brand rather than nothing.
 *
 * Those are PROVISIONAL, not design-approved. When design delivers Light /
 * Dark / IoC gradients, add a `*-gradient-vars.ts` per theme that spreads this
 * object and overrides, exactly as `midnight-gradient-vars.ts` does.
 *
 * Midnight overrides every provisional entry, so only the three shared
 * gradients above (the two button gradients and the text gradient) reach the
 * Midnight theme from this file.
 */
export const baseGradientVars: GradientVarsType = {
  // --- Fills ---------------------------------------------------------------
  gradientGaugeArcAmber: gradientsIllustrationsOrange,
  gradientGaugeArcTeal: gradientsIllustrationsGreen,
  gradientIconSubtractBlue: gradientsSecondaryDefault,
  gradientDataVizCyanTeal: gradientsIllustrationsBlue,
  gradientDataVizCyanBlue: gradientsIllustrationsLightBlue,
  gradientDataVizPinkMagenta: gradientsIllustrationsPink,
  gradientDataVizOrangeAmber: gradientsIllustrationsOrange,
  gradientDataVizPinkFlat: gradientsIllustrationsPink,
  gradientDataVizPinkPurple: gradientsIllustrationsPurple,
  gradientDataVizOrangeGold: gradientsIllustrationsOrange,
  gradientDataVizBlueDark: gradientsSecondaryDefault,
  gradientProgressBarTeal: gradientsIllustrationsGreen,
  gradientGraphFlow: gradientsIllustrationsBlue,
  gradientGraphFlowPink: gradientsIllustrationsPink,
  gradientGraphFlowTeal: gradientsIllustrationsGreen,
  gradientGraphFlowMaroon: gradientsRedPressed,
  gradientGlobalButtonPrimaryFill: gradientButtonPrimaryFill,
  gradientTextWhiteBlue,
  gradientGlobalDividerFade: gradientsIllustrationsRainbow,
  gradientOverlayBlackFadeIn: gradientsBackgroundDark,
  gradientWelcomeCardBgDark: gradientsBackgroundDark,
  gradientAlertLineRed: gradientsRedPressed,
  gradientDashboardGraphNodeFill: gradientsSecondaryDefault,
  gradientGraphConnectorFill: gradientsSecondaryHover,
  gradientGraphConnectorGlow: gradientsSecondaryHover,
  gradientIconButtonBlue: gradientsSecondaryDefault,

  // --- Strokes -------------------------------------------------------------
  gradientCardGlassBg: gradientsSecondaryHover,
  gradientCardGlassBgSubtle: gradientsSecondaryHover,
  gradientCardGlassBorder: gradientsSecondaryHover,
  gradientDashboardCardFillCyanPurple: gradientsSecondaryHover,
  gradientCardGlassCtaGlow: gradientsIllustrationsRainbow,
  gradientGlobalBorderFade: gradientsSecondaryDefault,
  gradientInputBorderBlue: gradientsSecondaryDefault,
  gradientGlobalBorderRainbow: gradientsIllustrationsRainbow,
  gradientGlobalButtonPrimaryBorderGlow: gradientButtonPrimaryBorderGlow,
  gradientDashboardGraphNodeBorder: gradientsSecondaryDefault,
  gradientGraphConnectorStroke: gradientsSecondaryHover,
  gradientIconButtonBlueGlow: gradientsIllustrationsLightBlue,
  gradientCardHighlightRadial: gradientsSecondaryHover,

  // --- Radial glows --------------------------------------------------------
  gradientGlowOrange: gradientsIllustrationsOrange,
  gradientGlowGreen: gradientsIllustrationsGreen,
  gradientGlowRed: gradientsRedPressed,
  gradientGlowPinkShadow: gradientsIllustrationsPink,
  gradientBackgroundGlowBlue: gradientsIllustrationsBlue,
  gradientPanelExecBorder: gradientCardInsightBorder,
  gradientPanelBorderBlueCyanDark: gradientsSecondaryDefault,
};
