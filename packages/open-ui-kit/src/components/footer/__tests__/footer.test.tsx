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
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Footer } from "..";
import { styles } from "../styles";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <MemoryRouter>
      <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
        {ui}
      </ThemeProvider>
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

  it("uses light footer tokens", () => {
    expect(styles.container(lightTheme)).toMatchObject({
      alignItems: "flex-start",
      backgroundColor: lightTheme.palette.vars.baseBackgroundStrong,
      borderTop: `1px solid ${lightTheme.palette.vars.baseBorderDefault}`,
      flexWrap: "nowrap",
      gap: "16px",
      height: "48px",
      px: "32px",
      py: "16px",
    });
  });

  it("uses dark footer tokens", () => {
    expect(styles.container(darkTheme)).toMatchObject({
      backgroundColor: darkTheme.palette.vars.baseBackgroundStrong,
      borderTop: `1px solid ${darkTheme.palette.vars.baseBorderDefault}`,
    });
  });

  it("uses CSS-specified link spacing", () => {
    expect(styles.actionsContainer).toMatchObject({
      alignItems: "center",
      display: "flex",
      flexShrink: 0,
      gap: "16px",
    });
  });
});
