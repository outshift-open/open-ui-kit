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

export function GCPServicesCloudStorage(props: SvgIconProps) {
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
          d="M21.125 5.465h-1.8v6.3h1.8v-6.3Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M21.125 5.465v6.3h-18v-6.3h18Zm-3.6 3.15a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0Zm-5.4-.45h-5.4v.9h5.4v-.9ZM19.325 13.465h1.8v6.3h-18v-6.3h16.2Zm-1.8 3.15a1.35 1.35 0 1 0-2.7 0 1.35 1.35 0 0 0 2.7 0Zm-5.4-.45h-5.4v.9h5.4v-.9Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
