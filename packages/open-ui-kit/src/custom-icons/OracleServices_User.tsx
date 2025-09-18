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

export function OracleServicesUser(props: SvgIconProps) {
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
          d="M12.252 12.684a4.51 4.51 0 0 0 4.505-4.504 4.506 4.506 0 0 0-9.01.004c0 2.485 2.02 4.5 4.505 4.5Zm0-8.153a3.657 3.657 0 0 1 3.653 3.653 3.657 3.657 0 0 1-3.653 3.654 3.657 3.657 0 0 1-3.654-3.654 3.657 3.657 0 0 1 3.654-3.653Zm0-.802ZM8.595 7.598a3.707 3.707 0 0 0 3.657 4.29 3.707 3.707 0 0 1-3.657-4.29Zm10.673 8.66a3.106 3.106 0 0 0-3.106-3.111h-.888l-.128.168a3.633 3.633 0 0 1-2.894 1.43 3.62 3.62 0 0 1-2.894-1.43l-.128-.168h-.893a3.112 3.112 0 0 0-3.106 3.11v5.522h.852v-5.522a2.26 2.26 0 0 1 2.258-2.259h.472a4.466 4.466 0 0 0 3.434 1.594c1.335 0 2.58-.58 3.435-1.594h.476a2.26 2.26 0 0 1 2.258 2.259v5.522h.852v-5.522Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
