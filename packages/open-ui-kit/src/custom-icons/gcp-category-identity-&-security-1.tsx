/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPCategoryIdentitySecurity1(props: SvgIconProps) {
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
          d="M12.735 3.615 5.37 6.887v4.91c0 4.581 3.11 8.754 7.364 9.818 4.254-1.064 7.363-5.237 7.363-9.818v-4.91l-7.363-3.272Zm0 9h5.727c-.41 3.354-2.7 6.382-5.727 7.282v-7.282H7.007V7.95l5.728-2.536v7.2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.734 3.615v18c4.255-1.064 7.364-5.237 7.364-9.818v-4.91l-7.364-3.272Zm5.728 9c-.41 3.354-2.7 6.382-5.728 7.282v-7.282h5.728Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M20.098 12.615h-1.636s0 .245-.082.49l1.718-.49ZM5.371 12.615h1.636v-.491l-1.636.49Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
