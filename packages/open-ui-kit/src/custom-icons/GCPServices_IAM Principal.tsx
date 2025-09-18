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

export function GCPServicesIAMPrincipal(props: SvgIconProps) {
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
          d="m12.126 3.615-7.371 3.07v5.054c0 4.543 3.142 8.798 7.37 9.876 4.229-1.033 7.371-5.288 7.371-9.83v-5.1l-7.37-3.07Zm0 3.402a2.361 2.361 0 1 1-.002 4.723 2.361 2.361 0 0 1 .002-4.723Zm3.69 10.01a7.757 7.757 0 0 1-3.69 2.63 7.757 7.757 0 0 1-3.69-2.63v-2.02c0-1.499 2.46-2.262 3.69-2.262s3.69.763 3.69 2.262v2.02Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.125 3.615v3.402a2.36 2.36 0 1 1 0 4.722v1.006c1.23 0 3.69.763 3.69 2.262v2.02a7.757 7.757 0 0 1-3.69 2.63v1.913c4.228-1.033 7.37-5.288 7.37-9.83V6.684l-7.37-3.07Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
