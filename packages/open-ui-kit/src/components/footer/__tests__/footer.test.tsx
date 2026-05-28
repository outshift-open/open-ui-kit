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
import { Footer } from "../components/footer";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultDarkMode={dark}>{ui}</ThemeProvider>
    </MemoryRouter>,
  );

describe("Footer", () => {
  it("renders without throwing", () => {
    expect(() => wrap(<Footer productName="AGNTCY" />)).not.toThrow();
  });

  it("renders product name in copyright text", () => {
    wrap(<Footer productName="AGNTCY" />);
    expect(screen.getByText(/AGNTCY/)).toBeInTheDocument();
  });

  it("renders current year in copyright text", () => {
    wrap(<Footer productName="AGNTCY" />);
    expect(
      screen.getByText(new RegExp(String(new Date().getFullYear()))),
    ).toBeInTheDocument();
  });

  it("renders links", () => {
    wrap(
      <Footer
        productName="AGNTCY"
        links={[
          { children: "Terms & Conditions", href: "#" },
          { children: "Privacy Policy", href: "#" },
        ]}
      />,
    );
    expect(screen.getByText("Terms & Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });

  it("renders custom productNode instead of default", () => {
    wrap(
      <Footer productName="AGNTCY" productNode={<span>Custom Node</span>} />,
    );
    expect(screen.getByText("Custom Node")).toBeInTheDocument();
    expect(screen.queryByText(/AGNTCY/)).not.toBeInTheDocument();
  });

  it("renders in dark mode without throwing", () => {
    expect(() =>
      wrap(
        <Footer
          productName="AGNTCY"
          links={[{ children: "Privacy Policy", href: "#" }]}
        />,
        true,
      ),
    ).not.toThrow();
  });
});
