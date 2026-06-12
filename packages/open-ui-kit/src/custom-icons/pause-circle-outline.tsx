/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function PauseCircleOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 9,1.636 C 4.93,1.636 1.64,4.933 1.64,9 C 1.64,13.067 4.93,16.364 9,16.364 C 13.07,16.364 16.36,13.067 16.36,9 C 16.36,4.933 13.07,1.636 9,1.636 M 1.819e-12,9 C 1.819e-12,4.029 4.03,0 9,0 C 13.97,0 18,4.029 18,9 C 18,13.971 13.97,18 9,18 C 4.03,18 1.819e-12,13.971 1.819e-12,9 M 6.31,6.3 C 6.31,5.803 6.72,5.4 7.21,5.4 C 7.71,5.4 8.11,5.803 8.11,6.3 L 8.11,11.7 C 8.11,12.197 7.71,12.6 7.21,12.6 C 6.72,12.6 6.31,12.197 6.31,11.7 L 6.31,6.3 M 10.79,5.4 C 10.29,5.4 9.89,5.803 9.89,6.3 L 9.89,11.7 C 9.89,12.197 10.29,12.6 10.79,12.6 C 11.28,12.6 11.69,12.197 11.69,11.7 L 11.69,6.3 C 11.69,5.803 11.28,5.4 10.79,5.4"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
