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

export function GCPServicesLoadBalancer(props: SvgIconProps) {
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
          d="M19.325 13.515h-1.8v2.7h1.8v-2.7ZM13.025 13.515h-1.8v2.7h1.8v-2.7ZM6.725 13.515h-1.8v2.7h1.8v-2.7ZM13.025 11.715h-1.8v-3.6h1.8v3.6ZM19.325 11.715h-14.4v1.8h14.4v-1.8ZM17.525 3.615h-10.8v4.5h10.8v-4.5Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M17.525 3.615h-5.4v4.5h5.4v-4.5ZM21.125 16.215h-5.4v5.4h5.4v-5.4ZM8.525 16.215h-5.4v5.4h5.4v-5.4Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M8.525 16.215h-2.7v5.4h2.7v-5.4ZM14.825 16.215h-5.4v5.4h5.4v-5.4Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M14.825 16.215h-2.7v5.4h2.7v-5.4ZM21.125 16.215h-2.7v5.4h2.7v-5.4Z"
        />
      </svg>
    </SvgIcon>
  );
}
