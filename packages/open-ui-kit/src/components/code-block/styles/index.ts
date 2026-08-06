/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Theme } from "@mui/material";
import type { CSSProperties } from "react";

export const containerStackStyles = (theme: Theme): CSSProperties => ({
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  // Figma binds the card outline to Control/Border/Weak; Control/Border/Default
  // is reserved for the controls inside it, such as the copy button.
  border: `1px solid ${theme.palette.vars.controlBorderWeak}`,
  borderRadius: "6px",
  position: "relative",
});

export const codeTextStyle = (
  size: "small" | "medium" = "medium",
): CSSProperties => ({
  fontFamily: "'Roboto Mono', monospace",
  fontWeight: 400,
  fontSize: size === "small" ? "12px" : "14px",
  lineHeight: size === "small" ? "18px" : "20px",
  letterSpacing: 0,
});

export const customStyle = (
  theme: Theme,
  showLineNumbers?: boolean,
  size: "small" | "medium" = "medium",
): CSSProperties => {
  const pad = size === "small" ? "0 12px" : "0 16px";
  return {
    padding: showLineNumbers ? 0 : pad,
    margin: "0",
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    borderRadius: showLineNumbers ? "0 0 4px 4px" : "4px",
    // Figma paints the code area of a highlighted block with Base/Text/Strong;
    // unhighlighted grammar tokens inherit this color.
    color: theme.palette.vars.baseTextStrong,
  };
};

export const lineNumberStyle = (
  theme: Theme,
  lineNumberWidth: number,
  showLineNumbers?: boolean,
  size: "small" | "medium" = "medium",
): CSSProperties => {
  const isSmall = size === "small";
  return {
    width: `${lineNumberWidth}px`,
    textAlign: "right",
    paddingRight: isSmall ? "6px" : "8px",
    paddingLeft: isSmall ? "6px" : "8px",
    borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
    marginRight: showLineNumbers ? (isSmall ? "12px" : "16px") : 0,
    color: theme.palette.vars.baseTextMedium,
    backgroundColor: theme.palette.vars.baseBackgroundMedium,
    ...codeTextStyle(size),
    minWidth: `${lineNumberWidth}px`,
  };
};

export const separatorFirstBox = (
  theme: Theme,
  lineNumberWidth: number,
  size: "small" | "medium" = "medium",
): CSSProperties => ({
  backgroundColor: theme.palette.vars.baseBackgroundMedium,
  borderRight: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "6px 0 0 0",
  height: size === "small" ? "12px" : "16px",
  width: `${lineNumberWidth}px`,
  minWidth: `${lineNumberWidth}px`,
});

export const separatorSecondBox = (
  theme: Theme,
  showLineNumbers?: boolean,
  size: "small" | "medium" = "medium",
): CSSProperties => {
  const isSmall = size === "small";
  return {
    backgroundColor: theme.palette.vars.controlBackgroundDefault,
    paddingTop: showLineNumbers
      ? isSmall
        ? "12px"
        : "16px"
      : isSmall
        ? "6px"
        : "8px",
    height: isSmall ? "12px" : "16px",
  };
};

export const headerStyles = (
  theme: Theme,
  size: "small" | "medium" = "medium",
): CSSProperties => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: size === "small" ? "8px 12px" : "12px 16px",
  gap: size === "small" ? "12px" : "16px",
  backgroundColor: theme.palette.vars.controlBackgroundDefault,
  borderBottom: `1px solid ${theme.palette.vars.controlBorderDefault}`,
  borderRadius: "4px 4px 0 0",
});

export const headerButtonStyles = (theme: Theme): CSSProperties => ({
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer",
  ...(theme.typography.body2Semibold as CSSProperties),
  color: theme.palette.vars.brandIconPrimaryDefault,
});

// Syntax colors follow the Figma "Code block" frame, which paints language
// grammar with the Spark accent ramp instead of a stock Prism palette:
//
//   Accent/A  keywords (function, const, new, async) and the arrow `=>`
//   Accent/B  control-flow keywords (return, await)
//   Accent/E  comments
//   Accent/F  function names and call sites
//   Accent/G  declaration names (const a = ...)
//   Accent/H  parameters and identifier references
//   Accent/J  classes and constructors (Promise)
//   Success/Text/Default  numeric literals
//   Base/Text/Strong      punctuation and unclassified code
//
// The highlighter is `react-syntax-highlighter`'s full `Prism` export, which is
// bound to `refractor/all` rather than the stock prismjs grammar. refractor
// emits a richer token set, so most of the frame maps directly: `control-flow`
// splits `return`/`await` off `keyword`, `arrow` separates `=>` from the other
// operators, and `parameter` covers declaration-site parameters.
//
// Two roles have no refractor token — the binding name in a declaration and a
// bare identifier reference. `prism-grammar.ts` adds `declaration-name` and
// `identifier` for those; without that module they fall back to punctuation.
//
// Taking tokens rather than the frame's literals also fixes the theme: the
// Figma midnight frame resolves the accent ramp to its light-theme values,
// which is why parameters and punctuation are barely legible there. Reading
// through `theme.palette.vars` gives each theme its own ramp.
export const prismStyle = (theme: Theme): { [key: string]: CSSProperties } => {
  const { vars } = theme.palette;

  return {
    'pre[class*="language-"]': { background: "transparent", textShadow: "none" },
    'code[class*="language-"]': {
      background: "transparent",
      textShadow: "none",
    },

    // Punctuation and operators stay on the code area's own text color.
    punctuation: { color: vars.baseTextStrong },
    operator: { color: vars.baseTextStrong },

    // Comments — Accent/E
    comment: { color: vars.accentEDefault },
    prolog: { color: vars.accentEDefault },
    doctype: { color: vars.accentEDefault },
    cdata: { color: vars.accentEDefault },

    // Keywords — Accent/A. `arrow` is a sub-token of `operator`; the frame
    // paints `=>` with the keyword color, and class order lets it win.
    keyword: { color: vars.accentADefault },
    atrule: { color: vars.accentADefault },
    arrow: { color: vars.accentADefault },

    // Control-flow keywords — Accent/B. refractor tags these with both
    // `keyword` and `control-flow`; `control-flow` is last, so it wins.
    "control-flow": { color: vars.accentBDefault },

    // Function names and call sites — Accent/F
    function: { color: vars.accentFDefault },
    "function-variable": { color: vars.accentFDefault },

    // Classes, constructors and language builtins — Accent/J
    "class-name": { color: vars.accentJDefault },
    builtin: { color: vars.accentJDefault },
    entity: { color: vars.accentJDefault, cursor: "help" },

    // Parameters, identifiers and property names — Accent/H.
    // `identifier` comes from `prism-grammar.ts` and catches bare references
    // (`x`, `b`, `console`) that no other pattern claimed. `variable` carries
    // refractor's `dom` token, so `document` matches `console` rather than
    // rendering as attention/regex.
    parameter: { color: vars.accentHDefault },
    identifier: { color: vars.accentHDefault },
    variable: { color: vars.accentHDefault },
    property: { color: vars.accentHDefault },
    "literal-property": { color: vars.accentHDefault },
    "string-property": { color: vars.accentHDefault },
    "attr-name": { color: vars.accentHDefault },
    tag: { color: vars.accentHDefault },
    selector: { color: vars.accentHDefault },

    // Declaration binding names — Accent/G. Also from `prism-grammar.ts`.
    "declaration-name": { color: vars.accentGDefault },

    // Literals — Success/Text/Default. The Figma sample is JavaScript with no
    // string in it, so it does not specify a string color; grouping strings
    // with numbers keeps every literal on one token now that Accent/G carries
    // declaration names.
    number: { color: vars.successTextDefault },
    boolean: { color: vars.successTextDefault },
    string: { color: vars.successTextDefault },
    char: { color: vars.successTextDefault },
    "attr-value": { color: vars.successTextDefault },
    url: { color: vars.successTextDefault },
    inserted: { color: vars.successTextDefault },
    ".language-css .token.string": { color: vars.successTextDefault },
    ".style .token.string": { color: vars.successTextDefault },

    // Regex, symbols and emphasis — Accent/B, alongside control flow above.
    regex: { color: vars.accentBDefault },
    "regex-delimiter": { color: vars.accentBDefault },
    "regex-source": { color: vars.accentBDefault },
    constant: { color: vars.accentBDefault },
    symbol: { color: vars.accentBDefault },
    deleted: { color: vars.accentBDefault },
    important: { color: vars.accentBDefault, fontWeight: "bold" },

    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
  };
};
