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
import { lightModeCardSubtle } from "@/theme/style/color-palette";
import { Menu, MenuItem } from "..";
import {
  getMenuItemLabelStyles,
  getMenuItemLinkStyles,
  getMenuItemStyles,
  getMenuPaperStyles,
} from "../styles";

jest.mock("@/components/link", () => {
  const ReactRuntime = jest.requireActual("react");

  return {
    Link: ({ children, style }: { children?: unknown; style?: unknown }) =>
      ReactRuntime.createElement(
        "a",
        style && typeof style === "object" ? { style } : undefined,
        children,
      ),
    LinkType: {
      StandaloneRegular: "standalone-regular",
    },
  };
});

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

const OpenMenu = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Menu open anchorEl={document.body}>
      {children}
    </Menu>
  </div>
);

describe("Menu", () => {
  describe("rendering", () => {
    it("renders open menu without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem>Item 1</MenuItem>
          </OpenMenu>,
        ),
      ).not.toThrow();
    });

    it("renders menu items", () => {
      wrap(
        <OpenMenu>
          <MenuItem>Item A</MenuItem>
        </OpenMenu>,
      );
      expect(screen.getByText("Item A")).toBeInTheDocument();
    });

    it("renders selected menu item without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem selected>Selected</MenuItem>
          </OpenMenu>,
        ),
      ).not.toThrow();
    });

    it("renders disabled menu item without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem disabled>Disabled</MenuItem>
          </OpenMenu>,
        ),
      ).not.toThrow();
    });

    it("renders multiple items without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            {[1, 2, 3].map((x) => (
              <MenuItem key={x}>Item {x}</MenuItem>
            ))}
          </OpenMenu>,
        ),
      ).not.toThrow();
    });
  });

  describe("light theme token coverage", () => {
    it("uses light menu paper tokens", () => {
      expect(getMenuPaperStyles(lightTheme)).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${lightTheme.palette.vars.controlBorderActive}`,
        borderRadius: "8px",
        boxShadow: lightModeCardSubtle,
        padding: "8px 0px",
        "& .MuiMenu-list": {
          padding: 0,
        },
      });
      expect(lightTheme.palette.vars.controlBackgroundWeak).toBe("#f5f8fd");
      expect(lightTheme.palette.vars.controlBorderActive).toBe("#0051af");
    });

    it("uses light menu item tokens", () => {
      const styles = getMenuItemStyles(lightTheme);

      expect(styles).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        padding: "8px 16px",
        minHeight: "40px",
      });
      expect(styles["&:hover"]).toMatchObject({
        backgroundColor: lightTheme.palette.vars.controlBackgroundMedium,
      });
      expect(styles["&.Mui-selected"]).toMatchObject({
        color: lightTheme.palette.vars.controlBorderActive,
      });
      expect(styles["&.Mui-disabled"]).toMatchObject({
        color: lightTheme.palette.vars.baseTextDisabled,
        opacity: 1,
      });
      expect(lightTheme.palette.vars.controlBackgroundMedium).toBe("#e3eafa");
      expect(lightTheme.palette.vars.controlBorderActive).toBe("#0051af");
      expect(lightTheme.palette.vars.baseTextDefault).toBe("#3c4551");
      expect(lightTheme.palette.vars.baseTextDisabled).toBe("#c5c7cb");
      expect(lightTheme.palette.vars.negativeTextDefault).toBe("#c0244c");
    });

    it("uses size-specific link item styles", () => {
      expect(getMenuItemLinkStyles("large")).toMatchObject({
        minHeight: "40px",
        padding: "8px 16px",
      });
      expect(getMenuItemLinkStyles("medium")).toMatchObject({
        minHeight: "32px",
        padding: "6px 16px",
      });
      expect(getMenuItemLinkStyles("small")).toMatchObject({
        minHeight: "24px",
        padding: "4px 12px",
      });
      expect(getMenuItemLabelStyles(lightTheme, "small")).toMatchObject({
        fontSize: lightTheme.typography.caption.fontSize,
        lineHeight: lightTheme.typography.caption.lineHeight,
        padding: 0,
      });
    });

    it("renders in light mode without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem>Item</MenuItem>
          </OpenMenu>,
        ),
      ).not.toThrow();
    });

    it("renders selected in light mode without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem selected>Selected</MenuItem>
          </OpenMenu>,
        ),
      ).not.toThrow();
    });

    it("renders disabled in light mode without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem disabled>Disabled</MenuItem>
          </OpenMenu>,
        ),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("uses dark menu paper tokens", () => {
      expect(getMenuPaperStyles(darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundWeak,
        border: `2px solid ${darkTheme.palette.vars.controlBorderActive}`,
        boxShadow: lightModeCardSubtle,
      });
      expect(darkTheme.palette.vars.controlBackgroundWeak).toBe("#0d274d");
      expect(darkTheme.palette.vars.controlBorderActive).toBe("#12c1ff");
    });

    it("uses dark destructive item tokens", () => {
      const styles = getMenuItemStyles(darkTheme, "medium", true);

      expect(styles).toMatchObject({
        color: darkTheme.palette.vars.negativeTextDefault,
        padding: "6px 16px",
        minHeight: "32px",
      });
      expect(styles["&:hover"]).toMatchObject({
        backgroundColor: darkTheme.palette.vars.controlBackgroundMedium,
      });
      expect(styles["&.Mui-selected"]).toMatchObject({
        color: darkTheme.palette.vars.controlBorderActive,
      });
      expect(styles["&.Mui-disabled"]).toMatchObject({
        color: darkTheme.palette.vars.baseTextDisabled,
        opacity: 1,
      });
      expect(darkTheme.palette.vars.controlBackgroundMedium).toBe("#31466e");
      expect(darkTheme.palette.vars.controlBorderActive).toBe("#12c1ff");
      expect(darkTheme.palette.vars.baseTextDefault).toBe("#e8e9ea");
      expect(darkTheme.palette.vars.baseTextDisabled).toBe("#777d85");
      expect(darkTheme.palette.vars.negativeTextDefault).toBe("#eebfcb");
    });

    it("renders in dark mode without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem>Item</MenuItem>
          </OpenMenu>,
          true,
        ),
      ).not.toThrow();
    });

    it("renders selected in dark mode without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem selected>Selected</MenuItem>
          </OpenMenu>,
          true,
        ),
      ).not.toThrow();
    });

    it("renders disabled in dark mode without throwing", () => {
      expect(() =>
        wrap(
          <OpenMenu>
            <MenuItem disabled>Disabled</MenuItem>
          </OpenMenu>,
          true,
        ),
      ).not.toThrow();
    });
  });
});
