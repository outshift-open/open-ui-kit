/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CrossBold(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <g clipPath="url(#a)">
          <path
            fill="#E8E9EA"
            d="m20.105 7.241-4.882 4.79 4.79 4.88-3.255 3.194-4.789-4.882-4.881 4.79-3.193-3.255 4.881-4.789-4.79-4.881 3.255-3.193 4.79 4.881 4.88-4.789 3.194 3.254Z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
