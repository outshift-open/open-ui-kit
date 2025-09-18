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

export function AWSServicesIAMCredentialReport(props: SvgIconProps) {
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
          d="M4.959 18.188h15.75V5.813H4.959v12.375ZM21.834 5.25v13.5c0 .31-.252.563-.563.563H4.396a.563.563 0 0 1-.562-.563V5.25c0-.31.252-.563.562-.563h16.875c.311 0 .563.252.563.563ZM7.209 14.81l4.498.002.002-3.372-4.498-.002-.002 3.372Zm1.125-4.498 2.25.002v-1.29c0-.664-.4-1.03-1.125-1.03h-.001c-.37 0-.666.099-.855.286-.222.219-.268.524-.268.741l-.001 1.291Zm-2.086 5.459a.569.569 0 0 1-.164-.398l.002-4.498c0-.31.252-.563.563-.563h.56l.001-1.291c0-.62.21-1.153.603-1.542.404-.399.972-.61 1.645-.61h.001c1.346 0 2.25.865 2.25 2.154v1.292h.563c.15 0 .292.06.398.164.104.106.164.25.164.398l-.002 4.498c0 .31-.252.563-.563.563l-5.623-.003a.567.567 0 0 1-.398-.164Zm8.836-2.084h2.25v-1.124h-2.25v1.124Zm0-3.374h4.5V9.187h-4.5v1.126Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
