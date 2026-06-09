/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Mail } from "@mui/icons-material";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkVars } from "@/theme/dark/dark-vars";
import { lightVars } from "@/theme/light/light-vars";
import { Badge } from "../components/badge";
import { BADGE_TYPES } from "../styles";

const renderBadge = (props: React.ComponentProps<typeof Badge>, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Badge {...props} />
    </ThemeProvider>,
  );

const getRequiredElement = (container: HTMLElement, selector: string) => {
  const element = container.querySelector(selector);
  expect(element).toBeInTheDocument();
  return element as HTMLElement;
};

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
      BADGE_TYPES.forEach((type) => {
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
    it("renders default badge with exact CSS token values", () => {
      const { container } = renderBadge({ content: "1", type: "default" });
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.controlBackgroundMedium).toBe("#e3eafa");
      expect(lightVars.baseTextDark).toBe("#00142b");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(227, 234, 250)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(0, 20, 43)");
    });

    it("renders light theme status colors from tokens", () => {
      const { container } = renderBadge({ content: "1", type: "excellent" });
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.excellentBackgroundDefault).toBe("#17c7ff");
      expect(lightVars.excellentTextInDefault).toBe("#edfcff");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(23, 199, 255)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(237, 252, 255)");
    });

    it("uses strong text for light warning and moderate badges", () => {
      const { container } = renderBadge({ content: "1", type: "moderate" });
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(lightVars.moderateBackgroundDefault).toBe("#ffe351");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(255, 227, 81)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(0, 20, 43)");
    });
  });

  describe("dark theme token coverage", () => {
    it("renders default badge with exact dark CSS token values", () => {
      const { container } = renderBadge(
        { content: "1", type: "default" },
        true,
      );
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(darkVars.controlBackgroundMedium).toBe("#31466e");
      expect(darkVars.baseTextStrong).toBe("#ffffff");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(49, 70, 110)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(255, 255, 255)");
    });

    it("renders dark theme status colors from tokens", () => {
      const { container } = renderBadge(
        { content: "1", type: "success" },
        true,
      );
      const badge = getRequiredElement(container, ".MuiBadge-root");
      expect(darkVars.successBackgroundDefault).toBe("#00b98d");
      expect(darkVars.successTextInDefault).toBe("#ebfbf7");
      expect(window.getComputedStyle(badge).backgroundColor).toBe(
        "rgb(0, 185, 141)",
      );
      expect(window.getComputedStyle(badge).color).toBe("rgb(235, 251, 247)");
    });

    it("renders all types in dark mode without throwing", () => {
      BADGE_TYPES.forEach((type) => {
        expect(() => renderBadge({ content: "1", type }, true)).not.toThrow();
      });
    });
  });

  describe("notification mode styles", () => {
    it("uses the CSS-sized child icon and notification bubble", () => {
      const { container } = renderBadge({
        content: <Mail aria-label="mail" />,
        notificationContent: 3,
        type: "info",
      });
      const root = getRequiredElement(container, ".MuiBadge-root");
      const icon = screen.getByLabelText("mail");
      const bubble = getRequiredElement(container, ".MuiBadge-badge");
      expect(window.getComputedStyle(root).width).toBe("24px");
      expect(window.getComputedStyle(root).height).toBe("24px");
      expect(window.getComputedStyle(icon).width).toBe("24px");
      expect(window.getComputedStyle(icon).height).toBe("24px");
      expect(window.getComputedStyle(icon).color).toBe("rgb(24, 122, 220)");
      expect(window.getComputedStyle(bubble).backgroundColor).toBe(
        "rgb(156, 78, 234)",
      );
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
