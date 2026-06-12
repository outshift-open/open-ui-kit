/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowInsert(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 12.58 12.575">
      <path
        d="M 2,3.4 L 2,11 C 2,11.283 1.91,11.521 1.72,11.712 C 1.53,11.904 1.29,12 1,12 C 0.72,12 0.48,11.904 0.29,11.712 C 0.1,11.521 0,11.283 0,11 L 0,1 C 0,0.717 0.1,0.479 0.29,0.287 C 0.48,0.096 0.72,3.411e-13 1,3.411e-13 L 11,3.411e-13 C 11.29,3.411e-13 11.53,0.096 11.72,0.287 C 11.91,0.479 12,0.717 12,1 C 12,1.283 11.91,1.521 11.72,1.712 C 11.53,1.904 11.29,2 11,2 L 3.4,2 L 12.3,10.9 C 12.49,11.083 12.58,11.317 12.58,11.6 C 12.58,11.883 12.49,12.117 12.3,12.3 C 12.12,12.483 11.89,12.575 11.6,12.575 C 11.32,12.575 11.09,12.483 10.9,12.3 L 2,3.4"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
