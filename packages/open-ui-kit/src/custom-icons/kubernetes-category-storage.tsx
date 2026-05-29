/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function KubernetesCategoryStorage(props: SvgIconProps) {
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
          d="M20.834 6.92H9.657V5.396h11.177V6.92ZM7.632 6.92H4.834V5.396h2.798V6.92ZM20.834 10.981h-7.115V9.457h7.115v1.524ZM11.694 10.981H8.896V9.457h2.798v1.524ZM20.834 15.043h-7.115v-1.524h7.115v1.524ZM11.694 15.043H8.896v-1.524h2.798v1.524ZM20.834 19.104H9.657V17.58h11.177v1.524ZM7.632 19.104H4.834V17.58h2.798v1.524Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
