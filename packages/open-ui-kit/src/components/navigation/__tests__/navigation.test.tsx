/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { Navigation, NavigationDrawer, NavigationSubNavigation } from "..";
import {
  getNavigationDrawerStyles,
  getNavigationCollapseButtonStyles,
  getNavigationItemStyles,
  getNavigationRootStyles,
  getNavigationSwitcherStyles,
} from "../styles";
import type { NavigationSectionData } from "../types";

const sections: NavigationSectionData[] = [
  {
    label: "Menu list",
    items: [
      {
        id: "dashboard-1",
        label: "Insight Analytics",
        children: [{ id: "child-1", label: "Child Dashboard" }],
      },
      { id: "dashboard-2", label: "Dashboard", state: "selected" },
    ],
  },
];

const wrap = (ui: React.ReactNode, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      {ui}
    </ThemeProvider>,
  );

describe("Navigation", () => {
  it("renders grouped navigation items", () => {
    wrap(<Navigation sections={sections} />);

    expect(screen.getByText("Menu list")).toBeInTheDocument();
    expect(screen.getByText("Insight Analytics")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("calls item and switcher handlers", () => {
    const onItemSelect = jest.fn();
    const onOrganizationClick = jest.fn();

    wrap(
      <Navigation
        sections={sections}
        onItemSelect={onItemSelect}
        onOrganizationClick={onOrganizationClick}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Insight Analytics" }));
    fireEvent.click(screen.getByRole("button", { name: /\[Organization\]/ }));

    expect(onOrganizationClick).toHaveBeenCalledTimes(1);
    expect(onItemSelect).toHaveBeenCalledWith(sections[0].items[0]);
  });

  it("keeps compact icon-only controls accessible", () => {
    wrap(<Navigation compact sections={sections} />);

    expect(
      screen.getByRole("button", { name: "[Organization]" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Insight Analytics" }),
    ).toBeInTheDocument();
  });

  it("opens and closes the organization drawer", () => {
    wrap(<Navigation sections={sections} />);

    fireEvent.click(screen.getByRole("button", { name: /\[Organization\]/ }));

    expect(screen.getByRole("heading", { name: "Headline" })).toBeVisible();

    fireEvent.click(screen.getByLabelText("Close navigation"));

    expect(screen.queryByRole("heading", { name: "Headline" })).toBeNull();
  });

  it("collapses and expands the navigation", () => {
    const onCollapseClick = jest.fn();

    wrap(<Navigation sections={sections} onCollapseClick={onCollapseClick} />);

    fireEvent.click(screen.getByLabelText("Collapse navigation"));

    expect(screen.getByLabelText("Expand navigation")).toBeInTheDocument();
    expect(onCollapseClick).toHaveBeenCalledWith(true);

    fireEvent.click(screen.getByLabelText("Expand navigation"));

    expect(screen.getByLabelText("Collapse navigation")).toBeInTheDocument();
    expect(onCollapseClick).toHaveBeenCalledWith(false);
  });

  it("opens and closes sub navigation for items with children", () => {
    wrap(<Navigation sections={sections} />);

    fireEvent.click(screen.getByRole("button", { name: "Insight Analytics" }));

    expect(
      screen.getByRole("button", { name: "Insight Analytics" }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("heading", { name: "Insight Analytics" }),
    ).toBeVisible();
    expect(
      screen.getByRole("button", { name: "Child Dashboard" }),
    ).toBeVisible();

    fireEvent.click(screen.getByLabelText("Close sub navigation"));

    expect(
      screen.queryByRole("heading", { name: "Insight Analytics" }),
    ).toBeNull();
  });

  it("renders drawer and sub navigation", () => {
    wrap(
      <>
        <NavigationDrawer sections={sections} />
        <NavigationSubNavigation sections={sections} />
      </>,
    );

    expect(screen.getAllByText("Headline")).toHaveLength(2);
    expect(screen.getByLabelText("Close navigation")).toBeInTheDocument();
    expect(screen.getByLabelText("Close sub navigation")).toBeInTheDocument();
  });

  describe("light theme token coverage", () => {
    it("uses light layout and state tokens", () => {
      expect(getNavigationRootStyles(lightTheme, false)).toMatchObject({
        width: "264px",
        minHeight: "1426px",
        backgroundColor: lightTheme.palette.vars.baseBackgroundStrong,
        borderRight: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
      });
      expect(getNavigationRootStyles(lightTheme, true)).toMatchObject({
        width: "88px",
        minHeight: "1364px",
      });
      expect(
        getNavigationSwitcherStyles(lightTheme, false, true),
      ).toMatchObject({
        width: "216px",
        height: "50px",
        backgroundColor: lightTheme.palette.vars.interactivePrimaryWeakDefault,
        color: lightTheme.palette.vars.interactivePrimaryDefaultActive,
      });
      expect(
        getNavigationItemStyles(lightTheme, "selected", false),
      ).toMatchObject({
        height: "40px",
        padding: "8px",
        backgroundColor: lightTheme.palette.vars.brandBackgroundPrimaryWeak,
        color: lightTheme.palette.vars.brandTextPrimary,
        // Figma binds no border on selected; only the open-submenu state has one.
        border: "1px solid transparent",
        borderRadius: "8px",
      });
      expect(getNavigationItemStyles(lightTheme, "open", false)).toMatchObject({
        backgroundColor: lightTheme.palette.vars.brandBackgroundPrimaryWeak,
        // Open submenu keeps the secondary label color and is distinguished by
        // its border, unlike selected.
        color: lightTheme.palette.vars.brandTextSecondary,
        border: `1px solid ${lightTheme.palette.vars.baseBorderStrong}`,
        borderRightWidth: 0,
      });
      expect(
        getNavigationItemStyles(lightTheme, "default", false),
      ).toMatchObject({
        backgroundColor: "transparent",
        color: lightTheme.palette.vars.brandTextSecondary,
      });
      expect(
        getNavigationCollapseButtonStyles(lightTheme, false),
      ).toMatchObject({
        marginTop: "auto",
        width: "32px",
        height: "32px",
        padding: "6px",
        border: `2px solid ${lightTheme.palette.vars.warningBorderDefault}`,
        color: lightTheme.palette.vars.baseTextStrong,
      });
    });
  });

  describe("dark theme token coverage", () => {
    it("uses dark layout and drawer tokens", () => {
      expect(getNavigationRootStyles(darkTheme, true)).toMatchObject({
        width: "88px",
        minHeight: "1364px",
        backgroundColor: darkTheme.palette.vars.baseBackgroundStrong,
        borderRight: `1px solid ${darkTheme.palette.vars.controlBorderDefault}`,
      });
      expect(getNavigationDrawerStyles(darkTheme)).toMatchObject({
        width: "224px",
        minHeight: "1296px",
        backgroundColor: darkTheme.palette.vars.brandBackgroundSecondaryDefault,
        borderRight: `1px solid ${darkTheme.palette.vars.controlBorderDefault}`,
        boxShadow: darkTheme.shadows[6],
      });
      expect(
        getNavigationItemStyles(darkTheme, "selected", false),
      ).toMatchObject({
        backgroundColor: darkTheme.palette.vars.brandBackgroundPrimaryWeak,
        color: darkTheme.palette.vars.brandTextPrimary,
      });
      expect(getNavigationCollapseButtonStyles(darkTheme, true)).toMatchObject({
        marginTop: "auto",
        color: darkTheme.palette.vars.baseTextStrong,
        border: `2px solid ${darkTheme.palette.vars.warningBorderDefault}`,
      });
    });
  });
});
