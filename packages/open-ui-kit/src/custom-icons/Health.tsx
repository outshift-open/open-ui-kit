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

export function Health(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M7.538 4.863c0-1.204.976-2.181 2.182-2.181h4.56a2.18 2.18 0 0 1 2.181 2.181v.993c0 .138-.01.268-.035.397h3.21c1.206 0 2.18.977 2.18 2.182v11.702a2.181 2.181 0 0 1-2.18 2.181H4.363a2.182 2.182 0 0 1-2.181-2.181V8.435c0-1.205.977-2.182 2.181-2.182h3.21a2.378 2.378 0 0 1-.036-.397v-.993Zm1.785 1.39h5.356V4.47H9.323v1.784Zm4.959 1.785H3.967v12.496h16.065V8.038h-5.75Zm-1.39 5.355v-3.57h-1.785v3.57H7.538v1.785h3.57v3.569h1.784v-3.569h3.571v-1.785h-3.571Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
