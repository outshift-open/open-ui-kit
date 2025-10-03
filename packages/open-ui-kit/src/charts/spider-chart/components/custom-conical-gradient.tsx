/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const CustomElement = ({
  points,
  color,
}: {
  points: { x: number; y: number }[];
  color: string;
}) => {
  const path =
    points
      .map((p) => [p.x, p.y])
      .map((c, i) => (i ? `${c[0]} ${c[1]}` : `M${c[0]} ${c[1]}`))
      .join(" ") + "Z";

  return (
    <svg>
      <clipPath id="clip">
        <path d={path} />
      </clipPath>
      <foreignObject width="100%" height="100%" clipPath="url(#clip)">
        <div
          style={{
            width: "100%",
            height: "100%",
            background: color,
          }}
        />
      </foreignObject>
    </svg>
  );
};

export default CustomElement;
