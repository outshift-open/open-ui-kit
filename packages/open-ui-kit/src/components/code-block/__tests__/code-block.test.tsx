/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { refractor } from "refractor/all";
import { ThemeMode, ThemeProvider } from "@/theme-provider/theme-provider";
import { darkTheme } from "@/theme/dark/dark-theme";
import { lightTheme } from "@/theme/light/light-theme";
import { CodeBlock } from "../components/code-block";
import {
  codeTextStyle,
  containerStackStyles,
  customStyle,
  lineNumberStyle,
  prismStyle,
  separatorFirstBox,
} from "../styles";
import type { CodeBlockProps } from "../types";

const CODE = `const x = 1;\nconsole.log(x);`;
const noop = jest.fn();

/** Minimal shape of the hast tree `refractor.highlight` returns. */
type HastNode = {
  type: string;
  value?: string;
  properties?: { className?: string[] };
  children?: HastNode[];
};

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
          border: `1px solid ${lightTheme.palette.vars.controlBorderWeak}`,
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
          border: `1px solid ${darkTheme.palette.vars.controlBorderWeak}`,
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

  describe("syntax colors", () => {
    it("maps grammar tokens to the Figma accent ramp", () => {
      const light = prismStyle(lightTheme);

      expect(light).toEqual(
        expect.objectContaining({
          comment: { color: lightTheme.palette.vars.accentEDefault },
          keyword: { color: lightTheme.palette.vars.accentADefault },
          arrow: { color: lightTheme.palette.vars.accentADefault },
          "control-flow": { color: lightTheme.palette.vars.accentBDefault },
          function: { color: lightTheme.palette.vars.accentFDefault },
          "declaration-name": {
            color: lightTheme.palette.vars.accentGDefault,
          },
          "class-name": { color: lightTheme.palette.vars.accentJDefault },
          parameter: { color: lightTheme.palette.vars.accentHDefault },
          identifier: { color: lightTheme.palette.vars.accentHDefault },
          number: { color: lightTheme.palette.vars.successTextDefault },
          punctuation: { color: lightTheme.palette.vars.baseTextStrong },
        }),
      );
    });

    it("resolves the Figma frame's literal syntax colors in light mode", () => {
      const light = prismStyle(lightTheme);

      // Values read from the Figma "Code block" frame variable definitions.
      expect(light.keyword).toEqual({ color: "#5c6ddd" }); // Accent/A
      expect(light["control-flow"]).toEqual({ color: "#b8428c" }); // Accent/B
      expect(light.comment).toEqual({ color: "#7da11b" }); // Accent/E
      expect(light.function).toEqual({ color: "#e8361a" }); // Accent/F
      expect(light["declaration-name"]).toEqual({ color: "#46aace" }); // Accent/G
      expect(light.parameter).toEqual({ color: "#1c2b7f" }); // Accent/H
      expect(light.identifier).toEqual({ color: "#1c2b7f" }); // Accent/H
      expect(light["class-name"]).toEqual({ color: "#028e99" }); // Accent/J
      expect(light.number).toEqual({ color: "#00b285" }); // Success/Text/Default
    });

    it("gives control flow a different color from other keywords", () => {
      // Accent/B previously sat on `regex`/`constant`, which the JavaScript
      // samples never produce, so it painted nothing and `return`/`await`
      // rendered as Accent/A. These must stay distinct in every theme.
      for (const theme of [lightTheme, darkTheme]) {
        const style = prismStyle(theme);
        expect(style["control-flow"]).not.toEqual(style.keyword);
        expect(style["declaration-name"]).not.toEqual(style.punctuation);
        expect(style.identifier).not.toEqual(style.punctuation);
      }
    });

    it("follows the active theme instead of baking in one ramp", () => {
      const light = prismStyle(lightTheme);
      const dark = prismStyle(darkTheme);

      expect(dark.keyword).toEqual({
        color: darkTheme.palette.vars.accentADefault,
      });
      expect(dark.keyword).not.toEqual(light.keyword);
      expect(customStyle(darkTheme).color).toBe(
        darkTheme.palette.vars.baseTextStrong,
      );
    });

    it("hands the theme-resolved palette to the highlighter", () => {
      const { container, unmount } = renderCodeBlock();
      const readPalette = () =>
        JSON.parse(
          container.querySelector("pre")?.getAttribute("data-prism-style") ??
            "{}",
        );

      expect(readPalette()).toEqual(prismStyle(lightTheme));
      expect(container.querySelector("pre")).toHaveStyle({
        color: lightTheme.palette.vars.baseTextStrong,
      });

      unmount();
      const darkRender = renderCodeBlock({}, true);

      expect(
        JSON.parse(
          darkRender.container
            .querySelector("pre")
            ?.getAttribute("data-prism-style") ?? "{}",
        ),
      ).toEqual(prismStyle(darkTheme));
    });
  });

  // `react-syntax-highlighter` is mocked in jest.config.js, so the rendered
  // output has no real token spans and the palette tests above can only prove
  // that a color is *assigned* to a token name. These drive the same refractor
  // grammar the component uses, to prove the token names are ones the language
  // actually emits — the failure mode this change exists to fix.
  describe("grammar coverage for the Figma roles", () => {
    const SAMPLE = [
      "function resolveAfter2Seconds(x) {",
      "  return new Promise((resolve) => {",
      "    setTimeout(() => { resolve(x); }, 2000);",
      "  });",
      "}",
      "const p1 = await resolveAfter2Seconds(20);",
      "return x + p1; // done",
      "console.log(p1);",
    ].join("\n");

    // refractor nests tokens — a `parameter` whose inside-grammar matched an
    // `identifier` renders as <span class="parameter"><span class="identifier">.
    // Collect the whole ancestor chain so either role can be asserted.
    const classesFor = (text: string): string[] => {
      const found: string[][] = [];
      const walk = (node: HastNode, inherited: string[]) => {
        for (const child of node.children ?? []) {
          if (child.type === "text") {
            if (child.value === text) found.push(inherited);
            continue;
          }
          const classes = [
            ...inherited,
            ...(child.properties?.className ?? []).filter((c) => c !== "token"),
          ];
          walk(child, classes);
        }
      };
      walk(refractor.highlight(SAMPLE, "javascript") as unknown as HastNode, []);
      return found[0] ?? [];
    };

    it.each([
      ["return", "control-flow"], // Accent/B
      ["await", "control-flow"], // Accent/B
      ["p1", "declaration-name"], // Accent/G
      ["x", "identifier"], // Accent/H
      ["console", "identifier"], // Accent/H
      ["=>", "arrow"], // Accent/A
      ["resolve", "parameter"], // Accent/H
      ["Promise", "class-name"], // Accent/J
      ["2000", "number"], // Success/Text/Default
    ])("tokenizes %s as %s", (text, expected) => {
      expect(classesFor(text)).toContain(expected);
    });

    it("keeps control flow separate from ordinary keywords", () => {
      expect(classesFor("const")).not.toContain("control-flow");
      expect(classesFor("return")).toContain("control-flow");
    });

    it("leaves a function binding on the function role, not the declaration role", () => {
      // `const add = function` is a function, so Accent/F outranks Accent/G.
      expect(classesFor("resolveAfter2Seconds")).toContain("function");
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
