/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AWSServicesEgressOnlyInterentGateway(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.928 6.718a7.092 7.092 0 0 0-4.685 1.608.533.533 0 0 0-.178.395v8.206a.533.533 0 0 0 .533.532h1.39a.532.532 0 0 0 .533-.532V9.806a5.257 5.257 0 0 1 2.397-.622c.768.015 1.522.2 2.21.543v7.2a.533.533 0 0 0 .522.532h1.41a.532.532 0 0 0 .533-.532V8.563a.514.514 0 0 0-.197-.414 7.289 7.289 0 0 0-4.468-1.43Zm3.61 9.696h-.355V9.38a.523.523 0 0 0-.316-.473 6.54 6.54 0 0 0-2.91-.76 6.658 6.658 0 0 0-3.195.888.513.513 0 0 0-.296.474v6.904h-.345V8.967a6.194 6.194 0 0 1 3.807-1.193 6.431 6.431 0 0 1 3.61 1.045v7.595Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.834 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
