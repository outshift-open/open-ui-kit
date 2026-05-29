/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { CopyButton } from "../components/copy-button";
import type { CopyButtonProps } from "../types";

jest.mock("copy-to-clipboard", () => jest.fn(() => true));

const renderCopyButton = (props: Partial<CopyButtonProps> = {}, dark = false) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
      <CopyButton text="copy me" {...props} />
    </ThemeProvider>,
  );

describe("CopyButton", () => {
  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => renderCopyButton()).not.toThrow();
    });

    it("renders a button", () => {
      renderCopyButton();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("uses the copy label as the accessible name by default", () => {
      renderCopyButton({ copyLabel: "Copy code" });
      expect(
        screen.getByRole("button", { name: "Copy code" }),
      ).toBeInTheDocument();
    });

    it("preserves a consumer aria-label override", () => {
      renderCopyButton({ "aria-label": "Copy snippet" });
      expect(
        screen.getByRole("button", { name: "Copy snippet" }),
      ).toBeInTheDocument();
    });

    it("renders the copy icon by default", () => {
      const { container } = renderCopyButton();
      expect(container.querySelector("svg")).toBeInTheDocument();
    });

    it("shows the checkmark icon after clicking", async () => {
      renderCopyButton();
      const btn = screen.getByRole("button");
      await act(async () => {
        fireEvent.click(btn);
      });
      expect(
        document.querySelector('[data-testid="DoneRoundedIcon"]'),
      ).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("renders size=large without throwing", () => {
      expect(() => renderCopyButton({ size: "large" })).not.toThrow();
    });

    it("renders size=medium without throwing", () => {
      expect(() => renderCopyButton({ size: "medium" })).not.toThrow();
    });

    it("renders size=small without throwing", () => {
      expect(() => renderCopyButton({ size: "small" })).not.toThrow();
    });
  });

  describe("tooltip", () => {
    it("renders with tooltipPlacement=top without throwing", () => {
      expect(() => renderCopyButton({ tooltipPlacement: "top" })).not.toThrow();
    });

    it("renders with tooltipPlacement=bottom without throwing", () => {
      expect(() =>
        renderCopyButton({ tooltipPlacement: "bottom" }),
      ).not.toThrow();
    });

    it("renders with tooltipPlacement=left without throwing", () => {
      expect(() =>
        renderCopyButton({ tooltipPlacement: "left" }),
      ).not.toThrow();
    });

    it("renders with tooltipPlacement=right without throwing", () => {
      expect(() =>
        renderCopyButton({ tooltipPlacement: "right" }),
      ).not.toThrow();
    });

    it("accepts custom copyLabel", () => {
      expect(() => renderCopyButton({ copyLabel: "Kopieren" })).not.toThrow();
    });

    it("accepts custom copiedLabel", () => {
      expect(() => renderCopyButton({ copiedLabel: "Kopiert!" })).not.toThrow();
    });
  });

  describe("light theme token coverage", () => {
    it("renders large in light mode without throwing", () => {
      expect(() => renderCopyButton({ size: "large" })).not.toThrow();
    });

    it("renders medium in light mode without throwing", () => {
      expect(() => renderCopyButton({ size: "medium" })).not.toThrow();
    });

    it("renders small in light mode without throwing", () => {
      expect(() => renderCopyButton({ size: "small" })).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders large in dark mode without throwing", () => {
      expect(() => renderCopyButton({ size: "large" }, true)).not.toThrow();
    });

    it("renders medium in dark mode without throwing", () => {
      expect(() => renderCopyButton({ size: "medium" }, true)).not.toThrow();
    });

    it("renders small in dark mode without throwing", () => {
      expect(() => renderCopyButton({ size: "small" }, true)).not.toThrow();
    });
  });

  describe("onCopy callback", () => {
    it("calls onCopy when clicked", async () => {
      const onCopy = jest.fn();
      renderCopyButton({ onCopy });
      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });
      expect(onCopy).toHaveBeenCalledTimes(1);
    });

    it("calls the consumer onClick when clicked", async () => {
      const onClick = jest.fn();
      renderCopyButton({ onClick });
      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
