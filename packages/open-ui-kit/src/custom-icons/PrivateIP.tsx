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

export function PrivateIP(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        fill="none"
      >
        <path
          fill={props.fill ?? "currentColor"}
          d="M10.144 12.66H9v5.84h1.144v-5.84Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M13.697 12.66h-2.304v5.84h1.136v-1.592h1.16c.331 0 .63-.056.896-.168.272-.112.504-.264.696-.456.192-.197.342-.424.448-.68a2.16 2.16 0 0 0 .16-.824 2.12 2.12 0 0 0-.608-1.504 2.005 2.005 0 0 0-.696-.448 2.271 2.271 0 0 0-.888-.168Zm-1.168 3.2v-2.168h1.096c.166 0 .318.027.456.08a.995.995 0 0 1 .352.224c.102.096.18.21.232.344.054.133.08.28.08.44 0 .155-.026.299-.08.432a.956.956 0 0 1-.232.344.996.996 0 0 1-.352.224 1.26 1.26 0 0 1-.456.08H12.53Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M4.44 22.06c.294.293.647.44 1.06.44h13c.413 0 .766-.147 1.06-.44.293-.294.44-.647.44-1.06V10.15c0-.412-.147-.766-.44-1.06a1.445 1.445 0 0 0-1.06-.44h-1.75v-2.4c0-1.314-.462-2.434-1.387-3.36-.925-.927-2.045-1.39-3.36-1.39s-2.436.463-3.363 1.39c-.927.926-1.39 2.046-1.39 3.36v2.4H5.5c-.412 0-.766.147-1.06.44-.293.294-.44.648-.44 1.06V21c0 .413.147.766.44 1.06ZM18.5 21h-13V10.15h13V21ZM15.25 8.65h-6.5v-2.4c0-.903.317-1.67.95-2.302A3.14 3.14 0 0 1 12.003 3c.902 0 1.669.316 2.3.948.631.632.947 1.4.947 2.302v2.4Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
