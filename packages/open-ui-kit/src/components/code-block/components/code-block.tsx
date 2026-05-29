/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, StackOwnProps, useTheme } from "@mui/material";
import { CSSProperties, ReactNode } from "react";
import {
  containerStackStyles,
  customStyle,
  headerButtonStyles,
  headerStyles,
  lineNumberStyle,
  prismStyle,
} from "@/components/code-block/styles";
import React from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Separator } from "./separator";
import { CopyButton, CopyButtonProps } from "@/components/copy-button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export interface CodeBlockHeaderButton {
  label: string;
  onClick: () => void;
}

export interface CodeBlockProps
  extends Omit<SyntaxHighlighterProps, "children"> {
  containerProps?: StackOwnProps;
  text: string;
  copyButtonProps?: Omit<CopyButtonProps, "text">;
  header?: CodeBlockHeaderButton[] | ReactNode;
  size?: "small" | "medium";
}

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...highlighterProps
  } = props;
  const totalLines = (startingLineNumber ?? 0) + text.split("\n").length;
  const maxDigits = totalLines.toString().length;
  const lineNumberWidth = maxDigits * 12 + 16; // 12px per digit + 16px for padding

  const headerContent = Array.isArray(header)
    ? header.map((btn) => (
        <button
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
        direction="row"
        alignItems="flex-start"
        sx={{
          overflow: "auto",
          ...containerProps?.sx,
        }}
        {...containerProps}
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
            {...highlighterProps}
            customStyle={{
              ...customStyle(theme, showLineNumbers, size),
              ...props.customStyle,
            }}
            codeTagProps={{
              style: {
                ...(size === "small"
                  ? (theme.typography.caption as CSSProperties)
                  : (theme.typography.body2 as CSSProperties)),
              },
              ...highlighterProps.codeTagProps,
            }}
            lineNumberStyle={{
              ...lineNumberStyle(theme, lineNumberWidth, showLineNumbers, size),
              ...(typeof highlighterProps.lineNumberStyle === "object"
                ? highlighterProps.lineNumberStyle
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
        <CopyButton text={text} size="large" {...copyButtonProps} />
      </Stack>
    </Stack>
  );
};
