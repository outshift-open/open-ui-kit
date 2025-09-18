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

export function TrendArrow(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 8 10">
      <svg
        width="8"
        height="10"
        viewBox="0 0 8 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-1.74846e-07 8L4 -6.99382e-08L8 8L-1.74846e-07 8Z"
          fill={props.fill ?? "currentColor"}
        />
      </svg>
      ;
    </SvgIcon>
  );
}
