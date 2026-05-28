/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Header } from "../components/header";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(<ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>);

const MockLogo = () => <img src="#" alt="logo" />;
const noop = jest.fn();

describe("Header", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<Header logo={<MockLogo />} />)).not.toThrow();
  });

  it("renders logo", () => {
    wrap(<Header logo={<MockLogo />} />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("renders string title", () => {
    wrap(<Header logo={<MockLogo />} title="My App" />);
    expect(screen.getByText("My App")).toBeInTheDocument();
  });

  it("renders node title", () => {
    wrap(<Header logo={<MockLogo />} title={<span>Node Title</span>} />);
    expect(screen.getByText("Node Title")).toBeInTheDocument();
  });

  it("renders action icon buttons", () => {
    wrap(
      <Header
        logo={<MockLogo />}
        actions={[
          {
            id: "action1",
            icon: <span>Icon</span>,
            tooltip: "Action 1",
            "aria-label": "action-1",
          },
        ]}
      />,
    );
    expect(screen.getByLabelText("action-1")).toBeInTheDocument();
  });

  it("renders user section", () => {
    wrap(
      <Header logo={<MockLogo />} userSection={<span>James Miller</span>} />,
    );
    expect(screen.getByText("James Miller")).toBeInTheDocument();
  });

  it("renders search field when searchProps provided", () => {
    wrap(
      <Header
        logo={<MockLogo />}
        searchProps={{ placeholder: "Search here", onChangeCallback: noop }}
      />,
    );
    expect(screen.getByPlaceholderText("Search here")).toBeInTheDocument();
  });

  it("renders custom search node over searchProps", () => {
    wrap(
      <Header
        logo={<MockLogo />}
        searchProps={{ placeholder: "Search here", onChangeCallback: noop }}
        customSearchNode={<input placeholder="Custom search" />}
      />,
    );
    expect(screen.getByPlaceholderText("Custom search")).toBeInTheDocument();
    expect(
      screen.queryByPlaceholderText("Search here"),
    ).not.toBeInTheDocument();
  });

  it("renders in dark mode without throwing", () => {
    expect(() =>
      wrap(<Header logo={<MockLogo />} title="App" />, true),
    ).not.toThrow();
  });

  it("renders as header element", () => {
    const { container } = wrap(<Header logo={<MockLogo />} />);
    expect(container.querySelector("header")).toBeInTheDocument();
  });
});
