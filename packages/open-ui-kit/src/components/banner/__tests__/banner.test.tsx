/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { Banner } from "../components/banner";

const renderBanner = (
  props: React.ComponentProps<typeof Banner>,
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <Banner {...props} />
    </ThemeProvider>,
  );

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
      const statuses = [
        "negative",
        "warning",
        "success",
        "info",
        "excellent",
      ] as const;
      statuses.forEach((status) => {
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
    it("renders negative banner without throwing", () => {
      expect(() =>
        renderBanner({ text: "msg", status: "negative" }),
      ).not.toThrow();
    });

    it("renders warning banner without throwing", () => {
      expect(() =>
        renderBanner({ text: "msg", status: "warning" }),
      ).not.toThrow();
    });

    it("renders success banner without throwing", () => {
      expect(() =>
        renderBanner({ text: "msg", status: "success" }),
      ).not.toThrow();
    });

    it("renders info banner without throwing", () => {
      expect(() => renderBanner({ text: "msg", status: "info" })).not.toThrow();
    });

    it("renders excellent banner without throwing", () => {
      expect(() =>
        renderBanner({ text: "msg", status: "excellent" }),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders all statuses in dark mode without throwing", () => {
      const statuses = [
        "negative",
        "warning",
        "success",
        "info",
        "excellent",
      ] as const;
      statuses.forEach((status) => {
        expect(() => renderBanner({ text: "msg", status }, true)).not.toThrow();
      });
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
