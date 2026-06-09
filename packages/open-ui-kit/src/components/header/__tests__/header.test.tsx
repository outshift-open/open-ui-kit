/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Header } from "..";
import {
  getCustomSearchInputStyles,
  getActionButtonStyles,
  getHeaderStyles,
  getStoryBetaStyles,
} from "../styles";

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

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

  it("uses light header tokens", () => {
    expect(getHeaderStyles(lightTheme, "static")).toMatchObject({
      backgroundColor: lightTheme.palette.vars.baseBackgroundStrong,
      borderBottom: `1px solid ${lightTheme.palette.vars.baseBorderDefault}`,
      height: "56px",
      padding: "10px 32px",
      position: "static",
    });
  });

  it("uses dark header tokens", () => {
    expect(getHeaderStyles(darkTheme, "static")).toMatchObject({
      backgroundColor: darkTheme.palette.vars.baseBackgroundStrong,
      borderBottom: `1px solid ${darkTheme.palette.vars.baseBorderDefault}`,
    });
  });

  it("uses tokenized custom search styles", () => {
    expect(getCustomSearchInputStyles(lightTheme)).toMatchObject({
      padding: 0,
      "& .MuiInput-root": expect.objectContaining({
        backgroundColor: lightTheme.palette.vars.baseBackgroundWeak,
        height: "36px",
        width: "360px",
      }),
    });
  });

  it("uses product header icon styles for icon and svg action children", () => {
    expect(getActionButtonStyles(lightTheme)).toMatchObject({
      color: lightTheme.palette.vars.brandIconPrimaryDefault,
      width: "24px",
      height: "24px",
      borderRadius: "4px",
      "& .MuiIcon-root, & .MuiSvgIcon-root": {
        color: "currentColor",
        fontSize: "24px",
        width: "24px",
        height: "24px",
      },
    });
  });

  it("uses tokenized beta label styles", () => {
    expect(getStoryBetaStyles(darkTheme)).toMatchObject({
      backgroundColor: darkTheme.palette.vars.interactivePrimaryWeakDefault,
      color: darkTheme.palette.vars.baseTextDefault,
      height: "20px",
    });
  });
});
