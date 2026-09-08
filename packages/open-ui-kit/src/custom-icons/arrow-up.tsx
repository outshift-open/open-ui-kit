/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * @deprecated Superseded by the Figma-migrated icon set (`Icons`, packages/open-ui-kit/src/icons).
 * No direct replacement has been identified for `VulArrowUp` yet — it remains available via
 * `LegacyIcons.VulArrowUp` until migrated.
 */
export function VulArrowUp(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.1333 12L5.5433 13.41L11.1333 7.83L11.1333 20L13.1333 20L13.1333 7.83L18.7133 13.42L20.1333 12L12.1333 4L4.1333 12Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
}
