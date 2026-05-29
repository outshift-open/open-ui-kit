/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Send(props: SvgIconProps) {
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
          d="M3 20V4l19 8-19 8Zm1.5-2.325L18.1 12 4.5 6.25v4.2L10.55 12 4.5 13.5v4.175Z"
        />
      </svg>
    </SvgIcon>
  );
}
