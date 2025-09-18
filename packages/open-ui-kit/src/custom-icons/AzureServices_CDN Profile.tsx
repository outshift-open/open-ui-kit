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

export function AzureServicesCDNProfile(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="none"
      >
        <g fill="#E8E9EA" clipPath="url(#a)">
          <path d="M4.618 11.13v.156c0 .319.259.578.578.578h4.689c.319 0 .578-.26.578-.578v-.156a.578.578 0 0 0-.578-.578h-4.69a.578.578 0 0 0-.577.578ZM2.773 13.786v.155c0 .32.26.578.578.578h4.69c.318 0 .577-.258.577-.578v-.155a.578.578 0 0 0-.578-.578H3.351a.578.578 0 0 0-.578.578ZM4.618 16.441v.156c0 .319.259.578.578.578h4.689c.319 0 .578-.259.578-.578v-.156a.578.578 0 0 0-.578-.577h-4.69a.578.578 0 0 0-.577.577Z" />
          <path d="M22.773 14.408a3.644 3.644 0 0 0-3.122-3.533 4.589 4.589 0 0 0-4.678-4.445 4.7 4.7 0 0 0-4.444 3.111 4.323 4.323 0 0 0-3.756 4.223 4.444 4.444 0 0 0 4.511 4.288h7.9a3.688 3.688 0 0 0 3.59-3.644Z" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M2.773 2.186h20v20h-20z" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
