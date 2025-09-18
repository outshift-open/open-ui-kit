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

export function AWSServicesCloudTrail(props: SvgIconProps) {
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
          d="M9.46 15.401h2.25V14.32H9.46v1.081Zm10.171-4.31c-.143-1.229-.887-1.902-1.585-2.126a2.028 2.028 0 0 0-1.512.103 3.985 3.985 0 0 0-1.06-1.58c-1.226-1.126-3.907-1.46-5.742-.714-1.438.587-2.989 2.207-3.08 3.854-.973.32-1.693 1.41-1.693 2.16h1.125c0-.317.547-1.17 1.125-1.17.31 0 .563-.242.563-.542v-.294c0-1.064 1.144-2.5 2.4-3.012 1.417-.578 3.617-.335 4.523.5.681.625.846 1.31.98 1.86.049.205.219.364.431.407a.571.571 0 0 0 .566-.203c.259-.33.647-.461 1.016-.343.407.13.843.602.843 1.536 0 .264.198.49.469.533 1.15.183 1.709.934 1.709 2.296 0 2.006-1.554 2.176-1.693 2.188h-7.3v1.081h5.864l1.468-.001c.965-.054 2.786-.807 2.786-3.268 0-2.202-1.23-2.987-2.203-3.264ZM8.334 17.626h2.25v-1.081h-2.25v1.081Zm-3.375 0h2.25v-1.081H4.96v1.081Zm-1.125-2.224h3.375V14.32H3.834v1.081Z"
          clipRule="evenodd"
        />
      </svg>
    </SvgIcon>
  );
}
