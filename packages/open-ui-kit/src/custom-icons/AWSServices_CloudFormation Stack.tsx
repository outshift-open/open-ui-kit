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

export function AWSServicesCloudFormationStack(props: SvgIconProps) {
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
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M4.809 8.864v.025H20.859V3.975H4.809v4.889Zm8.272 5.41v.025H20.859V9.384H13.081V14.274Zm-8.272 0v.025H12.587V9.384H4.809V14.274Zm11.136 5.408v.025H20.858V14.793h-4.915v4.889Zm-5.727 0v.025H15.45V14.793H10.218v4.889Zm-5.409 0v.025H9.723V14.793H4.81v4.889ZM20.08 4.754V8.11H5.588V4.754H20.08Zm0 5.408v3.358h-6.22v-3.358h6.22Zm-8.272 0v3.358h-6.22v-3.358h6.22Zm8.272 5.409v3.357h-3.357v-3.357h3.357Zm-5.408 0v3.357h-3.676v-3.357h3.676Zm-5.727 0v3.357H5.588v-3.357h3.357Z"
        />
      </svg>
    </SvgIcon>
  );
}
