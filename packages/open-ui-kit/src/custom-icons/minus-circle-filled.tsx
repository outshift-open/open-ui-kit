/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MinusCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 9,18 C 13.97,18 18,13.971 18,9 C 18,4.029 13.97,0 9,0 C 4.03,0 1.819e-12,4.029 1.819e-12,9 C 1.819e-12,13.971 4.03,18 9,18 M 5.22,8.01 C 4.67,8.01 4.23,8.454 4.23,9 C 4.23,9.547 4.67,9.99 5.22,9.99 L 12.78,9.99 C 13.33,9.99 13.77,9.547 13.77,9 C 13.77,8.454 13.33,8.01 12.78,8.01 L 5.22,8.01"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
