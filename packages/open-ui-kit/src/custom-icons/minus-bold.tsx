/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * @deprecated Superseded by the Figma-migrated icon set (`Icons`, packages/open-ui-kit/src/icons).
 * No direct replacement has been identified for `MinusBold` yet — it remains available via
 * `LegacyIcons.MinusBold` until migrated.
 */
export function MinusBold(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path fill="currentColor" d="M20 14H4v-4h16" />
      </svg>
    </SvgIcon>
  );
}
