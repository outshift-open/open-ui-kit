/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function DisplayBy(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 1.8,1.8 L 1.8,5.8 L 16.2,5.8 L 16.2,1.8 L 1.8,1.8 M 1,0 C 0.45,0 0,0.448 0,1 L 0,6.6 C 0,7.153 0.45,7.6 1,7.6 L 1.76,7.6 L 1.76,14.127 C 1.76,14.624 2.16,15.027 2.66,15.027 L 7.2,15.027 L 7.2,17.001 C 7.2,17.553 7.65,18.001 8.2,18.001 L 17,18.001 C 17.55,18.001 18,17.553 18,17.001 L 18,11.401 C 18,10.848 17.55,10.401 17,10.401 L 8.2,10.401 C 7.65,10.401 7.2,10.848 7.2,11.401 L 7.2,13.227 L 3.56,13.227 L 3.56,7.6 L 17,7.6 C 17.55,7.6 18,7.153 18,6.6 L 18,1 C 18,0.448 17.55,0 17,0 L 1,0 M 9,12.201 L 9,16.201 L 16.2,16.201 L 16.2,12.201 L 9,12.201"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
