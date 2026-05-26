/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CloseCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 9,18 C 13.97,18 18,13.971 18,9 C 18,4.029 13.97,0 9,0 C 4.03,0 0,4.029 0,9 C 0,13.971 4.03,18 9,18 M 5.32,5.32 C 5.69,4.947 6.3,4.947 6.67,5.32 L 9,7.651 L 11.33,5.32 C 11.7,4.947 12.31,4.947 12.68,5.32 C 13.05,5.692 13.05,6.296 12.68,6.669 L 10.35,9 L 12.68,11.331 C 13.05,11.704 13.05,12.308 12.68,12.68 C 12.31,13.053 11.7,13.053 11.33,12.68 L 9,10.35 L 6.67,12.68 C 6.3,13.053 5.69,13.053 5.32,12.68 C 4.95,12.308 4.95,11.704 5.32,11.331 L 7.65,9 L 5.32,6.669 C 4.95,6.296 4.95,5.692 5.32,5.32"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
