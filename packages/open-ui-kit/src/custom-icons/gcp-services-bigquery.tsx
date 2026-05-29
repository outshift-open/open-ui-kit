/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesBigquery(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M7.91 11.678v2.104c.33.572.801 1.05 1.367 1.392v-3.496H7.91ZM10.437 9.742v6.024c.294.038.59.054.888.048.266.017.533.017.8 0V9.742h-1.688ZM13.437 12.502v2.632a4 4 0 0 0 1.36-1.456v-1.176h-1.36ZM16.716 16.07l-1.136 1.136a.337.337 0 0 0 0 .48l2.832 2.832a.336.336 0 0 0 .472 0l1.144-1.144a.336.336 0 0 0 0-.472l-2.832-2.832a.337.337 0 0 0-.48 0Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M11.325 4.615a7.2 7.2 0 1 0 0 14.399 7.2 7.2 0 0 0 0-14.4Zm0 12.551A5.344 5.344 0 1 1 11.34 6.48a5.344 5.344 0 0 1-.016 10.687Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
