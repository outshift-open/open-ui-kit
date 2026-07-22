/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkVars } from "@/theme/dark/dark-vars";
import { lightVars } from "@/theme/light/light-vars";
import { Banner } from "../components/banner";
import { BANNER_STATUSES } from "../styles";

const renderBanner = (
  props: React.ComponentProps<typeof Banner>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <Banner {...props} />
    </ThemeProvider>,
  );

const getRequiredElement = (container: HTMLElement, selector: string) => {
  const element = container.querySelector(selector);
  expect(element).toBeInTheDocument();
  return element as HTMLElement;
};

const cssColor = (color: string) => {
  const element = document.createElement("span");
  element.style.color = color;
  document.body.appendChild(element);
  const computedColor = window.getComputedStyle(element).color;
  element.remove();
  return computedColor;
};

describe("Banner", () => {
  describe("rendering", () => {
    it("renders the text content", () => {
      renderBanner({ text: "System update in progress" });
      expect(screen.getByText("System update in progress")).toBeInTheDocument();
    });

    it("renders with default status info when status is omitted", () => {
      const { container } = renderBanner({ text: "Hello" });
      expect(container.querySelector(".MuiAlert-root")).toBeInTheDocument();
    });

    it("renders all status variants without error", () => {
      BANNER_STATUSES.forEach((status) => {
        const { unmount } = renderBanner({ text: "msg", status });
        expect(screen.getByText("msg")).toBeInTheDocument();
        unmount();
      });
    });

    it("renders close button by default", () => {
      renderBanner({ text: "msg" });
      expect(screen.getByLabelText("close")).toBeInTheDocument();
    });

    it("hides close button when showCloseButton is false", () => {
      renderBanner({ text: "msg", showCloseButton: false });
      expect(screen.queryByLabelText("close")).not.toBeInTheDocument();
    });
  });

  describe("close behavior", () => {
    it("hides the banner after clicking close", () => {
      renderBanner({ text: "Closeable banner" });
      expect(screen.getByText("Closeable banner")).toBeInTheDocument();
      fireEvent.click(screen.getByLabelText("close"));
      expect(screen.queryByText("Closeable banner")).not.toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
      const onClose = jest.fn();
      renderBanner({ text: "msg", onClose });
      fireEvent.click(screen.getByLabelText("close"));
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe("light theme token coverage", () => {
    it("renders negative banner with exact CSS token values", () => {
      const { container } = renderBanner({ text: "msg", status: "negative" });
      const banner = getRequiredElement(container, ".MuiAlert-root");
      const icon = getRequiredElement(container, ".MuiAlert-icon");
      expect(lightVars.negativeBackgroundWeak).toBe("#f8e5ea");
      expect(lightVars.negativeBorderDefault).toBe("#c0244c");
      expect(lightVars.negativeTextDefault).toBe("#c0244c");
      expect(window.getComputedStyle(banner).backgroundColor).toBe(
        "rgb(248, 229, 234)",
      );
      expect(window.getComputedStyle(banner).borderTopColor).toBe(
        cssColor("#c0244c"),
      );
      expect(window.getComputedStyle(banner).width).toBe("800px");
      expect(window.getComputedStyle(banner).padding).toBe("8px 4px 8px 12px");
      expect(window.getComputedStyle(icon).color).toBe("rgb(192, 36, 76)");
      expect(window.getComputedStyle(banner).color).toBe("rgb(192, 36, 76)");
    });

    it("renders light success, info, warning, and branded colors from tokens", () => {
      const expectations = [
        {
          status: "warning" as const,
          background: "rgb(253, 236, 232)",
          border: "#f05c37",
          text: "rgb(240, 92, 55)",
        },
        {
          status: "success" as const,
          background: "rgb(235, 251, 247)",
          border: "#00b285",
          text: "rgb(0, 178, 133)",
        },
        {
          status: "info" as const,
          background: "rgb(232, 241, 255)",
          border: "#004ba8",
          text: "rgb(0, 75, 168)",
        },
        {
          status: "excellent" as const,
          background: "rgb(237, 252, 255)",
          border: "#17c7ff",
          text: "rgb(60, 69, 81)",
        },
      ];

      expectations.forEach(({ status, background, border, text }) => {
        const { container, unmount } = renderBanner({ text: "msg", status });
        const banner = getRequiredElement(container, ".MuiAlert-root");
        expect(window.getComputedStyle(banner).backgroundColor).toBe(
          background,
        );
        expect(window.getComputedStyle(banner).borderTopColor).toBe(
          cssColor(border),
        );
        expect(window.getComputedStyle(banner).color).toBe(text);
        unmount();
      });
    });
  });

  describe("dark theme token coverage", () => {
    it("renders dark negative banner with exact CSS token values", () => {
      const { container } = renderBanner(
        { text: "msg", status: "negative" },
        true,
      );
      const banner = getRequiredElement(container, ".MuiAlert-root");
      const icon = getRequiredElement(container, ".MuiAlert-icon");
      const action = getRequiredElement(container, ".MuiAlert-action");
      expect(darkVars.negativeBackgroundWeak).toBe("#c6295319");
      expect(darkVars.negativeBorderDefault).toBe("#c62953");
      expect(darkVars.negativeIconDefault).toBe("#cf496d");
      expect(darkVars.negativeTextDefault).toBe("#eebfcb");
      expect(window.getComputedStyle(banner).backgroundColor).toBe(
        "rgba(198, 41, 83, 0.098)",
      );
      expect(window.getComputedStyle(banner).borderTopColor).toBe(
        cssColor("#c62953"),
      );
      expect(window.getComputedStyle(icon).color).toBe("rgb(207, 73, 109)");
      expect(window.getComputedStyle(banner).color).toBe("rgb(238, 191, 203)");
      expect(window.getComputedStyle(action).color).toBe("rgb(232, 233, 234)");
    });

    it("renders dark status variants without throwing", () => {
      BANNER_STATUSES.forEach((status) => {
        expect(() => renderBanner({ text: "msg", status }, true)).not.toThrow();
      });
    });
  });

  describe("layout", () => {
    it("aligns icon, message, and close in a top-aligned row", () => {
      const { container } = renderBanner({ text: "msg" });
      const banner = getRequiredElement(container, ".MuiAlert-root");
      const message = getRequiredElement(container, ".MuiAlert-message");

      expect(window.getComputedStyle(banner).display).toBe("flex");
      expect(window.getComputedStyle(banner).flexDirection).toBe("row");
      expect(window.getComputedStyle(banner).alignItems).toBe("flex-start");
      expect(window.getComputedStyle(banner).height).not.toBe("40px");
      expect(window.getComputedStyle(message).height).not.toBe("24px");
    });
  });

  describe("custom icon", () => {
    it("renders a custom icon when icon prop is provided", () => {
      renderBanner({
        text: "msg",
        icon: <span aria-label="custom-icon">*</span>,
      });
      expect(screen.getByLabelText("custom-icon")).toBeInTheDocument();
    });
  });
});
