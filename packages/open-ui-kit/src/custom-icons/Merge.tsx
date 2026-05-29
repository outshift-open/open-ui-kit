/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Merge(props: SvgIconProps) {
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
          d="m20.97 3.97 1.06 1.06L15.06 12l6.97 6.97-1.06 1.06-7.28-7.28H4.81l1.72 1.72-1.06 1.06L1.94 12l3.53-3.53 1.06 1.06-1.72 1.72h8.88l7.28-7.28Z"
        />
      </svg>
    </SvgIcon>
  );
}
