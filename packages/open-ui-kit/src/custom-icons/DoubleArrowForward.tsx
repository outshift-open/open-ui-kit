/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function DoubleArrowForward(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="m6.05 19 5.25-7-5.25-7H7.9l5.25 7-5.25 7H6.05Zm6.3 0 5.25-7-5.25-7h1.85l5.25 7-5.25 7h-1.85Z"
        />
      </svg>
    </SvgIcon>
  );
}
