/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeneralSize } from "@/common";

enum LinkStackGap {
  small = "6px",
  medium = "5px",
  large = "4px",
}

export const linkStackStyle = (size: GeneralSize) => ({
  gap: LinkStackGap[size],
  flexDirection: "row",
  alignItems: "center",
  border: "none",
});

export const iconStyle = {
  [GeneralSize.Large]: { width: "24px", height: "24px" },
  [GeneralSize.Medium]: { width: "20px", height: "20px" },
  [GeneralSize.Small]: { width: "16px", height: "16px" },
};
