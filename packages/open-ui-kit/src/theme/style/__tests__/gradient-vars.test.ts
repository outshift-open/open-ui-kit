/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material/styles";

import { lightTheme } from "@/theme/light/light-theme";
import { darkTheme } from "@/theme/dark/dark-theme";
import { iocTheme } from "@/theme/ioc/ioc-theme";
import { midnightTheme } from "@/theme/midnight/midnight-theme";
import { baseGradientVars } from "../gradient-vars-base";
import { midnightGradientVars } from "@/theme/midnight/midnight-gradient-vars";
import { gradientsRedPressed } from "../gradients";

const TOKEN_KEYS = Object.keys(baseGradientVars).sort();

const THEMES: ReadonlyArray<[string, Theme]> = [
  ["light", lightTheme],
  ["dark", darkTheme],
  ["ioc", iocTheme],
  ["midnight", midnightTheme],
];

describe("gradient vars contract", () => {
  it("exposes the same token set on every theme", () => {
    for (const [name, theme] of THEMES) {
      expect({
        name,
        keys: Object.keys(theme.palette.gradients).sort(),
      }).toEqual({ name, keys: TOKEN_KEYS });
    }
  });

  // `palette.vars` needed an explicit re-assert on the IoC theme because the
  // second `createTheme` pass can drop custom palette keys. Guard `gradients`
  // against the same failure on all four themes.
  it("survives createTheme on every theme", () => {
    for (const [name, theme] of THEMES) {
      for (const key of TOKEN_KEYS) {
        const value =
          theme.palette.gradients[key as keyof typeof baseGradientVars];
        expect({ name, key, empty: !value }).toEqual({
          name,
          key,
          empty: false,
        });
      }
    }
  });

  it("resolves Midnight to the Midnight gradient set", () => {
    expect(midnightTheme.palette.gradients).toEqual(midnightGradientVars);
  });

  it("falls back to the base set on the non-Midnight themes", () => {
    expect(lightTheme.palette.gradients).toEqual(baseGradientVars);
    expect(darkTheme.palette.gradients).toEqual(baseGradientVars);
    expect(iocTheme.palette.gradients).toEqual(baseGradientVars);
  });

  it("switches value when the theme switches", () => {
    expect(midnightTheme.palette.gradients.gradientDataVizCyanBlue).not.toBe(
      lightTheme.palette.gradients.gradientDataVizCyanBlue,
    );
  });
});

describe("midnight gradient values", () => {
  // Exact fills — angle is axis-aligned or verified, so these are pinned.
  it("matches the Figma values for axis-aligned fills", () => {
    const g = midnightGradientVars;

    expect(g.gradientDataVizCyanBlue).toBe(
      "linear-gradient(90deg, #5de2e8 0%, #187adc 100%)",
    );
    expect(g.gradientGlobalButtonPrimaryFill).toBe(
      "linear-gradient(90deg, #0745b8 0%, #2e6ee5 100%)",
    );
    expect(g.gradientTextWhiteBlue).toBe(
      "linear-gradient(90deg, #ffffff 0%, #9dbcf7 51.28%, #3f7def 100%)",
    );
    expect(g.gradientGaugeArcTeal).toBe(
      "linear-gradient(90deg, #29fcc4 0%, #00af2f 100%)",
    );
    expect(g.gradientDataVizPinkMagenta).toBe(
      "linear-gradient(180deg, rgba(246, 52, 162, 0.7) 0%, rgba(144, 31, 95, 0.7) 100%)",
    );
    expect(g.gradientOverlayBlackFadeIn).toBe(
      "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 52.404%, rgba(102, 102, 102, 0) 100%)",
    );
  });

  // Glow dots — radial gradient from the top-left corner.
  it("matches the Figma values for the glow dots", () => {
    expect(midnightGradientVars.gradientGlowGreen).toBe(
      "radial-gradient(circle at 0% 0%, rgba(17, 255, 200, 0.7) 0%, rgba(179, 255, 129, 0.7) 100%)",
    );
    expect(midnightGradientVars.gradientGlowOrange).toBe(
      "radial-gradient(circle at 0% 0%, rgba(255, 157, 0, 0.8) 0%, rgba(255, 212, 142, 0.8) 100%)",
    );
    expect(midnightGradientVars.gradientGlowRed).toBe(
      "radial-gradient(circle at 0% 0%, rgba(255, 3, 41, 0.4) 0%, rgba(255, 87, 70, 0.4) 100%)",
    );
  });

  // `Gradient/Alert-Line-Red` has identical stops and offsets to the existing
  // `gradientsRedPressed` token, so it reuses it rather than re-deriving the
  // angle from an aspect-ratio-distorted Figma export.
  it("reuses the canonical red gradient for Alert-Line-Red", () => {
    expect(midnightGradientVars.gradientAlertLineRed).toBe(gradientsRedPressed);
  });

  // Single-stop in Figma, so it must resolve to a flat colour, not a ramp.
  it("keeps single-stop tokens flat", () => {
    expect(midnightGradientVars.gradientGraphFlowTeal).toBe(
      "rgba(1, 117, 128, 0.2)",
    );
  });

  // Stroke gradients cannot be read back from the Figma MCP server, so these
  // values were measured by sampling the rendered swatch. Pinning them guards
  // against a silent regression to the earlier evenly-distributed guesses.
  describe("measured stroke geometry", () => {
    const g = midnightGradientVars;

    it("uses a horizontal ramp for every stroke", () => {
      const strokes = [
        g.gradientGlobalBorderFade,
        g.gradientGlobalBorderRainbow,
        g.gradientGlobalButtonPrimaryBorderGlow,
        g.gradientDashboardGraphNodeBorder,
        g.gradientGraphConnectorStroke,
        g.gradientIconButtonBlueGlow,
        g.gradientCardHighlightRadial,
      ];
      for (const value of strokes) {
        expect(value.startsWith("linear-gradient(90deg,")).toBe(true);
      }
    });

    // Glass card family — exact values from the SVG exports in `Glass Card`
    // (274490:55387); see the block comment in `midnight-gradient-vars.ts`.
    it("anchors the glass fill radial at the top-right corner", () => {
      expect(g.gradientCardGlassBg).toBe(
        "radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%)",
      );
    });

    it("scales the subtle glass variant to 70% of the fill", () => {
      expect(g.gradientCardGlassBgSubtle).toBe(
        "radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.28) 0%, rgba(255, 255, 255, 0.035) 100%)",
      );
    });

    it("fades the glass border out toward the bottom", () => {
      expect(g.gradientCardGlassBorder).toBe(
        "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 10%, rgba(241, 241, 241, 0.3) 75%, rgba(153, 153, 153, 0) 100%)",
      );
    });

    it("runs the glass flair cyan to periwinkle down the streak", () => {
      expect(g.gradientDashboardCardFillCyanPurple).toBe(
        "linear-gradient(180deg, rgba(0, 187, 255, 0.37) -83.247%, rgba(161, 166, 254, 0.73) 100%)",
      );
    });

    it("sweeps the CTA glow mint to gold with tight midpoints", () => {
      expect(g.gradientCardGlassCtaGlow).toBe(
        "radial-gradient(87% 72% at 6.5% 14%, #74ffc7 44%, #03b3ff 50%, #f634a2 58%, #ffe070 99%)",
      );
    });

    // Alpha ramps up left to right, opposite to the order shown on the label.
    // Confirmed verbatim by the card SVG in `Section 3` (274455:54313).
    it("ramps the graph connector stroke upward", () => {
      expect(g.gradientGraphConnectorStroke).toBe(
        "linear-gradient(90deg, rgba(199, 211, 234, 0.06) 0%, rgba(199, 211, 234, 0.16) 100%)",
      );
    });

    // Graph-connector fill and glow — exact, from the same SVG export.
    it("uses the card-accurate angle for the connector fill", () => {
      expect(g.gradientGraphConnectorFill).toBe(
        "linear-gradient(155.21deg, rgba(199, 211, 234, 0.035) 0%, rgba(199, 211, 234, 0.016) 100%)",
      );
    });

    it("anchors the connector glow at the bottom of the card", () => {
      expect(g.gradientGraphConnectorGlow).toBe(
        "radial-gradient(85% 85% at 50% 100%, rgba(199, 211, 234, 0.064) 0%, rgba(199, 211, 234, 0.008) 100%)",
      );
    });

    it("places the rainbow pink stop at 83%", () => {
      expect(g.gradientGlobalBorderRainbow).toContain("#ff007f 83%");
    });

    // The label says #0a66ff; the rendered stroke measures #0a60ff. Direction
    // comes from the toast instances, not the swatch, which runs the other way.
    it("ramps the border fade slate to blue", () => {
      expect(g.gradientGlobalBorderFade).toBe(
        "linear-gradient(90deg, rgba(77, 99, 128, 0.7) 10%, #3d5066 31%, #00bceb 51%, #0a60ff 79%)",
      );
    });
  });
});
