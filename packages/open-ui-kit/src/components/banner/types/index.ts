/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ReactNode } from "react";
import type { AlertProps } from "@mui/material";

export type StatusBanner =
  | "negative"
  | "warning"
  | "success"
  | "info"
  | "excellent";

export interface BannerProps
  extends Omit<
    AlertProps,
    "variant" | "severity" | "children" | "iconMapping" | "action"
  > {
  /** Status color family and icon used by the banner. */
  status?: StatusBanner;
  /** Banner message content. */
  text: ReactNode;
  /** Shows the dismiss button and wires `onClose` when enabled. */
  showCloseButton?: boolean;
}
