/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function ArrowMenuOpen(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 8.6 18">
      <path
        d="M0 17V1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0C1.28333 0 1.52083 0.0958333 1.7125 0.2875C1.90417 0.479167 2 0.716667 2 1V17C2 17.2833 1.90417 17.5208 1.7125 17.7125C1.52083 17.9042 1.28333 18 1 18C0.716667 18 0.479167 17.9042 0.2875 17.7125C0.0958333 17.5208 0 17.2833 0 17ZM4 12.8V5.2C4 4.96667 4.1 4.80833 4.3 4.725C4.5 4.64167 4.68333 4.68333 4.85 4.85L8.3 8.3C8.5 8.5 8.6 8.73333 8.6 9C8.6 9.26667 8.5 9.5 8.3 9.7L4.85 13.15C4.68333 13.3167 4.5 13.3583 4.3 13.275C4.1 13.1917 4 13.0333 4 12.8Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
