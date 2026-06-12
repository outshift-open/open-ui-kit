/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Layout } from "../components/layout";

const renderLayout = (
  props: React.ComponentProps<typeof Layout> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Layout {...props} />
    </ThemeProvider>,
  );

describe("Layout", () => {
  it("renders without throwing", () => {
    expect(() => renderLayout()).not.toThrow();
  });

  it("renders content", () => {
    renderLayout({ content: <div>Page content</div> });
    expect(screen.getByText("Page content")).toBeInTheDocument();
  });

  it("renders sideNav when showSideNav is true", () => {
    renderLayout({ showSideNav: true, sideNav: <nav>Nav</nav> });
    expect(screen.getByText("Nav")).toBeInTheDocument();
  });

  it("hides sideNav when showSideNav is false", () => {
    renderLayout({ showSideNav: false, sideNav: <nav>Nav</nav> });
    expect(screen.queryByText("Nav")).not.toBeInTheDocument();
  });

  it("renders without header when showHeader is false", () => {
    expect(() => renderLayout({ showHeader: false })).not.toThrow();
  });

  it("renders without throwing in dark mode", () => {
    expect(() => renderLayout({}, true)).not.toThrow();
  });

  it("uses tokenized drawer surface and border colors in light mode", () => {
    const { container } = renderLayout({
      sideNav: <nav>Navigation</nav>,
      showHeader: false,
    });

    const drawerPaper = container.querySelector(".MuiDrawer-paper");

    expect(drawerPaper).toHaveStyle({
      backgroundColor: lightTheme.palette.vars.baseBackgroundStrong,
      borderRightColor: lightTheme.palette.vars.controlBorderStrong,
    });
  });

  it("uses tokenized drawer surface and border colors in dark mode", () => {
    const { container } = renderLayout(
      {
        sideNav: <nav>Navigation</nav>,
        showHeader: false,
      },
      true,
    );

    const drawerPaper = container.querySelector(".MuiDrawer-paper");

    expect(drawerPaper).toHaveStyle({
      backgroundColor: darkTheme.palette.vars.baseBackgroundStrong,
      borderRightColor: darkTheme.palette.vars.controlBorderStrong,
    });
  });
});
