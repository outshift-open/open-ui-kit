/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesCloudRun(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="m9.13 4.615 2.662 7.995h7.987L9.13 4.615ZM19.78 12.61h-7.988L9.13 20.616l10.65-8.004ZM4.47 20.615l2.672-1.34 1.988-6.664H6.467l-1.996 8.004ZM4.47 4.615l1.998 7.995H9.13L7.142 5.947 4.47 4.615Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
