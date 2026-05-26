/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesAzureFrontDoor(props: SvgIconProps) {
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
          d="M20.794 10.44a4.035 4.035 0 0 1 1.058 2.584 4.125 4.125 0 0 1-4.096 4.035.786.786 0 0 1-.222 0H8.81a4.942 4.942 0 0 1-5.114-4.75 4.872 4.872 0 0 1 4.277-4.681 5.275 5.275 0 0 1 5.043-3.44 5.144 5.144 0 0 1 5.296 4.973c.954.117 1.834.57 2.483 1.279Zm-5.307-.452h-5.104v7.061h5.104v-7.06Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m16.415 9.534-3.52-2.017a.252.252 0 0 0-.313.151v12.266a.253.253 0 0 0 .242.252h.08l3.521-2.078a.253.253 0 0 0 .172-.232v-8.07a.262.262 0 0 0-.182-.272Z"
        />
      </svg>
    </SvgIcon>
  );
}
