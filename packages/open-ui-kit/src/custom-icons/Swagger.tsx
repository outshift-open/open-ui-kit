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

export function Swagger(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="23"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M6.49 3.711C.503 7.162.503 15.838 6.49 19.29 12.476 22.74 20 18.402 20 11.5 20 4.597 12.476.26 6.49 3.711ZM8.2 16.863c-4.293 0-.7-4.828-3.683-4.745v-1.29c2.814.35-.541-5.14 3.663-4.662v1c-2.345.055-.014 3.052-2.123 4.307 2.123 1.394-.11 4.572 2.144 4.225v1.165Zm-.15-4.69a.728.728 0 1 1 .73-1.261.728.728 0 0 1-.73 1.26Zm2.585 0a.728.728 0 1 1 .73-1.261.728.728 0 0 1-.73 1.26Zm2.585 0a.728.728 0 1 1 .73-1.261.728.728 0 0 1-.73 1.26Zm.58 4.69v-1.165c2.254.347.02-2.83 2.143-4.225-2.109-1.255.222-4.252-2.123-4.308v-.999c4.204-.478.849 5.011 3.663 4.662v1.29c-2.983-.083.61 4.745-3.684 4.745Z"
        />
      </svg>
    </SvgIcon>
  );
}
