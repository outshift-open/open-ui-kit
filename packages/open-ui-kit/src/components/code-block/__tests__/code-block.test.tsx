/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { CodeBlock } from "../components/code-block";
import {
  codeTextStyle,
  containerStackStyles,
  lineNumberStyle,
  separatorFirstBox,
} from "../styles";
import type { CodeBlockProps } from "../types";

const CODE = `const x = 1;\nconsole.log(x);`;
const noop = jest.fn();

const renderCodeBlock = (props: Partial<CodeBlockProps> = {}, dark = false) =>
  render(
    <ThemeProvider defaultMode={dark ? ThemeMode.Dark : ThemeMode.Light}>
      <CodeBlock text={CODE} {...props} />
    </ThemeProvider>,
  );

describe("CodeBlock", () => {
  describe("rendering", () => {
    it("renders without throwing", () => {
      expect(() => renderCodeBlock()).not.toThrow();
    });

    it("renders the code text", () => {
      const { container } = renderCodeBlock();
      expect(container.querySelector("pre")).toBeInTheDocument();
      expect(container.querySelector("code")).toBeInTheDocument();
    });

    it("renders without line numbers by default", () => {
      const { container } = renderCodeBlock({ showLineNumbers: false });
      expect(container.querySelector(".linenumber")).not.toBeInTheDocument();
    });

    it("renders with line numbers when showLineNumbers is true", () => {
      const { container } = renderCodeBlock({ showLineNumbers: true });
      expect(container.querySelector(".linenumber")).toBeInTheDocument();
    });

    it("renders copy button", () => {
      renderCodeBlock();
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders with a custom startingLineNumber", () => {
      renderCodeBlock({ showLineNumbers: true, startingLineNumber: 5 });
      expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("renders with wrapLongLines without throwing", () => {
      expect(() => renderCodeBlock({ wrapLongLines: true })).not.toThrow();
    });

    it("keeps forwarded container props while preserving internal scroll behavior", () => {
      renderCodeBlock({
        containerProps: {
          className: "code-scroll-container",
          sx: { maxWidth: 320 },
        },
      });

      expect(
        document.querySelector(".code-scroll-container"),
      ).toBeInTheDocument();
    });
  });

  describe("light theme token coverage", () => {
    it("renders in light mode without throwing", () => {
      expect(() => renderCodeBlock()).not.toThrow();
    });

    it("renders with line numbers in light mode without throwing", () => {
      expect(() => renderCodeBlock({ showLineNumbers: true })).not.toThrow();
    });

    it("maps light theme styles to the CodeBlock CSS values", () => {
      expect(containerStackStyles(lightTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: lightTheme.palette.vars.controlBackgroundDefault,
          border: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
          borderRadius: "6px",
        }),
      );
      expect(lineNumberStyle(lightTheme, 49, true, "medium")).toEqual(
        expect.objectContaining({
          backgroundColor: lightTheme.palette.vars.baseBackgroundMedium,
          borderRight: `1px solid ${lightTheme.palette.vars.controlBorderDefault}`,
          color: lightTheme.palette.vars.baseTextMedium,
          minWidth: "49px",
          width: "49px",
        }),
      );
      expect(separatorFirstBox(lightTheme, 39, "small")).toEqual(
        expect.objectContaining({
          borderRadius: "6px 0 0 0",
          height: "12px",
          minWidth: "39px",
          width: "39px",
        }),
      );
    });
  });

  describe("header", () => {
    it("renders header buttons when header array is passed", () => {
      renderCodeBlock({
        header: [
          { label: "Action 1", onClick: noop },
          { label: "Action 2", onClick: noop },
        ],
      });
      expect(screen.getByText("Action 1")).toBeInTheDocument();
      expect(screen.getByText("Action 2")).toBeInTheDocument();
    });

    it("renders no header bar when header is not passed", () => {
      renderCodeBlock();
      expect(screen.queryByText("Action 1")).not.toBeInTheDocument();
    });

    it("renders header in dark mode without throwing", () => {
      expect(() =>
        renderCodeBlock({ header: [{ label: "Action", onClick: noop }] }, true),
      ).not.toThrow();
    });
  });

  describe("dark theme token coverage", () => {
    it("renders in dark mode without throwing", () => {
      expect(() => renderCodeBlock({}, true)).not.toThrow();
    });

    it("renders with line numbers in dark mode without throwing", () => {
      expect(() =>
        renderCodeBlock({ showLineNumbers: true }, true),
      ).not.toThrow();
    });

    it("maps dark theme styles to the CodeBlock CSS values", () => {
      expect(containerStackStyles(darkTheme)).toEqual(
        expect.objectContaining({
          backgroundColor: darkTheme.palette.vars.controlBackgroundDefault,
          border: `1px solid ${darkTheme.palette.vars.controlBorderDefault}`,
          borderRadius: "6px",
        }),
      );
      expect(lineNumberStyle(darkTheme, 39, true, "small")).toEqual(
        expect.objectContaining({
          backgroundColor: darkTheme.palette.vars.baseBackgroundMedium,
          borderRight: `1px solid ${darkTheme.palette.vars.controlBorderDefault}`,
          color: darkTheme.palette.vars.baseTextMedium,
          minWidth: "39px",
          width: "39px",
        }),
      );
    });
  });

  describe("size prop", () => {
    it("renders size=medium without throwing", () => {
      expect(() => renderCodeBlock({ size: "medium" })).not.toThrow();
    });

    it("renders size=small without throwing", () => {
      expect(() => renderCodeBlock({ size: "small" })).not.toThrow();
    });

    it("maps code typography to the Figma sizes", () => {
      expect(codeTextStyle("medium")).toEqual(
        expect.objectContaining({
          fontSize: "14px",
          lineHeight: "20px",
        }),
      );
      expect(codeTextStyle("small")).toEqual(
        expect.objectContaining({
          fontSize: "12px",
          lineHeight: "18px",
        }),
      );
    });

    it("renders size=small with line numbers without throwing", () => {
      expect(() =>
        renderCodeBlock({ size: "small", showLineNumbers: true }),
      ).not.toThrow();
    });

    it("renders size=medium with line numbers without throwing", () => {
      expect(() =>
        renderCodeBlock({ size: "medium", showLineNumbers: true }),
      ).not.toThrow();
    });

    it("renders size=small with header without throwing", () => {
      expect(() =>
        renderCodeBlock({
          size: "small",
          header: [{ label: "Action", onClick: noop }],
        }),
      ).not.toThrow();
    });

    it("renders size=medium with header without throwing", () => {
      expect(() =>
        renderCodeBlock({
          size: "medium",
          header: [{ label: "Action", onClick: noop }],
        }),
      ).not.toThrow();
    });

    it("renders size=small in dark mode without throwing", () => {
      expect(() =>
        renderCodeBlock({ size: "small", showLineNumbers: true }, true),
      ).not.toThrow();
    });

    it("uses the small block copy action size for size=small", () => {
      renderCodeBlock({ size: "small" });
      expect(screen.getByRole("button")).toHaveStyle({
        height: "20px",
        marginRight: "12px",
        marginTop: "12px",
        width: "20px",
      });
    });

    it("uses the medium block copy action size by default", () => {
      renderCodeBlock();
      expect(screen.getByRole("button")).toHaveStyle({
        height: "32px",
        marginRight: "16px",
        marginTop: "16px",
        width: "32px",
      });
    });
  });

  describe("style overrides", () => {
    it("merges customStyle overrides with the internal code block styles", () => {
      const { container } = renderCodeBlock({
        customStyle: { margin: "4px" },
      });

      expect(container.querySelector("pre")).toHaveStyle({ margin: "4px" });
    });

    it("merges codeTagProps styles with the internal typography styles", () => {
      const { container } = renderCodeBlock({
        codeTagProps: { style: { color: "rgb(1, 2, 3)" } },
      });

      expect(container.querySelector("code")).toHaveStyle({
        color: "rgb(1, 2, 3)",
        fontFamily: "'Roboto Mono', monospace",
      });
    });
  });
});
