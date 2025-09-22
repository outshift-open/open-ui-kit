/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from "react";

const MIN_WIDTH_BAR_GRAPH = 4;
const BAR_GRAPH_GAP = 1;

interface CustomBarProps {
  fill: string;
  x: number;
  y: number;
  height: number;
  width: number;
  background: { width: number };
  tooltipPayload: Array<{ value: number; dataKey: string }>;
  barData: Record<string, number>;
}

export const CustomBar = ({
  fill,
  x,
  y,
  width,
  height,
  background,
  tooltipPayload,
  barData,
}: CustomBarProps): JSX.Element => {
  const barValue = tooltipPayload[0].value;

  const extraGap = useMemo((): number => {
    if (!barValue || !width) {
      return 0;
    }

    const lastAxisPoint = (background.width * barValue) / width;
    const currentBarName = tooltipPayload[0].dataKey.split(".")[1];
    let extraGap = 0;
    let index = 0;

    for (const barItem in barData) {
      if (index > 0 && !!barData[barItem]) {
        extraGap += BAR_GRAPH_GAP;
      }
      if (barItem === currentBarName) {
        break;
      }
      const barWidth = (background.width * barData[barItem]) / lastAxisPoint;

      if (barWidth < MIN_WIDTH_BAR_GRAPH && !!barData[barItem]) {
        extraGap += MIN_WIDTH_BAR_GRAPH;
      }
      if (barData[barItem]) {
        index++;
      }
    }

    return extraGap;
  }, [width, barValue, barData, background, tooltipPayload]);

  if (!barValue || !width) {
    return <></>;
  }

  return (
    <rect
      x={x + extraGap}
      y={y}
      rx={2}
      ry={2}
      width={width < MIN_WIDTH_BAR_GRAPH ? MIN_WIDTH_BAR_GRAPH + width : width}
      height={height}
      stroke="none"
      fill={fill}
    />
  );
};
