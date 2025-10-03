/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";
import { Offset } from "../types/spider-chart.types";

const RADIAN = Math.PI / 180;

const CustomLabels = (props: {
  cx: string;
  cy: string;
  width: number;
  height: number;
  labelOffsets: Offset[];
  outerRadius: number;
  band: number;
  tooltipTicks: { value: string; coordinate: number }[];
  data: { subject: string }[];
}) => {
  const theme = useTheme();

  const polarToCartesian = (
    cx: number,
    cy: number,
    radius: number,
    angle: number,
  ) => ({
    x: cx + Math.cos(-RADIAN * angle) * radius,
    y: cy + Math.sin(-RADIAN * angle) * radius,
  });

  function convertPercentageToNumeric(
    cx: string,
    cy: string,
    width: number,
    height: number,
  ): [number, number] {
    const x = (parseFloat(cx.replace("%", "")) / 100) * width;
    const y = (parseFloat(cy.replace("%", "")) / 100) * height;
    return [x, y];
  }

  const getTickLineCoord = (coordinate: number, index: number) => {
    let [cx, cy] = convertPercentageToNumeric(
      props.cx,
      props.cy,
      props.width,
      props.height,
    );
    if (props.labelOffsets && props.labelOffsets.length > index) {
      cx += props.labelOffsets[index].cx;
      cy += props.labelOffsets[index].cy;
    }
    const tickLineSize = 8;
    const p2 = polarToCartesian(
      cx,
      cy,
      props.outerRadius + props.band * tickLineSize,
      coordinate,
    );

    return { x: p2.x, y: p2.y };
  };

  if (!props.tooltipTicks) return <></>;
  return (
    <>
      {props.tooltipTicks.map((tick, index) => {
        const { x, y } = getTickLineCoord(tick.coordinate, index);
        return (
          <text
            key={`tick=${index}`}
            x={x}
            y={y}
            fill={theme.palette.vars.baseTextDefault}
            style={{ ...theme.typography.caption }}
          >
            <tspan>{props.data[index].subject}</tspan>
          </text>
        );
      })}
    </>
  );
};

export default CustomLabels;
