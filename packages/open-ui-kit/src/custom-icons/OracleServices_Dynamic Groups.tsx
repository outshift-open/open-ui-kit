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

export function OracleServicesDynamicGroups(props: SvgIconProps) {
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
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M12.25 3.704a9.025 9.025 0 1 0 0 18.05 9.025 9.025 0 0 0 0-18.05Zm0 17.248a8.223 8.223 0 1 1 8.224-8.223 8.233 8.233 0 0 1-8.224 8.224Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="m13.748 16.851-1.1 1.1V7.602l1.1 1.1.018.018.018-.018.53-.53.018-.018-.017-.018-2.048-2.048-.017-.017-.018.017-2.047 2.048-.018.018.018.017.53.531.018.018.018-.018 1.1-1.1v10.35l-1.1-1.1-.018-.017-.018.017-.53.531-.018.018.018.018 2.047 2.047.018.018.017-.018 2.048-2.047.018-.018-.018-.018-.531-.53-.018-.018-.018.017Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="m9.815 10.664-.017-.018-.018.018-.53.53-.019.018.018.018 1.1 1.1H5.57v.797h4.779l-1.1 1.1-.018.018.018.018.531.531.018.018.017-.018 2.043-2.047.018-.018-.018-.018-2.043-2.047ZM14.15 12.33l1.1-1.1.018-.018-.017-.017-.531-.531-.018-.018-.018.018-2.042 2.047-.018.018.018.018 2.043 2.047.017.018.018-.018.53-.53.018-.018-.017-.018-1.1-1.1h4.779v-.797h-4.78Z"
        />
      </svg>
    </SvgIcon>
  );
}
