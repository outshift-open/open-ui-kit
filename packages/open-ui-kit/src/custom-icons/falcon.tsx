/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Falcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "#fff"}
          d="M11.5 13 2 3.5l1.06-1.06 9.5 9.5L11.5 13ZM19.03 9.53l-13 13-1.06-1.06L19.44 7l2.53 2.53h-2.94Z"
        />
        <path
          fill={props.fill ?? "#fff"}
          d="m20.53 12.03-10.5 10.5-1.06-1.06 10.5-10.5 1.06 1.06ZM21.53 15.03l-3.47 3.47 2.25 2.25H22v1.5h-2.31l-3.75-3.75 4.53-4.53 1.06 1.06ZM3 8.5 9.5 15l1.06-1.06-6.5-6.5L3 8.5ZM7.5 17 3 12.5l1.06-1.06 4.5 4.5L7.5 17Z"
        />
      </svg>
    </SvgIcon>
  );
}
