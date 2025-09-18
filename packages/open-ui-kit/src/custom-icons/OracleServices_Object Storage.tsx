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

export function OracleServicesObjectStorage(props: SvgIconProps) {
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
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="m16.392 8.396-.007-.012h-2.909l-.007.012-1.44 2.48-.007.013.007.013 1.44 2.48.007.012h2.909l.007-.012 1.44-2.48.008-.013-.008-.013-1.44-2.48Zm-2.527.638h2.131l1.066 1.855-1.066 1.855h-2.13L12.8 10.889l1.065-1.855ZM12.13 14.714c1.027 0 1.855.829 1.855 1.855a1.853 1.853 0 0 1-1.855 1.855 1.853 1.853 0 0 1-1.855-1.855c0-.986.83-1.855 1.855-1.855Zm0-.61a2.517 2.517 0 0 0-2.505 2.505 2.517 2.517 0 0 0 2.505 2.505 2.517 2.517 0 0 0 2.505-2.505 2.492 2.492 0 0 0-2.505-2.505ZM9.312 8.237l-.022-.04-.022.04-2.72 4.96-.02.037h5.565l-.02-.037-2.76-4.96Zm-1.7 4.347 1.679-3.083 1.717 3.083H7.612Z"
        />
        <path
          fill={props.fill ?? "currentColor"}
          stroke="#E8E9EA"
          strokeWidth=".05"
          d="M4.25 6.304h-.025V20.049a.7.7 0 0 0 .705.705h14.64a.7.7 0 0 0 .705-.705V6.304H4.25Zm.625 13.785V6.954h14.79v13.135a.055.055 0 0 1-.018.037.055.055 0 0 1-.037.018H4.93a.056.056 0 0 1-.037-.018.055.055 0 0 1-.018-.037ZM20.25 5.914h.025v-.505a.72.72 0 0 0-.207-.492.652.652 0 0 0-.458-.213H4.93a.726.726 0 0 0-.705.705v.505H20.25Z"
        />
      </svg>
    </SvgIcon>
  );
}
