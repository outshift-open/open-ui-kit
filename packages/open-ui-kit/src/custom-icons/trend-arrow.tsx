/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * @deprecated Superseded by the Figma-migrated icon set (`Icons`, packages/open-ui-kit/src/icons).
 * No direct replacement has been identified for `TrendArrow` yet — it remains available via
 * `LegacyIcons.TrendArrow` until migrated.
 */
export function TrendArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 8 10">
      <svg
        width="8"
        height="10"
        viewBox="0 0 8 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-1.74846e-07 8L4 -6.99382e-08L8 8L-1.74846e-07 8Z"
          fill="currentColor"
        />
      </svg>
      ;
    </SvgIcon>
  );
}
