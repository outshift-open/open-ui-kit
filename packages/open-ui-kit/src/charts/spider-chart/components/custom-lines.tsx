/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";

const RADIAN = Math.PI / 180;

export default function CustomLines({
  polarAngles,
  scale,
  ...props
}: {
  polarAngles: number[];
  innerRadius: number;
  outerRadius: number;
  cx: string;
  cy: string;
  width: number;
  height: number;
  scale: number;
}) {
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

  const getPolarLine = (angle: number) => {
    const [cx, cy] = convertPercentageToNumeric(
      props.cx,
      props.cy,
      props.width,
      props.height,
    );
    const start = polarToCartesian(cx, cy, props.innerRadius, angle);
    const end = polarToCartesian(cx, cy, props.outerRadius * scale, angle);
    return (
      <line
        key={`angle-${angle}`}
        stroke={theme.palette.vars.baseBorderDefault}
        opacity={theme.palette.mode === "dark" ? 0.5 : 1}
        x1={start.x}
        y1={start.y}
        x2={end.x}
        y2={end.y}
      ></line>
    );
  };
  return <>{polarAngles.map((angle) => getPolarLine(angle))}</>;
}
