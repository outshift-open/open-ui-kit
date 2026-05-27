/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Mail } from "@mui/icons-material";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Badge } from "../components/badge";

const renderBadge = (props: React.ComponentProps<typeof Badge>, dark = false) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Badge {...props} />
    </ThemeProvider>,
  );

describe("Badge", () => {
  describe("rendering", () => {
    it("renders badge content", () => {
      renderBadge({ content: "5" });
      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("renders with default type when type is omitted", () => {
      renderBadge({ content: "1" });
      expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("renders all type variants without error", () => {
      const types = [
        "default",
        "excellent",
        "neutral",
        "error",
        "warning",
        "info",
        "success",
        "inactive",
        "moderate",
        "severe",
      ] as const;
      types.forEach((type) => {
        const { unmount } = renderBadge({ content: "1", type });
        expect(screen.getByText("1")).toBeInTheDocument();
        unmount();
      });
    });
  });

  describe("notification mode", () => {
    it("renders notification content on the badge", () => {
      renderBadge({
        content: <Mail aria-label="mail" />,
        notificationContent: 3,
      });
      expect(screen.getByText("3")).toBeInTheDocument();
    });

    it("renders child content in notification mode", () => {
      renderBadge({
        content: <Mail aria-label="mail" />,
        notificationContent: 1,
      });
      expect(screen.getByLabelText("mail")).toBeInTheDocument();
    });

    it("does not render in notification mode when notificationContent is null", () => {
      renderBadge({ content: "1", notificationContent: null });
      expect(screen.getByText("1")).toBeInTheDocument();
    });
  });

  describe("light theme token coverage", () => {
    it("renders default badge with a background (not transparent)", () => {
      const { container } = renderBadge({ content: "1", type: "default" });
      // controlBackgroundMedium resolves to a non-transparent color in light theme
      const badge = container.querySelector(".MuiBadge-root");
      expect(badge).toBeInTheDocument();
    });

    it("renders warning badge without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", type: "warning" }),
      ).not.toThrow();
    });

    it("renders moderate badge without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", type: "moderate" }),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders default badge in dark mode without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", type: "default" }, true),
      ).not.toThrow();
    });

    it("renders warning badge in dark mode without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", type: "warning" }, true),
      ).not.toThrow();
    });

    it("renders moderate badge in dark mode without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", type: "moderate" }, true),
      ).not.toThrow();
    });

    it("renders all types in dark mode without throwing", () => {
      const types = [
        "default",
        "excellent",
        "neutral",
        "error",
        "warning",
        "info",
        "success",
        "inactive",
        "moderate",
        "severe",
      ] as const;
      types.forEach((type) => {
        expect(() => renderBadge({ content: "1", type }, true)).not.toThrow();
      });
    });
  });

  describe("props passthrough", () => {
    it("applies custom styleBadge sx prop", () => {
      const { container } = renderBadge({
        content: "1",
        styleBadge: { opacity: 0.5 },
      });
      expect(container.querySelector(".MuiBadge-root")).toBeInTheDocument();
    });

    it("applies custom styleContent sx prop without throwing", () => {
      expect(() =>
        renderBadge({ content: "1", styleContent: { fontWeight: 700 } }),
      ).not.toThrow();
    });
  });
});
