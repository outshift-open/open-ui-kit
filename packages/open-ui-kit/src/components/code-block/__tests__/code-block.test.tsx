/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "@/theme-provider/theme-provider";
import { CodeBlock } from "../components/code-block";

const CODE = `const x = 1;\nconsole.log(x);`;
const noop = jest.fn();

const renderCodeBlock = (
  props: Partial<React.ComponentProps<typeof CodeBlock>> = {},
  dark = false,
) =>
  render(
    <ThemeProvider defaultDarkMode={dark}>
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
  });

  describe("light theme token coverage", () => {
    it("renders in light mode without throwing", () => {
      expect(() => renderCodeBlock()).not.toThrow();
    });

    it("renders with line numbers in light mode without throwing", () => {
      expect(() => renderCodeBlock({ showLineNumbers: true })).not.toThrow();
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
  });

  describe("size prop", () => {
    it("renders size=medium without throwing", () => {
      expect(() => renderCodeBlock({ size: "medium" })).not.toThrow();
    });

    it("renders size=small without throwing", () => {
      expect(() => renderCodeBlock({ size: "small" })).not.toThrow();
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
  });
});
