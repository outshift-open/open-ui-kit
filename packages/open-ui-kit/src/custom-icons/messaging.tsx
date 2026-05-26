/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Messaging(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 20 20">
      <path
        d="M 4,11 C 4,11.552 4.45,12 5,12 L 11,12 C 11.55,12 12,11.552 12,11 C 12,10.448 11.55,10 11,10 L 5,10 C 4.45,10 4,10.448 4,11 M 4,8 C 4,8.552 4.45,9 5,9 L 15,9 C 15.55,9 16,8.552 16,8 C 16,7.448 15.55,7 15,7 L 5,7 C 4.45,7 4,7.448 4,8 M 4,5 C 4,5.552 4.45,6 5,6 L 15,6 C 15.55,6 16,5.552 16,5 C 16,4.448 15.55,4 15,4 L 5,4 C 4.45,4 4,4.448 4,5 M 0,20 L 0,2 C 0,1.45 0.2,0.979 0.59,0.588 C 0.98,0.196 1.45,1.705e-13 2,1.705e-13 L 18,1.705e-13 C 18.55,1.705e-13 19.02,0.196 19.41,0.588 C 19.8,0.979 20,1.45 20,2 L 20,14 C 20,14.55 19.8,15.021 19.41,15.413 C 19.02,15.804 18.55,16 18,16 L 4,16 L 0,20 M 3.15,14 L 18,14 L 18,2 L 2,2 L 2,15.125 L 3.15,14"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
