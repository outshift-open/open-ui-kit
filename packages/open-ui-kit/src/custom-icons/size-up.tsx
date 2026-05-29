/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SizeUp(props: SvgIconProps) {
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
          d="M4 20.5v-6.857h1.714v5.143h5.143V20.5H4Zm14.286-9.143V6.214h-5.143V4.5H20v6.857h-1.714Z"
        />
      </svg>
    </SvgIcon>
  );
}
