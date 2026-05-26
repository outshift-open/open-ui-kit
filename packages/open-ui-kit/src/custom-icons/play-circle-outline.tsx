/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function PlayCircleOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 1.64,9 C 1.64,4.933 4.93,1.636 9,1.636 C 13.07,1.636 16.36,4.933 16.36,9 C 16.36,13.067 13.07,16.364 9,16.364 C 4.93,16.364 1.64,13.067 1.64,9 M 9,0 C 4.03,0 1.819e-12,4.029 1.819e-12,9 C 1.819e-12,13.971 4.03,18 9,18 C 13.97,18 18,13.971 18,9 C 18,4.029 13.97,0 9,0 M 7.79,12.212 C 7.12,12.587 6.3,12.105 6.3,11.34 L 6.3,6.66 C 6.3,5.895 7.12,5.413 7.79,5.788 L 11.95,8.128 C 12.63,8.511 12.63,9.489 11.95,9.872 L 7.79,12.212"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
