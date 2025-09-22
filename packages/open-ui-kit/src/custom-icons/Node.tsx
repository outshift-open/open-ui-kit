/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Node(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M12.334 11.717v2.813l4.956 3.6a2.452 2.452 0 1 1-.377.485l-4.912-3.569-4.913 3.57a2.452 2.452 0 1 1-.377-.485l5.01-3.64v-2.774L8.042 9.591V4.985l3.985-2.303 3.985 2.303v4.606l-3.678 2.126Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
