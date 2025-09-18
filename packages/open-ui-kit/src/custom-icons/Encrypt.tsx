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

export function Encrypt(props: SvgIconProps) {
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
          d="M11.214 19.54h1.572v-3.316H16.1v-1.572h-3.315v-3.321h-1.572v3.321H7.9v1.572h3.315v3.315Zm-5.66 3.097a1.64 1.64 0 0 1-1.203-.5 1.64 1.64 0 0 1-.5-1.203V10.192c0-.47.166-.873.5-1.207a1.637 1.637 0 0 1 1.203-.502h1.63V6.214c0-1.34.47-2.48 1.407-3.421C9.529 1.85 10.666 1.38 12 1.38c1.336 0 2.472.471 3.41 1.413.936.941 1.405 2.082 1.405 3.421v2.269h1.63c.47 0 .873.167 1.207.502.335.334.503.737.503 1.207v10.742c0 .469-.168.87-.503 1.203-.334.334-.737.5-1.207.5H5.554Zm0-1.703h12.892V10.192H5.554v10.742ZM8.888 8.483h6.225V6.215c0-.873-.302-1.612-.904-2.217-.603-.606-1.338-.908-2.205-.908s-1.603.302-2.208.908c-.606.605-.908 1.344-.908 2.217v2.268Z"
        />
      </svg>
    </SvgIcon>
  );
}
