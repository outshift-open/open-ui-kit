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

export function AzureServicesAzureAdvancedThreatProtection(
  props: SvgIconProps,
) {
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
          d="M17.57 4.177a5.89 5.89 0 0 0-2.297-.44 5.89 5.89 0 0 0-5.95 5.95v6h5.95a5.89 5.89 0 0 0 5.95-5.95 5.89 5.89 0 0 0-3.652-5.56Zm-4.847 4.66h-1.36v4.08h1.36v-4.08Zm2.72 1.36h-1.36v2.72h1.36v-2.72Zm2.72-2.72h-1.36v5.44h1.36v-5.44Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M9.363 16.316h4.32v4.32h-4.32v-4.32Zm-4.44 4.32h3.72v-4.32h-4.32v3.72a.6.6 0 0 0 .6.6Zm-.6-5h4.32v-4.36h-4.32v4.36Z"
        />
      </svg>
    </SvgIcon>
  );
}
