/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Typography as MuiTypography, styled } from "@mui/material";

/**
 * Typography with an optional gradient text fill.
 *
 * When the `gradient` prop is set, the glyphs are filled with a gradient via
 * `background-clip: text` instead of a flat color. It is a prop, not a
 * `variant`, so it composes with any `variant` (h1, subtitle, body, ...).
 *
 * `shouldForwardProp` keeps `gradient` off the DOM node so React does not warn
 * about a non-boolean attribute. The cast back to `typeof MuiTypography`
 * preserves the polymorphic `component` prop and every MUI variant, which a
 * plain `styled()` call would otherwise drop. Figma: `Gradient/Text-White-Blue`.
 *
 * Two properties set the ramp's geometry, and both are needed.
 *
 * `width: fit-content` shrink-wraps the background box to the glyphs. Without
 * it the box is the full block width, so `background-clip: text` reveals only
 * the leading slice of the ramp — and which slice depends on the container and
 * the string, so the same treatment rendered white-ish at 11% for a short
 * subtitle and mid-ramp at 39% for an h1.
 *
 * `background-size: 195%` then stretches the ramp past the glyphs so it ends
 * where Figma's does. Figma anchors the gradient to the text layer's own box:
 * for `Welcome Amy!` (274455:49077) the SVG export puts the handles at
 * x1 -1.617 / x2 856.383 — an 858 span over 440 of glyphs, so the text covers
 * 51.3% of the ramp and stops at #9dbcf7 rather than the token's #3f7def.
 * 858 / 440 = 1.95, and 100 / 195 = 0.513 puts the last glyph back on that
 * same stop at any size. Fitting the box alone ran the full token and read far
 * too blue.
 */
export const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "gradient",
})(({ theme, gradient }) => ({
  ...(gradient && {
    background: theme.palette.gradients.gradientTextWhiteBlue,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    width: "fit-content",
    backgroundSize: "195% 100%",
    backgroundRepeat: "no-repeat",
    // Render the gradient per line when the text wraps.
    WebkitBoxDecorationBreak: "clone",
    boxDecorationBreak: "clone",
  }),
})) as typeof MuiTypography;
