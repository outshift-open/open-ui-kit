/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { TagStatus } from "@/components/tags";
import { KeyValuePairs, KeyValuePairStatus, KeyValuePairTags } from "..";
import {
  DEFAULT_KEY_VALUE_ITEMS,
  getKeyValueKeyStyles,
  getKeyValuePairStyles,
  getKeyValuePairsStyles,
  getKeyValueTagCountStyles,
  getKeyValueTagsStyles,
  getKeyValueValueStyles,
} from "../styles";

const withTheme = (node: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {node}
    </ThemeProvider>,
  );

const renderKeyValuePairs = (
  props: React.ComponentProps<typeof KeyValuePairs>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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

  it("renders the tags value state with an overflow counter", () => {
    withTheme(
      <KeyValuePairTags
        tags={["One", "Two", "Three", "Four", "Five", "Six", "Seven"]}
        maxVisible={4}
      />,
    );

    expect(screen.getByText("Four")).toBeInTheDocument();
    expect(screen.queryByText("Five")).not.toBeInTheDocument();
    expect(screen.getByText("+3")).toBeInTheDocument();
  });

  it("omits the overflow counter when every tag fits", () => {
    withTheme(<KeyValuePairTags tags={["One", "Two"]} maxVisible={4} />);

    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
    expect(screen.queryByText(/^\+/)).not.toBeInTheDocument();
  });

  it("renders the status value state and defaults the label to the status", () => {
    withTheme(<KeyValuePairStatus status={TagStatus.Positive} />);

    expect(screen.getByText(TagStatus.Positive)).toBeInTheDocument();
  });

  it("allows a custom status label", () => {
    withTheme(
      <KeyValuePairStatus status={TagStatus.Warning} label="Needs review" />,
    );

    expect(screen.getByText("Needs review")).toBeInTheDocument();
  });

  it("uses expected tag value state styles", () => {
    expect(getKeyValueTagsStyles("306px")).toMatchObject({
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      maxWidth: "306px",
    });
    expect(getKeyValueTagCountStyles(lightTheme)).toMatchObject({
      backgroundColor: "transparent",
      border: `2px solid ${lightTheme.palette.vars.controlBackgroundMedium}`,
    });
    expect(getKeyValueTagCountStyles(darkTheme)).toMatchObject({
      border: `2px solid ${darkTheme.palette.vars.controlBackgroundMedium}`,
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
