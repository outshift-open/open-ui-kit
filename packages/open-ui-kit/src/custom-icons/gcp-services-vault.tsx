/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesVault(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="m4.125 4.615 7.97 16 8.03-16h-16Zm8.92 3.21h.927v.929h-.928v-.928Zm-1.848 3.71h-.928v-.927h.928v.928Zm0-1.388h-.928v-.93h.928v.93Zm0-1.39h-.928v-.931h.928v.932Zm1.39 4.174h-.926V12h.927l-.002.931Zm0-1.388h-.926v-.935h.927l-.002.934Zm0-1.39h-.926v-.937h.927l-.002.938Zm0-1.388h-.926v-.94h.927l-.002.94Zm.456.462h.928v.928h-.927v-.928Zm0 2.32v-.94h.928v.929l-.928.01Z"
        />
      </svg>
    </SvgIcon>
  );
}
