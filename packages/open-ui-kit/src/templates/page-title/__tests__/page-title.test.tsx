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
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { PageTitle } from "../components/page-title";

const renderPageTitle = (
  props: React.ComponentProps<typeof PageTitle>,
  dark = false,
) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
        <PageTitle {...props} />
      </ThemeProvider>
    </MemoryRouter>,
  );

describe("PageTitle", () => {
  it("renders title", () => {
    renderPageTitle({ title: "My Page" });
    expect(screen.getByText("My Page")).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    renderPageTitle({ title: "Title", subtitle: "Sub" });
    expect(screen.getByText("Sub")).toBeInTheDocument();
  });

  it("does not render subtitle when omitted", () => {
    renderPageTitle({ title: "Title" });
    expect(screen.queryByText("Sub")).not.toBeInTheDocument();
  });

  it("renders actions slot", () => {
    renderPageTitle({ title: "T", actions: <button>Save</button> });
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("renders breadcrumbs when provided", () => {
    renderPageTitle({
      title: "T",
      breadcrumbs: [
        { text: "Home", link: "/" },
        { text: "Page", link: "/page" },
      ],
    });
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders without throwing in dark mode", () => {
    expect(() => renderPageTitle({ title: "Dark" }, true)).not.toThrow();
  });

  it("applies sx override without throwing", () => {
    expect(() =>
      renderPageTitle({ title: "T", sx: { opacity: 0.5 } }),
    ).not.toThrow();
  });
});
