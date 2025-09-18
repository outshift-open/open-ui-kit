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

export function Undo(props: SvgIconProps) {
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
          d="M6.475 19v-1.5h7.75c1.167 0 2.17-.387 3.013-1.163.841-.774 1.262-1.737 1.262-2.887s-.42-2.112-1.262-2.887c-.842-.776-1.846-1.163-3.013-1.163H6.85l2.85 2.85-1.05 1.05L4 8.65 8.65 4 9.7 5.05 6.85 7.9h7.35c1.583 0 2.946.533 4.088 1.6C19.428 10.567 20 11.883 20 13.45c0 1.567-.57 2.883-1.712 3.95-1.142 1.067-2.505 1.6-4.088 1.6H6.475Z"
        />
      </svg>
    </SvgIcon>
  );
}
