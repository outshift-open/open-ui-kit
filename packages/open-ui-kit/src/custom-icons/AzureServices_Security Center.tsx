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

export function AzureServicesSecurityCenter(props: SvgIconProps) {
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
          d="M13.016 21.116c1.272-.79 7.122-4.686 7.122-9.525V5.767a.463.463 0 0 0-.452-.461c-2.417-.066-3.255-.66-4.02-1.202-.675-.48-1.294-.918-2.893-.918-1.598 0-2.217.439-2.892.918-.765.542-1.603 1.136-4.02 1.202a.463.463 0 0 0-.452.461v5.824c0 4.839 5.85 8.735 7.122 9.525a.457.457 0 0 0 .485 0Zm2.404-10.728h.441a.355.355 0 0 1 .353.347v3.985a.356.356 0 0 1-.353.346H9.686a.356.356 0 0 1-.353-.347v-3.984a.355.355 0 0 1 .353-.347h.45V8.854a2.82 2.82 0 0 1 .757-1.957 2.552 2.552 0 0 1 3.769 0 2.87 2.87 0 0 1 .758 1.958v1.533Zm-4.053 0h2.818l.005-1.558a1.563 1.563 0 0 0-.279-.856 1.513 1.513 0 0 0-.166-.216 1.298 1.298 0 0 0-1.935 0c-.28.286-.44.67-.443 1.071v1.56Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
