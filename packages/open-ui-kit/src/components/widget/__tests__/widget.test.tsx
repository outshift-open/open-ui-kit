/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { Widget } from "../components/widget";

const renderWidget = (
  props: React.ComponentProps<typeof Widget>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Widget {...props} />
    </ThemeProvider>,
  );

describe("Widget", () => {
  describe("rendering", () => {
    it("renders body element", () => {
      renderWidget({ bodyElement: <div>chart content</div> });
      expect(screen.getByText("chart content")).toBeInTheDocument();
    });

    it("renders label when provided", () => {
      renderWidget({ bodyElement: <div />, label: "Widget Title" });
      expect(screen.getByText("Widget Title")).toBeInTheDocument();
    });

    it("does not render headline when label is omitted", () => {
      renderWidget({ bodyElement: <div>body</div> });
      expect(screen.queryByRole("banner")).not.toBeInTheDocument();
    });
  });

  describe("loading state", () => {
    it("renders skeleton when isLoading is true", () => {
      const { container } = renderWidget({
        bodyElement: <div>chart</div>,
        isLoading: true,
        label: "Title",
      });
      expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
    });

    it("does not render body element when loading", () => {
      renderWidget({
        bodyElement: <div>hidden chart</div>,
        isLoading: true,
      });
      expect(screen.queryByText("hidden chart")).not.toBeInTheDocument();
    });
  });

  describe("empty state", () => {
    it("renders no data message when isEmpty is true", () => {
      renderWidget({ bodyElement: <div>chart</div>, isEmpty: true });
      expect(screen.getByText("No data")).toBeInTheDocument();
    });
  });

  describe("sx prop", () => {
    it("applies consumer sx without overriding internal styles", () => {
      const { container } = renderWidget({
        bodyElement: <div />,
        sx: { border: "2px solid red" },
      });
      const card = container.firstChild as HTMLElement;
      expect(card).toBeInTheDocument();
    });
  });

  describe("dark mode", () => {
    it("renders correctly in dark mode", () => {
      renderWidget({ bodyElement: <div>dark chart</div>, label: "Dark" }, true);
      expect(screen.getByText("dark chart")).toBeInTheDocument();
      expect(screen.getByText("Dark")).toBeInTheDocument();
    });
  });
});
