/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Menu, MenuItem } from "@mui/material";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

const OpenMenu = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Menu open anchorEl={null}>
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
