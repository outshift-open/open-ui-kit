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

export function KubernetesServicesConfigMap(props: SvgIconProps) {
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
          d="M20.959 6.92H9.782V5.396H20.96V6.92ZM7.757 6.92H4.96V5.396h2.798V6.92ZM20.959 10.981h-7.115V9.457h7.115v1.524ZM11.819 10.981H9.02V9.457h2.798v1.524ZM20.959 15.043h-7.115v-1.524h7.115v1.524ZM11.819 15.043H9.02v-1.524h2.798v1.524ZM20.959 19.104H9.782V17.58H20.96v1.524ZM7.757 19.104H4.96V17.58h2.798v1.524Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
