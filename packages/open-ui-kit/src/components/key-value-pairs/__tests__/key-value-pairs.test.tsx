/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { KeyValuePairs } from "..";
import {
  DEFAULT_KEY_VALUE_ITEMS,
  getKeyValueKeyStyles,
  getKeyValuePairStyles,
  getKeyValuePairsStyles,
  getKeyValueValueStyles,
} from "../styles";

const renderKeyValuePairs = (
  props: React.ComponentProps<typeof KeyValuePairs>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <KeyValuePairs {...props} />
    </ThemeProvider>,
  );

describe("KeyValuePairs", () => {
  it("renders keys and values as a description list", () => {
    const { container } = renderKeyValuePairs({
      items: DEFAULT_KEY_VALUE_ITEMS,
    });

    expect(container.querySelector("dl")).toBeInTheDocument();
    expect(screen.getByText("Key one")).toBeInTheDocument();
    expect(screen.getAllByText("Value")).toHaveLength(6);
  });

  it("supports stacked layout", () => {
    expect(() =>
      renderKeyValuePairs({
        items: DEFAULT_KEY_VALUE_ITEMS,
        layout: "stacked",
      }),
    ).not.toThrow();
  });

  it("uses expected grid spacing", () => {
    expect(getKeyValuePairsStyles(4, 6, "72px", "12px")).toMatchObject({
      display: "grid",
      gridTemplateColumns: "repeat(4, max-content)",
      gridTemplateRows: "repeat(6, max-content)",
      gridAutoFlow: "column",
      columnGap: "72px",
      rowGap: "12px",
    });
  });

  it("uses expected inline and stacked pair spacing", () => {
    expect(getKeyValueKeyStyles(lightTheme, "inline", "72px")).toMatchObject({
      width: "72px",
      flexShrink: 0,
    });
    expect(getKeyValueKeyStyles(lightTheme, "stacked", "72px")).toMatchObject({
      width: "auto",
      fontWeight: 400,
    });
    expect(getKeyValuePairStyles("inline", "16px")).toMatchObject({
      flexDirection: "row",
      gap: "16px",
      minHeight: "20px",
    });
    expect(getKeyValuePairStyles("stacked", "16px")).toMatchObject({
      flexDirection: "column",
      gap: "4px",
      minHeight: "44px",
    });
  });

  it("uses light theme text tokens", () => {
    expect(getKeyValueKeyStyles(lightTheme)).toMatchObject({
      color: lightTheme.palette.vars.baseTextDefault,
      width: "72px",
      fontWeight: 600,
      lineHeight: "20px",
    });
    expect(getKeyValueValueStyles(lightTheme)).toMatchObject({
      color: lightTheme.palette.vars.baseTextDefault,
      margin: 0,
      fontWeight: 400,
      letterSpacing: "0.25px",
    });
    expect(getKeyValueValueStyles(lightTheme, "stacked")).toMatchObject({
      fontWeight: 600,
    });
  });

  it("uses dark theme text tokens", () => {
    expect(getKeyValueKeyStyles(darkTheme)).toMatchObject({
      color: darkTheme.palette.vars.baseTextDefault,
    });
    expect(getKeyValueValueStyles(darkTheme)).toMatchObject({
      color: darkTheme.palette.vars.baseTextDefault,
    });
  });

  it("allows consumer sx overrides", () => {
    const { container } = renderKeyValuePairs({
      items: DEFAULT_KEY_VALUE_ITEMS,
      keyWidth: "80px",
      sx: { rowGap: "20px" },
    });
    expect(container.querySelector("dl")).toBeInTheDocument();
  });
});
