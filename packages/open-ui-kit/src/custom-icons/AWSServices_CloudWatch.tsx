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

export function AWSServicesCloudWatch(props: SvgIconProps) {
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
          d="M9.834 15.024h2v-.962h-2v.962Zm9.042-3.831c-.127-1.093-.788-1.691-1.41-1.89a1.803 1.803 0 0 0-1.343.091 3.54 3.54 0 0 0-.942-1.405c-1.09-1-3.474-1.297-5.105-.634-1.278.521-2.656 1.961-2.738 3.425-.864.285-1.504 1.254-1.504 1.92h1c0-.282.486-1.04 1-1.04a.49.49 0 0 0 .5-.48v-.262c0-.946 1.017-2.223 2.133-2.678 1.26-.514 3.215-.298 4.022.445.605.555.752 1.165.87 1.653a.494.494 0 0 0 .384.362c.19.04.386-.032.503-.181.23-.293.575-.41.903-.305.362.116.749.535.749 1.365 0 .236.176.435.417.474 1.022.163 1.519.83 1.519 2.04 0 1.784-1.381 1.935-1.505 1.946H11.84V17h5.213l1.305-.001c.857-.048 2.476-.717 2.476-2.905 0-1.957-1.093-2.655-1.958-2.901ZM8.834 17h2v-.961h-2V17Zm-3 0h2v-.961h-2V17Zm-1-1.976h3v-.962h-3v.962Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
