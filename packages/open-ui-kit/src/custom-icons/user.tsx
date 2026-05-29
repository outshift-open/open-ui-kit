/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function User(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12 10.6c1.713 0 3.1-1.387 3.1-3.1S13.713 4.4 12 4.4a3.099 3.099 0 0 0-3.1 3.1c0 1.713 1.387 3.1 3.1 3.1Zm-7.067 7.213c-.427.395-.533.703-.533.937v.85h15.2v-.85c0-.234-.106-.542-.533-.937-.437-.403-1.11-.794-1.961-1.136-1.706-.683-3.78-1.027-5.106-1.027-1.327 0-3.4.344-5.106 1.027-.852.342-1.524.733-1.96 1.136ZM16.5 7.5c0 2.486-2.014 4.5-4.5 4.5a4.499 4.499 0 0 1-4.5-4.5C7.5 5.014 9.514 3 12 3s4.5 2.014 4.5 4.5ZM3 18.75c0-2.992 5.996-4.5 9-4.5 3.004 0 9 1.508 9 4.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.25Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
