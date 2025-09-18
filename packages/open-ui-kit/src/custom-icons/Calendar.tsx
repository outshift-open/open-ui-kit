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

export function Calendar(props: SvgIconProps) {
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
          d="M4.75 17.5C4.3375 17.5 3.98438 17.3531 3.69063 17.0594C3.39687 16.7656 3.25 16.4125 3.25 16V5.5C3.25 5.0875 3.39687 4.73438 3.69063 4.44063C3.98438 4.14688 4.3375 4 4.75 4H5.5V3.25C5.5 3.0375 5.57188 2.85938 5.71563 2.71563C5.85938 2.57188 6.0375 2.5 6.25 2.5C6.4625 2.5 6.64063 2.57188 6.78438 2.71563C6.92813 2.85938 7 3.0375 7 3.25V4H13V3.25C13 3.0375 13.0719 2.85938 13.2156 2.71563C13.3594 2.57188 13.5375 2.5 13.75 2.5C13.9625 2.5 14.1406 2.57188 14.2844 2.71563C14.4281 2.85938 14.5 3.0375 14.5 3.25V4H15.25C15.6625 4 16.0156 4.14688 16.3094 4.44063C16.6031 4.73438 16.75 5.0875 16.75 5.5V16C16.75 16.4125 16.6031 16.7656 16.3094 17.0594C16.0156 17.3531 15.6625 17.5 15.25 17.5H4.75ZM4.75 16H15.25V8.5H4.75V16ZM4.75 7H15.25V5.5H4.75V7Z"
          fill="#E8E9EA"
        />
      </svg>
    </SvgIcon>
  );
}
