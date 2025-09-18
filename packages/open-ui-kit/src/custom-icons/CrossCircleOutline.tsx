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

export function CrossCircleOutline(props: SvgIconProps) {
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
          d="M12 20.148c4.296 0 8.148-3.852 8.148-8.148 0-4.296-3.852-8.148-8.148-8.148-4.296 0-8.148 3.852-8.148 8.148 0 4.296 3.852 8.148 8.148 8.148ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m16.364 8.727-1.09-1.09L12 10.908 8.728 7.636 7.637 8.727 10.909 12l-3.272 3.273 1.09 1.09L12 13.092l3.273 3.273 1.091-1.091L13.091 12l3.273-3.273Z"
        />
      </svg>
    </SvgIcon>
  );
}
