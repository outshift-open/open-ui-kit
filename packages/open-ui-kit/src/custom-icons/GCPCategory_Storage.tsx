/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import { greyPalette } from "@/theme/color-palette";

export function GCPCategoryStorage(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? greyPalette[50]}
          d="M20 5.794h-1.6v5.6H20v-5.6Z"
        />
        <path
          fill={props.fill ?? greyPalette[50]}
          fillRule="evenodd"
          d="M20 5.794v5.6H4v-5.6h16Zm-3.2 2.8a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0Zm-4.8-.4H7.2v.8H12v-.8ZM5.6 12.905H20v5.6H4v-5.6h1.6Zm11.2 2.8a1.2 1.2 0 1 0-2.4 0 1.2 1.2 0 0 0 2.4 0Zm-4.8-.4H7.2v.8H12v-.8Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
