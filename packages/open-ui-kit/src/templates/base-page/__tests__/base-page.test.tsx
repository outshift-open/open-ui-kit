/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { TextEncoder, TextDecoder } from "util";
Object.assign(global, { TextEncoder, TextDecoder });
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { lightTheme } from "@/theme/light/light-theme";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { BasePage } from "../components/base-page";

const renderBasePage = (
  props: React.ComponentProps<typeof BasePage>,
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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

  it("merges container sx so consumer styles win", () => {
    renderBasePage({
      title: "Styled",
      children: null,
      containerProps: {
        "data-testid": "base-page",
        sx: {
          backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
          padding: "12px",
        },
      },
    });

    expect(screen.getByTestId("base-page")).toHaveStyle({
      backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
      padding: "12px",
    });
  });

  it("uses selected sub-nav state and still calls consumer tab handlers", () => {
    const handleChange = jest.fn();

    renderBasePage({
      title: "Tabs",
      children: null,
      subNav: [
        { href: "/overview", label: "Overview" },
        { href: "/policies", label: "Policies", selected: true },
        { href: "/activity", label: "Activity" },
      ],
      tabsProps: {
        onChange: handleChange,
      },
    });

    expect(screen.getByRole("tab", { name: "Policies" })).toHaveAttribute(
      "aria-selected",
      "true",
    );

    fireEvent.click(screen.getByRole("tab", { name: "Activity" }));

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("tab", { name: "Activity" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
