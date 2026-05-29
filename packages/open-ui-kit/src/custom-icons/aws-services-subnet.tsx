/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSServicesSubnet(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".1"
          d="M12.843 12.268a1.931 1.931 0 0 0-.406 3.822v2.67h.812v-2.67a1.931 1.931 0 0 0-.406-3.822Zm0 3.051a1.12 1.12 0 1 1 0-2.24 1.12 1.12 0 0 1 0 2.24Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".1"
          d="M17.07 9.403V7.236a4.236 4.236 0 1 0-8.472 0v2.167H6.05V21h13.569V9.403H17.07ZM9.41 7.236a3.425 3.425 0 1 1 6.849 0v2.167h-6.85V7.236Zm9.397 12.985H6.861V10.215h11.946V20.22Z"
        />
      </svg>
    </SvgIcon>
  );
}
