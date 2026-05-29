/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ellipsisStyle } from "@/common";
import { CSSProperties } from "react";

export const baseWrapperStyle: CSSProperties = {
  ...ellipsisStyle,
};

export const rtlWrapperStyle: CSSProperties = {
  ...baseWrapperStyle,
  direction: "rtl",
  textAlign: "left",
};

export const spanStyle: CSSProperties = {
  // Fix RTL special characters
  unicodeBidi: "plaintext",
};
