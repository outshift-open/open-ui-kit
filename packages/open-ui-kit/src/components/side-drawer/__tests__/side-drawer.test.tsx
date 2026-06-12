/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });

global.ResizeObserver = class ResizeObserver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  observe() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
};

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Severity } from "@/common";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { SideDrawer } from "../components/side-drawer";
import {
  dividerStyle,
  footerContainerStyle,
  sideDrawerContentContainerStyle,
  sideDrawerHeaderBoxStyle,
  sideDrawerPaperStyle,
  headerLabelStyle,
  headerTitleStyle,
} from "../styles";

const renderDrawer = (
  props: Partial<React.ComponentProps<typeof SideDrawer>> = {},
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
        <SideDrawer
          open
          copyURL="https://example.com"
          onClose={jest.fn()}
          {...props}
        />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe("SideDrawer", () => {
  describe("rendering", () => {
    it("renders with title text", () => {
      renderDrawer({ titleText: "My Drawer" });
      expect(screen.getByText("My Drawer")).toBeInTheDocument();
    });

    it("renders with severity bar when severity provided", () => {
      renderDrawer({ titleText: "Drawer", severity: Severity.HIGH });
      expect(screen.getByText("Drawer")).toBeInTheDocument();
    });

    it("renders loading state", () => {
      renderDrawer({ isLoading: true, titleText: "Loading" });
      expect(screen.getByLabelText("drawer spinner")).toBeInTheDocument();
    });

    it("renders error state", () => {
      renderDrawer({ isError: true, titleText: "Error" });
      expect(screen.queryByText("Error")).not.toBeInTheDocument();
    });

    it("renders children content", () => {
      renderDrawer({ children: <span>Content here</span> });
      expect(screen.getByText("Content here")).toBeInTheDocument();
    });

    it("renders close button", () => {
      renderDrawer({ titleText: "Drawer" });
      expect(screen.getByLabelText("drawer close")).toBeInTheDocument();
    });

    it("renders favorite button with an accessible name", () => {
      renderDrawer({ titleText: "Drawer" });
      expect(
        screen.getByRole("button", { name: "Add to favorites" }),
      ).toBeInTheDocument();
    });

    it("hides footer when hideFooter=true", () => {
      renderDrawer({ titleText: "Drawer", hideFooter: true });
      expect(screen.queryByText(/Go to/)).not.toBeInTheDocument();
    });
  });

  describe("interaction", () => {
    it("calls onClose when close button clicked", () => {
      const onClose = jest.fn();
      renderDrawer({ titleText: "Drawer", onClose });
      fireEvent.click(screen.getByLabelText("drawer close"));
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderDrawer({ titleText: "Light" })).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderDrawer({ titleText: "Dark" }, true)).not.toThrow();
    });

    it("uses light theme drawer layout tokens", () => {
      const xl = lightTheme.breakpoints.up("xl");

      expect(sideDrawerPaperStyle(false, lightTheme)).toMatchObject({
        backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
        width: "840px",
        minWidth: "840px",
        boxShadow: "none",
        filter:
          "drop-shadow(-8px 0px 12px rgba(200, 213, 245, 0.1)) drop-shadow(-4px 0px 4px rgba(200, 213, 245, 0.1))",
        overflow: "hidden",
        padding: 0,
        [xl]: {
          width: "50vw",
        },
      });
      expect(sideDrawerHeaderBoxStyle(true, lightTheme)).toMatchObject({
        width: "100%",
        height: "137px",
        padding: "24px 32px 0px 32px",
        gap: "24px",
        backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
      });
      expect(headerTitleStyle).toMatchObject({
        gap: "8px",
      });
      expect(headerLabelStyle(true, lightTheme)).toMatchObject({
        color: lightTheme.palette.vars.baseTextStrong,
        height: "30px",
        lineHeight: "30px",
      });
      expect(sideDrawerContentContainerStyle(true)).toMatchObject({
        width: "100%",
        padding: "32px",
        gap: "24px",
        backgroundColor: "inherit",
      });
      expect(footerContainerStyle(lightTheme)).toMatchObject({
        width: "100%",
        height: "72px",
        padding: "16px 32px",
        backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
        borderTop: `1px solid ${lightTheme.palette.vars.baseBorderStrong}`,
      });
      expect(lightTheme.palette.vars.baseBackgroundMedium).toBe("#f5f8fd");
      expect(lightTheme.palette.vars.baseBorderStrong).toBe("#c8d5f5");
    });

    it("uses dark theme drawer layout tokens", () => {
      expect(sideDrawerPaperStyle(false, darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
        filter:
          "drop-shadow(-8px 0px 12px rgba(21, 29, 40, 0.1)) drop-shadow(-4px 0px 4px rgba(21, 29, 40, 0.1))",
      });
      expect(sideDrawerHeaderBoxStyle(true, darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
      });
      expect(footerContainerStyle(darkTheme)).toMatchObject({
        backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
        borderTop: `1px solid ${darkTheme.palette.vars.baseBorderStrong}`,
      });
      expect(dividerStyle(darkTheme)["&.MuiDivider-root"]).toMatchObject({
        background: darkTheme.palette.vars.baseBorderStrong,
      });
      expect(darkTheme.palette.vars.baseBackgroundMedium).toBe("#062242");
      expect(darkTheme.palette.vars.baseBorderStrong).toBe("#4f628d");
    });
  });
});
