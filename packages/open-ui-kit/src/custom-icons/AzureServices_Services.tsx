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

export function AzureServicesServices(props: SvgIconProps) {
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
          d="M11.869 7.687h-1.8v2.7h-1.8v2.643a4.535 4.535 0 0 0 3.6 4.458v3.698h1.8v-3.742a4.507 4.507 0 0 0 3.608-4.414l-.016-2.643h-1.792v-2.7h-1.8v2.7h-1.8v-2.7Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M18.444 5.203a9 9 0 0 0-5.674-2.017v.001a9 9 0 0 0-3.6 17.243v-2.018a7.193 7.193 0 0 1 3.6-13.425v-.001a7.195 7.195 0 0 1 3.6 13.427v2.02a9 9 0 0 0 2.074-15.23Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
