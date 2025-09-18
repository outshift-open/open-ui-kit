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

export function KubernetesServicesServiceAccount(props: SvgIconProps) {
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
          d="M12.96 3 5.597 6.272v4.91c0 4.54 3.143 8.787 7.363 9.818 4.221-1.03 7.361-5.278 7.361-9.817v-4.91L12.961 3Zm0 3.467c.952 0 1.812.574 2.174 1.455a2.355 2.355 0 1 1-4.53.901 2.356 2.356 0 0 1 2.356-2.356Zm4.416 9.744a.301.301 0 0 1-.05.165c-.053.079-.106.162-.165.238a8.198 8.198 0 0 1-4.2 3.013 8.194 8.194 0 0 1-4.204-3.013c-.059-.076-.112-.159-.165-.239a.301.301 0 0 1-.05-.164v-1.308c0-1.806 2.946-2.716 4.418-2.716 1.473 0 4.416.91 4.416 2.716v1.308Z"
        />
      </svg>
    </SvgIcon>
  );
}
