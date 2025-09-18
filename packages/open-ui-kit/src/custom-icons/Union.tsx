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

export function Union(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.3 4.3V7.03333H15.7V4.3H4.3ZM3.5 2.5C2.94772 2.5 2.5 2.94772 2.5 3.5V7.83333C2.5 8.38562 2.94772 8.83333 3.5 8.83333H3.81452V14.2726C3.81452 14.7697 4.21747 15.1726 4.71452 15.1726H8.5V16.5003C8.5 17.0526 8.94772 17.5003 9.5 17.5003H16.5C17.0523 17.5003 17.5 17.0526 17.5 16.5003V12.167C17.5 11.6147 17.0523 11.167 16.5 11.167H9.5C8.94772 11.167 8.5 11.6147 8.5 12.167V13.3726H5.61452V8.83333H16.5C17.0523 8.83333 17.5 8.38562 17.5 7.83333V3.5C17.5 2.94772 17.0523 2.5 16.5 2.5H3.5ZM10.3 12.967V15.7003H15.7V12.967H10.3Z"
          fill={props.fill ?? "#E8E9EA"}
        />
      </svg>
    </SvgIcon>
  );
}
