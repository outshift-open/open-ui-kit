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

export function AzureServicesRoleAssignment(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <g fill="#E8E9EA" clipPath="url(#a)">
          <path d="M11.125 12.445a4.16 4.16 0 0 1-2.26-.66l2.18 5.83 2.22-5.79a4.199 4.199 0 0 1-2.14.62Z" />
          <path
            fillRule="evenodd"
            d="M13.329 11.794a4.17 4.17 0 1 0-4.573-.043c-3.052.832-4.721 3.438-5.121 7.254a1.34 1.34 0 0 0 1.19 1.46h12.3a1.302 1.302 0 0 0 1.32-1.31.807.807 0 0 0 0-.16c-.424-3.384-2.072-6.256-5.116-7.201Z"
            clipRule="evenodd"
          />
          <path d="M20.615 14.745v4.24l-3.64 2.13v-4.24l3.64-2.13Z" />
          <path d="m20.615 14.745-3.64 2.13-3.64-2.13 3.64-2.13 3.64 2.13Z" />
          <path d="M16.975 16.875v4.24l-3.64-2.13v-4.24l3.64 2.13Z" />
          <path d="m13.335 18.985 3.64-2.11v4.24l-3.64-2.13Z" />
          <path d="m20.615 18.985-3.64-2.11v4.24l3.64-2.13Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M3.125 3.615h18v18h-18z" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
