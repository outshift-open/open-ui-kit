/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { BoxProps } from "@mui/material";
import type { ReactNode } from "react";

export interface ScrollAreaProps extends BoxProps {
  /** Content to render inside the scrollable viewport. */
  children?: ReactNode;
}
