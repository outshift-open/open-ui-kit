/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useTheme } from "@mui/material";

const RADIAN = Math.PI / 180;

function CustomGrid({
  polarRadius,
  polarAngles,
  scale,
  ...props
}: {
  polarRadius: number[];
  polarAngles: number[];
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
    x: cx + Math.cos(-RADIAN * angle) * radius * scale,
    y: cy + Math.sin(-RADIAN * angle) * radius * scale,
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

  const getPolygonPath = (radius: number) => {
    let path = "";

    const [cx, cy] = convertPercentageToNumeric(
      props.cx,
      props.cy,
      props.width,
      props.height,
    );

    polarAngles.forEach((angle: number, i: number) => {
      const point = polarToCartesian(cx, cy, radius, angle);
      if (i) {
        path += `L ${point.x},${point.y}`;
      } else {
        path += `M ${point.x},${point.y}`;
      }
    });
    path += "Z";

    return path;
  };
  const getConcentricPolygon = (entry: number, index: number) => {
    const total = polarRadius.length;
    const t = total > 1 ? index / (total - 1) : 1;
    // Inner ring more visible, outer ring lighter
    const start = theme.palette.mode === "dark" ? 0.32 : 0.6;
    const end = theme.palette.mode === "dark" ? 0.12 : 0.3;
    const opacity = start + (end - start) * t;

    return (
      <path
        fill={theme.palette.vars.baseBorderDefault}
        opacity={opacity}
        className="recharts-polar-grid-concentric-polygon"
        key={`path-${index}`}
        d={getPolygonPath(entry)}
      />
    );
  };
  return (
    <>{polarRadius.map((entry, index) => getConcentricPolygon(entry, index))}</>
  );
}

export default CustomGrid;
