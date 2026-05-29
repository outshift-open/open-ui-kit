/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesTargetPool(props: SvgIconProps) {
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
          d="M14.525 10.215h-4.8v4.8h4.8v-4.8ZM12.925 4.615h-1.6v3.2h1.6v-3.2ZM9.725 4.615h-1.6v3.2h1.6v-3.2ZM16.125 4.615h-1.6v3.2h1.6v-3.2ZM12.925 17.415h-1.6v3.2h1.6v-3.2ZM9.725 17.415h-1.6v3.2h1.6v-3.2ZM16.125 17.415h-1.6v3.2h1.6v-3.2ZM16.925 11.815v1.6h3.2v-1.6h-3.2ZM16.925 15.015v1.6h3.2v-1.6h-3.2ZM16.925 8.615v1.6h3.2v-1.6h-3.2ZM4.125 11.815v1.6h3.2v-1.6h-3.2ZM4.125 15.015v1.6h3.2v-1.6h-3.2ZM4.125 8.615v1.6h3.2v-1.6h-3.2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M6.525 7.015v11.2h11.2v-11.2h-11.2Zm9.6 9.6h-8v-8h8v8Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M9.725 15.015h4.8l-2.4-2.4-2.4 2.4ZM12.125 12.615l2.4 2.4v-4.8l-2.4 2.4Z"
        />
      </svg>
    </SvgIcon>
  );
}
