/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, useTheme } from "@mui/material";
import {
  containerStackStyles,
  codeTextStyle,
  customStyle,
  headerButtonStyles,
  headerStyles,
  lineNumberStyle,
  prismStyle,
} from "@/components/code-block/styles";
import React from "react";
import { Prism, type SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Separator } from "./separator";
import { CopyButton } from "@/components/copy-button";
import type { CodeBlockProps } from "../types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export const CodeBlock = (props: CodeBlockProps) => {
  const theme = useTheme();
  const {
    text,
    showLineNumbers,
    startingLineNumber,
    containerProps,
    copyButtonProps,
    header,
    size = "medium",
    customStyle: customStyleProp,
    codeTagProps,
    lineNumberStyle: lineNumberStyleProp,
    ...highlighterProps
  } = props;
  const { sx: containerSx, ...restContainerProps } = containerProps ?? {};
  const { sx: copyButtonSx, ...restCopyButtonProps } = copyButtonProps ?? {};
  const { style: codeTagStyle, ...restCodeTagProps } = codeTagProps ?? {};
  const lineNumberWidth = size === "small" ? 39 : 49;
  const contentInset = size === "small" ? "12px" : "16px";

  const headerContent = Array.isArray(header)
    ? header.map((btn) => (
        <button
          type="button"
          key={btn.label}
          style={headerButtonStyles(theme)}
          onClick={btn.onClick}
        >
          {btn.label}
        </button>
      ))
    : header;

  return (
    <Stack direction={"column"} sx={containerStackStyles(theme)}>
      {headerContent && (
        <div style={headerStyles(theme, size)}>{headerContent}</div>
      )}
      <Stack
        {...restContainerProps}
        direction="row"
        alignItems="flex-start"
        sx={[
          { overflow: "auto" },
          ...(Array.isArray(containerSx)
            ? containerSx
            : containerSx
              ? [containerSx]
              : []),
        ]}
      >
        <Stack justifyContent={"center"} sx={{ flex: 1, minWidth: 0 }}>
          <Separator
            lineNumberWidth={lineNumberWidth}
            showLineNumbers={showLineNumbers}
            size={size}
          />
          <SyntaxHighlighter
            language="javascript"
            style={prismStyle}
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
            {...highlighterProps}
            customStyle={{
              ...customStyle(theme, showLineNumbers, size),
              ...(typeof customStyleProp === "object" ? customStyleProp : {}),
            }}
            codeTagProps={{
              ...restCodeTagProps,
              style: {
                ...codeTextStyle(size),
                ...(typeof codeTagStyle === "object" ? codeTagStyle : {}),
              },
            }}
            lineNumberStyle={{
              ...lineNumberStyle(theme, lineNumberWidth, showLineNumbers, size),
              ...(typeof lineNumberStyleProp === "object"
                ? lineNumberStyleProp
                : {}),
            }}
          >
            {text}
          </SyntaxHighlighter>
          <Separator
            lineNumberWidth={lineNumberWidth}
            showLineNumbers={showLineNumbers}
            size={size}
          />
        </Stack>
        <CopyButton
          {...restCopyButtonProps}
          text={text}
          size={
            copyButtonProps?.size ?? (size === "small" ? "medium" : "large")
          }
          sx={[
            {
              flex: "0 0 auto",
              marginRight: contentInset,
              marginTop: contentInset,
            },
            ...(Array.isArray(copyButtonSx)
              ? copyButtonSx
              : copyButtonSx
                ? [copyButtonSx]
                : []),
          ]}
        />
      </Stack>
    </Stack>
  );
};
