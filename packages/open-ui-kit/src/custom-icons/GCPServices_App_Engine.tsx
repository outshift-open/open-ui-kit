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

export function GCPServicesAppEngine(props: SvgIconProps) {
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
          fillRule="evenodd"
          d="M12.125 8.574a5.625 5.625 0 1 0 0 11.25 5.625 5.625 0 0 0 0-11.25Zm0 9.666a4.005 4.005 0 1 1 3.996-3.996 3.996 3.996 0 0 1-3.996 3.996ZM20.782 13.65l-2.303-.73a6.385 6.385 0 0 1 .08 2.35h2.223a.396.396 0 0 0 .343-.378v-.9a.396.396 0 0 0-.343-.378M12.125 7.908c.454 0 .906.044 1.35.135l-.828-2.295c-.063-.198-.189-.342-.378-.342h-.342a.405.405 0 0 0-.378.342l-.72 2.286a6.876 6.876 0 0 1 1.296-.126ZM5.618 14.298c0-.463.052-.925.153-1.377l-2.304.729a.396.396 0 0 0-.342.378v.9a.396.396 0 0 0 .342.378H5.69a6.859 6.859 0 0 1-.072-.972"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.125 11.94a2.25 2.25 0 1 0 0 4.499 2.25 2.25 0 0 0 0-4.5Zm0 3.375a1.125 1.125 0 1 1 1.125-1.125 1.124 1.124 0 0 1-1.125 1.134v-.01Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
