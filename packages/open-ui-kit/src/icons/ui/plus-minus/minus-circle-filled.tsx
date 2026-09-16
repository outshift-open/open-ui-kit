/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function MinusCircleFilled(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.21963 11.0104C7.67287 11.0104 7.22963 11.4536 7.22963 12.0004C7.22963 12.5472 7.67287 12.9904 8.21963 12.9904H15.781C16.3278 12.9904 16.771 12.5472 16.771 12.0004C16.771 11.4536 16.3278 11.0104 15.781 11.0104H8.21963Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
