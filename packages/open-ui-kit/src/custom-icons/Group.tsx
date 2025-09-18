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

export function Group(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12 3.18 22.847 8 12 12.82 1.153 8 12 3.18ZM4.847 8 12 11.18 19.153 8 12 4.82 4.847 8Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m3 11.2-1.847.8L12 16.82 22.847 12 21 11.2l-1.847.8L12 15.18 4.847 12 3 11.2Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m3 15.2-1.847.8L12 20.82 22.847 16 21 15.2l-1.847.8L12 19.18 4.847 16 3 15.2Z"
        />
      </svg>
    </SvgIcon>
  );
}
