/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesFilestore(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M8.525 12.615h7.2l-1.8 2h-3.6l-1.8-2ZM7.625 4.615h9l.9 2h-10.8l.9-2ZM4.925 7.615h14.4l.9 2h-16.2l.9-2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M21.125 20.615v-9h-5.4l-1.8 3h-3.6l-1.8-3h-5.4v9h18Z"
        />
      </svg>
    </SvgIcon>
  );
}
