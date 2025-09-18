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

export function OracleCategoryStorage(props: SvgIconProps) {
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
          d="M20.17 6.045V6.02H4.08V19.765a.7.7 0 0 0 .705.705h14.68a.726.726 0 0 0 .706-.705V6.045ZM4.73 6.67h14.75v13.135a.055.055 0 0 1-.017.037.056.056 0 0 1-.038.018H4.785a.056.056 0 0 1-.037-.018.055.055 0 0 1-.018-.037V6.67ZM4.08 5.605v.025h16.051v-.505a.726.726 0 0 0-.706-.705H4.785a.726.726 0 0 0-.705.705v.48Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M17.546 9.7h-6.588l-.633-.83a.595.595 0 0 0-.5-.25h-3.12a.64.64 0 0 0-.625.625v8.545h12.091V10.325a.64.64 0 0 0-.625-.625ZM6.69 10.74l.039-1.47h3.083l.58.735-.58.735H6.691Zm4.227-.43h6.563v6.83H6.69v-5.75h3.094a.595.595 0 0 0 .5-.25l.633-.83Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M9.53 9.725V9.7H7.162v.65H9.53v-.625Z"
        />
      </svg>
    </SvgIcon>
  );
}
