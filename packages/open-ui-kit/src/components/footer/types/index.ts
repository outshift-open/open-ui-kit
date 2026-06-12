/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { SxProps, Theme } from "@mui/material";
import type { ReactNode } from "react";
import type { LinkProps } from "@/components/link";

export interface FooterProps {
  /** Custom left-side footer content for rich copyright, logo, or product messaging. */
  productNode?: ReactNode;
  /** Product or company name used in the default copyright text. */
  productName: string;
  /** Link target for the default copyright text. */
  productLink?: string;
  /** Right-side footer links rendered with the design-system Link component. */
  links?: LinkProps[];
  /** Additional container styles. Consumer styles are merged after internal footer styles. */
  sx?: SxProps<Theme>;
}
