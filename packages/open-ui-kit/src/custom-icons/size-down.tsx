/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SizeDown(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M13.143 11.357V4.5h1.714v5.143H20v1.714H13.143ZM10.857 13.643V20.5H9.143v-5.143H4v-1.714H10.857Z"
        />
      </svg>
    </SvgIcon>
  );
}
