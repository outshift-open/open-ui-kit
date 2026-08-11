/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSObject, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import type { CardAlertSeverity } from "../types";
import {
  alertCriticalText,
  alertWarningText,
  cardAlertShadow,
  cardConnectorBlur,
  cardConnectorShadow,
  cardGlassBlur,
  cardGlassShadow,
  cardInsightGlow,
  midnightGradientStops,
} from "@/theme/style/color-palette";

export const cardRootStyles = (theme: Theme): CSSObject => ({
  alignItems: "flex-start",
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
  backgroundImage: "none",
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
  boxSizing: "border-box",
  color: theme.palette.vars.baseTextDefault,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  justifyContent: "center",
  padding: "16px",
});

export const cardInteractiveStyles = (theme: Theme): CSSObject => ({
  border: `1px solid ${theme.palette.vars.controlBorderActive}`,
});

export const cardActiveStyles = (theme: Theme): CSSObject => ({
  ...cardInteractiveStyles(theme),
  boxShadow: theme.shadows[2],
});

export const cardDisabledStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.vars.controlBackgroundDisabled,
  border: `1px solid ${theme.palette.vars.controlBorderDisabled}`,
  boxShadow: theme.shadows[2],
  color: theme.palette.vars.baseTextDisabled,
  pointerEvents: "none" as const,
  "& .MuiTypography-root, & .MuiSvgIcon-root": {
    color: theme.palette.vars.baseTextDisabled,
  },
});

/**
 * Glow treatment: gradient border + blue glow.
 *
 * Figma: `Card/Basic Interactive` (274405:44327), border token
 * `Gradient/Panel-Exec-Border`.
 *
 * The border is a 1px gradient ring rather than a `border`, because a gradient
 * cannot be assigned to `border-color` and `border-image` ignores
 * `border-radius`. The mask-composite pseudo-element is the same technique used
 * by the Button `gradientOutlined` variant; it follows the 8px radius and keeps
 * the card's own background intact.
 */
export const cardGlowStyles = (theme: Theme): CSSObject => ({
  position: "relative",
  border: "none",
  boxShadow: cardInsightGlow,
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "1px",
    background: theme.palette.gradients.gradientPanelExecBorder,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    // The ring is positioned, so without this it would paint above the card's
    // non-positioned children.
    zIndex: 0,
  },
});

/** CSS custom property carrying the alert accent down to `CardAlertHeader`. */
export const cardAlertAccentVar = "--card-alert-accent";

/** Severity label colour. Figma: `Alerts Card` (274421:47415). */
export const cardAlertAccent = (severity: CardAlertSeverity): string =>
  severity === "critical" ? alertCriticalText : alertWarningText;

/**
 * Alert treatment.
 *
 * Figma: `Alerts Card` (274421:47415) — critical (274421:47325) and warning
 * (274421:47332). That whole group is scaled 0.869x on the canvas, so every
 * length the design context reports has been divided through: the 20.863px
 * radius is 24px, 17.386px of padding is 20px, and so on.
 *
 * The two severities share one surface and differ in exactly two ways: critical
 * carries the rainbow gradient border, and the accent colour the header picks
 * up. Warning has no border at all — the design context for 274421:47332
 * reports no border property, where 274421:47325 reports one.
 *
 * The border is a 1px mask-composite ring rather than a `border`, for the same
 * reason as `cardGlowStyles`: a gradient cannot be assigned to
 * `border-color`, and `border-image` ignores `border-radius`.
 *
 * The gradient itself needs no new token. The swatch in the frame is labelled
 * `Gradient/Global-Border/Fade`, but its stops are #0a60ff -> #02c8ff ->
 * #ff007f -> #ff9000 — the rainbow ramp already in the theme as
 * `gradientGlobalBorderRainbow`, whose comment in `midnight-gradient-vars.ts`
 * records this exact mislabelling.
 */
export const cardAlertStyles = (
  theme: Theme,
  severity: CardAlertSeverity,
): CSSObject => ({
  // The same white the glass fill ramps out of, so no new colour is introduced.
  background: alpha(midnightGradientStops.glassWhite, 0.05),
  borderRadius: "24px",
  boxShadow: cardAlertShadow,
  color: theme.palette.vars.baseTextStrong,
  gap: "4px",
  // Deliberately no `overflow: hidden`, even though Figma marks the frame
  // `overflow-clip`. A rounded overflow clip is antialiased at the corners, and
  // multiplying that partial alpha by the ring's own partial alpha at the same
  // pixels roughly halves it — the arcs rendered at about 40% of the strength
  // of the straight edges, which are pixel-aligned and so lose nothing. The
  // card holds only text, so there is nothing to clip.
  padding: "20px",
  position: "relative",
  [cardAlertAccentVar]: cardAlertAccent(severity),
  // Inter Bold 20/30. No theme variant matches — `h6` is Sharp Sans at 20/28 —
  // so the alert scopes its own title style rather than bending a shared one.
  "& .MuiCardHeader-title": {
    color: "inherit",
    fontFamily: "Inter, sans-serif",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "30px",
  },
  ...(severity === "critical"
    ? {
        border: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: "1px",
          background: theme.palette.gradients.gradientGlobalBorderRainbow,
          // The card in the frame is mirrored — every text node in it carries
          // Figma's `rotate-180` flip artifact, which is also why the meta row
          // comes last in the layer order but renders first. That flip reverses
          // the border ramp too: sampling the rendered top edge gives orange at
          // 5% across, pink at 16%, cyan at 67% and blue at 88%, an exact
          // reversal of the token's blue -> cyan -> pink -> orange.
          //
          // Mirroring the ring reproduces that without forking the shared
          // token, which other surfaces use in its canonical direction. The
          // radius is uniform on all four corners, so the flip changes nothing
          // but the ramp.
          transform: "scaleX(-1)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          // The ring is positioned, so without this it would paint above the
          // card's non-positioned children.
          zIndex: 0,
        },
      }
    : {}),
});

/**
 * Graph-connector treatment.
 *
 * Figma: `Section 3` (274455:54313). The card there exports as a single SVG
 * whose defs carry all three `Graph-Connector` gradients verbatim, so every
 * value below is exact — geometry, alphas, blur and shadow alike.
 *
 * Two fills stack: the `Fill` linear ramp with the `Glow` radial painted over
 * it, both already carrying the export's 0.16 `fill-opacity` in their tokens.
 * CSS paints the first background layer on top, so the glow is listed first.
 *
 * The 1px stroke is a gradient, so it cannot be a `border-color`; it uses the
 * same mask-composite ring as the other treatments, drawn on `::after` and
 * with no `overflow: hidden` — see the alert treatment for why that clip
 * thins the ring's corner arcs.
 */
export const cardConnectorStyles = (theme: Theme): CSSObject => ({
  background: `${theme.palette.gradients.gradientGraphConnectorGlow}, ${theme.palette.gradients.gradientGraphConnectorFill}`,
  backdropFilter: `blur(${cardConnectorBlur})`,
  border: "none",
  // The export's path turns its corner over 6px in both axes.
  borderRadius: "6px",
  boxShadow: cardConnectorShadow,
  color: theme.palette.vars.baseTextStrong,
  padding: "20px",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "1px",
    background: theme.palette.gradients.gradientGraphConnectorStroke,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    zIndex: 0,
  },
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

/**
 * Frosted-glass treatment.
 *
 * Figma: `Glass Card` (274490:55387). Unlike the earlier revision of this
 * frame, every layer here is EXACT — the card surface and its flair export as
 * SVGs whose gradient defs, blur radii and corner radius can be read directly
 * (all at the mockup's 0.8928 scale, divided out below and in the tokens).
 *
 * Layer stack, bottom to top:
 *  1. `::before` — the `Dashboard-Card/Fill/Cyan-Purple` flair: a cyan-to-periwinkle
 *     crescent across the lower card, keeping the frame's own shape and its
 *     own 20.15px layer blur. In Figma it sits BEHIND the surface (flair z=2,
 *     glass surface z=3); a pseudo-element cannot get beneath its own
 *     element's background, so it paints above the fill instead. Near the
 *     card's bottom the radial is only ~5% white, so the inverted order costs
 *     little — and keeping the flair on its own element is what preserves the
 *     shape and blur.
 *  2. The card's own background — the `Card-Glass-BG` radial, anchored at the
 *     top-right corner, over `backdrop-filter: blur(40px)`.
 *  3. `::after` — the `Card-Glass-BORDER` hairline, a vertical ramp that fades
 *     out by the bottom edge. A gradient cannot be a `border-color`, so it is
 *     the same mask-composite ring as the `glow` treatment; drawn as
 *     `::after` so it paints above the flair.
 *
 * No `overflow: hidden`, for the same corner-thinning reason as the alert
 * treatment — and the flair is designed to bleed past the card edge anyway.
 */
export const cardGlassStyles = (theme: Theme): CSSObject => ({
  background: theme.palette.gradients.gradientCardGlassBg,
  backdropFilter: `blur(${cardGlassBlur})`,
  border: "none",
  // SVG path outer corner radius 19.64 / 0.8928.
  borderRadius: "22px",
  boxShadow: cardGlassShadow,
  color: theme.palette.vars.baseTextStrong,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    // The flair is a crescent, not a band: its flat bottom hugs the card's
    // bottom edge (bleeding just past it) while its top edge arcs mid-card
    // and falls toward both ends. A half-ellipse dome reproduces that arc;
    // the blur softens it into the rendered glow.
    //
    // Solved off the export's own path rather than estimated. Its cubic
    // `C327.375 20.2369, 172.023 18.837, 39.3263 83.4893` bottoms out at
    // t = 0.50983, y = 35.9785, and the flat bottom sits at y = 102.235;
    // mapped through the layer's render bounds against the 188-tall card,
    // that is 66.111% down for the peak and 1.354% past the bottom edge.
    // Full width, no horizontal bleed — the path spans the card's 434 exactly
    // (433.882 of it, 0.03% short on the right).
    inset: "66.111% 0% -1.354% 0%",
    borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
    background: theme.palette.gradients.gradientDashboardCardFillCyanPurple,
    // The layer's OWN blur, and only that: the export carries
    // `feGaussianBlur stdDeviation="17.9891"` — half the 35.978 layer-blur
    // radius Figma reports, the same halving the backdrop blur goes through —
    // and 17.9891 / 0.8928 = 20.15px.
    //
    // Do NOT fold the surface's 40px backdrop blur in on top. In Figma the
    // flair sits behind the surface, so the order is `blur(20.15) -> composite
    // over an opaque backdrop -> blur(40)`, and that second pass only softens
    // edges. Composing them into sqrt(20.15^2 + 40^2) = 44.788 instead blurs
    // the flair while it is still translucent, spreading its ALPHA rather than
    // its colour — and against a crescent only ~66px tall that drains the glow.
    filter: "blur(20.15px)",
    opacity: 0.73,
    pointerEvents: "none",
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    padding: "1px",
    background: theme.palette.gradients.gradientCardGlassBorder,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    pointerEvents: "none",
    zIndex: 0,
  },
  // Both layers are positioned; keep the card's content above them.
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

/**
 * Left-to-right fade across the photo — Figma `Rectangle 10` (274405:44237).
 *
 * This layer is missing from every `get_design_context` response for the card,
 * because it exports as an SVG rather than as CSS. Read off that export, the
 * ramp is horizontal (a 3deg tilt, dropped here) and its stops sit at 25.15%
 * and 50.81% of the card width — the "till 50%" the design calls for. Figma
 * declares the transparent stop as `#0e0d39`; at zero alpha it only affects
 * interpolation, so the fade uses the surface colour it is ramping out of.
 *
 * Figma masks the photo to the right of the card and puts this ramp underneath
 * it, running transparent -> opaque, so it backs the photo. Here the photo is a
 * `cover` background that spans the whole card, so the ramp is oriented the
 * other way and sits above the photo: it holds the flat surface colour across
 * the left quarter, where the copy sits, and clears by the midpoint. Same
 * rendered result, but it holds up for a background image of any size.
 */
export const cardImageSideFade = `linear-gradient(90deg, ${midnightGradientStops.welcomeCardStart} 25.15%, ${alpha(midnightGradientStops.welcomeCardStart, 0)} 50.81%)`;

/**
 * Background-image treatment.
 *
 * Figma: `Welcome Card` (274405:44234) inside the `Card with image` frame
 * (274417:44476). Fill tokens `Gradient/Welcome-Card-BG-Dark` and
 * `Gradient/Overlay-Black-Fade-In`.
 *
 * The design stacks the dark base gradient, the photo at 50% opacity, two
 * scrims, then the content. The photo and the scrims need different opacities,
 * and CSS cannot set per-layer opacity inside a single `background-image`, so
 * they are painted as two pseudo-elements — `::before` for the photo,
 * `::after` for both scrims. `overflow: hidden` clips them to the card radius.
 *
 * The scrims run in two directions: `Gradient/Overlay-Black-Fade-In` darkens
 * the card from the top down, and `cardImageSideFade` holds the surface colour
 * across the left, so the title and body copy always land on flat colour
 * rather than on the picture.
 *
 * This surface also carries its own geometry (20px radius, 24px padding, 16px
 * gap) rather than the 8px/16px/12px of `cardRootStyles`, because the design
 * treats it as a larger promotional surface.
 */
export const cardImageStyles = (theme: Theme, image: string): CSSObject => ({
  backdropFilter: "blur(60px)",
  background: theme.palette.gradients.gradientWelcomeCardBgDark,
  borderRadius: "20px",
  color: theme.palette.vars.baseTextStrong,
  gap: "16px",
  overflow: "hidden",
  padding: "24px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    backgroundImage: `url("${image}")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.5,
    pointerEvents: "none",
    zIndex: 0,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    inset: 0,
    // First layer paints on top: the vertical scrim over the horizontal one,
    // matching the order the design stacks them in.
    background: `${theme.palette.gradients.gradientOverlayBlackFadeIn}, ${cardImageSideFade}`,
    pointerEvents: "none",
    zIndex: 0,
  },
  // The two layers are positioned, so without this they would paint above the
  // card's non-positioned children.
  "& > *": {
    position: "relative",
    zIndex: 1,
  },
});

export const cardSkeletonStyles = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.vars.baseBackgroundWeak,
  "&.MuiSkeleton-wave::after": {
    background: `linear-gradient(90deg, ${theme.palette.vars.baseBackgroundWeak} 0%, ${theme.palette.vars.controlBorderWeak} 49.7%, ${theme.palette.vars.baseBackgroundWeak} 100%)`,
  },
});
