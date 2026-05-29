/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Compare(props: SvgIconProps) {
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
          d="M10.484 23.637V21.65h-5.93c-.46 0-.859-.168-1.197-.506a1.637 1.637 0 0 1-.506-1.197V5.054c0-.462.168-.862.506-1.201a1.634 1.634 0 0 1 1.197-.508h5.93V1.363h1.566v22.274h-1.566Zm-5.936-4.74h5.936v-6.794l-5.936 6.793Zm9.068 2.753v-9.447l5.83 6.681V5.054h-5.83v-1.71h5.83c.462 0 .862.17 1.201.509.339.339.509.74.509 1.2v14.893c0 .46-.17.86-.509 1.197-.339.338-.74.506-1.2.506h-5.831Z"
        />
      </svg>
    </SvgIcon>
  );
}
