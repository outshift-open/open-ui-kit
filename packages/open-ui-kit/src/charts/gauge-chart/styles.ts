/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CSSProperties } from "react";
import type { Theme } from "@mui/material/styles";

export const gaugeWrapper = ({
  height,
  width,
}: {
  height: number;
  width: number;
}) =>
  ({
    display: "inline-block",
    width: `${width}px`,
    height: `${height}px`,
    position: "relative",
  }) as const;

export const barShadow = (theme: Theme, barFill: string): CSSProperties => ({
  filter: `drop-shadow(0 0 4px ${barFill}80) drop-shadow(${theme.shadows[1]})`,
});

export const gaugeLabel: CSSProperties = {
  transform: "translate(-50%, -50%)",
};

export const boxStyle = {
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translateX(-50%)",
};
