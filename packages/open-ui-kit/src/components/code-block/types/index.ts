/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { StackProps } from "@mui/material";
import type { ReactNode } from "react";
import type { SyntaxHighlighterProps } from "react-syntax-highlighter";
import type { CopyButtonProps } from "@/components/copy-button";

/** Supported density options for the code block container, header, and line numbers. */
export type CodeBlockSize = "small" | "medium";

/** Button-link action rendered in the optional code block header. */
export interface CodeBlockHeaderButton {
  /** Visible label for the header action. */
  label: string;
  /** Callback fired when the header action is clicked. */
  onClick: () => void;
}

export interface CodeBlockProps extends Omit<
  SyntaxHighlighterProps,
  "children"
> {
  /** Props forwarded to the horizontal scroll container around the code content. */
  containerProps?: StackProps;
  /** Code string rendered by the syntax highlighter and copied by the copy action. */
  text: string;
  /** Props forwarded to the copy button; the copied text is always controlled by `text`. */
  copyButtonProps?: Omit<CopyButtonProps, "text">;
  /** Optional header content or button-link actions shown above the code content. */
  header?: CodeBlockHeaderButton[] | ReactNode;
  /** Controls the component density and typography scale. Defaults to `medium`. */
  size?: CodeBlockSize;
}
