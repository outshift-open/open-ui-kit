/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";
import { greyPalette } from "@/theme/color-palette";

export function AzureCategoryNone(props: SvgIconProps) {
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
          d="M2 17.535L7.18932 8.89266L13.25 4L6.67866 17.5483V17.535H2ZM15.9923 17.3761L11.11 11.7431L13.6513 4.96782L22 19.0001H6.50003L15.9923 17.3761Z"
        />
      </svg>
    </SvgIcon>
  );
}
