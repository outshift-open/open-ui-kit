/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Plus(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 14">
      <path
        d="M 6,8 L 1,8 C 0.72,8 0.48,7.904 0.29,7.713 C 0.1,7.521 0,7.283 0,7 C 0,6.717 0.1,6.479 0.29,6.287 C 0.48,6.096 0.72,6 1,6 L 6,6 L 6,1 C 6,0.717 6.1,0.479 6.29,0.287 C 6.48,0.096 6.72,5.684e-14 7,5.684e-14 C 7.28,5.684e-14 7.52,0.096 7.71,0.287 C 7.9,0.479 8,0.717 8,1 L 8,6 L 13,6 C 13.28,6 13.52,6.096 13.71,6.287 C 13.9,6.479 14,6.717 14,7 C 14,7.283 13.9,7.521 13.71,7.713 C 13.52,7.904 13.28,8 13,8 L 8,8 L 8,13 C 8,13.283 7.9,13.521 7.71,13.713 C 7.52,13.904 7.28,14 7,14 C 6.72,14 6.48,13.904 6.29,13.713 C 6.1,13.521 6,13.283 6,13 L 6,8"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
