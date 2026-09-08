/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function Minus(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 14 2">
      <path
        d="M1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H13C13.2833 0 13.5208 0.0958333 13.7125 0.2875C13.9042 0.479167 14 0.716667 14 1C14 1.28333 13.9042 1.52083 13.7125 1.7125C13.5208 1.90417 13.2833 2 13 2H1Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
