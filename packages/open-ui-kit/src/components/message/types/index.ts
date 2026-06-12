/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { HTMLAttributes, ReactNode } from "react";
import type { SxProps, Theme } from "@mui/material";

export type MessageType = "success" | "error" | "warning" | "info";

export interface MessageProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Visual status that controls the left rail, icon, and border color. */
  type?: MessageType;
  /** Main message content. Use the Figma-provided sentence for documentation examples. */
  children: ReactNode;
  /** Optional title shown above the message body. */
  title?: ReactNode;
  /** Optional action label rendered as a compact text button on the right. */
  actionLabel?: ReactNode;
  /** Called when the optional action label is clicked. */
  onActionClick?: () => void;
  /** Called when the close icon button is clicked. */
  onClose?: () => void;
  /** Hides the close icon when the message should not be dismissible. */
  hideClose?: boolean;
  /** Optional system overrides merged after the internal token styles. */
  sx?: SxProps<Theme>;
}
