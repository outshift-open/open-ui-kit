/*
 * Copyright 2025 Cisco Systems, Inc. and its affiliates
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function GCPServicesLocalSSD(props: SvgIconProps) {
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
          d="m16.345 10.399 3.161 1.838a.342.342 0 0 1 .003.59l-4.628 2.741 4.953 2.8c.107.06.174.174.174.297v2.608a.342.342 0 0 1-.514.295l-7.44-4.325-7.295 4.324a.342.342 0 0 1-.516-.294v-2.606c0-.122.065-.234.17-.295l10.029-5.842-.933-.528 2.836-1.603ZM4.585 3.615c.06 0 .12.016.172.046l7.438 4.325 7.296-4.323a.342.342 0 0 1 .517.294v2.605a.342.342 0 0 1-.17.296L9.809 12.699l.933.528-2.836 1.604-3.161-1.839a.342.342 0 0 1-.003-.59l4.626-2.74-4.951-2.8a.342.342 0 0 1-.174-.297V3.957c0-.19.153-.342.342-.342Z"
        />
      </svg>
    </SvgIcon>
  );
}
