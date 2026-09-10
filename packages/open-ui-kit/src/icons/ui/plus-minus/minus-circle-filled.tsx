/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MinusCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 18">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM5.21963 8.01039C4.67287 8.01039 4.22963 8.45363 4.22963 9.00039C4.22963 9.54715 4.67287 9.99039 5.21963 9.99039H12.781C13.3278 9.99039 13.771 9.54715 13.771 9.00039C13.771 8.45363 13.3278 8.01039 12.781 8.01039H5.21963Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
