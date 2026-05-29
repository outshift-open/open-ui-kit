/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function TriangleUpOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.295L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.295Z"
          fill={props.fill ?? "#9EA2A8"}
        />
      </svg>
    </SvgIcon>
  );
}
