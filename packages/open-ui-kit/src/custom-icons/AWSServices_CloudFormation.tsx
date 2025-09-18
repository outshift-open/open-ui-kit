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

export function AWSServicesCloudFormation(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M6.81 14.952h4.008v-1.01H6.81v1.01Zm0-4.05h3.006V9.89H6.81v1.01Zm0 2.06h6.013v-1.01H6.809v1.01Zm4.969 5.027H5.836V8.787h5.943v2.128h1.002V8.282a.503.503 0 0 0-.501-.505H5.335a.503.503 0 0 0-.501.505v10.213c0 .279.224.505.501.505h6.945a.503.503 0 0 0 .5-.505v-4.548H11.78v4.042Zm9.055-7.05c0 2.115-1.607 2.91-2.456 3.034l-4.553.005v-1.01h4.48c.09-.02 1.527-.3 1.527-2.03 0-.887-.477-1.364-1.547-1.545a.504.504 0 0 1-.416-.541l.001-.014c-.022-.762-.477-.997-.675-1.063-.352-.119-.72-.019-.918.25a.504.504 0 0 1-.476.197.501.501 0 0 1-.397-.33c-.158-.445-.391-.738-.718-1.067-.385-.385-1.441-1.215-2.906-.594-.385.163-.736.48-1.012.915L9.924 6.6c.386-.607.893-1.057 1.468-1.3 1.403-.595 2.901-.293 4.003.81.23.23.459.487.656.814.432-.23.962-.274 1.459-.11.579.195 1.192.73 1.333 1.665 1.633.423 1.991 1.553 1.991 2.46Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
