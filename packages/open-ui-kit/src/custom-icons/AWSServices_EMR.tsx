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

export function AWSServicesEMR(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M17.334 16c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5Zm-1.807-.219c.395-.415.93-.685 1.53-.753l.558-6.146a2.478 2.478 0 0 1-1.04-.609l-3.26 2.174c.321.618.519 1.31.519 2.053 0 .697-.173 1.349-.457 1.938l2.15 1.343ZM12.834 12.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5 1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5Zm4-6c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5-.673-1.5-1.5-1.5-1.5.673-1.5 1.5Zm1.777 2.472-.558 6.146a2.495 2.495 0 0 1 1.781 2.382c0 1.378-1.121 2.5-2.5 2.5a2.503 2.503 0 0 1-2.5-2.5c0-.307.063-.598.165-.87l-2.156-1.347C12.018 16.321 10.76 17 9.334 17a4.505 4.505 0 0 1-4.5-4.5c0-2.481 2.019-4.5 4.5-4.5 1.379 0 2.599.636 3.425 1.616l3.263-2.175a2.461 2.461 0 0 1-.188-.941c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5a2.495 2.495 0 0 1-2.223 2.472ZM9.834 12h1v1h-1v1h-1v-1h-1v-1h1v-1h1v1Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
