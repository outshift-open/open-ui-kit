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

export function OracleCategoryCompute(props: SvgIconProps) {
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
          d="M20.17 5.67v-.004c-.04-.37-.37-.702-.745-.702H4.785a.726.726 0 0 0-.705.705v14.68c0 .376.334.665.705.665h14.68a.726.726 0 0 0 .706-.705V5.67Zm-.69 14.64a.055.055 0 0 1-.017.037.056.056 0 0 1-.038.017H4.785a.056.056 0 0 1-.037-.018.055.055 0 0 1-.018-.037V5.67c0-.012.007-.026.018-.037a.056.056 0 0 1 .037-.018h14.68c.012 0 .026.006.038.018a.056.056 0 0 1 .017.037l-.04 14.64Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M6.32 18.75v.024h11.691v-3.61H6.32v3.585Zm.61-2.936h10.39v2.35H6.93v-2.35Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M16.026 17.454a.465.465 0 1 0 0-.93.465.465 0 0 0 0 .93ZM9.89 7.229v-.025H6.321v3.61h3.61v-.025l-.04-3.56Zm-.61 2.935H6.93v-2.35h2.35v2.35ZM13.89 7.23v-.026h-3.609v3.61h3.61V7.23Zm-.61 2.934h-2.35v-2.35h2.35v2.35ZM9.89 11.229v-.025H6.321v3.61h3.61v-.025l-.04-3.56Zm-.61 2.935H6.93v-2.35h2.35v2.35ZM13.89 11.23v-.026h-3.609v3.61h3.61V11.23Zm-.61 2.934h-2.35v-2.35h2.35v2.35ZM17.89 7.23v-.026h-3.609v3.61h3.61V7.23Zm-.61 2.934h-2.35v-2.35h2.35v2.35ZM17.89 11.23v-.026h-3.609v3.61h3.61V11.23Zm-.61 2.934h-2.35v-2.35h2.35v2.35Z"
        />
      </svg>
    </SvgIcon>
  );
}
