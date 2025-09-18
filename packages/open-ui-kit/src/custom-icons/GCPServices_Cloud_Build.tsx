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

export function GCPServicesCloudBuild(props: SvgIconProps) {
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
          d="m12.12 16.53 3.231-1.864V10.94l-1.083-.634-3.23 5.6 1.082.624ZM8.89 10.94v3.726l1.083.624 3.24-5.59-1.092-.633L8.89 10.94Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M11.488 17.64 7.614 15.4v-4.46L4.172 8.948v8.444l7.316 4.223V17.64ZM8.247 9.838l3.874-2.24 3.873 2.24 3.452-1.992-7.325-4.231-7.325 4.231 3.451 1.992ZM16.627 15.4l-3.873 2.24v3.975l7.325-4.223V8.948l-3.452 1.992v4.46Z"
        />
      </svg>
    </SvgIcon>
  );
}
