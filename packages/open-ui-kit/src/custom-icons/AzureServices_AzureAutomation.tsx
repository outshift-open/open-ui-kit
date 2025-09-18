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

export function AzureServicesAzureAutomation(props: SvgIconProps) {
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
          d="M21.773 13.197v-2.022l-.303-.101-2.225-.708-.606-1.416 1.213-2.427-1.517-1.416-.303.102-2.023 1.01-1.415-.606-.81-2.427h-2.022l-.202.303-.708 2.225-1.416.506-2.325-1.113-1.416 1.517.1.304L6.808 8.95l-.505 1.416-2.529.809v2.022l.304.101 2.225.708.606 1.416-1.213 2.427 1.517 1.416.303-.101 2.022-1.012 1.416.607.81 2.427h2.022l.1-.303.709-2.225 1.415-.607 2.326 1.113 1.416-1.416-.101-.303-1.011-2.023.606-1.416 2.528-.809Zm-9 2.933a3.885 3.885 0 0 1-3.943-3.944 3.885 3.885 0 0 1 3.943-3.944 3.885 3.885 0 0 1 3.944 3.944 3.886 3.886 0 0 1-3.944 3.944Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="M12.268 13.703H8.627a.218.218 0 0 1-.202-.202V13.4l4.348-8.596c0-.101.101-.101.202-.101h4.248a.217.217 0 0 1 .202.202v.101l-5.158 6.775h4.956a.218.218 0 0 1 .202.203.101.101 0 0 1-.101.1L9.032 20.68c-.102 0-.607.506-.405-.202l3.64-6.775Z"
        />
      </svg>
    </SvgIcon>
  );
}
