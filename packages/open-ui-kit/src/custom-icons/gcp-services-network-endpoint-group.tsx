/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesNetworkEndpointGroup(props: SvgIconProps) {
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
          d="M14.854 10.81H9.44l-.902 1.805.902 1.804h5.414l.902-1.804-.902-1.805Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m15.756 12.615-.902-1.805H9.44l-.902 1.805h7.218ZM17.561 7.201h-2.707l3.582 5.414 1.354-2.03L17.56 7.2ZM21.125 12.615l-1.335-2.03-1.354 2.03-3.582 5.413h2.707l3.564-5.413ZM6.689 18.028h2.706l-3.582-5.413-1.353 2.03 2.229 3.383Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m3.125 12.615 1.335 2.03 1.354-2.03L9.396 7.2H6.689l-3.564 5.414Z"
        />
      </svg>
    </SvgIcon>
  );
}
