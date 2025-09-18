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

export function KubernetesCategoryNetworking(props: SvgIconProps) {
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
          d="M8.66 15.578v3.389H3.835v-3.389h4.827Zm6.587 0v3.389h-4.826v-3.389h4.826Zm6.587 0v3.389h-4.827v-3.389h4.827Zm-9.681-5.59 1.082.01-.019 2.211 1.153.013-.864 1.46-.863 1.458-.832-1.477-.832-1.477 1.157.011.018-2.209ZM9.95 9.701l.764.765-2.338 2.337.82.813-1.636.446-1.636.446.432-1.64.432-1.64.82.813 2.342-2.34Zm5.041 0 2.341 2.34.82-.813.433 1.64.432 1.64-1.636-.446-1.636-.445.819-.814-2.337-2.337.764-.765Zm1.667-4.168v3.389H9.01V5.533h7.648Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
