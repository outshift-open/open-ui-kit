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

export function AzureServicesNetworkPolicy(props: SvgIconProps) {
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
          d="M19.486 12.016c0 4.84-5.851 8.741-7.121 9.531a.46.46 0 0 1-.48 0c-1.27-.79-7.121-4.69-7.121-9.531v-5.82a.46.46 0 0 1 .45-.461c4.55-.12 3.5-2.12 6.91-2.12 3.411 0 2.361 2 6.912 2.12a.46.46 0 0 1 .45.46v5.82Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M18.876 12.066c0 4.44-5.36 8.001-6.531 8.741a.43.43 0 0 1-.44 0c-1.17-.72-6.531-4.3-6.531-8.741v-5.34a.42.42 0 0 1 .41-.42c4.17-.11 3.21-1.941 6.34-1.941 3.131 0 2.171 1.83 6.342 1.94a.42.42 0 0 1 .41.42v5.34Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M5.784 6.305c4.17-.11 3.21-1.94 6.34-1.94v8.251h-6.72a4.89 4.89 0 0 1 0-.54v-5.34a.43.43 0 0 1 .38-.43ZM18.846 12.616h-6.721v8.251a.39.39 0 0 0 .18-.06c1.16-.69 6.14-4.01 6.54-8.191Z"
        />
      </svg>
    </SvgIcon>
  );
}
