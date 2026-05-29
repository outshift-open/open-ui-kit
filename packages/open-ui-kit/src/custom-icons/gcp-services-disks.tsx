/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesDisks(props: SvgIconProps) {
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
          d="M15.878 14.118v4.122H4.998v3.375h14.255v-7.497h-3.375ZM8.372 11.112V6.99h10.881V3.615H4.997v7.497h3.375Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M10.253 8.862v4.13H4.997v3.376h9v-4.131h5.256V8.862h-9Z"
        />
      </svg>
    </SvgIcon>
  );
}
