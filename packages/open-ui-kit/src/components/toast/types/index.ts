/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { AlertProps } from "@mui/material";
import type React from "react";
import type { Toaster as Sonner } from "sonner";

export type ToastType = "default" | "info" | "success" | "warning" | "error";

export interface ToastAction {
  /** Text shown in the optional toast action button. */
  label: string;
  /** Callback fired when the toast action button is clicked. */
  onClick: () => void;
}

export interface ToastProps
  extends Omit<
    AlertProps,
    | "variant"
    | "severity"
    | "children"
    | "iconMapping"
    | "action"
    | "id"
    | "icon"
  > {
  /** Unique id used when dismissing via Sonner. */
  id: string;
  /** Visual type that controls the status icon and left border color. */
  type?: ToastType;
  /** Optional bold title line rendered above the message. */
  title?: string;
  /** Optional body message shown in the toast content area. */
  description?: string;
  /** Shows the close button when true. */
  showCloseButton?: boolean;
  /** Uses local React state for closing when true, or dismisses through Sonner when false. */
  useNativeClose?: boolean;
  /** Optional single action rendered below the message. */
  action?: ToastAction;
  /** Custom action content rendered below the message when `action` is not provided. */
  customActions?: React.ReactNode;
}

export type ToasterProps = React.ComponentProps<typeof Sonner>;
