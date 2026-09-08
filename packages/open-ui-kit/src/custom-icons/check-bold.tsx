/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * @deprecated Superseded by the Figma-migrated icon set (`Icons`, packages/open-ui-kit/src/icons).
 * No direct replacement has been identified for `CheckBold` yet — it remains available via
 * `LegacyIcons.CheckBold` until migrated.
 */
export function CheckBold(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill="currentColor"
          d="m9 20.42-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42Z"
        />
      </svg>
    </SvgIcon>
  );
}
