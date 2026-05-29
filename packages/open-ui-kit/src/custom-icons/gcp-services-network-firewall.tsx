/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesNetworkFirewall(props: SvgIconProps) {
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
          d="M11.237 4.615H4.125V6.39h7.112V4.615ZM11.237 18.839H4.125v1.776h7.112v-1.776ZM11.237 11.727H4.125v1.776h7.112v-1.776ZM20.125 4.615h-7.112V6.39h7.112V4.615ZM20.125 18.839h-7.112v1.776h7.112v-1.776ZM20.125 11.727h-7.112v1.776h7.112v-1.776ZM15.677 8.167H8.565v1.776h7.112V8.167ZM15.677 15.279H8.565v1.776h7.112v-1.776ZM6.789 8.167H4.125v1.776h2.664V8.167ZM6.789 15.279H4.125v1.776h2.664v-1.776ZM20.125 8.167H17.46v1.776h2.664V8.167ZM20.125 15.279H17.46v1.776h2.664v-1.776Z"
        />
      </svg>
    </SvgIcon>
  );
}
