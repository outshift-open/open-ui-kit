/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

/**
 * @deprecated Superseded by the Figma-migrated icon set (`Icons`, packages/open-ui-kit/src/icons).
 * No direct replacement has been identified for `AZUREIcon` yet — it remains available via
 * `LegacyIcons.AZUREIcon` until migrated.
 */
export function AZUREIcon(props: SvgIconProps) {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 17.535L7.18933 8.89267L13.25 4L6.67866 17.5483V17.535H2ZM15.9924 17.3761L11.11 11.7431L13.6514 4.96777L22 19.0001H6.50003L15.9924 17.3761Z"
          fill="currentColor"
        />
      </svg>
    </SvgIcon>
  );
}
