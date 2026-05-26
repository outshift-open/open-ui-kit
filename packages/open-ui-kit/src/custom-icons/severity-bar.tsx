/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function SeverityBar(props: SvgIconProps) {
  return (
    <SvgIcon viewBox=" 0 0 4 32" {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="32"
        viewBox="0 0 4 32"
        fill="none"
      >
        <path
          d="M0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2V30C4 31.1046 3.10457 32 2 32C0.895431 32 0 31.1046 0 30V2Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
