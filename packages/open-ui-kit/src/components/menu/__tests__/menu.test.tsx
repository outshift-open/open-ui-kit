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
import { Menu, MenuItem } from "..";
import { getMenuItemStyles, getMenuPaperStyles } from "../styles";

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
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

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
        padding: "8px 0px",
      });
    });

    it("uses light menu item tokens", () => {
      expect(getMenuItemStyles(lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextDefault,
        backgroundColor: lightTheme.palette.vars.controlBackgroundWeak,
        padding: "8px 16px",
        minHeight: "40px",
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
      });
    });

    it("uses dark destructive item tokens", () => {
      expect(getMenuItemStyles(darkTheme, "medium", true)).toMatchObject({
        color: darkTheme.palette.vars.negativeTextDefault,
        padding: "6px 16px",
        minHeight: "32px",
      });
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
