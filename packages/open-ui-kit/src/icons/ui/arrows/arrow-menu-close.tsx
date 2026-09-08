/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowMenuClose(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 8.6 18">
      <path
        d="M3.75 13.15L0.3 9.7C0.1 9.5 0 9.26667 0 9C0 8.73333 0.1 8.5 0.3 8.3L3.75 4.85C3.91667 4.68333 4.1 4.64167 4.3 4.725C4.5 4.80833 4.6 4.96667 4.6 5.2V12.8C4.6 13.0333 4.5 13.1917 4.3 13.275C4.1 13.3583 3.91667 13.3167 3.75 13.15ZM6.6 17V1C6.6 0.716667 6.69583 0.479167 6.8875 0.2875C7.07917 0.0958333 7.31667 0 7.6 0C7.88333 0 8.12083 0.0958333 8.3125 0.2875C8.50417 0.479167 8.6 0.716667 8.6 1V17C8.6 17.2833 8.50417 17.5208 8.3125 17.7125C8.12083 17.9042 7.88333 18 7.6 18C7.31667 18 7.07917 17.9042 6.8875 17.7125C6.69583 17.5208 6.6 17.2833 6.6 17Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
