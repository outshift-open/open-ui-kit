/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function LongArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 9">
      <g>
        <path
          d="M 0,4.562 C 0,4.012 0.45,3.562 1,3.562 L 15,3.562 C 15.55,3.562 16,4.012 16,4.562 C 16,5.112 15.55,5.552 15,5.552 L 1,5.552 C 0.45,5.552 0,5.112 0,4.562"
          fill="currentColor"
        />
        <path
          d="M 14.17,0.292 C 13.78,-0.098 13.15,-0.098 12.76,0.292 C 12.37,0.682 12.37,1.312 12.76,1.702 L 15.58,4.502 L 12.76,7.302 C 12.37,7.692 12.37,8.322 12.76,8.712 C 13.15,9.102 13.78,9.102 14.17,8.712 L 17.6,5.302 C 17.64,5.272 17.67,5.242 17.71,5.212 C 17.9,5.012 18,4.762 18,4.502 C 18,4.242 17.9,3.992 17.71,3.792 C 17.67,3.762 17.64,3.732 17.6,3.702 L 14.17,0.292"
          fill="currentColor"
        />
      </g>
    </SvgIcon>
  );
}
