/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function InfoCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 18,9 C 18,13.971 13.97,18 9,18 C 4.03,18 1.819e-12,13.971 1.819e-12,9 C 1.819e-12,4.029 4.03,0 9,0 C 13.97,0 18,4.029 18,9 M 9,5.562 C 8.46,5.562 8.01,5.123 8.01,4.581 C 8.01,4.039 8.46,3.6 9,3.6 C 9.55,3.6 9.99,4.039 9.99,4.581 C 9.99,5.123 9.55,5.562 9,5.562 M 9,14.4 C 8.45,14.4 8.01,13.96 8.01,13.416 L 8.01,8.02 C 8.01,7.477 8.45,7.036 9,7.036 C 9.55,7.036 9.99,7.477 9.99,8.02 L 9.99,13.416 C 9.99,13.96 9.55,14.4 9,14.4"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
