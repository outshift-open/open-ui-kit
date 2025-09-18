/*
 * Copyright 2025 Open UI Kit Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SvgIcon, SvgIconProps } from "@mui/material";

export function AzureServicesAzureAttestation(props: SvgIconProps) {
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
          d="M20.138 11.591c0 4.84-5.85 8.736-7.122 9.525a.458.458 0 0 1-.485 0c-1.272-.79-7.122-4.686-7.122-9.525V5.767a.463.463 0 0 1 .452-.46c2.417-.066 3.255-.66 4.02-1.203.675-.48 1.294-.918 2.893-.918 1.598 0 2.217.439 2.892.918.765.543 1.603 1.137 4.02 1.202a.463.463 0 0 1 .452.461v5.824Zm-10.652 1.77h6.575a.698.698 0 0 1 .698.698v.865a.117.117 0 0 1-.117.117H8.905a.116.116 0 0 1-.117-.117v-.865a.698.698 0 0 1 .698-.698Zm.029 2.542h6.517a.083.083 0 0 1 .083.082v.437a.497.497 0 0 1-.497.497H9.93a.497.497 0 0 1-.497-.497v-.437a.083.083 0 0 1 .083-.082Zm5.044-6.684c-.082.094-.173.2-.271.343a9.047 9.047 0 0 0-.419 2.896h-2.291a9.025 9.025 0 0 0-.42-2.896 3.74 3.74 0 0 0-.27-.344c-.3-.346-.455-.525-.249-1.742.26-1.532 1.948-1.53 2.081-1.53h.006c.129 0 1.822-.002 2.082 1.53.206 1.215.05 1.396-.25 1.743Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
