/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * @deprecated Superseded by the Figma-migrated icon set (`Icons`, packages/open-ui-kit/src/icons).
 * No direct replacement has been identified for `TriangleUpOutline` yet — it remains available via
 * `LegacyIcons.TriangleUpOutline` until migrated.
 */
export function TriangleUpOutline(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.295L6 14.295L7.41 15.705L12 11.125L16.59 15.705L18 14.295L12 8.295Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
}
