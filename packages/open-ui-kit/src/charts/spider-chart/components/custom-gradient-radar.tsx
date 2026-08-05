/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { useId } from "react";

/**
 * Radar polygon for the gradient treatment — Figma `Spider Chart`
 * (274417:44533).
 *
 * Three layers, painted bottom up:
 *  1. the data-viz ramp, clipped to the polygon. A CSS gradient cannot be an
 *     SVG `fill`, so the ramp is painted by a `foreignObject` div and masked
 *     with a `clipPath`, the same technique as `custom-conical-gradient` —
 *     except the div is sized to the polygon's bounding box, not the chart.
 *     Figma fills the vector with an object-bounding-box gradient (pink for
 *     roughly the top fifth of the shape, purple below), so the ramp must
 *     span the shape itself or the polygon only ever shows the middle slice
 *     of the chart-wide ramp.
 *  2. the outline, a stroked copy of the same path.
 *  3. a ring on each data vertex: a translucent `dotFill` disc under a
 *     `dotStroke` ring (the outline color unless the frame diverges, as
 *     blue-dark does) at the outline's stroke width, exactly the frame's
 *     Ellipse nodes.
 *
 * Recharts clones this element with the `Radar` props, so every value below
 * arrives from the `Radar` element rather than from the caller — which is why
 * the rings are keyed on `dotRadius`/`dotFill` rather than a `dot` flag:
 * `dot` is a `Radar` prop of its own, and Recharts would draw a second set.
 *
 * The clip id is derived from `useId` rather than a constant, so several
 * gradient radars on one page — a series comparison, or the four variants of
 * the frame side by side — do not resolve each other's clip path.
 */
const CustomGradientRadar = ({
  points = [],
  color,
  stroke,
  strokeWidth = 0,
  dotRadius = 0,
  dotFill,
  dotStroke,
}: {
  points?: { x: number; y: number }[];
  color?: string;
  stroke?: string;
  strokeWidth?: number;
  dotRadius?: number;
  dotFill?: string;
  dotStroke?: string;
}) => {
  // `useId` wraps its value in colons, which are not valid in a `url(#...)`
  // reference.
  const clipId = `spider-gradient-radar-${useId().replace(/:/g, "")}`;

  if (!points.length) return null;

  const path =
    points.map((p, i) => (i ? `L${p.x} ${p.y}` : `M${p.x} ${p.y}`)).join(" ") +
    "Z";

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);

  return (
    <svg>
      <clipPath id={clipId}>
        <path d={path} />
      </clipPath>
      <foreignObject
        x={minX}
        y={minY}
        width={Math.max(...xs) - minX}
        height={Math.max(...ys) - minY}
        clipPath={`url(#${clipId})`}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: color,
          }}
        />
      </foreignObject>
      {stroke && strokeWidth > 0 && (
        <path
          d={path}
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      )}
      {stroke &&
        dotRadius > 0 &&
        points.map((p, i) => (
          <circle
            key={`dot-${i}`}
            cx={p.x}
            cy={p.y}
            r={dotRadius}
            fill={dotFill ?? stroke}
            stroke={dotStroke ?? stroke}
            strokeWidth={strokeWidth}
          />
        ))}
    </svg>
  );
};

export default CustomGradientRadar;
