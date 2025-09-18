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

export function GCPServicesCloudMonitoring(props: SvgIconProps) {
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
          d="M13.285 16.43h-2.33v2.64h2.33v-2.64Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M18.605 14.46a.561.561 0 0 1-.4-.17l-4.08-4.23-2.74 2.89a.57.57 0 0 1-.76.05l-2.08-1.68-2.2 2.92a.561.561 0 0 1-.45.22h-3.77v1.71a.75.75 0 0 0 .74.75h18.52a.75.75 0 0 0 .74-.75v-1.71h-3.52Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m5.625 13.35 2.38-3.16a.55.55 0 0 1 .37-.22.63.63 0 0 1 .42.12l2.12 1.72 2.8-2.94a.54.54 0 0 1 .4-.17.54.54 0 0 1 .4.17l4.33 4.48h3.28V6.59a.74.74 0 0 0-.74-.74H2.865a.74.74 0 0 0-.74.74v6.81l3.5-.05ZM15.165 18.77h-6.07a.3.3 0 0 0-.3.3v.01a.3.3 0 0 0 .3.3h6.07a.3.3 0 0 0 .3-.3v-.01a.3.3 0 0 0-.3-.3Z"
        />
      </svg>
    </SvgIcon>
  );
}
