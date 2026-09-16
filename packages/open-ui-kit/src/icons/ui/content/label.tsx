/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Label(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M20.5915 11.4225C20.8363 11.7686 20.8363 12.2314 20.5915 12.5775L16.65 18.15C16.4667 18.4167 16.2293 18.625 15.938 18.775C15.6467 18.925 15.334 19 15 19H5C4.45 19 3.97933 18.8043 3.588 18.413C3.19667 18.0217 3.00067 17.5507 3 17V7C3 6.45 3.196 5.97933 3.588 5.588C3.98 5.19667 4.45067 5.00067 5 5H15C15.3333 5 15.646 5.075 15.938 5.225C16.23 5.375 16.4673 5.58333 16.65 5.85L20.5915 11.4225ZM18.139 12.5789C18.3851 12.2322 18.3851 11.7678 18.139 11.4211L15 7H5V17H15L18.139 12.5789ZM5 12V17V7V12Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
