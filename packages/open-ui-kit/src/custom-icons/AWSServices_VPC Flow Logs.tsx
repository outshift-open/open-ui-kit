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

export function AWSServicesVPCFlowLogs(props: SvgIconProps) {
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
          d="m18.442 12.145-1.37 1.37-.443-.443.836-.835h-9.93v-.626h9.93l-.836-.836.443-.443 1.37 1.37a.313.313 0 0 1 0 .443Zm-7.894 2.832h4.11v-.626h-4.11v.626Zm0-1.37h4.11v-.626h-4.11v.626Zm0-2.74h4.11v-.627h-4.11v.627Zm0-1.37h4.11V8.87h-4.11v.626Zm4.62 3.249h.626v3.288c0 .173-.14.313-.313.313H9.726a.313.313 0 0 1-.313-.313v-3.288h.627v2.975h5.128v-2.975ZM10.04 11.1h-.627V7.813c0-.173.14-.313.313-.313h5.755c.173 0 .313.14.313.313v3.288h-.626V8.126H10.04v2.975Z"
          clipRule="evenodd"
        />
        <path
          fill={props.fill ?? "currentColor"}
          fillRule="evenodd"
          d="M12.834 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 1a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
