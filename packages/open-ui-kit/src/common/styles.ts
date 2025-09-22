/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CSSProperties } from "react";

export const ellipsisStyle: CSSProperties = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const checkboxStyle = {
  padding: 0,
  marginLeft: 0,
  borderRadius: 4,
  "& + *": {
    marginLeft: 8,
  },
};
