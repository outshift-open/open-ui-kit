/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function RadioUnchecked(props: SvgIconProps) {
  return (
    <SvgIcon viewBox="0 0 18 18" {...props}>
      <circle
        cx="9"
        cy="9"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    </SvgIcon>
  );
}
