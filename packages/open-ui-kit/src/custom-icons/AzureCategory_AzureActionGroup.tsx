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

export function AzureCategoryAzureActionGroup(props: SvgIconProps) {
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
          d="M7.948 3.186H6.646a.596.596 0 0 0-.596.596V20.59c0 .33.267.596.596.596h1.302c.329 0 .596-.267.596-.596V3.782a.596.596 0 0 0-.596-.596ZM13.364 3.186h-1.302a.596.596 0 0 0-.596.596V20.59c0 .33.267.596.596.596h1.302c.329 0 .596-.267.596-.596V3.782a.596.596 0 0 0-.596-.596ZM18.869 3.186h-1.302a.596.596 0 0 0-.596.596V20.59c0 .33.267.596.596.596h1.302c.329 0 .596-.267.596-.596V3.782a.596.596 0 0 0-.596-.596Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M7.948 9.348H6.646a.596.596 0 0 0-.596.596V20.59c0 .33.267.596.596.596h1.302c.329 0 .596-.267.596-.596V9.944a.596.596 0 0 0-.596-.596ZM13.364 17.442h-1.302a.596.596 0 0 0-.596.596v2.552c0 .33.267.596.596.596h1.302c.329 0 .596-.267.596-.596v-2.552a.596.596 0 0 0-.596-.596ZM18.869 9.348h-1.302a.596.596 0 0 0-.596.596V20.59c0 .33.267.596.596.596h1.302c.329 0 .596-.267.596-.596V9.944a.596.596 0 0 0-.596-.596Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M8.623 9.22H6.035a.589.589 0 0 0 0 1.178h2.588a.589.589 0 0 0 0-1.178ZM14.06 17.151h-2.588a.589.589 0 1 0 0 1.178h2.588a.589.589 0 1 0 0-1.178ZM19.511 9.22h-2.588a.589.589 0 0 0 0 1.178h2.588a.589.589 0 0 0 0-1.178Z"
        />
      </svg>
    </SvgIcon>
  );
}
