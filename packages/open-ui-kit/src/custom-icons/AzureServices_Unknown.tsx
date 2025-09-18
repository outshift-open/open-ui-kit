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

export function AzureServicesUnknown(props: SvgIconProps) {
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
          d="M6.773 5.186h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1Zm-2 1a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-12Zm8.25 7.457c-.117.11-.28.166-.49.166-.46 0-.69-.216-.69-.648v-.09c0-.372.092-.673.275-.906.188-.232.42-.445.697-.639.338-.238.59-.437.755-.598a.84.84 0 0 0 .258-.63.853.853 0 0 0-.307-.69c-.205-.176-.476-.265-.814-.265a1.31 1.31 0 0 0-.672.174 1.355 1.355 0 0 0-.482.515l-.133.166a.992.992 0 0 1-.265.24.66.66 0 0 1-.34.084.627.627 0 0 1-.407-.15c-.117-.1-.175-.24-.175-.423a1.257 1.257 0 0 1 .067-.407c.116-.365.39-.68.822-.946.431-.271.982-.407 1.651-.407.46 0 .88.08 1.262.24.387.156.697.386.93.69.232.299.348.667.348 1.104 0 .46-.119.827-.357 1.104a4.216 4.216 0 0 1-.93.78c-.26.172-.458.335-.597.49a.83.83 0 0 0-.216.548v.091a.557.557 0 0 1-.19.407Zm.116 2.3a.879.879 0 0 1-.623.24.897.897 0 0 1-.622-.24.802.802 0 0 1-.258-.598c0-.239.086-.438.258-.598a.878.878 0 0 1 .622-.24c.244 0 .451.08.623.24.177.16.265.36.265.598a.774.774 0 0 1-.265.597Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
