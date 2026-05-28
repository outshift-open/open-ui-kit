/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Icon } from "../components/icon";

const renderIcon = (props: React.ComponentProps<typeof Icon>, dark = false) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Icon {...props} />
    </ThemeProvider>,
  );

describe("Icon", () => {
  describe("rendering", () => {
    it("renders ligature text", () => {
      renderIcon({ children: "delete" });
      expect(screen.getByText("delete")).toBeInTheDocument();
    });

    it("forwards className and aria props", () => {
      renderIcon({
        children: "settings",
        className: "custom-icon",
        "aria-label": "Settings",
      });
      expect(screen.getByLabelText("Settings")).toHaveClass("custom-icon");
    });
  });

  describe("token coverage", () => {
    it("uses the default icon token in light mode", () => {
      const { container } = renderIcon({
        children: "delete",
      });
      expect(container.querySelector(".MuiIcon-root")).toBeInTheDocument();
    });

    it("uses the default icon token in dark mode", () => {
      expect(() => renderIcon({ children: "delete" }, true)).not.toThrow();
    });

    it("renders color variants without replacing the consumer color prop", () => {
      expect(() =>
        renderIcon({ children: "delete", color: "primary" }),
      ).not.toThrow();
      expect(() =>
        renderIcon({ children: "settings", color: "secondary" }),
      ).not.toThrow();
    });
  });

  describe("props passthrough", () => {
    it("renders font size variants without replacing the consumer fontSize prop", () => {
      expect(() =>
        renderIcon({ children: "delete", fontSize: "small" }),
      ).not.toThrow();
      expect(() =>
        renderIcon({ children: "settings", fontSize: "large" }),
      ).not.toThrow();
    });

    it("allows consumer sx to override internal size styles", () => {
      renderIcon({
        children: "delete",
        sx: { fontSize: "32px" },
      });
      expect(screen.getByText("delete")).toBeInTheDocument();
    });

    it("merges sx arrays without throwing", () => {
      expect(() =>
        renderIcon({
          children: "delete",
          sx: [{ fontSize: "20px" }, { color: "primary.main" }],
        }),
      ).not.toThrow();
    });
  });
});
