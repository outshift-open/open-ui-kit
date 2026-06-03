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
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { BasePage } from "../components/base-page";

const renderBasePage = (
  props: React.ComponentProps<typeof BasePage>,
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultDarkMode={dark}>
        <BasePage {...props} />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe("BasePage", () => {
  it("renders title", () => {
    renderBasePage({ title: "Dashboard", children: <div>Content</div> });
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("renders children", () => {
    renderBasePage({ title: "T", children: <div>Main content</div> });
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    renderBasePage({ title: "T", description: "Desc", children: null });
    expect(screen.getByText("Desc")).toBeInTheDocument();
  });

  it("renders rightSideItems when provided", () => {
    renderBasePage({
      title: "T",
      rightSideItems: <button>Action</button>,
      children: null,
    });
    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
  });

  it("renders breadcrumbs when provided", () => {
    renderBasePage({
      title: "T",
      breadcrumbs: [{ text: "Home", link: "/" }],
      children: null,
    });
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("hides header when no title/description/rightSideItems", () => {
    const { container } = renderBasePage({ title: "", children: <div>C</div> });
    expect(container.querySelector("h1")).not.toBeInTheDocument();
  });

  it("renders without throwing in dark mode", () => {
    expect(() =>
      renderBasePage({ title: "Dark", children: null }, true),
    ).not.toThrow();
  });
});
