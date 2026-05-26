/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesPubsub(props: SvgIconProps) {
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
          d="M18.212 10.807a1.502 1.502 0 1 0 0-3.004 1.502 1.502 0 0 0 0 3.004ZM6.037 10.807a1.502 1.502 0 1 0 0-3.005 1.502 1.502 0 0 0 0 3.005ZM12.125 21.348a1.502 1.502 0 1 0 0-3.004 1.502 1.502 0 0 0 0 3.004ZM12.51 12.158l-.694 1.208 6.11 3.51.694-1.208-6.11-3.51Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.773 12.224 5.69 15.735l.695 1.203 6.08-3.511-.693-1.203Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.815 5.794h-1.388v7.022h1.388V5.794Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.125 15.243a2.428 2.428 0 1 0 0-4.855 2.428 2.428 0 0 0 0 4.855ZM6.038 18.24a1.913 1.913 0 1 0 0-3.826 1.913 1.913 0 0 0 0 3.825ZM18.212 18.24a1.913 1.913 0 1 0 0-3.826 1.913 1.913 0 0 0 0 3.825ZM12.125 7.706a1.913 1.913 0 1 0 0-3.825 1.913 1.913 0 0 0 0 3.825Z"
        />
      </svg>
    </SvgIcon>
  );
}
