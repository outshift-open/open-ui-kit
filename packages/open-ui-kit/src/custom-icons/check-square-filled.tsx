/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CheckSquareFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 15.56,0 L 4.44,0 C 1.99,0 4.547e-13,1.99 4.547e-13,4.444 L 4.547e-13,15.556 C 4.547e-13,18.01 1.99,20 4.44,20 L 15.56,20 C 18.01,20 20,18.01 20,15.556 L 20,4.444 C 20,1.99 18.01,0 15.56,0 M 14.14,8.538 C 14.56,8.09 14.54,7.387 14.09,6.967 C 13.65,6.547 12.94,6.57 12.52,7.018 L 9.1,10.673 L 7.4,9.169 C 6.95,8.762 6.24,8.803 5.84,9.262 C 5.43,9.72 5.47,10.423 5.93,10.83 L 8.43,13.053 C 8.88,13.453 9.56,13.421 9.98,12.982 L 14.14,8.538"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
