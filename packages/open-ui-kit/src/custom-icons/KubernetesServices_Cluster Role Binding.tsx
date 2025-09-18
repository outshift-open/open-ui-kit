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

export function KubernetesServicesClusterRoleBinding(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M5.669 12a2.792 2.792 0 0 1 2.79-2.79h3.6V7.5h-3.6a4.502 4.502 0 0 0-4.5 4.5c0 2.484 2.016 4.5 4.5 4.5h3.6v-1.71h-3.6A2.792 2.792 0 0 1 5.669 12Zm3.69.9h7.2v-1.8h-7.2v1.8Zm8.1-5.4h-3.6v1.71h3.6a2.792 2.792 0 0 1 2.79 2.79 2.792 2.792 0 0 1-2.79 2.79h-3.6v1.71h3.6c2.484 0 4.5-2.016 4.5-4.5s-2.016-4.5-4.5-4.5Z"
        />
      </svg>
    </SvgIcon>
  );
}
