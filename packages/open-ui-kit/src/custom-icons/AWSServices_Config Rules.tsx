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

export function AWSServicesConfigRules(props: SvgIconProps) {
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
          d="M4.35 4v4.633l4.092.01.99.977 11.234-.019-.006-4.633H9.734L8.75 4h-4.4Zm4.398 3.9-3.655-.008v-3.15h3.353l.984.97h10.488l.004 3.147-10.185.017-.99-.976Zm8.936-1.131-.703-.705-.526.524.704.706-.707.707.525.525.706-.706.706.709.526-.525-.706-.709.706-.706-.526-.526-.705.706Zm-13.35 2.42v4.643h4.109l.984.974 11.236-.006-.006-4.628L9.73 10.17l-.958-.98H4.334Zm.743.742h3.382l.96.98 10.496.004.005 3.143-10.188.005-.984-.974H5.077V9.93Zm11.67 2.715-.415-.415-.526.525.896.896 2.204-1.843-.477-.57-1.681 1.407ZM4.335 14.382v4.644l4.117-.005.987.96L20.66 20l.003-4.639H9.732l-1.008-.979h-4.39Zm.743.743h3.346l1.007.98 10.49-.001-.002 3.152-10.178-.018-.988-.96-3.675.004v-3.157Zm11.582 2.697-.416-.415-.525.525.895.896 2.204-1.843-.477-.57-1.681 1.407Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
