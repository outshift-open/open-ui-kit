/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function CreditCard(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 16">
      <path
        d="M 20,2 L 20,14 C 20,14.55 19.8,15.021 19.41,15.413 C 19.02,15.804 18.55,16 18,16 L 2,16 C 1.45,16 0.98,15.804 0.59,15.413 C 0.2,15.021 0,14.55 0,14 L 0,2 C 0,1.45 0.2,0.979 0.59,0.588 C 0.98,0.196 1.45,0 2,0 L 18,0 C 18.55,0 19.02,0.196 19.41,0.588 C 19.8,0.979 20,1.45 20,2 M 2,4 L 18,4 L 18,2 L 2,2 L 2,4 M 2,8 L 2,14 L 18,14 L 18,8 L 2,8"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
