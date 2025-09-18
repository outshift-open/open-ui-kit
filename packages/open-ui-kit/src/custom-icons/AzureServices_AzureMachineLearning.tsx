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

export function AzureServicesAzureMachineLearning(props: SvgIconProps) {
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
          d="M7.361 17.458h10.303v3.728H7.361v-3.728Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m12.052 7.155 3.808 2.926-8.539 11.105-3.808-2.927 8.539-11.104ZM13.535 15.293l4.33-2.846 4.169 5.893-4.33 2.846-4.169-5.893Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M9.807 3.186h6.053v6.895H9.807V3.186Z"
        />
      </svg>
    </SvgIcon>
  );
}
