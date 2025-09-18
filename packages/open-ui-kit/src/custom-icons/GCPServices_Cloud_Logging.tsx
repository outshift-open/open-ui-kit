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

export function GCPServicesCloudLogging(props: SvgIconProps) {
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
          d="M3.454 9.393h5.053V4.34H3.454v5.053Zm16.842-.842H9.35V5.182h10.947v3.369Zm0 5.894H9.35v-3.368h10.947v3.368Zm0 5.895H9.35v-3.368h10.947v3.368Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M6.822 17.814H5.138V7.709h1.684v4.21h3.368v1.684H6.822v4.21Zm3.368 0H5.138v1.684h5.052v-1.684Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
