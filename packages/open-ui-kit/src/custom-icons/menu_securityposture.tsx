/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import { greyPalette } from "@/theme/color-palette";

export function MenuSecurityPosture(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? greyPalette[50]}
          fillRule="evenodd"
          d="M11.996 8a1 1 0 0 1 .93.621l3.583 8.759 1.568-3.765A1 1 0 0 1 19 13h2a1 1 0 1 1 0 2h-1.333l-2.244 5.385a1 1 0 0 1-1.848-.006l-3.565-8.713-1.082 2.705A1 1 0 0 1 10 15H8a1 1 0 1 1 0-2h1.323l1.748-4.371A1 1 0 0 1 11.997 8Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? greyPalette[300]}
          fillRule="evenodd"
          d="M2 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5H4v4.95c0 6.753 5.247 9.32 7 9.987.27-.104.633-.256 1.05-.466a1 1 0 0 1 .9 1.787c-.715.359-1.3.578-1.63.69a1 1 0 0 1-.64 0C9.265 21.47 2 18.599 2 9.95V4Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
