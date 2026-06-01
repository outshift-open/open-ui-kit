/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Tabs } from "../components/tabs";
import { Tab } from "../components/tab";

const renderTabs = (
  props: Partial<React.ComponentProps<typeof Tabs>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Tabs value={0} onChange={jest.fn()} {...props}>
        <Tab label="Tab One" />
        <Tab label="Tab Two" />
        <Tab label="Tab Three" />
      </Tabs>
    </ThemeProvider>,
  );

describe("Tabs", () => {
  describe("rendering", () => {
    it("renders tab labels", () => {
      renderTabs();
      expect(screen.getByText("Tab One")).toBeInTheDocument();
      expect(screen.getByText("Tab Two")).toBeInTheDocument();
      expect(screen.getByText("Tab Three")).toBeInTheDocument();
    });

    it("renders main type without throwing", () => {
      expect(() => renderTabs({ type: "main" })).not.toThrow();
    });

    it("renders subTab type without throwing", () => {
      expect(() => renderTabs({ type: "subTab" })).not.toThrow();
    });

    it("renders toggleTab type without throwing", () => {
      expect(() => renderTabs({ type: "toggleTab" })).not.toThrow();
    });

    it("renders vertical orientation without throwing", () => {
      expect(() => renderTabs({ orientation: "vertical" })).not.toThrow();
    });
  });

  describe("Tab states", () => {
    it("renders disabled tab without throwing", () => {
      expect(() =>
        render(
          <ThemeProvider>
            <Tabs value={0} onChange={jest.fn()}>
              <Tab label="Active" />
              <Tab label="Disabled" disabled />
            </Tabs>
          </ThemeProvider>,
        ),
      ).not.toThrow();
    });

    it("renders loading tab without throwing", () => {
      expect(() =>
        render(
          <ThemeProvider>
            <Tabs value={0} onChange={jest.fn()}>
              <Tab label="Normal" />
              <Tab label="Loading" loading />
            </Tabs>
          </ThemeProvider>,
        ),
      ).not.toThrow();
    });
  });

  describe("interaction", () => {
    it("calls onChange when a tab is clicked", () => {
      const onChange = jest.fn();
      renderTabs({ onChange });
      fireEvent.click(screen.getByText("Tab Two"));
      expect(onChange).toHaveBeenCalled();
    });
  });

  describe("token coverage", () => {
    it("renders light theme without throwing", () => {
      expect(() => renderTabs()).not.toThrow();
    });

    it("renders dark theme without throwing", () => {
      expect(() => renderTabs({}, true)).not.toThrow();
    });

    it("renders all types in dark mode without throwing", () => {
      (["main", "subTab", "toggleTab"] as const).forEach((type) => {
        expect(() => renderTabs({ type }, true)).not.toThrow();
      });
    });
  });
});
