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
});
