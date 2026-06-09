/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { CopyButton } from "../components/copy-button";
import { styles } from "../styles";
import type { CopyButtonProps } from "../types";

jest.mock("copy-to-clipboard", () => jest.fn(() => true));

const renderCopyButton = (props: Partial<CopyButtonProps> = {}, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
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
      const doneIcon = document.querySelector(
        '[data-testid="DoneRoundedIcon"]',
      );
      expect(doneIcon).toBeInTheDocument();
      expect(doneIcon).toHaveStyle({
        color: lightTheme.palette.vars.successIconDefault,
      });
    });

    it("shows the checkmark icon after clicking in dark mode", async () => {
      renderCopyButton({}, true);
      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });
      const doneIcon = document.querySelector(
        '[data-testid="DoneRoundedIcon"]',
      );
      expect(doneIcon).toBeInTheDocument();
      expect(doneIcon).toHaveStyle({
        color: darkTheme.palette.vars.successIconDefault,
      });
    });

    it("supports a controlled copied state", () => {
      renderCopyButton({ copied: true });
      expect(
        document.querySelector('[data-testid="DoneRoundedIcon"]'),
      ).toBeInTheDocument();
    });

    it("keeps the copy icon when copied is controlled false", async () => {
      renderCopyButton({ copied: false });
      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });
      expect(
        document.querySelector('[data-testid="DoneRoundedIcon"]'),
      ).not.toBeInTheDocument();
    });

    it("copies the provided text when clicked", async () => {
      const copy = jest.requireMock("copy-to-clipboard");
      renderCopyButton({ text: "exact text" });
      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });
      expect(copy).toHaveBeenCalledWith("exact text");
    });

    it("resets the copied state after the timeout", async () => {
      jest.useFakeTimers();
      renderCopyButton();
      await act(async () => {
        fireEvent.click(screen.getByRole("button"));
      });
      expect(
        document.querySelector('[data-testid="DoneRoundedIcon"]'),
      ).toBeInTheDocument();
      act(() => {
        jest.advanceTimersByTime(2000);
      });
      expect(
        document.querySelector('[data-testid="DoneRoundedIcon"]'),
      ).not.toBeInTheDocument();
      jest.useRealTimers();
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

  describe("CodeBlock design token styles", () => {
    it("maps light sizes to the CodeBlock CSS values", () => {
      expect(styles({ size: "small", theme: lightTheme })).toEqual(
        expect.objectContaining({
          border: "none",
          color: "#062242",
          height: "16px",
          margin: 0,
          minWidth: "16px",
          padding: 0,
          width: "16px",
        }),
      );
      expect(styles({ size: "medium", theme: lightTheme })).toEqual(
        expect.objectContaining({
          border: "none",
          height: "20px",
          minWidth: "20px",
          width: "20px",
        }),
      );
      expect(styles({ size: "large", theme: lightTheme })).toEqual(
        expect.objectContaining({
          border: "1px solid #d5dff7",
          height: "32px",
          minWidth: "32px",
          width: "32px",
        }),
      );
    });

    it("maps dark sizes to the CodeBlock CSS values", () => {
      expect(styles({ size: "small", theme: darkTheme })).toEqual(
        expect.objectContaining({
          border: "none",
          color: "#e8eefb",
          height: "16px",
          margin: 0,
          minWidth: "16px",
          width: "16px",
        }),
      );
      expect(styles({ size: "large", theme: darkTheme })).toEqual(
        expect.objectContaining({
          border: "1px solid #4f628d",
          height: "32px",
          minWidth: "32px",
          width: "32px",
        }),
      );
    });

    it("uses CodeBlock hover tokens in both themes", () => {
      expect(styles({ size: "large", theme: lightTheme })["&:hover"]).toEqual(
        expect.objectContaining({
          backgroundColor: "#dae3f8",
          border: "1px solid #d5dff7",
          color: "#263b62",
        }),
      );
      expect(styles({ size: "large", theme: darkTheme })["&:hover"]).toEqual(
        expect.objectContaining({
          backgroundColor: "#0d274d",
          border: "1px solid #4f628d",
          color: "#fbfcfe",
        }),
      );
    });

    it("renders the large button with the CodeBlock square dimensions", () => {
      renderCopyButton({ size: "large" });
      expect(screen.getByRole("button")).toHaveStyle({
        border: "1px solid #d5dff7",
        height: "32px",
        margin: "0",
        width: "32px",
      });
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
