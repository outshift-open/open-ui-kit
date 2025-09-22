/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SxProps } from "@mui/material";

export const styles: Record<string | number | symbol, SxProps> = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  barsContainer: { flex: 1, overflow: "auto" },
  barContainer: { cursor: "pointer" },
  header: { display: "flex", justifyContent: "space-between", marginBottom: 2 },
  icon: { width: 32, height: 32 },
  labelsContainer: { display: "flex", justifyContent: "space-between" },
};

export const getBarStyle = (
  value: number,
  maxValue: number,
  color: string,
): SxProps => ({
  width: (value / maxValue) * 100 + "%",
  height: 8,
  borderRadius: 0.5,
  backgroundColor: color,
});
