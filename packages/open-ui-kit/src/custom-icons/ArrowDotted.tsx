/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowDotted(props: SvgIconProps) {
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
          d="M12.9 11.65h5.6l-2.6-2.6 1.2-1.2 4.65 4.65-4.65 4.65-1.2-1.2 2.6-2.6h-5.6M11.9 13.35H9.6v-1.7h2.3M8.6 13.35H6.3v-1.7h2.3M5.3 13.35H3v-1.7h2.3"
        />
      </svg>
    </SvgIcon>
  );
}
