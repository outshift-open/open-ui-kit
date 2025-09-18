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

export function Falcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "#fff"}
          d="M11.5 13 2 3.5l1.06-1.06 9.5 9.5L11.5 13ZM19.03 9.53l-13 13-1.06-1.06L19.44 7l2.53 2.53h-2.94Z"
        />
        <path
          fill={props.fill ?? "#fff"}
          d="m20.53 12.03-10.5 10.5-1.06-1.06 10.5-10.5 1.06 1.06ZM21.53 15.03l-3.47 3.47 2.25 2.25H22v1.5h-2.31l-3.75-3.75 4.53-4.53 1.06 1.06ZM3 8.5 9.5 15l1.06-1.06-6.5-6.5L3 8.5ZM7.5 17 3 12.5l1.06-1.06 4.5 4.5L7.5 17Z"
        />
      </svg>
    </SvgIcon>
  );
}
