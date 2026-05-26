/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesCloudCDN(props: SvgIconProps) {
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
          d="M12.125 3.615v2.169l2.817 2.898V6.504l-2.817-2.89ZM18.875 12.615l-2.808 2.817h2.25l2.808-2.817h-2.25ZM5.375 12.615l2.817 2.817h-2.25l-2.817-2.817h2.25ZM12.125 21.615v-2.17l2.817-2.888v2.169l-2.817 2.889ZM12.125 3.615 9.317 6.504v2.178l2.808-2.898v-2.17ZM18.317 9.807h-2.25l2.808 2.808h2.25l-2.808-2.808ZM5.942 9.807h2.25l-2.817 2.808h-2.25l2.817-2.808ZM12.125 21.615l-2.808-2.89v-2.168l2.808 2.889v2.169ZM14.942 15.432H9.317V9.807h5.625v5.625Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M14.942 9.807v5.625H9.317l5.625-5.625Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M14.942 9.807v5.625l-2.817-2.817 2.817-2.808Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
