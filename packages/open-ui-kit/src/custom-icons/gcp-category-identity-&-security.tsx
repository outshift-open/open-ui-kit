/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPCategoryIdentitySecurity(props: SvgIconProps) {
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
          d="M12 3.615 4.637 6.887v4.91c0 4.581 3.109 8.754 7.363 9.818 4.255-1.064 7.364-5.237 7.364-9.818v-4.91L12 3.615Zm0 9h5.728c-.41 3.354-2.7 6.382-5.728 7.282v-7.282H6.273V7.95L12 5.415v7.2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.001 3.615v18c4.255-1.064 7.364-5.237 7.364-9.818v-4.91L12 3.615Zm5.727 9c-.409 3.354-2.7 6.382-5.727 7.282v-7.282h5.727Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M19.364 12.615h-1.637s0 .245-.082.49l1.719-.49ZM4.637 12.615h1.636v-.491l-1.636.49Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
