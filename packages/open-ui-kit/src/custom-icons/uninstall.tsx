/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Uninstall(props: SvgIconProps) {
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
          d="M5 20v-2h14v2H5ZM17 7.25 15.75 6 12 9.75 8.25 6 7 7.25 10.75 11 7 14.75 8.25 16 12 12.25 15.75 16 17 14.75 13.25 11 17 7.25Z"
        />
      </svg>
    </SvgIcon>
  );
}
