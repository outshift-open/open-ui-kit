/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Tab, Tabs } from "../";
import { getTabStyles, getTabsFrameStyles } from "../styles";

const normalizeHex = (color: string) => color.toLowerCase();

const renderTabs = (
  props: Partial<React.ComponentProps<typeof Tabs>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Tabs value={0} onChange={jest.fn()} {...props}>
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>
    </ThemeProvider>,
  );

describe("Tabs", () => {
  describe("rendering", () => {
    it("renders tab labels", () => {
      renderTabs();
      expect(screen.getByText("Tab One")).toBeInTheDocument();
      expect(screen.getByText("Tab Two")).toBeInTheDocument();
      expect(screen.getByText("Tab Three")).toBeInTheDocument();
    });

    it("renders main type without throwing", () => {
      expect(() => renderTabs({ type: "main" })).not.toThrow();
    });

    it("renders subTab type without throwing", () => {
      expect(() => renderTabs({ type: "subTab" })).not.toThrow();
    });

    it("renders toggleTab type without throwing", () => {
      expect(() => renderTabs({ type: "toggleTab" })).not.toThrow();
    });

    it("renders vertical orientation without throwing", () => {
      expect(() => renderTabs({ orientation: "vertical" })).not.toThrow();
    });
  });

  describe("Tab states", () => {
    it("renders disabled tab without throwing", () => {
      expect(() =>
        render(
          <ThemeProvider>
            <Tabs value={0} onChange={jest.fn()}>
              <Tab label="Active" />
              <Tab label="Disabled" disabled />
            </Tabs>
          </ThemeProvider>,
        ),
      ).not.toThrow();
    });

    it("renders loading tab without throwing", () => {
      expect(() =>
        render(
          <ThemeProvider>
            <Tabs value={0} onChange={jest.fn()}>
              <Tab label="Normal" />
              <Tab label="Loading" loading />
            </Tabs>
          </ThemeProvider>,
        ),
      ).not.toThrow();
    });
  });

  describe("interaction", () => {
    it("calls onChange when a tab is clicked", () => {
      const onChange = jest.fn();
      renderTabs({ onChange });
      fireEvent.click(screen.getByText("Tab Two"));
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe("token coverage", () => {
    it("maps main tab styles to the CSS reference tokens", () => {
      expect(normalizeHex(lightTheme.palette.vars.baseTextDefault)).toBe(
        "#3c4551",
      );
      expect(
        normalizeHex(lightTheme.palette.vars.interactiveSecondaryDefaultActive),
      ).toBe("#00142b");
      expect(
        normalizeHex(lightTheme.palette.vars.controlBackgroundMedium),
      ).toBe("#e3eafa");
      expect(normalizeHex(lightTheme.palette.vars.controlBorderStrong)).toBe(
        "#c8d5f5",
      );
      expect(
        normalizeHex(darkTheme.palette.vars.interactiveSecondaryDefaultActive),
      ).toBe("#dae3f8");
      expect(normalizeHex(darkTheme.palette.vars.controlBorderStrong)).toBe(
        "#3a4e77",
      );

      expect(getTabStyles(lightTheme, "main")).toMatchObject({
        ...lightTheme.typography.body1Semibold,
        color: lightTheme.palette.vars.baseTextDefault,
        height: "42px",
        minHeight: "42px",
        minWidth: 0,
        padding: "8px 24px",
        "&:hover": {
          backgroundColor: lightTheme.palette.vars.controlBackgroundMedium,
        },
        "&.Mui-selected": {
          color: lightTheme.palette.vars.interactiveSecondaryDefaultActive,
        },
      });

      expect(
        getTabsFrameStyles(lightTheme, "main", "horizontal"),
      ).toMatchObject({
        height: "42px",
        minHeight: "42px",
        borderBottom: `1px solid ${lightTheme.palette.vars.controlBorderStrong}`,
        "& .MuiTabs-indicator": {
          backgroundColor:
            lightTheme.palette.vars.interactiveSecondaryDefaultActive,
          borderRadius: "100px",
          bottom: 0,
          height: "3px",
        },
      });
    });

    it("maps subTab styles to the CSS reference tokens", () => {
      expect(getTabStyles(lightTheme, "subTab")).toMatchObject({
        ...lightTheme.typography.body2Semibold,
        color: lightTheme.palette.vars.baseTextDefault,
        height: "38px",
        minHeight: "38px",
        minWidth: 0,
        padding: "8px 24px",
      });

      expect(
        getTabsFrameStyles(darkTheme, "subTab", "horizontal"),
      ).toMatchObject({
        height: "38px",
        minHeight: "38px",
        "& .MuiTabs-indicator": {
          backgroundColor:
            darkTheme.palette.vars.interactiveSecondaryDefaultActive,
          borderRadius: "100px",
          bottom: 0,
          height: "3px",
        },
      });

      expect(
        getTabsFrameStyles(darkTheme, "toggleTab", "horizontal"),
      ).toMatchObject({
        "& .MuiTabs-indicator": {
          display: "none",
        },
      });
    });

    it("maps toggleTab styles to the CSS reference tokens", () => {
      expect(
        normalizeHex(lightTheme.palette.vars.controlBackgroundDefault),
      ).toBe("#fbfcfe");
      expect(normalizeHex(lightTheme.palette.vars.controlBorderDefault)).toBe(
        "#d5dff7",
      );
      expect(
        normalizeHex(darkTheme.palette.vars.controlBackgroundDefault),
      ).toBe("#183056");
      expect(normalizeHex(darkTheme.palette.vars.controlBorderDefault)).toBe(
        "#4f628d",
      );

      expect(getTabStyles(lightTheme, "toggleTab")).toMatchObject({
        ...lightTheme.typography.captionSemibold,
        borderRadius: "20px",
        color: lightTheme.palette.vars.baseTextDefault,
        height: "32px",
        minHeight: "32px",
        minWidth: 0,
        padding: "8px 24px",
        "&.Mui-selected": {
          backgroundColor: lightTheme.palette.vars.controlBackgroundMedium,
          color: lightTheme.palette.vars.interactiveSecondaryDefaultActive,
        },
      });
    });

    it("renders all types in dark mode without throwing", () => {
      (["main", "subTab", "toggleTab"] as const).forEach((type) => {
        expect(() => renderTabs({ type }, true)).not.toThrow();
      });
    });
  });
});
