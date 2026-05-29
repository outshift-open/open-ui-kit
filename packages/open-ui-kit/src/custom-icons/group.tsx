/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Group(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12 3.18 22.847 8 12 12.82 1.153 8 12 3.18ZM4.847 8 12 11.18 19.153 8 12 4.82 4.847 8Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m3 11.2-1.847.8L12 16.82 22.847 12 21 11.2l-1.847.8L12 15.18 4.847 12 3 11.2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m3 15.2-1.847.8L12 20.82 22.847 16 21 15.2l-1.847.8L12 19.18 4.847 16 3 15.2Z"
        />
      </svg>
    </SvgIcon>
  );
}
