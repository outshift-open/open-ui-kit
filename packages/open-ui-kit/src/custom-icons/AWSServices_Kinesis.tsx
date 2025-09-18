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

export function AWSServicesKinesis(props: SvgIconProps) {
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
          d="M7.217 17.698h1.058c0-.968 0-3.237 12.025-3.237v-1.068c-11.499 0-13.083 2.068-13.083 4.305ZM8.607 20h1.06c0-1.106 0-3.697 10.633-3.697v-1.068C9.997 15.235 8.607 17.643 8.607 20ZM6.426 8.682H5.367c0 1.535 1.06 2.69 5.138 3.317-4.078.63-5.138 1.784-5.138 3.318h1.059c0-1.295 1.577-2.783 13.874-2.783v-1.069c-12.297 0-13.874-1.487-13.874-2.783Zm1.85-2.38h-1.06c0 2.236 1.585 4.305 13.085 4.305V9.54C8.274 9.539 8.274 7.27 8.274 6.303ZM20.3 7.697v1.068C9.997 8.765 8.607 6.355 8.607 4h1.06c0 1.106 0 3.697 10.633 3.697Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
