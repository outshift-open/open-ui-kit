/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Stack, StackOwnProps, useTheme } from "@mui/material";
import { CSSProperties } from "react";
import {
  containerStackStyles,
  customStyle,
  lineNumberStyle,
} from "@/components/code-block/styles";
import React from "react";
import { Prism, SyntaxHighlighterProps } from "react-syntax-highlighter";
import { Separator } from "./separator";
import { CopyButton, CopyButtonProps } from "@/components";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SyntaxHighlighter = Prism as any as React.FC<SyntaxHighlighterProps>;

export interface CodeBlockProps
  extends Omit<SyntaxHighlighterProps, "children"> {
  containerProps?: StackOwnProps;
  text: string;
  copyButtonProps?: Omit<CopyButtonProps, "text">;
}

export const CodeBlock = (props: CodeBlockProps) => {
  const theme = useTheme();
  const {
    text,
    showLineNumbers,
    startingLineNumber,
    containerProps,
    copyButtonProps,
  } = props;
  const totalLines = (startingLineNumber ?? 0) + text.split("\n").length;
  const maxDigits = totalLines.toString().length;
  const lineNumberWidth = maxDigits * 12 + 16; // 12px per digit + 16px for padding

  return (
    <Stack direction={"column"} sx={containerStackStyles(theme)}>
      <Stack
        justifyContent={"center"}
        sx={{
          position: "relative",
          minHeight: "32px",
          overflow: "auto",
          ...containerProps?.sx,
        }}
        {...containerProps}
      >
        <Separator
          lineNumberWidth={lineNumberWidth}
          showLineNumbers={showLineNumbers}
        />
        <SyntaxHighlighter
          language="javascript"
          {...props}
          customStyle={customStyle(theme, showLineNumbers)}
          codeTagProps={{
            style: {
              ...(theme.typography.body2 as CSSProperties),
            },
          }}
          style={{}} // empty style to avoid default padding from themes
          lineNumberStyle={lineNumberStyle(
            theme,
            lineNumberWidth,
            showLineNumbers,
          )}
        >
          {text}
        </SyntaxHighlighter>
        <Separator
          lineNumberWidth={lineNumberWidth}
          showLineNumbers={showLineNumbers}
        />
      </Stack>
      <CopyButton
        text={text}
        position="right"
        top={"16px"}
        {...copyButtonProps}
      />
    </Stack>
  );
};
