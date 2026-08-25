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
 * The ramp spans the element's box and nothing rescales it, so how far a string
 * gets along it depends on how much of the line it fills — a short line stays
 * white, a full one reaches `#3f7def`. Do not add `width: fit-content` or
 * `background-size`: sizing the ramp to the text pins every string to the same
 * colour whatever its length.
 */
export const StyledTypography = styled(MuiTypography, {
  shouldForwardProp: (prop) => prop !== "gradient",
})(({ theme, gradient }) => ({
  ...(gradient && {
    background: theme.palette.gradients.gradientTextWhiteBlue,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }),
})) as typeof MuiTypography;
