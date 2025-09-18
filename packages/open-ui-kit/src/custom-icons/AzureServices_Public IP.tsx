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

export function AzureServicesPublicIP(props: SvgIconProps) {
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
          d="M4.377 4.949H21.17a.604.604 0 0 1 .603.603v3.23h-18v-3.24a.603.603 0 0 1 .604-.593Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M21.773 8.782h-18v10.037a.603.603 0 0 0 .604.604H21.17a.604.604 0 0 0 .603-.604V8.782Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M16.048 14.451a1.183 1.183 0 1 0 0-2.365 1.183 1.183 0 0 0 0 2.365ZM12.825 14.451a1.183 1.183 0 1 0 0-2.365 1.183 1.183 0 0 0 0 2.365ZM9.5 14.451a1.183 1.183 0 1 0 0-2.365 1.183 1.183 0 0 0 0 2.365Z"
        />
      </svg>
    </SvgIcon>
  );
}
