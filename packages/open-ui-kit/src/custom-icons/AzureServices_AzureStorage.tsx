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

export function AzureServicesAzureStorage(props: SvgIconProps) {
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
          d="M4.377 4.949H21.17a.604.604 0 0 1 .603.603v3.23h-18v-3.24a.603.603 0 0 1 .604-.593Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M21.773 8.782h-18v10.037a.603.603 0 0 0 .604.604H21.17a.604.604 0 0 0 .603-.604V8.782Zm-2.456 1.164H6.219a.286.286 0 0 0-.275.286v1.483a.286.286 0 0 0 .275.286h13.098a.286.286 0 0 0 .275-.286v-1.483a.286.286 0 0 0-.275-.286ZM6.23 12.901h13.098a.286.286 0 0 1 .275.285v1.493a.286.286 0 0 1-.276.286H6.23a.286.286 0 0 1-.275-.286v-1.44a.286.286 0 0 1 .275-.338Zm13.098 2.986H6.23a.286.286 0 0 0-.275.285v1.493a.286.286 0 0 0 .275.286h13.098a.286.286 0 0 0 .275-.286v-1.493a.286.286 0 0 0-.275-.286Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
