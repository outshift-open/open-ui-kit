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
}) => {
  const lines = String(children ?? "").split("\n");
  const { style: codeStyle, ...restCodeTagProps } = codeTagProps;

  return React.createElement(
    "pre",
    { style: customStyle },
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
