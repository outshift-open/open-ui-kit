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

export function Node(props: SvgIconProps) {
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
          d="M12.334 11.717v2.813l4.956 3.6a2.452 2.452 0 1 1-.377.485l-4.912-3.569-4.913 3.57a2.452 2.452 0 1 1-.377-.485l5.01-3.64v-2.774L8.042 9.591V4.985l3.985-2.303 3.985 2.303v4.606l-3.678 2.126Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
