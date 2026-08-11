/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { Theme } from "@mui/material/styles";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardActionArea,
} from "../components/card";
import CardAlertHeader from "../components/card-alert-header";
import CardDescription from "../components/card-description";
import CardSubheader from "../components/card-subheader";
import {
  cardActiveStyles,
  cardAlertAccent,
  cardAlertAccentVar,
  cardAlertStyles,
  cardConnectorStyles,
  cardDisabledStyles,
  cardGlassStyles,
  cardGlowStyles,
  cardImageSideFade,
  cardImageStyles,
  cardInteractiveStyles,
  cardRootStyles,
} from "../styles";
import { midnightTheme } from "@/theme/midnight/midnight-theme";
import {
  cardAlertShadow,
  cardConnectorBlur,
  cardConnectorShadow,
  cardGlassBlur,
  cardGlassShadow,
  cardInsightGlow,
} from "@/theme/style/color-palette";

const renderCard = (ui: React.ReactElement, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

describe("Card", () => {
  describe("rendering", () => {
    it("renders card with content", () => {
      renderCard(
        <Card>
          <CardHeader title="Card title" />
          <CardContent>
            <CardDescription>Description text</CardDescription>
          </CardContent>
        </Card>,
      );
      expect(screen.getByText("Card title")).toBeInTheDocument();
      expect(screen.getByText("Description text")).toBeInTheDocument();
    });

    it("renders card as a region by default", () => {
      renderCard(<Card data-testid="card">Content</Card>);
      expect(screen.getByTestId("card")).toBeInTheDocument();
    });
  });

  describe("CardHeader", () => {
    it("renders title", () => {
      renderCard(
        <Card>
          <CardHeader title="My title" />
        </Card>,
      );
      expect(screen.getByText("My title")).toBeInTheDocument();
    });

    it("renders subheader when provided", () => {
      renderCard(
        <Card>
          <CardHeader title="Title" subheader="Sub" />
        </Card>,
      );
      expect(screen.getByText("Sub")).toBeInTheDocument();
    });
  });

  describe("CardContent", () => {
    it("renders children", () => {
      renderCard(
        <Card>
          <CardContent>Inner content</CardContent>
        </Card>,
      );
      expect(screen.getByText("Inner content")).toBeInTheDocument();
    });
  });

  describe("CardActions", () => {
    it("renders action buttons", () => {
      renderCard(
        <Card>
          <CardActions>
            <button>Action</button>
          </CardActions>
        </Card>,
      );
      expect(
        screen.getByRole("button", { name: "Action" }),
      ).toBeInTheDocument();
    });
  });

  describe("CardActionArea", () => {
    it("renders as a button for clickable cards", () => {
      renderCard(
        <CardActionArea>
          <Card>Clickable card</Card>
        </CardActionArea>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("design token styles", () => {
    it("maps light card surface tokens to the Figma CSS values", () => {
      expect(cardRootStyles(lightTheme)).toEqual(
        expect.objectContaining({
          alignItems: "flex-start",
          backgroundColor: "#fbfcfe",
          borderRadius: "8px",
          boxShadow: "0px 4px 4px rgba(200, 213, 245, 0.33)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          justifyContent: "center",
          padding: "16px",
        }),
      );
      expect(cardInteractiveStyles(lightTheme)).toEqual({
        border: "1px solid #0051af",
      });
      expect(cardActiveStyles(lightTheme)).toEqual({
        border: "1px solid #0051af",
        boxShadow: "0px 2px 5px rgba(200, 213, 245, 0.4)",
      });
      expect(cardDisabledStyles(lightTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#f5f8fd",
          border: "1px solid #e8eefb",
          boxShadow: "0px 2px 5px rgba(200, 213, 245, 0.4)",
          color: "#c5c7cb",
        }),
      );
    });

    it("maps dark card surface tokens to the Figma CSS values", () => {
      expect(cardRootStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#183056",
          boxShadow: "0px 4px 4px rgba(6, 34, 66, 0.33)",
          color: "#e8e9ea",
        }),
      );
      expect(cardInteractiveStyles(darkTheme)).toEqual({
        border: "1px solid #12c1ff",
      });
      expect(cardActiveStyles(darkTheme)).toEqual({
        border: "1px solid #12c1ff",
        boxShadow: "0px 2px 5px rgba(6, 34, 66, 0.4)",
      });
      expect(cardDisabledStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: "#0d274d",
          border: "1px solid #263b62",
          boxShadow: "0px 2px 5px rgba(6, 34, 66, 0.4)",
          color: "#777d85",
        }),
      );
    });

    it("applies disabled state through the public disabled prop", () => {
      renderCard(
        <Card data-testid="card" disabled>
          <CardHeader title="Disabled title" subheader="Disabled subheader" />
        </Card>,
      );

      expect(screen.getByTestId("card")).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      expect(screen.getByTestId("card")).toHaveStyle({
        backgroundColor: "#f5f8fd",
        border: "1px solid #e8eefb",
      });
    });

    it("lets consumer sx override internal card spacing", () => {
      renderCard(
        <Card data-testid="card" sx={{ padding: "24px" }}>
          Content
        </Card>,
      );

      expect(screen.getByTestId("card")).toHaveStyle({ padding: "24px" });
    });
  });

  describe("CardDescription", () => {
    it("renders description text", () => {
      renderCard(<CardDescription>Some description</CardDescription>);
      expect(screen.getByText("Some description")).toBeInTheDocument();
    });

    it("renders without throwing in light mode", () => {
      expect(() =>
        renderCard(<CardDescription>Light description</CardDescription>),
      ).not.toThrow();
    });

    it("renders without throwing in dark mode", () => {
      expect(() =>
        renderCard(<CardDescription>Dark description</CardDescription>, true),
      ).not.toThrow();
    });
  });

  describe("CardSubheader", () => {
    it("renders subheader text", () => {
      renderCard(<CardSubheader>March 26, 2025</CardSubheader>);
      expect(screen.getByText("March 26, 2025")).toBeInTheDocument();
    });

    it("renders without throwing in light mode", () => {
      expect(() =>
        renderCard(<CardSubheader>Light subheader</CardSubheader>),
      ).not.toThrow();
    });

    it("renders without throwing in dark mode", () => {
      expect(() =>
        renderCard(<CardSubheader>Dark subheader</CardSubheader>, true),
      ).not.toThrow();
    });
  });

  describe("light theme token coverage", () => {
    it("renders full card composition in light mode without throwing", () => {
      expect(() =>
        renderCard(
          <Card>
            <CardHeader title="Title" />
            <CardContent>
              <CardSubheader>Subheader</CardSubheader>
              <CardDescription>Description</CardDescription>
            </CardContent>
            <CardActions>
              <button>Action</button>
            </CardActions>
          </Card>,
        ),
      ).not.toThrow();
    });

    it("renders clickable card in light mode without throwing", () => {
      expect(() =>
        renderCard(
          <CardActionArea>
            <Card>
              <CardHeader title="Clickable" />
            </Card>
          </CardActionArea>,
        ),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders full card composition in dark mode without throwing", () => {
      expect(() =>
        renderCard(
          <Card>
            <CardHeader title="Title" />
            <CardContent>
              <CardSubheader>Subheader</CardSubheader>
              <CardDescription>Description</CardDescription>
            </CardContent>
            <CardActions>
              <button>Action</button>
            </CardActions>
          </Card>,
          true,
        ),
      ).not.toThrow();
    });

    it("renders clickable card in dark mode without throwing", () => {
      expect(() =>
        renderCard(
          <CardActionArea>
            <Card>
              <CardHeader title="Clickable dark" />
            </Card>
          </CardActionArea>,
          true,
        ),
      ).not.toThrow();
    });
  });

  // Figma: `Card/Basic Interactive` (274405:44327), border token
  // `Gradient/Panel-Exec-Border`.
  describe("glow treatment", () => {
    it("paints the border as a mask-composite ring, not a border property", () => {
      const styles = cardGlowStyles(midnightTheme);
      const ring = styles["&::before"] as Record<string, unknown>;

      // A gradient cannot be a border-color, so the border must be removed and
      // the ramp drawn by the ring instead.
      expect(styles.border).toBe("none");
      expect(ring.background).toBe(
        midnightTheme.palette.gradients.gradientPanelExecBorder,
      );
      expect(ring.padding).toBe("1px");
      expect(ring.maskComposite).toBe("exclude");
      // Must follow the card's 8px radius rather than a hardcoded value.
      expect(ring.borderRadius).toBe("inherit");
      // Must not sit above the card's non-positioned children.
      expect(ring.zIndex).toBe(0);
      expect(ring.pointerEvents).toBe("none");
    });

    it("applies the blue glow shadow", () => {
      expect(cardGlowStyles(midnightTheme).boxShadow).toBe(cardInsightGlow);
      expect(cardInsightGlow).toBe("0px 4px 17px rgba(10, 96, 255, 0.4)");
    });

    it("resolves the border to the measured diagonal ramp", () => {
      // Sampling the rendered Figma card showed a 135deg diagonal, despite the
      // swatch being labelled "Radial".
      const border = midnightTheme.palette.gradients.gradientPanelExecBorder;
      expect(border).toContain("linear-gradient(135deg");
      expect(border).not.toContain("radial-gradient");
    });

    it("renders without throwing and keeps `glow` off the DOM node", () => {
      expect(() =>
        renderCard(
          <Card data-testid="glow-card" glow>
            <CardHeader title="Glow" />
          </Card>,
        ),
      ).not.toThrow();

      expect(screen.getByTestId("glow-card")).not.toHaveAttribute("glow");
    });
  });

  // Figma: `Alerts Card` (274421:47415) — critical (274421:47325) and warning
  // (274421:47332). That group is scaled 0.869x, so every measurement below is
  // the reported value divided through.
  describe("alert treatment", () => {
    it("shares one surface and geometry across both severities", () => {
      for (const severity of ["critical", "warning"] as const) {
        const styles = cardAlertStyles(midnightTheme, severity);

        expect(styles.background).toBe("rgba(255, 255, 255, 0.05)");
        expect(styles.borderRadius).toBe("24px");
        expect(styles.padding).toBe("20px");
        expect(styles.gap).toBe("4px");
        expect(styles.boxShadow).toBe(cardAlertShadow);
        // A rounded overflow clip is antialiased at the corners and eats into
        // the gradient ring's own antialiasing, thinning the arcs. Nothing in
        // an alert card overflows, so the clip is left off.
        expect(styles.overflow).toBeUndefined();
      }

      // It must differ from the default card, not just repeat it.
      expect(cardRootStyles(midnightTheme).borderRadius).toBe("8px");
    });

    it("gives only critical the rainbow gradient ring", () => {
      const critical = cardAlertStyles(midnightTheme, "critical");
      const warning = cardAlertStyles(midnightTheme, "warning");
      const ring = critical["&::before"] as Record<string, unknown>;

      // The swatch is labelled `Global-Border/Fade`, but its stops are the
      // rainbow ramp — see the note in `midnight-gradient-vars.ts`.
      expect(ring.background).toBe(
        midnightTheme.palette.gradients.gradientGlobalBorderRainbow,
      );
      expect(critical.border).toBe("none");
      // The frame's card is mirrored, so the ramp renders orange -> blue while
      // the token is authored blue -> orange. Sampled at the rendered top edge.
      expect(ring.transform).toBe("scaleX(-1)");
      expect(ring.padding).toBe("1px");
      expect(ring.maskComposite).toBe("exclude");
      expect(ring.borderRadius).toBe("inherit");
      expect(ring.zIndex).toBe(0);

      // The design context for the warning card reports no border at all.
      expect(warning["&::before"]).toBeUndefined();
      expect(warning.border).toBeUndefined();
    });

    it("resolves the ring to the four stops the swatch documents", () => {
      const ramp = midnightTheme.palette.gradients.gradientGlobalBorderRainbow;

      expect(ramp).toContain("#0a60ff");
      expect(ramp).toContain("#02c8ff");
      expect(ramp).toContain("#ff007f");
      expect(ramp).toContain("#ff9000");
    });

    it("publishes the accent colour for CardAlertHeader to read", () => {
      expect(cardAlertAccent("critical")).toBe("#eb4651");
      expect(cardAlertAccent("warning")).toBe("#ffae4c");

      // Passed down as a custom property so the severity is declared once, on
      // the card, rather than repeated on the header.
      expect(
        cardAlertStyles(midnightTheme, "critical")[cardAlertAccentVar],
      ).toBe("#eb4651");
    });

    it("renders the meta row and keeps `alert` off the DOM node", () => {
      renderCard(
        <Card alert="critical" data-testid="alert-card">
          <CardAlertHeader timestamp="4m ago">CRITICAL ALERT</CardAlertHeader>
          <CardHeader title="Optimization Failure" />
        </Card>,
      );

      const card = screen.getByTestId("alert-card");
      expect(card).not.toHaveAttribute("alert");
      expect(card).toHaveAttribute("data-card-alert", "critical");
      expect(screen.getByText("CRITICAL ALERT")).toBeInTheDocument();
      expect(screen.getByText("4m ago")).toBeInTheDocument();
    });

    it("omits the timestamp when none is given", () => {
      renderCard(
        <Card alert="warning">
          <CardAlertHeader>WARNING</CardAlertHeader>
        </Card>,
      );

      expect(screen.getByText("WARNING")).toBeInTheDocument();
      expect(screen.queryByText("3h ago")).not.toBeInTheDocument();
    });

    it("does not mark cards without an alert", () => {
      renderCard(<Card data-testid="plain">Content</Card>);

      expect(screen.getByTestId("plain")).not.toHaveAttribute(
        "data-card-alert",
      );
    });
  });

  // Figma: `Section 3` (274455:54313). The card there exports as one SVG whose
  // defs carry all three `Graph-Connector` gradients verbatim, so these are
  // exact rather than sampled.
  describe("connector treatment", () => {
    it("stacks the glow over the fill, with the glow painted first", () => {
      const styles = cardConnectorStyles(midnightTheme);
      const g = midnightTheme.palette.gradients;

      // CSS paints the first background layer on top, matching the export's
      // paint order: linear fill, then the radial glow above it.
      expect(styles.background).toBe(
        `${g.gradientGraphConnectorGlow}, ${g.gradientGraphConnectorFill}`,
      );
      expect(styles.backdropFilter).toBe(`blur(${cardConnectorBlur})`);
      expect(styles.boxShadow).toBe(cardConnectorShadow);
      // The export's path turns its corner over 6px in both axes.
      expect(styles.borderRadius).toBe("6px");
    });

    it("anchors the glow at the bottom edge of the card", () => {
      // translate(107.5 211) on a 215x207 path = 50% 100%; the -90deg rotated
      // (176.14, 182.947) scale gives 85% radii in both axes.
      expect(midnightTheme.palette.gradients.gradientGraphConnectorGlow).toBe(
        "radial-gradient(85% 85% at 50% 100%, rgba(199, 211, 234, 0.064) 0%, rgba(199, 211, 234, 0.008) 100%)",
      );
    });

    it("uses the card-accurate fill angle, not the swatch reading", () => {
      // The export's fill vector (0,4) -> (116.6,256.4) is 155.21deg. Figma
      // normalises gradient transforms to the layer box, so the 120x60 swatch
      // squeezed the same token to the 166.51deg previously recorded.
      const fill = midnightTheme.palette.gradients.gradientGraphConnectorFill;

      expect(fill).toContain("linear-gradient(155.21deg");
      expect(fill).not.toContain("166.51deg");
      // 0.16 fill-opacity baked in: 0.22 -> 0.035, 0.10 -> 0.016.
      expect(fill).toContain("rgba(199, 211, 234, 0.035) 0%");
      expect(fill).toContain("rgba(199, 211, 234, 0.016) 100%");
    });

    it("edges the card with the gradient stroke as a ring", () => {
      const styles = cardConnectorStyles(midnightTheme);
      const ring = styles["&::after"] as Record<string, unknown>;

      expect(styles.border).toBe("none");
      expect(ring.background).toBe(
        midnightTheme.palette.gradients.gradientGraphConnectorStroke,
      );
      expect(ring.padding).toBe("1px");
      expect(ring.maskComposite).toBe("exclude");
      // Same corner-thinning reason as the alert treatment.
      expect(styles.overflow).toBeUndefined();
    });

    it("renders without throwing and keeps `connector` off the DOM node", () => {
      expect(() =>
        renderCard(
          <Card connector data-testid="connector-card">
            <CardHeader title="Divergent Planning Paths" />
          </Card>,
        ),
      ).not.toThrow();

      expect(screen.getByTestId("connector-card")).not.toHaveAttribute(
        "connector",
      );
    });
  });

  // Figma: `Glass Card` (274490:55387). Every value below is read straight off
  // the frame's SVG exports (nodes 274490:55140 and 274490:55139), at the
  // mockup's 0.8928 scale divided out — none of it is pixel-sampled.
  describe("glass treatment", () => {
    it("fills with the glass gradient token over a backdrop blur", () => {
      const styles = cardGlassStyles(midnightTheme);

      expect(styles.background).toBe(
        midnightTheme.palette.gradients.gradientCardGlassBg,
      );
      // Without the blur it is a flat translucent panel, not glass. The 40px
      // comes from the export's own `backdrop-filter: blur(35.71px)` / 0.8928.
      expect(styles.backdropFilter).toBe(`blur(${cardGlassBlur})`);
      expect(cardGlassBlur).toBe("40px");
      expect(styles.boxShadow).toBe(cardGlassShadow);
    });

    it("anchors the fill radial at the top-right corner, 40% -> 5% white", () => {
      const fill = midnightTheme.palette.gradients.gradientCardGlassBg;

      expect(fill).toBe(
        "radial-gradient(100% 100% at 100% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.05) 100%)",
      );
    });

    it("layers the Glow-Teal flair behind the content", () => {
      const styles = cardGlassStyles(midnightTheme);
      const flair = styles["&::before"] as Record<string, unknown>;

      expect(flair.background).toBe(
        midnightTheme.palette.gradients.gradientDashboardCardFillCyanPurple,
      );
      // The token itself: cyan 37% at the top of the streak, periwinkle 73%
      // at the bottom, straight from the export's gradient def. The -83.247%
      // anchor is not decoration: Figma defines the ramp over the layer box
      // (y -19.1782 -> 102.235) but only paints the crescent inside it
      // (y 35.9785 -> 102.235), so the visible top edge is already 45.429% of
      // the way to periwinkle and never shows pure cyan.
      expect(midnightTheme.palette.gradients.gradientDashboardCardFillCyanPurple).toBe(
        "linear-gradient(180deg, rgba(0, 187, 255, 0.37) -83.247%, rgba(161, 166, 254, 0.73) 100%)",
      );
      // A bottom-anchored crescent: flat along the bottom edge, arcing up
      // mid-card and falling toward both ends — the dome comes from the
      // elliptical top radii. Peak and bleed are solved from the export path's
      // cubic (t=0.50983 -> y=35.9785) against the 188-tall card.
      expect(flair.inset).toBe("66.111% 0% -1.354% 0%");
      expect(flair.borderRadius).toBe("50% 50% 0 0 / 100% 100% 0 0");
      // The flair's OWN layer blur only, from the export's
      // `feGaussianBlur stdDeviation="17.9891"` / 0.8928 = 20.15 — Figma
      // reports the layer-blur radius as 35.978 and halves it on the way out,
      // exactly as it does for the backdrop blur.
      //
      // The surface's 40px backdrop blur is deliberately NOT folded in here.
      // In Figma that pass runs after the flair is composited over an opaque
      // backdrop, so it softens edges; applying it to the still-translucent
      // flair instead spreads alpha and drains the glow, since a ~45px blur
      // is comparable to the ~66px-tall crescent's own height.
      expect(flair.filter).toBe("blur(20.15px)");
      // The group opacity, on top of the alpha already in the stops.
      expect(flair.opacity).toBe(0.73);
      expect(flair.pointerEvents).toBe("none");
      expect(styles["& > *"]).toEqual({ position: "relative", zIndex: 1 });
    });

    it("draws the hairline as a ring that fades out at the bottom", () => {
      const styles = cardGlassStyles(midnightTheme);
      const ring = styles["&::after"] as Record<string, unknown>;

      // The border is a vertical ramp now, so it cannot be a `border-color`.
      expect(styles.border).toBe("none");
      expect(ring.background).toBe(
        midnightTheme.palette.gradients.gradientCardGlassBorder,
      );
      expect(midnightTheme.palette.gradients.gradientCardGlassBorder).toBe(
        "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 10%, rgba(241, 241, 241, 0.3) 75%, rgba(153, 153, 153, 0) 100%)",
      );
      expect(ring.padding).toBe("1px");
      expect(ring.maskComposite).toBe("exclude");
      expect(ring.borderRadius).toBe("inherit");
      // SVG path outer corner radius 19.64 / 0.8928.
      expect(styles.borderRadius).toBe("22px");
    });

    it("renders without throwing and keeps `glass` off the DOM node", () => {
      expect(() =>
        renderCard(
          <Card data-testid="glass-card" glass>
            <CardHeader title="Glass" />
          </Card>,
        ),
      ).not.toThrow();

      expect(screen.getByTestId("glass-card")).not.toHaveAttribute("glass");
    });
  });

  // Figma: `Welcome Card` (274405:44234) in the `Card with image` frame
  // (274417:44476). Fill tokens `Gradient/Welcome-Card-BG-Dark` and
  // `Gradient/Overlay-Black-Fade-In`.
  describe("image treatment", () => {
    const image = "/assets/img.png";

    it("layers the photo and the scrim as separate pseudo-elements", () => {
      const styles = cardImageStyles(midnightTheme, image);
      const photo = styles["&::before"] as Record<string, unknown>;
      const scrim = styles["&::after"] as Record<string, unknown>;

      // The base gradient is the card's own background; the photo sits above it
      // at half strength, and the scrim above that.
      expect(styles.background).toBe(
        midnightTheme.palette.gradients.gradientWelcomeCardBgDark,
      );
      expect(photo.backgroundImage).toBe(`url("${image}")`);
      expect(photo.backgroundSize).toBe("cover");
      // CSS cannot set per-layer opacity, which is why these are two elements.
      expect(photo.opacity).toBe(0.5);
      // Two scrims, vertical painted over horizontal.
      expect(scrim.background).toBe(
        `${midnightTheme.palette.gradients.gradientOverlayBlackFadeIn}, ${cardImageSideFade}`,
      );

      // Neither layer may swallow clicks or paint over the content.
      expect(photo.pointerEvents).toBe("none");
      expect(scrim.pointerEvents).toBe("none");
      expect(photo.zIndex).toBe(0);
      expect(scrim.zIndex).toBe(0);
      expect(styles["& > *"]).toEqual({ position: "relative", zIndex: 1 });
    });

    it("carries the larger geometry the design uses for this surface", () => {
      const styles = cardImageStyles(midnightTheme, image);

      expect(styles.borderRadius).toBe("20px");
      expect(styles.padding).toBe("24px");
      expect(styles.gap).toBe("16px");
      // Required so the two layers are clipped to the 20px radius.
      expect(styles.overflow).toBe("hidden");
      expect(styles.backdropFilter).toBe("blur(60px)");

      // It must differ from the default card, not just repeat it.
      expect(cardRootStyles(midnightTheme).borderRadius).toBe("8px");
      expect(cardRootStyles(midnightTheme).padding).toBe("16px");
    });

    // Figma `Rectangle 10` (274405:44237). It exports as SVG, so it never
    // appears in the generated design context and has to be read off that
    // export: stops at 25.15% and 50.81% of the card width.
    it("fades the surface out horizontally by the midpoint", () => {
      expect(cardImageSideFade).toContain("linear-gradient(90deg");
      expect(cardImageSideFade).toContain("#060b26 25.15%");
      expect(cardImageSideFade).toContain("rgba(6, 11, 38, 0) 50.81%");

      // It ramps out of the same colour the base gradient starts from, so the
      // left of the card reads as one flat surface.
      expect(
        midnightTheme.palette.gradients.gradientWelcomeCardBgDark,
      ).toContain("#060b26");
    });

    it("resolves the fills to the Figma gradient tokens in Midnight", () => {
      const g = midnightTheme.palette.gradients;

      expect(g.gradientOverlayBlackFadeIn).toBe(
        "linear-gradient(180deg, rgba(0, 0, 0, 0.65) 52.404%, rgba(102, 102, 102, 0) 100%)",
      );
      expect(g.gradientWelcomeCardBgDark).toContain("#060b26 64.87%");
    });

    it("keeps `image` off the DOM node and marks the card for text inheritance", () => {
      expect(() =>
        renderCard(
          <Card data-testid="image-card" image={image}>
            <CardHeader title="Explain" />
          </Card>,
        ),
      ).not.toThrow();

      const card = screen.getByTestId("image-card");
      expect(card).not.toHaveAttribute("image");
      expect(card).toHaveAttribute("data-card-image", "true");
    });

    it("does not mark cards without an image", () => {
      renderCard(<Card data-testid="plain-card">Content</Card>);

      expect(screen.getByTestId("plain-card")).not.toHaveAttribute(
        "data-card-image",
      );
    });

    /*
     * Tertiary actions on this surface read as text over the photo scrim, so
     * they take the Interactive/Text In ramp rather than the variant's
     * Interactive/Primary blue, which the scrim leaves sitting too dark.
     */
    describe("tertiary action colour", () => {
      const tertiaryRule = (theme: Theme) =>
        cardImageStyles(theme, image)[
          "& .MuiButton-root.MuiButton-tertariary"
        ] as Record<string, Record<string, string> | string>;

      it.each([
        ["midnight", midnightTheme],
        ["light", lightTheme],
        ["dark", darkTheme],
      ])("puts the whole %s ramp on Interactive/Text In", (_mode, theme) => {
        const rule = tertiaryRule(theme);
        const { vars } = theme.palette;

        expect(rule.color).toBe(vars.interactiveTextInDefault);
        expect(rule["&:hover"]).toEqual({
          color: vars.interactiveTextInHover,
        });
        expect(rule["&:active"]).toEqual({
          color: vars.interactiveTextInActive,
        });
      });

      it("moves every state off the variant's Interactive/Primary blue", () => {
        const rule = tertiaryRule(midnightTheme);
        const { vars } = midnightTheme.palette;

        // Leaving hover or active behind would make the button jump colour
        // ramps mid-interaction.
        expect(rule.color).not.toBe(vars.interactivePrimaryDefaultDefault);
        expect(rule["&:hover"]).not.toEqual({
          color: vars.interactivePrimaryDefaultHover,
        });
        expect(rule["&:active"]).not.toEqual({
          color: vars.interactivePrimaryDefaultActive,
        });
      });

      it("names the button root so the rule outweighs the variant's own", () => {
        const selectors = Object.keys(cardImageStyles(midnightTheme, image));

        /*
         * The variant styles itself with `&.MuiButton-tertariary` — the styled
         * class plus the variant class, two classes. A descendant selector
         * naming only the variant class would tie, leaving the winner to
         * emotion's injection order; `.MuiButton-root` takes this to three.
         */
        expect(selectors).toContain("& .MuiButton-root.MuiButton-tertariary");
        expect(selectors).not.toContain("& .MuiButton-tertariary");
      });
    });
  });
});
