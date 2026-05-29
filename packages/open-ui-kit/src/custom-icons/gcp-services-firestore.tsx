/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesFirestore(props: SvgIconProps) {
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
          d="m20.225 13.515-8.1-3.6v3.6l8.1 3.6v-3.6Zm0-6.3-8.1-3.6v3.6l8.1 3.6v-3.6ZM4.025 7.215l8.1-3.6v3.6l-8.1 3.6v-3.6ZM4.025 13.515l8.1-3.6v3.6l-8.1 3.6v-3.6ZM12.125 18.015l3.033-1.35 4.059 1.8-7.092 3.15v-3.6Z"
        />
      </svg>
    </SvgIcon>
  );
}
