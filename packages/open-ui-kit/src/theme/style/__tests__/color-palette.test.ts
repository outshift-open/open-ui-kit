/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  green50,
  greenPalette,
  lightBlue50,
  lightBluePalette,
  nightPalette,
  OS_LIGHT_COLORS,
  surfaceDark900Alpha40,
  surfaceLight50Alpha40,
  surfaceLight800Alpha40,
  surfaceLight900Alpha10,
} from "../color-palette";
import {
  ColorPaletteSection,
  paletteToSwatches,
} from "@/colors/color-palette-section";
import { darkVars } from "../../dark/dark-vars";
import { lightVars } from "../../light/light-vars";

describe("color palette foundations", () => {
  it("matches the Figma CSS values for excellent and success weak colors", () => {
    expect(lightBlue50).toBe("#edfcff");
    expect(lightBluePalette[50]).toBe("#edfcff");
    expect(OS_LIGHT_COLORS.lightBlue[50]).toBe("#edfcff");

    expect(green50).toBe("#ebfbf7");
    expect(greenPalette[50]).toBe("#ebfbf7");
    expect(OS_LIGHT_COLORS.green[50]).toBe("#ebfbf7");
  });

  it("wires light theme semantic tokens to the corrected palette entries", () => {
    expect(lightVars.baseTextDark).toBe("#00142b");
    expect(lightVars.brandTextTertiary).toBe("#fbab2c");
    expect(lightVars.brandLogoSecondary).toBe("#0d274d");
    expect(lightVars.excellentBackgroundWeak).toBe("#edfcff");
    expect(lightVars.excellentTextInDefault).toBe("#edfcff");
    expect(lightVars.excellentIconInDefault).toBe("#edfcff");

    expect(lightVars.successBackgroundWeak).toBe("#ebfbf7");
    expect(lightVars.successTextInDefault).toBe("#ebfbf7");
    expect(lightVars.successIconInDefault).toBe("#ebfbf7");

    expect(lightVars.interactiveSecondaryDefaultDisabled).toBe(
      surfaceDark900Alpha40,
    );
    expect(lightVars.interactiveSecondaryWeakDisabled).toBe(
      surfaceLight800Alpha40,
    );
    expect(lightVars.interactiveInverseTextDisabled).toBe(
      surfaceLight900Alpha10,
    );
  });

  it("wires dark theme semantic tokens to the corrected palette entries", () => {
    expect(darkVars.baseTextDark).toBe("#00142b");
    expect(darkVars.brandTextTertiary).toBe("#fbab2c");
    expect(darkVars.brandLogoSecondary).toBe("#ffffff");
    expect(darkVars.excellentTextDefault).toBe("#edfcff");
    expect(darkVars.excellentTextInDefault).toBe("#edfcff");
    expect(darkVars.excellentIconInDefault).toBe("#edfcff");

    expect(darkVars.successTextInDefault).toBe("#ebfbf7");
    expect(darkVars.successIconInDefault).toBe("#ebfbf7");

    expect(darkVars.interactiveSecondaryDefaultDisabled).toBe(
      surfaceLight50Alpha40,
    );
  });

  it("orders ramp swatches to match the Figma palette stacks", () => {
    expect(
      paletteToSwatches(greenPalette, "green").map(({ token }) => token),
    ).toEqual([
      "green-50",
      "green-100",
      "green-200",
      "green-300",
      "green-400",
      "green-500",
      "green-600",
      "green-700",
      "green-800",
      "green-900",
      "green-40%",
      "green-10%",
    ]);

    expect(
      paletteToSwatches(nightPalette, "night")
        .map(({ token }) => token)
        .slice(0, 2),
    ).toEqual(["night-10", "night-50"]);
  });

  it("renders swatches as keyboard-accessible copy buttons", () => {
    render(
      React.createElement(ColorPaletteSection, {
        title: "Blue",
        swatches: [{ token: "blue-500", value: "#0051af" }],
      }),
    );

    const swatch = screen.getByRole("button", {
      name: "Copy blue-500 #0051af",
    });

    expect(swatch).toHaveStyle({ height: "50px" });
  });

  it("shows copied feedback when a swatch copy succeeds", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });

    render(
      React.createElement(ColorPaletteSection, {
        title: "Blue",
        swatches: [{ token: "blue-500", value: "#0051af" }],
      }),
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Copy blue-500 #0051af",
      }),
    );

    expect(await screen.findByText("Copied!")).toBeInTheDocument();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("#0051af");
  });
});
