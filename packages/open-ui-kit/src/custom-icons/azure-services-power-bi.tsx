/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesPowerBI(props: SvgIconProps) {
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
          d="M18.816 3.186h-4.772a.743.743 0 0 0-.742.743v3.743h-2.943a.743.743 0 0 0-.743.742v3.772H6.73a.743.743 0 0 0-.743.743v7.514c0 .41.333.743.743.743h12.086c.41 0 .743-.333.743-.743V3.929a.743.743 0 0 0-.743-.743Z"
        />
      </svg>
    </SvgIcon>
  );
}
