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

export function AWSServicesVPCEndpoints(props: SvgIconProps) {
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
          d="M9.475 12.991v.306a.374.374 0 0 0 0 .098c0 .139.69 3.561 3.344 3.561 2.653 0 3.313-3.422 3.343-3.56a.34.34 0 0 0 0-.1v-4.32a.513.513 0 0 0-.335-.482L13.026 7.35a.542.542 0 0 0-.395 0l-2.82 1.144a.513.513 0 0 0-.336.483v2.09h1.055V9.333l2.298-.917 2.298.917v3.847c-.059.276-.611 2.672-2.298 2.672-1.686 0-2.239-2.396-2.298-2.643v-.217H9.475Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m11.31 13.484.75.75 1.844-1.854a.532.532 0 0 0 0-.75l-1.845-1.854-.75.75.987.986H5.648v1.065h6.609l-.947.907Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          d="m17.257 7.221-4.232-1.706a.542.542 0 0 0-.394 0L8.39 7.221a.523.523 0 0 0-.326.484v3.363H9.12V8.06l3.708-1.49 3.709 1.49v5.04c0 .177-.07 4.369-3.709 4.369a3.275 3.275 0 0 1-3.215-2.278 7.25 7.25 0 0 1-.483-2.2v-.118l-1.066.118v.128a8.06 8.06 0 0 0 .563 2.496 4.3 4.3 0 0 0 4.191 2.959c3.768 0 4.764-3.551 4.764-5.425V7.705a.513.513 0 0 0-.325-.484Z"
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
