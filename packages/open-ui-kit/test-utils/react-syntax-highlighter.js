/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const React = require("react");

const SyntaxHighlighter = ({
  children,
  codeTagProps = {},
  customStyle,
  lineNumberStyle,
  showLineNumbers,
  startingLineNumber = 1,
  style,
}) => {
  const lines = String(children ?? "").split("\n");
  const { style: codeStyle, ...restCodeTagProps } = codeTagProps;

  return React.createElement(
    "pre",
    {
      style: customStyle,
      // The real highlighter turns `style` into per-token colors. The mock
      // cannot tokenize, so it records the map instead — otherwise a wrong or
      // missing syntax palette would be invisible to every test.
      "data-prism-style": style ? JSON.stringify(style) : undefined,
    },
    showLineNumbers
      ? React.createElement(
          "span",
          null,
          lines.map((_, index) =>
            React.createElement(
              "span",
              {
                className: "linenumber",
                key: index,
                style: lineNumberStyle,
              },
              startingLineNumber + index,
            ),
          ),
        )
      : null,
    React.createElement(
      "code",
      {
        ...restCodeTagProps,
        style: codeStyle,
      },
      children,
    ),
  );
};

module.exports = {
  Prism: SyntaxHighlighter,
};
