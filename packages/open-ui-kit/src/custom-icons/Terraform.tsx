/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Terraform(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
      >
        <path
          d="M21.0469 6.21144V12.5481L15.4469 15.7164V9.47877L21.0469 6.21144ZM14.8469 9.47877V15.7164L9.24687 12.5481V6.21144L14.8469 9.47877ZM14.8469 16.4095V22.7461L9.24687 19.5778V13.2411L14.8469 16.4095ZM8.64688 5.91441V12.251L3.04688 9.08273V2.74609L8.64688 5.91441Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
    </SvgIcon>
  );
}
