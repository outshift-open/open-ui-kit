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

export function GCPServicesSecurityCenter(props: SvgIconProps) {
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
          d="M13.304 7.98a4.707 4.707 0 0 1 3.375 3.375h3.177V6.53l-6.552-2.916V7.98ZM7.562 11.364a4.698 4.698 0 0 1 3.375-3.375V3.615L4.394 6.53v4.833h3.168ZM10.946 17.115A4.707 4.707 0 0 1 7.57 13.74H4.59a10.8 10.8 0 0 0 6.355 7.875v-4.5ZM16.688 13.74a4.707 4.707 0 0 1-3.375 3.375v4.5a10.8 10.8 0 0 0 6.344-7.875h-2.97ZM12.125 14.91a2.367 2.367 0 1 0 0-4.734 2.367 2.367 0 0 0 0 4.734Z"
        />
      </svg>
    </SvgIcon>
  );
}
